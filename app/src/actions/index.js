import axios from 'axios';

export const IS_FETCHING = "IS_FETCHING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAIL = "FETCHING_FAIL";

export const getQuote = () => {
  return dispatch => {

    dispatch({ type: IS_FETCHING })

    axios.get( 'https://api.adviceslip.com/advice' )
      .then( res => {
        console.log( res.data.quote );
        dispatch( { type: FETCHING_SUCCESS, payload: res.data.slip } );
      } )
      .catch( err => {
        dispatch( { type: FETCHING_FAIL, payload: err } );
      } );
  };
};

export const fetching = () => {
  return ( {
    type: IS_FETCHING
  } );
};

export const fetchingSuccess = (quote) => {
  return ( {
    type: FETCHING_SUCCESS,
    payload: quote
  } );
};

export const fetchingFail = (error) => {
  return ( {
    type: FETCHING_FAIL,
    payload: error
  } );
};