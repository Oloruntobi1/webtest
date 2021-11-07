import NavLink from './NavLink';

const NAV_LINKS = [
  {
    id: 1,
    title: 'Job Openings',
    anchor: '/jobs',
  },
  {
    id: 2,
    title: 'About Us',
    anchor: '/#about',
  },
  {
    id: 3,
    title: 'Finding Talent',
    anchor: '/finding-talent',
  },
  {
    id: 4,
    title: 'Contact',
    anchor: '/#contact',
  },
];

export default function NavBar() {
  return (
    <div
      id="navBar"
      className="collapse navbar-collapse navbar-nav-wrap-collapse"
    >
      <div className="navbar-body header-abs-top-inner py-3">
        <ul className="js-scroll-nav navbar-nav header-navbar-nav">
          {NAV_LINKS.map((link) => (
            <NavLink link={link} key={link.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}
