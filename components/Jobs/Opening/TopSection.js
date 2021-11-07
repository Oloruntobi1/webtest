export default function TopSection() {
  return (
    <div className="col-md-9 col-xl-8 mx-auto">
      <div className="container space-top-1 space-bottom-2">
        <div className="row align-items-center">
          <div className="col-md-6 mb-6 mb-md-0">
            <div>
              <p className="text-muted mb-1 text-uppercase font-size-1">
                Open Positions
              </p>
              <div>
                <h1 className="font-weight-normal">
                  Current job
                  <br />
                  Openings
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-right">
              <img
                sizes="(max-width: 480px) 320px,
                  (max-width: 576px) 480px,
                  (max-width: 768px) 576px,
                  (max-width: 992px) 768px,
                  992px"
                srcSet="/assets/images/office-staffs/office-staffs_gilgta_c_scale,w_328.png 328w,
                      /assets/images/office-staffs/office-staffs_gilgta_c_scale,w_508.png 508w"
                src="/assets/images/office-staffs/office-staffs_gilgta_c_scale,w_508.png"
                alt="Staffs"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
