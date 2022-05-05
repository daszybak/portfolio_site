import Link from 'next/link';

const NavigationLink = ({children, route}) => {
  return (
    <li>
      <Link href={route}>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default NavigationLink;
