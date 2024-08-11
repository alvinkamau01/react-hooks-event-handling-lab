import { useState } from 'react';

function EyesOnMe() {
  const [isFocused, setIsFocused] = useState(false);

  
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <button
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        Eyes on me
      </button>
      <p>{isFocused ? 'Good' : 'Hey! Eyes on me!'}</p>
    </div>
  );
}

export default EyesOnMe;
