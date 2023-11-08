import clsx from 'clsx';
import Heading from '@theme/Heading';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      message: 'What is a CIP?',
      description: 'Title No.1 for what is a CIP section',
    }),
    Img: '/img/mountain.png',
    link: '/docs/what-is-cip',
    description: (
      <>
        {translate({
          message: 'A CIP is a design document providing information to the Core community or introducing a new feature to Core. Learn more about CIP and its importance.',
          description: 'The CIP description on the homepage',
        })}
      </>
    ),
  },
  {
    title: translate({
      message: 'Core Improvement Proposals',
      description: 'Title No.2 for Core Improvement Proposals section',
    }),
    Img: '/img/park.png',
    link: '/docs/cip',
    description: (
      <>
        {translate({
          message: 'The Core Improvement Proposal (CIP) sets standards for the Core platform. Discover how to contribute, the different categories of CIPs, and more.',
          description: 'Description for Core Improvement Proposals section',
        })}
      </>
    ),
  },
  {
    title: translate({
      message: 'Contribute to CIP',
      description: 'Title No.3 for Contribute to CIP section',
    }),
    Img: '/img/workshop.png',
    link: '/docs/cip#how-to-start',
    description: (
      <>
        {translate({
          message: 'Start by reviewing the template, creating a CIP online, or forking the repository. Contribute to the improvement of the Core platform.',
          description: 'Description for how to contribute to CIP section',
        })}
      </>
    ),
  },
];

function Feature({ title, Img, link, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link} target={link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
          <img src={Img} alt={title} className={styles.featureImg} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={link} target={link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">{title}</a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
