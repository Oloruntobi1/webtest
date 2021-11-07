import { useRouter } from 'next/router';
import Link from 'next/link';
import { navItem, navLink, active } from '../../styles/Header.module.css';

export default function NavLink(props) {
  const { asPath } = useRouter();

  const { link } = props;

  return (
    <li
      className={
        asPath === link.anchor
          ? `navbar-nav-item mx-lg-4 ${navItem} ${active}`
          : `navbar-nav-item mx-lg-4 ${navItem}`
      }
    >
      <Link href={link.anchor}>
        <a
          className={`nav-link font-weight-normal text-center px-0 py-2 ${navLink}`}
          href={link.anchor}
        >
          {link.title}
        </a>
      </Link>
    </li>
  );
}
