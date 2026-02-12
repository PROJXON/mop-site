import React from "react";

function Timeline() {
  return (
    <div>
      <div className="text-center my-12">
        <h2 className="text-4xl font-bold mb-4">Event Timeline</h2>
        <p className="text-lg text-gray-600">
          A sneak peek into the exciting activities planned for the day
        </p>
      </div>
      <div className="flex items-center justify-center">
        <ul className="timeline timeline-vertical lg:timeline-vertical">
          <li>
            <div className="timeline-start flex gap-2">
              <div className="text-xl font-bold">5:00 PM - 6:00 PM</div>
              <div className="text-xl italic">Doors Open</div>
            </div>
            <div className="timeline-middle">
              <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="15" cy="15" fill="black" />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-xl font-bold">Arrivals & Welcome</div>
              <div className="text-xl italic">
                {" "}
                Check-in, Cocktails, Introductions{" "}
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start flex gap-2">
              <div className="text-xl font-bold">5:15 PM - 5:30 PM</div>
              <div className="text-xl italic">Networking 101</div>
            </div>
            <div className="timeline-middle">
              <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="15" cy="15" fill="black" />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-xl font-bold">Learn New Skills:</div>
              <div className="text-xl italic">
                For those of you who are rusty or fresh on networking scene
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start flex gap-2">
              <div className="text-xl font-bold">5:30 PM - 5:40 PM</div>
              <div className="text-xl italic">Collaborative Activity</div>
            </div>
            <div className="timeline-middle">
              <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="15" cy="15" fill="black" />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-xl font-bold">Group 1:</div>
              <div className="text-xl italic">Be the first to connect!</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start flex gap-2">
              <div className="text-xl font-bold">6:00 PM - 6:10 PM</div>
              <div className="text-xl italic">Momentum Moment</div>
            </div>
            <div className="timeline-middle">
              <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="15" cy="15" fill="black" />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-xl font-bold">Round 1</div>
              <div className="text-xl italic">
                Raffle + Speaker + Challenge 1 - "Name Badge Bingo"
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start flex gap-2">
              <div className="text-xl font-bold">6:30 PM - 6:40 PM</div>
              <div className="text-xl italic">Collaborative Activity</div>
            </div>
            <div className="timeline-middle">
              <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="15" cy="15" fill="black" />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-xl font-bold">Group 2</div>
              <div className="text-xl italic">Connect with Crowd!</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start flex gap-2">
              <div className="text-xl font-bold">7:00 PM - 7:10 PM</div>
              <div className="text-xl italic">Momentum Moment</div>
            </div>
            <div className="timeline-middle">
              <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="15" cy="15" fill="black" />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-xl font-bold">Round 2</div>
              <div className="text-xl italic">
                Raffle + Speaker + Challenege 2 - "LinkedIn Limbo"
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start flex gap-2">
              <div className="text-xl font-bold">7:30 PM - 7:40 PM</div>
              <div className="text-xl italic">Collaborative Activity</div>
            </div>
            <div className="timeline-middle">
              <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="15" cy="15" fill="black" />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-xl font-bold">Group 3</div>
              <div className="text-xl italic">Make New Connections</div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start flex gap-2">
              <div className="text-xl font-bold">8:00 PM - 8:10 PM</div>
              <div className="text-xl italic">Momentum Moment</div>
            </div>
            <div className="timeline-middle">
              <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="15" cy="15" fill="black" />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-xl font-bold">Round 3</div>
              <div className="text-xl italic">
                Raffle + Speaker + Challenge 3 - "Coffee Connect"
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start flex gap-2">
              <div className="text-xl font-bold">8:45 PM - 8:50 PM</div>
              <div className="text-xl italic">Last Call</div>
            </div>
            <div className="timeline-middle">
              <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="15" cy="15" fill="black" />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-xl font-bold">Wrap Up</div>
              <div className="text-xl italic">
                Wrap up Conversations, exchange Contacts, and set next chats.
              </div>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-start flex gap-2">
              <div className="text-xl font-bold">8:50 PM - 9:00 PM</div>
              <div className="text-xl italic">Doors Close</div>
            </div>
            <div className="timeline-middle">
              <svg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                <circle r="10" cx="15" cy="15" fill="black" />
              </svg>
            </div>
            <div className="timeline-end timeline-box">
              <div className="text-xl font-bold">Head to the After Party:</div>
              <div className="text-xl italic">
                Guests leave energized, connected, and registered for the next
                event.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Timeline;
