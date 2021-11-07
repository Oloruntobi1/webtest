export default function NavbarToggler(props) {
  const { children, ...otherProps } = props;
  return (
    <span {...otherProps}>
      <svg
        width={14}
        height={14}
        viewBox="0 0 18 18"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </span>
  );
}
