export default function TopSection() {
  return (
    <div className="col-md-9 col-xl-8 mx-auto">
      <div className="container space-top-1 space-bottom-2">
        <div className="row align-items-center">
          <div className="col-md-7 mb-6 mb-md-0">
            <div>
              <p className="text-muted mb-1 text-uppercase font-size-1">
                Finding Talent
              </p>
              <div>
                <h1 className="font-weight-normal">
                  How we help
                  <br />
                  Companies recruit
                  <br />
                  world-class development
                  <br />
                  talent in Africa
                </h1>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="max-w-40rem ml-md-auto">
              <img
                src="/assets/images/finding-talent-top.png"
                alt="top"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
