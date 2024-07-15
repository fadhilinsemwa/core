// pages/soma-pages/soma-link.tsx
import React, { useState } from 'react';

const SomaPage: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative w-full flex flex-col items-center" style={{ height: '85vh' }}>
      <div className="relative w-full" style={{ height: 'calc(100% - 2rem)' }}>
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center bg-gray-200 z-10" style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p>Loading...</p>
          </div>
        )}
        <iframe
          src="https://soma.mwanzauniversity.ac.tz/login/index.php"
          className={`w-full transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
          style={{ height: '100%', border: 'none' }}
          title="Soma Link"
          onLoad={handleLoad}
        />
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      title: 'Soma',
    },
  };
};

export default SomaPage;
