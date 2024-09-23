// Q5.  Create a `LikeButton` component. It should accept a `likeCount` prop, but internally manage the count using `useState`. Clicking the button should increase the like count.

import React, { useState } from 'react';

const LikeButton = ({ likeCount }) => {
  const [count, setCount] = useState(likeCount);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={handleClick}>
      Likes: {count}
    </button>
  );
};

export default LikeButton;
