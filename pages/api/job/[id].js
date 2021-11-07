import { JobRepository } from '../../../data/Repository/Job/JobRepository';

export default function jobHandler({ query: { id }, method }, res) {
  if (method !== 'GET') {
    res.setHeader('Allow', ['GET', 'PUT']);
    res.status(405).end(`Method ${method} Not Allowed`);
  } else {
    const foundJob = JobRepository.findBySlugPath(id);
    if (foundJob) {
      res.status(200).json(foundJob);
    } else {
      res.status(404).json({
        error: `Can't find Job with id ${id}. The position might be closed or you the URL you entered is incorrect`,
      });
    }
  }
}
