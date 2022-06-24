import styles from '../components/Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
  {
    text: 'Home',
    href: '/', // '/' is the default path for Next.js
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Contact',
    href: '/contact',
  },
  {
    text: 'Pricing',
    href: '/pricing',
  },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {/* <ActiveLink href="/" text="Home" />
      <ActiveLink href="/about" text="About" />
      <ActiveLink href="/contact" text="Contact" />
      <ActiveLink href="/pricing" text="Pricing" /> */}
      {menuItems.map((item, index) => (
        <ActiveLink key={index} {...item} />
      ))}
    </nav>
  );
};
