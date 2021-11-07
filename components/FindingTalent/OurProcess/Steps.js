export default function Steps({ data, inverted }) {
  return (
    <div
      className={`space-top-2 space-bottom-2 ${
        inverted ? 'bg-light' : undefined
      }`}
    >
      <div className="col-md-9 col-xl-7 mx-auto space-top-1 space-bottom-1">
        <div className="container">
          <div className="row align-items-center">
            <div
              className={`col-md-6 mb-6 mb-md-0 ${
                inverted ? 'order-0' : 'order-md-1'
              }`}
            >
              <div>
                <p className="text-color--orange mb-3 mt-0 text-uppercase font-size-1">
                  {data?.caption}
                </p>
                <div>
                  <h2 className="font-weight-normal mb-4">{data?.title}</h2>
                  <p className="mb-0 text-muted">{data?.description}</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className={`max-w-40rem ${
                  inverted ? 'ml-md-auto' : 'mr-md-auto'
                }`}
              >
                <img
                  src={`/assets/images/our-process/${data?.image}`}
                  alt={data?.caption}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
