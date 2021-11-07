export default function NotFound() {
  return (
    <div className="min-h-100 d-flex align-items-center justify-content-center space-top-2 space-bottom-2">
      <div className="col-sm-10 col-md-8 col-xl-6">
        <div className="text-center">
          <h4 className="font-weight-normal mb-5 text-capitalize">
            Well this sucks!
            <br />
            there are no open jobs at the moment
          </h4>
          <img
            src="/assets/images/job-not-found.png"
            alt="not found"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}
