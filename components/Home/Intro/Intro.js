import Image from 'next/image';
import styles from './Intro.module.css';
import largeImage from '../../../public/images/pond.jpg';

const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image src={largeImage} />
      </div>
      <div className={styles.content}>
        <h2>We Are The Agent Of Earth</h2>
        <p>
        As an agent of Earth, it is our responsibility to protect and preserve biodiversity. We must take action to safeguard the multitude of species that inhabit our planet, from the smallest microorganisms to the largest mammals. By doing so, we not only ensure the survival of individual species, but we also protect the delicate balance of our ecosystems, which are essential to our own survival.
        </p>
        <button className="btn">Read more</button>
      </div>
    </section>
  );
};
export default Intro;
