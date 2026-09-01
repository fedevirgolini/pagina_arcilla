import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
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
    description: 'Recursos e información para quienes ya están cursando. Conoce los espacios que componen al CECC. Además, respondemos ¿Qué va a pasar con quienes ya estamos cursando el plan 93 ante la implementación de las nuevas carreras? ',
  },
  {
    title: 'Preguntas frecuentes',
    to: '/faq',
    description: 'Respuestas a las dudas más comunes sobre la implementación de las nuevas carreras y la continuidad del Plan 93.',
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
  const chirimboloBlobUrl = useBaseUrl('/img/chirimbolos/chirimbolos-11.png');
  const chirimboloGridUrl = useBaseUrl('/img/chirimbolos/chirimbolos-08.png');

  return (
    <section className={styles.features}>
      <img
        className={clsx(styles.chirimbolo, styles.chirimboloBlob)}
        src={chirimboloBlobUrl}
        alt=""
        aria-hidden="true"
      />
      <img
        className={clsx(styles.chirimbolo, styles.chirimboloGrid)}
        src={chirimboloGridUrl}
        alt=""
        aria-hidden="true"
      />
      <div className={clsx('container', styles.featuresContent)}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
