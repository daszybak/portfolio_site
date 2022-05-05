import Image from 'next/image';

import {Navigation} from '../../components';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.center_image}>
        <Image
          src="/images/hero_image.jpg"
          alt="Gym equipment"
          width={1360}
          height={825}
          className={styles.image}
        />
      </div>
      <Navigation />;
    </div>
  );
};

export default Hero;
