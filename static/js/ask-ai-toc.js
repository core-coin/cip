/* static/js/ask-ai-toc.js */
(function () {
  const buildChatGPTLink = () => {
    // Use current URL (without the hash) for the prompt
    const pageUrl = location.origin + location.pathname + location.search;
    const prompt =
      `Please research and analyze this page: ${pageUrl} ` +
      `so I can ask you questions about it. Once you have read it, prompt me with any questions I have. ` +
      `Do not post content from the page in your response. ` +
      `Any of my follow up questions must reference the site I gave you.`;
    return `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`;
  };

  const injectAskAI = (root = document) => {
    // Find the ToC container. Works with Docusaurus’ hashed className and the stable UL class.
    const tocContainer =
      root.querySelector('div[class^="tableOfContents_"]') ||
      root.querySelector('.table-of-contents')?.parentElement;

    if (!tocContainer) return;
    if (tocContainer.querySelector('[data-ask-ai-link]')) return; // avoid duplicates

    const a = document.createElement('a');
    a.href = buildChatGPTLink();
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = 'Ask AI ✨';
    a.setAttribute('data-ask-ai-link', '');
    // Make it look like a small Infima button and give it a little spacing
    a.className = 'button button--outline button--primary button--sm';
    a.style.display = 'inline-block';
    a.style.margin = '0.5rem';
    a.style.borderRadius = '1rem';

    tocContainer.prepend(a);
  };

  // Run now (after DOM is ready) and on SPA navigations / dynamic TOC mount
  const run = () => injectAskAI(document);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run, { once: true });
  } else {
    run();
  }

  // Handle client-side route changes & dynamically added nodes
  const mo = new MutationObserver(() => run());
  mo.observe(document.documentElement, { childList: true, subtree: true });

  // Patch history to catch pushState/replaceState navigations
  const fire = () => window.dispatchEvent(new Event('docusaurus:nav'));
  const _push = history.pushState;
  history.pushState = function () { const r = _push.apply(this, arguments); fire(); return r; };
  const _replace = history.replaceState;
  history.replaceState = function () { const r = _replace.apply(this, arguments); fire(); return r; };
  window.addEventListener('popstate', run);
  window.addEventListener('docusaurus:nav', run);
})();
