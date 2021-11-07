export default function OverlayLoader() {
  return (
    <div className="h-100 w-100 position-absolute top-0 right-0 bottom-0 left-0 d-flex justify-content-center align-items-center overlay-loader">
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
