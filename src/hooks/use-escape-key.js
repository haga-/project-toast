import React from 'react';

function useEscapeKey(callback) {
  console.log('useEscapeKey')
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === 'Escape') {
        callback();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [callback]);

}

export default useEscapeKey;