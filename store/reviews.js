import axios from 'axios';

const TOKEN = 'token';

// ACTION TYPES
const GET_ALL_REVIEWS = 'GET_ALL_REVIEWS';
const GET_SINGLE_REVIEW = 'GET_SINGLE_REVIEW';
const GET_FILTERED_REVIEWS = 'GET_FILTERED_REVIEWS';

// ACTION CREATORS
const setReviews = allReviews => {
  return {
    type: GET_ALL_REVIEWS,
    allReviews,
  };
};

const setSingleReview = review => {
  return {
    type: GET_SINGLE_REVIEW,
    review,
  };
};

const setFilteredReviews = filteredReviews => {
  return {
    type: GET_FILTERED_REVIEWS,
    filteredReviews,
  };
};

// THUNK
// Cary;
export const fetchAllReviews = () => async dispatch => {
  try {
    const {data} = await axios.get('http://192.168.1.118:8080/api/reviews');
    console.log('DATA in reviews thunk>>>', data);
    dispatch(setReviews(data));
  } catch (error) {
    console.log('error fetching all reviews', error);
    console.log(error.response.data);
  }
};
//Durham
// export const fetchAllReviews = () => async dispatch => {
//   try {
//     const {data} = await axios.get('http://10.0.0.17:8080/api/reviews');
//     //console.log('DATA in reviews thunk>>>', data);
//     dispatch(setReviews(data));
//   } catch (error) {
//     console.log('error fetching all reviews', error);
//     console.log(error.response.data);
//   }
// };

//When changing to production mode (process.env.PRODUCTION), deploy on a host like Heroku, and then change http call to deployed url
//Cary
export const fetchSingleReview = reviewId => async dispatch => {
  try {
    const {data} = await axios.get(
      `http://192.168.1.118:8080/api/reviews/${reviewId}`,
    );
    dispatch(setSingleReview(data));
  } catch (error) {
    console.log('error fetching single review', error);
  }
};
//Durham
// export const fetchSingleReview = reviewId => async dispatch => {
//   try {
//     const {data} = await axios.get(
//       `http://10.0.0.17:8080/api/reviews/${reviewId}`,
//     );
//     console.log('DATA in singleReview thunk>>>', data);
//     dispatch(setSingleReview(data));
//   } catch (error) {
//     console.log('error fetching this review', error);
//     console.log(error.response.data);
//   }
// };

//Durham
// export const fetchFilteredReviews = sectionId => async dispatch => {
//   try {
//     const data = await axios.get(
//       `http://10.0.0.17:8080/api/reviews/sections/${sectionId}`,
//     );
//     //console.log('DATA in reviews thunk>>>', data);
//     dispatch(setFilteredReviews(data));
//   } catch (error) {
//     console.log('error fetching filtered reviews', error);
//     console.log(error.response.data);
//   }
// };

//Cary
export const fetchFilteredReviews = sectionId => async dispatch => {
  try {
    const data = await axios.get(
      `http://192.168.1.118:8080/api/reviews/sections/${sectionId}`,
    );
    //console.log('DATA in reviews thunk>>>', data);
    dispatch(setFilteredReviews(data));
  } catch (error) {
    console.log('error fetching filtered reviews', error);
    console.log(error.response.data);
  }
};

// initial state
const initialState = {
  allReviews: [],
  singleReview: {},
  filteredReviews: [],
};

// REDUCER
const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REVIEWS:
      return {...state, allReviews: action.allReviews};
    case GET_SINGLE_REVIEW:
      return {...state, singleReview: action.review};
    case GET_FILTERED_REVIEWS:
      return {...state, filteredReviews: action.filteredReviews};
    default:
      return state;
  }
};

export default reviewsReducer;
