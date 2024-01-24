import { SET_JOBS, SET_COMPANY_JOBS, SET_QUERY } from '../actions/actions';

const initialState = {
  jobs: [],
  companyJobs: [],
  query: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case SET_COMPANY_JOBS:
      return {
        ...state,
        companyJobs: action.payload,
      };

    case SET_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
