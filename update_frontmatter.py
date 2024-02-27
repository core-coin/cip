import frontmatter
import os
from datetime import datetime, date

def parse_date(date_str):
    if isinstance(date_str, datetime):
        return date_str
    elif isinstance(date_str, date):
        return datetime(date_str.year, date_str.month, date_str.day)

    formats = ['%Y-%m-%d', '%Y-%m-%dT%H:%M:%S.%fZ', '%Y-%m-%dT%H:%M:%SZ', '%Y-%m-%dT%H:%M', '%Y-%m-%d %H:%M']
    for fmt in formats:
        try:
            return datetime.strptime(date_str, fmt)
        except ValueError:
            pass
    raise ValueError(f"Date format not recognized: {date_str}")

def update_tags(post, today):
    try:
        creation_date = parse_date(post['date'])
    except ValueError as e:
        print(e)
        return False

    diff = today - creation_date
    new_tag = None

    if diff.days >= 42:
        new_tag = 'final'
    elif diff.days >= 28:
        new_tag = 'accepted'
    elif diff.days >= 14:
        new_tag = 'last call'

    if new_tag:
        tags = post.get('tags', [])
        if new_tag not in tags:
            tags = [tag for tag in tags if tag not in ['draft', 'last call', 'accepted', 'final']]
            tags.append(new_tag)
            post['tags'] = tags
            return True
    return False

def process_markdown_files():
    for subdir, dirs, files in os.walk('cip'):
        for file in files:
            if file.endswith('.md') or file.endswith('.mdx'):
                filepath = os.path.join(subdir, file)
                with open(filepath, 'r', encoding='utf-8') as f:
                    post = frontmatter.load(f)
                    if update_tags(post, datetime.now()):
                        with open(filepath, 'w', encoding='utf-8') as f:
                            frontmatter.dump(post, f)

if __name__ == "__main__":
    process_markdown_files()
