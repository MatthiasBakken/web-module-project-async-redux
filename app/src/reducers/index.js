import { IS_FETCHING, FETCHING_SUCCESS, FETCHING_FAIL } from "./../actions";


const initialState = {
  quote: '',
  isFetching: false,
  error: ''
};

export const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {

    case ( IS_FETCHING ):
      return ( {
        ...state,
        isFetching: true
      } );
    
    case ( FETCHING_SUCCESS ):
      return ( {
        ...state,
        quote: action.payload.advice,
        isFetching: false
      } );
    
    case ( FETCHING_FAIL ):
      return ( {
        ...state,
        error: action.payload.message,
        isFetching: false
      } );
    
    default:
      return state;
  };
};