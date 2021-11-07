import Scorecard from './ScoreCard';

const RATINGS = [
  {
    id: 1,
    description:
      'Strong technical skills, excellent interpersonal skills, and is able to mentor and coach others. They are up-to-date on latest industry trends.',
    stars: 4,
  },
  {
    id: 2,
    description:
      'Proficient technical skills, has worked on several projects, good interpersonal skills, and is able to work independently.',
    stars: 3,
  },
  {
    id: 3,
    description:
      'Is lacking core skills but has a natural aptitude and potential. Is able to learn from others.',
    stars: 2,
  },
  {
    id: 4,
    description:
      'Is technically inclined and knows the basics but lacks experience. Has the ability to fix small bugs and perform simple QA.',
    stars: 1,
  },
];

const TOTAL_STARS = 4;

export default function RatingsLegend() {
  return (
    <div className="space-top-2 space-bottom-4 bg-color--legends position-relative overflow-hidden">
      <div className="col-md-9 col-xl-7 mx-auto space-top-1">
        <div className="px-3 px-sm-4">
          <h2 className="text-white font-weight-normal mb-9">Ratings Legend</h2>
          <p className="text-white text-uppercase mb-6">Technical Scorecard</p>
        </div>
        <div className="container">
          <div className="row justify-content-between">
            {RATINGS.map((rating) => (
              <div className="col-md-6 mb-6 mb-sm-6 px-sm-4" key={rating?.id}>
                <Scorecard data={rating} total={TOTAL_STARS} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="position-absolute semi-hidden-flask">
        <img src="/assets/svg/flask.svg" alt="flask" className="img-fluid" />
      </div>
    </div>
  );
}
