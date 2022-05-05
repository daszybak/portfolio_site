import Image from 'next/image';

import styles from './background.module.scss';

const Background = () => {
  return (
    <div className={styles.center_image}>
      <Image
        src="/images/hero_image.jpg"
        alt="Gym equipment"
        width={1360}
        height={825}
        className={styles.image}
        priority={true}
      />
    </div>
  );
};

export default Background;
