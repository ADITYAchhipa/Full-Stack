// Q3. Create a `StatusMessage` component that takes a `status` prop. If `status` is 'success', display 'Operation was successful'. If `status` is 'error', display 'There was an error'

import React from 'react';

const StatusMessage = ({ status }) => {
  if (status === 'success') {
    return <p>Operation was successful</p>;
  } else if (status === 'error') {
    return <p>There was an error</p>;
  } else {
    return null;
  }
};

export default StatusMessage;
