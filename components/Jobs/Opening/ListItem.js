import Link from 'next/link';

export default function ListSection({ data }) {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between">
        <h5 className="font-weight-normal">
          <Link href={`/job/${data.slugID}`}>
            <a href={`/job/${data.slugID}`}>{data.title}</a>
          </Link>
        </h5>
        <div>
          <Link href="/job/[id]" as={`/job/${data.slugID}`}>
            <a
              href={`/job/${data.slugID}`}
              className="d-flex align-items-center hover-link-transition"
            >
              <span className="text-color--dark">Apply</span>
              <img
                src="/assets/svg/icons/chevron-right.svg"
                alt="."
                height={16}
                width={16}
                className="img-fluid ml-2"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <img
          src="/assets/svg/icons/pin.svg"
          alt="."
          height={10}
          width={10}
          className="img-fluid mr-2"
        />
        <p className="text-muted my-0 small">{data.location}</p>
      </div>
    </div>
  );
}
