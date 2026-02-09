import React from "react";
import PictureCard from "./PictureCard";
import AutoScrollCarousel from "./AutoScrollCarousel";

// Highlight key moments, with a section for video highlights and noting important moments, along with pictures showing them

const Moments: React.FC = () => {
  return (
    <section className="moments">
      <h2 className="text-5xl mb-5">Unforgettable Moments</h2>
      <h3 className="text-xl mb-3">Networking Engagement Activity</h3>
      <div className="video-highlights mb-5 flex gap-5 items-center justify-center">
        {/* Embed video highlights here */}
        <div className="video-placeholder bg-gray-200 h-128 w-[80vw] flex items-center justify-center">
          Video Highlights Placeholder
        </div>
      </div>
      <AutoScrollCarousel itemCount={6}>
        <PictureCard
          imageUrl="https://lh3.googleusercontent.com/sitesv/APaQ0SSGOY0UgXMoJ9mYlc-dEfG9iUoR2zaTM-or-XpkMpyj5k_ZNC-yzVa_riLy38Y2EbAtmRbs53PGDToczOJeg-m0qHdTZxPXT4hn8CVTy8z2HeNvCYtPtyHYlD4YjANZDKvUSXRg0YSAISe5-aBJ-LUloBB-e8mpneq9YDisQsFlFCVQRnZJBiMAWHUOqcqsGCGB-pAw2PNeAT6owEayMlpYSh-FZoaxFriKStg=w1280"
          description="A vibrant moment from the event showcasing the high-energy atmosphere and professional networking in action."
        />
        <PictureCard
          imageUrl="https://lh3.googleusercontent.com/sitesv/APaQ0SRi2kZ_vaWaAgHGQZgfc1KEI2zKA1rUfoGn8Fco6fe9eUoXEBDUlxEzUimM2wuVelNM1aPkmpEfh6-Uzif0jJ_hY3KJo91_N2Jgv6KVPPu53C00xD1kGmZGdnHaTuC5kvNjDM3kpQRWMCS4_MiVu8Xjvdj5jk3t76fxdGof0WdUn08iURYuExkmPoO0PoDbd3TPnV1t5R-52SLVXOYzkGIpw6OvNGsIPHUF3rs=w1280"
          description="Attendees engaging in meaningful conversations, exchanging ideas, and building connections."
        />
        <PictureCard
          imageUrl="https://lh3.googleusercontent.com/sitesv/APaQ0SQOv-dUzvTTiVp52-ibNnU7kglDO0cFxCVzmLIIzlZqInW_7hDQ2sEynyoCUAy2EfiC2DBka33mySbTMCPrrE1gsjIRpPDz_9ph6sTrzmj8RZxMOP3x_6x3vclw9py8CGZgt_rpA1IxHcmQ4l-O6ZIQrZqkBTEgKvpYDmeA1ZD33HJQVT7qViqTDu8zhkXybQM-hSXdv9TilwhSYNVsZRwNhykAiYzLEt4g_YU=w1280"
          description="A snapshot capturing the essence of the event, where professionals from various industries come together to celebrate success and foster collaboration."
        />
        <PictureCard
          imageUrl="https://lh3.googleusercontent.com/sitesv/APaQ0SSGOY0UgXMoJ9mYlc-dEfG9iUoR2zaTM-or-XpkMpyj5k_ZNC-yzVa_riLy38Y2EbAtmRbs53PGDToczOJeg-m0qHdTZxPXT4hn8CVTy8z2HeNvCYtPtyHYlD4YjANZDKvUSXRg0YSAISe5-aBJ-LUloBB-e8mpneq9YDisQsFlFCVQRnZJBiMAWHUOqcqsGCGB-pAw2PNeAT6owEayMlpYSh-FZoaxFriKStg=w1280"
          description="A vibrant moment from the event showcasing the high-energy atmosphere and professional networking in action."
        />
        <PictureCard
          imageUrl="https://lh3.googleusercontent.com/sitesv/APaQ0SRi2kZ_vaWaAgHGQZgfc1KEI2zKA1rUfoGn8Fco6fe9eUoXEBDUlxEzUimM2wuVelNM1aPkmpEfh6-Uzif0jJ_hY3KJo91_N2Jgv6KVPPu53C00xD1kGmZGdnHaTuC5kvNjDM3kpQRWMCS4_MiVu8Xjvdj5jk3t76fxdGof0WdUn08iURYuExkmPoO0PoDbd3TPnV1t5R-52SLVXOYzkGIpw6OvNGsIPHUF3rs=w1280"
          description="Attendees engaging in meaningful conversations, exchanging ideas, and building connections."
        />
        <PictureCard
          imageUrl="https://lh3.googleusercontent.com/sitesv/APaQ0SQOv-dUzvTTiVp52-ibNnU7kglDO0cFxCVzmLIIzlZqInW_7hDQ2sEynyoCUAy2EfiC2DBka33mySbTMCPrrE1gsjIRpPDz_9ph6sTrzmj8RZxMOP3x_6x3vclw9py8CGZgt_rpA1IxHcmQ4l-O6ZIQrZqkBTEgKvpYDmeA1ZD33HJQVT7qViqTDu8zhkXybQM-hSXdv9TilwhSYNVsZRwNhykAiYzLEt4g_YU=w1280"
          description="A snapshot capturing the essence of the event, where professionals from various industries come together to celebrate success and foster collaboration."
        />
        <PictureCard
          imageUrl="https://lh3.googleusercontent.com/sitesv/APaQ0SSGOY0UgXMoJ9mYlc-dEfG9iUoR2zaTM-or-XpkMpyj5k_ZNC-yzVa_riLy38Y2EbAtmRbs53PGDToczOJeg-m0qHdTZxPXT4hn8CVTy8z2HeNvCYtPtyHYlD4YjANZDKvUSXRg0YSAISe5-aBJ-LUloBB-e8mpneq9YDisQsFlFCVQRnZJBiMAWHUOqcqsGCGB-pAw2PNeAT6owEayMlpYSh-FZoaxFriKStg=w1280"
          description="A vibrant moment from the event showcasing the high-energy atmosphere and professional networking in action."
        />
      </AutoScrollCarousel>
    </section>
  );
};

export default Moments;
