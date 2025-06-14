import React, { useState, useEffect } from 'react';

function ScrollPosition() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const handleScrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ minHeight: '200vh', background: 'linear-gradient(to bottom, #a18cd1 0%, #fbc2eb 100%)', padding: '20px' }}>
      <h1>Cuộn xuống để thấy nút "Up"</h1>
      <p>Vị trí cuộn hiện tại: {scrollY}px</p>

      {scrollY > 200 && ( 
        <button
          onClick={handleScrollToTop}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            zIndex: 1000
          }}
        >
          Up
        </button>
      )}

      {[...Array(550)].map((_, i) => (
        <p key={i}>Dòng nội dung thứ {i + 1}</p>
      ))}
    </div>
  );
}

export default ScrollPosition;