import { withSentry } from '@sentry/nextjs';

import { JobRepository } from '../../data/Repository/Job/JobRepository';

async function handler(_req, res) {
  res.status(200).json(JobRepository.groupByCategory());
}

export default withSentry(handler);
