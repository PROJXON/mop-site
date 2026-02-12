import { url } from "inspector";
import React from "react";

interface InfoProps {
  title: string;
  descriptionpt1: string;
  descriptionpt2?: string;
  imageUrl?: string;
}

const Info: React.FC<InfoProps> = ({
  title,
  descriptionpt1,
  descriptionpt2,
  imageUrl,
}) => {
  return (
    <div className="info-section relative isolate overflow-hidden sm:py-8">
      <h2 className="text-3xl font-bold text-grey-500 mx-auto text-center mb-5">
        {title}
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center ">
          {/* Text Content - 1 column (25%) */}
          <div className="lg:col-span-2 space-y-6">
            <h1 className="font-semibold">{descriptionpt1}</h1>
            <h1 className="font-semibold">{descriptionpt2}</h1>
          </div>

          {/* Image - 3 columns (75%) */}
          {imageUrl && (
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
