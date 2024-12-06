import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface LoadingProps {
  loading: boolean;
}

const Loading: React.FC<LoadingProps> = ({ loading }) => {
  return (
    <>
      {loading && (
        <div className="flex h-full items-center justify-center pt-4">
          <ClipLoader color={'#7c7c7c'} aria-label="Loading Spinner" />
        </div>
      )}
    </>
  );
};

export default Loading;
