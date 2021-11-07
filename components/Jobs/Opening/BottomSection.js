import Link from 'next/link';

export default function BottomSection() {
  return (
    <div className="col-md-9 col-xl-8 mx-auto">
      <div className="space-top-2 space-bottom-2 text-center">
        <small className="text-muted text-capitalize">
          Can’t find a position that suits you?
          <Link href="mailto: work@10hourlabs.com">
            <a
              href="mailto: work@10hourlabs.com"
              className="ml-1 d-block d-sm-inline text-color--primary"
            >
              Contact us
            </a>
          </Link>
        </small>
      </div>
    </div>
  );
}
