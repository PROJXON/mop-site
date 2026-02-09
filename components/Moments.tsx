import React from "react";

// Highlight key moments, with a section for video highlights and noting important moments, along with pictures showing them

const Moments: React.FC = () => {
  return (
    <section className="moments">
      <h2 className="text-5xl text-center mb-5">Key Moments</h2>
      <div className="video-highlights mb-5">
        <h3 className="text-xl mb-3">Video Highlights</h3>
        {/* Embed video highlights here */}
        <div className="video-placeholder bg-gray-200 h-64 flex items-center justify-center">
          Video Highlights Placeholder
        </div>
      </div>
      <div className="important-moments mb-5">
        <h3 className="text-xl mb-3">Important Moments</h3>
        {/* List important moments here */}
        <ul className="list-disc list-inside">
          <li>Keynote speech by a renowned industry leader.</li>
          <li>Panel discussion on the future of innovation.</li>
          <li>Networking session that led to significant collaborations.</li>
          <li>A surprise announcement that energized the crowd.</li>
        </ul>
      </div>
      <div className="photo-gallery">
        <h3 className="text-xl mb-3">Photo Gallery</h3>
        {/* Display photos of key moments here */}
        <div className="photo-placeholder bg-gray-200 h-64 flex items-center justify-center">
          Photo Gallery Placeholder
        </div>
      </div>
    </section>
  );
};

export default Moments;
