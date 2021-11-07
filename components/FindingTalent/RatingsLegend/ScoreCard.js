export default function Scorecard({ data, total }) {
  return (
    <div className="p-4 p-sm-5 rounded3 border-dashed-1 h-100">
      <p className="text-muted mb-4">{data?.description}</p>
      <div className="d-flex align-items-center justify-content-between">
        <div className="max-w-13rem">
          <img
            src={`/assets/svg/icons/stars/star-${data?.stars}.svg`}
            alt={`${data?.stars} stars`}
            className="img-fluid"
          />
        </div>
        <p className="mb-0 text-muted--1">{`${data?.stars}/${total}`}</p>
      </div>
    </div>
  );
}
