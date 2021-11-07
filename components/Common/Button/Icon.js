const DEFAULT_IMG_SIZE = 20;
const DEFAULT_BTN_SIZE = 45;

export default function Icon(props) {
  // prettier-ignore
  const {
    src, name, size, containerSize,
  } = props;

  const imgSize = size || DEFAULT_IMG_SIZE;

  const btnSize = `${containerSize || DEFAULT_BTN_SIZE}px`;

  return (
    <button
      type="button"
      className="btn transition-3d-hover bg-white d-flex align-items-center justify-content-center border rounded-circle"
      style={{ height: btnSize, width: btnSize }}
    >
      <img src={src} alt={name} height={imgSize} width={imgSize} />
    </button>
  );
}
