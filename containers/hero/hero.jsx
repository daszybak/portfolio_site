import {Navigation, SignUp, Background} from '../../components';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Background />
      <Navigation />;
      <SignUp />
    </div>
  );
};

export default Hero;
