import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container space-1">
      <div className="col-12 col-sm-11 col-md-10 mx-auto">
        <div className="row align-items-md-center text-center">
          <div className="col-12 col-sm-7 col-md-9 mb-4 mb-sm-0 text-sm-left">
            <small className="text-muted">
              10 Hour Labs Inc trademarks of their respective owners.
            </small>
          </div>
          <div className="col-12 col-sm-5 col-md-3 mb-4 mb-md-0 text-sm-right">
            <Link href="/" aria-label="10hourlabs">
              <a href="/">
                <img
                  className="brand img-fluid"
                  src="/assets/svg/logo.svg"
                  alt="Logo"
                  width={120}
                  height={32}
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
