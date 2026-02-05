import React from 'react';

function useKeydown(key, callback) {
  console.log('useEscapeKey')
  React.useEffect(() => {
    const handleEscape = (event) => {
      if (event.code === key) {
        callback();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [key, callback]);

}

export default useKeydown;