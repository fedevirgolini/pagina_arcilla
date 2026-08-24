import {useRef, useState} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const logoUrl = useBaseUrl('/img/arcilla_logo_naranja.png');
  const videoUrl = useBaseUrl('/video/video_introductorio.mp4');
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <header className={styles.heroBanner}>
      <img className={styles.logo} src={logoUrl} alt="Arcilla CECC" />
      <div className={styles.videoWrapper}>
        <video
          ref={videoRef}
          className={styles.heroVideo}
          src={videoUrl}
          autoPlay
          muted
          loop
          controls
          playsInline
        />
        <button
          type="button"
          className={styles.soundToggle}
          onClick={toggleMute}
          aria-label={isMuted ? 'Activar sonido' : 'Silenciar video'}
          aria-pressed={!isMuted}>
          {isMuted ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
}

function HomepageIntro() {
  return (
    <section className={styles.introSection}>
      <div className={clsx('container', 'text--center')}>
        <Heading as="h1" className={styles.introTitle}>
          ¡Les damos la bienvenida a la página oficial del Centro de Estudiantes de Ciencias de la Comunicación!
        </Heading>
        <p className={styles.introSubtitle}>
          ¡Hola! Esta es la página donde encontrarás toda la información de la Facultad de Ciencias de la Comunicación y del Centro de Estudiantes. Queremos que conozcas todo lo que la FCC tiene para ofrecernos a les estudiantes y cada uno de los espacios en los que participamos y somos protagonistas. 
        </p>
        <p className={styles.introSubtitle}>
          Cada día, desde Arcilla, Conducción del Centro de Estudiantes (o CECC como nos gusta decirle) construimos una Facultad llena de propuestas que acompañan la vida estudiantil. Entre compañeros y compañeras de todos los años nos organizamos, discutimos y creamos esa <strong>facultad que soñamos</strong> y nos merecemos. Les invitamos a conocer y ser parte.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageIntro />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
