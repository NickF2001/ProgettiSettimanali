export const SET_JOBS = 'SET_JOBS';
export const SET_COMPANY_JOBS = 'SET_COMPANY_JOBS';
export const SET_QUERY = 'SET_QUERY';

export const setJobs = (newJob) => ({
  type: SET_JOBS,
  payload: newJob,
});

export const setCompanyJobs = (jobsList) => ({
  type: SET_COMPANY_JOBS,
  payload: jobsList,
});

export const setQuery = (newQuery) => ({
  type: SET_QUERY,
  payload: newQuery,
});
