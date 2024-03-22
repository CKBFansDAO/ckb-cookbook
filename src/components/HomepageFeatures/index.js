import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'RGB++',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        An extended RGB protocol by using single-use seals and client-side validation techniques to manage state changes and transaction verification. It introduces Turing-complete smart contract scalability and performance to Bitcoin without the need for cross-chain transactions and without compromising security.
      </>
    ),
  },
  {
    title: 'Cell Modal',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        CKB inherits the ideas of Bitcoin’s architecture and creates the Cell model from generalizing the UTXO model, retaining the consistency and simplicity of Bitcoin. In Nervos CKB, all the states are stored in Cells, all computation is done off-chain, and all the verification work is handled by nodes.
      </>
    ),
  },
  {
    title: 'Spore DOBs',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        An on-chain digital object (DOB) protocol designed to empower ownership, distribution, and value capture. As an on-chain DOB backed by CKB, Spore is engineered to embed value into on-chain contents and NFTs, establishing an intrinsic link between content and value.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p className=''>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
