import NavigationLink from './navigation-link';
import styles from './navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <h4>Gym Tracker</h4>
      <ul>
        <NavigationLink route="/">
          <h4>Home</h4>
        </NavigationLink>
        <NavigationLink route="/about">
          <h4>About</h4>
        </NavigationLink>
      </ul>
    </nav>
  );
};

export default Navigation;
