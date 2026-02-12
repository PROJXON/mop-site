import React from "react";

const WhyAttendMOP: React.FC = () => {
  return (
    <div className="py-16 px-4 lg:px-8 bg-base-200">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <h2 className="text-5xl font-bold text-center mb-12">
          Why Attend MOP?
        </h2>

        {/* Accordion Container */}
        <div className="space-y-4">
          {/* Section 1: Who You'll Meet */}
          <details
            className="collapse bg-base-100 border border-base-300 shadow-lg"
            name="mop-accordion"
            open
          >
            <summary className="collapse-title text-2xl font-semibold cursor-pointer hover:bg-base-200 transition-colors">
              Who You'll Meet
            </summary>
            <div className="collapse-content">
              <div className="pt-4 space-y-4">
                <p className="text-lg leading-relaxed">
                  Connect with industry leaders, innovative thinkers, and
                  passionate professionals from across the company. Build
                  meaningful relationships with colleagues you've never met and
                  strengthen bonds with your team.
                </p>

                {/* Image Area */}
                <div className="mt-6">
                  <img
                    src="/placeholder-networking.jpg"
                    alt="Networking at MOP"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Additional Details */}
                <ul className="list-disc list-inside space-y-2 text-base mt-4">
                  <li>C-Suite executives and department heads</li>
                  <li>Cross-functional team members</li>
                  <li>New hires and company veterans</li>
                  <li>Special guest speakers and industry experts</li>
                </ul>
              </div>
            </div>
          </details>

          {/* Section 2: What You Will Gain */}
          <details
            className="collapse bg-base-100 border border-base-300 shadow-lg"
            name="mop-accordion"
          >
            <summary className="collapse-title text-2xl font-semibold cursor-pointer hover:bg-base-200 transition-colors">
              What You Will Gain
            </summary>
            <div className="collapse-content">
              <div className="pt-4 space-y-4">
                <p className="text-lg leading-relaxed">
                  Take away valuable insights, fresh perspectives, and
                  actionable strategies. Gain inspiration from success stories,
                  learn from workshops, and discover new opportunities for
                  growth.
                </p>

                {/* Image Area */}
                <div className="mt-6">
                  <img
                    src="/placeholder-learning.jpg"
                    alt="Learning experiences at MOP"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Additional Details */}
                <ul className="list-disc list-inside space-y-2 text-base mt-4">
                  <li>Professional development workshops</li>
                  <li>Industry insights and trends</li>
                  <li>Career advancement opportunities</li>
                  <li>Team building experiences</li>
                  <li>Exclusive company announcements</li>
                </ul>
              </div>
            </div>
          </details>

          {/* Section 3: What to Bring */}
          <details
            className="collapse bg-base-100 border border-base-300 shadow-lg"
            name="mop-accordion"
          >
            <summary className="collapse-title text-2xl font-semibold cursor-pointer hover:bg-base-200 transition-colors">
              What to Bring
            </summary>
            <div className="collapse-content">
              <div className="pt-4 space-y-4">
                <p className="text-lg leading-relaxed">
                  Come prepared to make the most of your MOP experience. Here's
                  everything you'll need for a successful and enjoyable event.
                </p>

                {/* Image Area */}
                <div className="mt-6">
                  <img
                    src="/placeholder-essentials.jpg"
                    alt="Event essentials"
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Additional Details */}
                <ul className="list-disc list-inside space-y-2 text-base mt-4">
                  <li>Business cards for networking</li>
                  <li>Notebook or device for taking notes</li>
                  <li>Comfortable attire (business casual)</li>
                  <li>Positive attitude and open mind</li>
                  <li>Questions for speakers and leaders</li>
                  <li>Your enthusiasm and energy!</li>
                </ul>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};

export default WhyAttendMOP;
