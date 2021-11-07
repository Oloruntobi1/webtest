const UNIQUE_ID = '-@10hl-';

function makeJobSlugID(jobSlug, jobID) {
  return `${jobSlug}${UNIQUE_ID}${jobID}`;
}

export { makeJobSlugID, UNIQUE_ID };
