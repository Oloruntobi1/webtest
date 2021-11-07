import Link from 'next/link';

export default function BackButton() {
  return (
    <Link href="/jobs">
      <a href="/jobs" className="d-flex align-items-center">
        <img
          src="/assets/svg/icons/arrow-back.svg"
          alt="."
          height={20}
          width={20}
          className="img-fluid mr-2"
        />
        <span className="text-color--dark">Back to list</span>
      </a>
    </Link>
  );
}
