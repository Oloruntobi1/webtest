import ButtonIcon from '../../Common/Button/Icon';
import ContactUsForm from './Form';

export default function ContactUsSection() {
  return (
    <div className="bg-light">
      <div className="container space-top-2 space-bottom-2">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-6 mb-lg-0">
            <div className="mr-lg-5">
              {/* Form */}
              <ContactUsForm />
              {/* End Form */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="ml-lg-5">
              <p className="text-muted mb-2 text-uppercase font-size-1">
                Contact Us
              </p>
              <h1 className="font-weight-normal mb-6">
                Let’s help you recruit African talent
              </h1>

              <p className="text-muted mb-3 text-uppercase font-size-1">
                SOCIAL MEDIA
              </p>
              <div className="d-flex flex-wrap">
                <a
                  href="https://www.instagram.com/10hourlabs/"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2 mr-sm-3"
                >
                  <ButtonIcon
                    src="/assets/svg/icons/theinstagram.svg"
                    name="instagram"
                  />
                </a>

                <a
                  href="https://twitter.com/10hourlabs"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2 mr-sm-3"
                >
                  <ButtonIcon
                    src="/assets/svg/icons/tttt.svg"
                    name="chik-fil-a"
                  />
                </a>

                <a
                  href="https://github.com/10hourlabs"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-2 mr-sm-3"
                >
                  <ButtonIcon
                    src="/assets/svg/icons/gggg.svg"
                    name="github"
                    size={25}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/10hourlabs/about"
                  target="_blank"
                  rel="noreferrer"
                >
                  <ButtonIcon
                    src="/assets/svg/icons/llll.svg"
                    name="linkedin"
                    size={30}
                  />
                </a>
              </div>
              {/* <div className="mb-4">
                <span className="d-block font-weight-normal mb-1">
                  Email us:
                </span>
                <span className="d-block text-body font-size-1">
                  Contact@10hourslab.com
                </span>
              </div>
              <div>
                <span className="d-block mb-1">Address:</span>
                <span className="d-block text-body font-size-1">
                  Ontario, Canada
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
