import React from 'react';

const Error = ({ message }) => {
  const style = {
    padding: '1rem',
    backgroundColor: 'red',
    textAlign: 'center',
    marginBottom: '1rem',
    fontFamily: 'Roboto Slab',
    fontSize: '1.2rem',
    color: '#f2f2f2'
  };

  return (
    <p {... { style }}>
      {message}
    </p>
  );
}

export default Error;