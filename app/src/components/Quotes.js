import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getQuote } from '../actions';


const Quotes = ( props ) => {
  const { quote, isFetching, error } = props;
  console.log('props', props)
  useEffect(() => {
  } );
  
  const getQuoteHandler = () => {
    props.getQuote();
  };
 
  if (error) {
    return <h2>Error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching your advice!</h2>;
  }

  return (
    <>
      <h2>Quote: {quote}</h2>
      <button onClick={getQuoteHandler}>Get new quote</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    quote: state.quote,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getQuote })(Quotes);