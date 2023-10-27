import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  link: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What is a CIP?',
    Img: '/img/mountain.png',
    link: '/docs/what-is-cip',
    description: (
      <>
        A CIP is a design document that offers information to the Core community or introduces a new feature to Core. Learn more about CIP and its importance.
      </>
    ),
  },
  {
    title: 'Core Improvement Proposals',
    Img: '/img/park.png',
    link: '/docs/cip',
    description: (
      <>
        The Core Improvement Proposal (CIP) sets standards for the Core platform. Discover how to contribute, the different categories of CIPs, and more.
      </>
    ),
  },
  {
    title: 'Contribute to CIP',
    Img: '/img/workshop.png',
    link: '/docs/cip#how-to-start',
    description: (
      <>
        Start by reviewing the template, creating a CIP online, or forking the repository. Contribute to the improvement of the Core platform.
      </>
    ),
  },
];

function Feature({title, Img, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link} target={link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">
          <img src={Img} alt={title} className={styles.featureImg} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={link} target={link.startsWith('http') ? "_blank" : "_self"} rel="noopener noreferrer">{title}</a>
        </h3>
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
