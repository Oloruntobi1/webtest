import { BaseRepository } from '../BaseRepository';
import { CategoryRepository } from '../Category/CategoryRepository';
import { makeJobSlugID, UNIQUE_ID } from '../utils';
import { Jobs } from './Jobs.data';

class JobRepository extends BaseRepository {
  static all(sortOrder = 'asc') {
    if (sortOrder === 'desc') {
      const jobIDs = Object.keys(Jobs).sort((a, b) => b - a);
      const sortedDesc = {};

      jobIDs.forEach((jobID) => {
        sortedDesc[`_${jobID}`] = Jobs[jobID];
      });

      return sortedDesc;
    }

    return Jobs;
  }

  static findById(id) {
    return Jobs[id];
  }

  static groupByCategory() {
    const allJobs = this.all('desc');
    const jobsByCategory = {};

    let job = null;
    let currentJob = null;
    let category = false;

    Object.keys(allJobs).forEach((jobID) => {
      job = allJobs[jobID];
      category = CategoryRepository.findById(job.categoryId);
      if (job.hiring && category) {
        job.slugID = makeJobSlugID(job.slug, job.id);
        currentJob = jobsByCategory[category.name];
        if (currentJob) {
          currentJob.positionsCount += 1;
          currentJob.positions.push(job);
        } else {
          jobsByCategory[category.name] = {
            id: category.id,
            category: category.name,
            positionsCount: 1,
            positions: [job],
          };
        }
      }
    });

    return jobsByCategory;
  }

  static findBySlugPath(slugPath) {
    const path = slugPath.split(UNIQUE_ID);
    if (path.length > 1) {
      const jobID = path[path.length - 1];
      const job = this.findById(parseInt(jobID, 10));

      if (job) return job;

      return false;
    }

    return false;
  }

  static getRandomActiveJobs(limit = 4) {
    const minRandomJob = 5;
    const jobs = [];
    const allJobs = this.all();
    // if (Object.keys(allJobs).length < minRandomJob) {
    //   return jobs;
    // }

    Object.keys(allJobs).forEach((jobID) => {
      const job = allJobs[jobID];
      if (job.hiring) {
        jobs.push(job);
      }
    });

    if (jobs.length < minRandomJob) {
      return jobs;
    }

    const randomJobs = [];
    const sampleSize = jobs.length;
    for (let i = 0; i < limit; i += 1) {
      const randomPos = Math.floor(Math.random() * sampleSize);
      randomJobs.push(jobs[randomPos]);
      jobs.splice(randomPos, 1);
    }

    return randomJobs;
  }

  static isEmpty() {
    const allJobs = this.all();

    return Object.keys(allJobs).length < 1;
  }
}

export { JobRepository };
