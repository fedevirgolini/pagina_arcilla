import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ingresantes',
    to: '/ingresantes',
    description: 'Todo lo que necesitás saber para arrancar la facultad.',
  },
  {
    title: 'Estudiantes',
    to: '/estudiantes',
    description: 'Recursos e información para quienes ya están cursando.',
  },
  {
    title: 'Preguntas frecuentes',
    to: '/faq',
    description: 'Respuestas a las dudas más comunes sobre el centro.',
  },
];

function Feature({title, to, description}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={to} className={styles.featureCard}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
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
