import React, { useState } from 'react';
 

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <section className="w3l-index5 py-5" id="video">
      <div className="container py-5">
        <div className="history-info align-self text-center py-md-5">
          <div className="position-relative py-sm-5">
            <button
              onClick={openPopup}
              className="play-view text-center position-absolute"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              <span className="video-play-icon">
                <span className="fa fa-play"></span>
              </span>
            </button>

            {isOpen && (
              <div className="video-modal-overlay">
                <div className="video-modal-content">
                  <button
                    className="video-modal-close"
                    onClick={closePopup}
                  >
                    &times;
                  </button>
                  <iframe
                    src="assets/images/video-2.mp4"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    title="Video"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPopup;
