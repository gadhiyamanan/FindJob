import jobmodel from "../model/jobmodel";
const initialstate = {
  availableJobs: [],
  userOwnJobs: [],
};
export default (state = initialstate, action) => {
  switch (action.type) {
    case "CREATED_JOB_SUCCESS":
      // console.log("jobreducer.ks+++++++++++++++++", action);
      const newJob = new jobmodel(
        action.jobData.id,
        action.jobData.ownerid,
        action.jobData.id,
        action.jobData.bgColor,
        action.jobData.description,
        action.jobData.phone
      );
      return {
        ...state,
        availableJobs: state.availableJobs.concat(newJob),
        userOwnJobs: state.userOwnJobs.concat(newJob),
        jobCreated: action.jobCreated,
      };
    case "CREATE_JOB_FAILED":
      // console.log("created job filed,", action);
      return {
        ...state,
        descriptionErrorMessage: action.descriptionErrorMessage,
        phoneErrorMessage: action.phoneErrorMessage,
      };
    case "CLEAR_ERROR_MESSAGE":
      return {
        ...state,
        descriptionErrorMessage: action.descriptionErrorMessage,
        phoneErrorMessage: action.phoneErrorMessage,
      };

    case "SET_JOBS":
      //console.log("jobRedcuer fetching", action);

      return {
        ...state,
        availableJobs: action.allJobs.sort(function (a, b) {
          return 0.5 - Math.random();
        }),
        userOwnJobs: action.userOwnJobs,
      };
    case "DELETE_JOB":
      return {
        ...state,
        userOwnJobs: state.userOwnJobs.filter((job) => job.id !== action.jobId),
        availableJobs: state.availableJobs.filter(
          (job) => job.id !== action.jobId
        ),
      };

    default:
      return state;
  }
};
