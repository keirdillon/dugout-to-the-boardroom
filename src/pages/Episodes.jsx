import { useReveal } from '../hooks/useReveal.js';

const QUARTERS = [
  {
    label: 'Q1 / Grit, Mindset & Foundation',
    episodes: [
      [1, 'Why This Podcast? The Power of Dugout Lessons in Leadership'],
      [2, 'Lead-Off Mentality: Starting Fast in Business and in Life'],
      [3, 'Doing the Little Things: The Value of Intangibles'],
      [4, 'Headfirst Hustle: Playing (and Leading) Without Fear'],
      [5, 'Get Hit, Get On: Embracing Discomfort for Progress'],
      [6, "The Scoreboard Doesn't Show Everything"],
      [7, 'Grind Over Glory: Winning Ugly Still Counts'],
      [8, 'Earning Trust in the Locker Room and the Boardroom'],
      [9, 'Why "Team First" Wins Over "Me First" Every Time'],
      [10, 'The Power of Consistency: Batting .300 in Business'],
      [11, 'Short Memory, Long Vision: Handling Failure Like a Pro'],
      [12, "Don't Be a 5 O'Clock Hitter: Practice with Purpose"],
      [13, 'When to Take the Pitch: Patience as Strategy'],
    ],
  },
  {
    label: 'Q2 / Leadership, Culture & Accountability',
    episodes: [
      [14, 'What Makes a Great Captain? Leadership Styles That Work'],
      [15, 'Dugout Culture: Setting the Tone Before the Game Starts'],
      [16, 'Servant Leadership: Cleaning the Locker Room First'],
      [17, 'Holding Your Teammates Accountable Without Drama'],
      [18, 'The 6th Tool: Emotional Intelligence on the Field & at Work'],
      [19, "Great Coaches Don't Yell. They Teach"],
      [20, '"Glue Guys" and Culture Carriers'],
      [21, 'Body Language Is Leadership'],
      [22, 'Conflict in the Clubhouse: How to Handle It Like a Pro'],
      [23, 'Leading Through a Slump: Stay the Course'],
      [24, 'Scouting Yourself: Self-Awareness and Adaptability'],
      [25, "Championship Habits: What Winners Do When No One's Watching"],
      [26, 'Why Good Teammates Make Great Leaders'],
    ],
  },
  {
    label: 'Q3 / Strategy, Development & Execution',
    episodes: [
      [27, 'Running the Bases in Business: Risk, Timing & Execution'],
      [28, 'Playing Situational Baseball in the Boardroom'],
      [29, 'Hitting Behind the Runner: Sacrifice for Success'],
      [30, 'Reading Signs: Non-Verbal Leadership'],
      [31, 'The Art of the Steal: Timing Your Big Moves'],
      [32, 'Getting Hot at the Right Time: Momentum Matters'],
      [33, 'Learning to Hit the Curveball: Adapt or Lose'],
      [34, 'Play All 9 Innings: Finish Strong Every Day'],
      [35, 'Rain Delays Happen. Stay Ready'],
      [36, "What's Your Walk-Up Song? Building Personal Brand"],
      [37, 'Video Room Lessons: Reviewing Performance Objectively'],
      [38, 'Know Your Role and Star in It'],
      [39, 'Practice Swings: Building Routines That Actually Help'],
    ],
  },
  {
    label: 'Q4 / Growth, Legacy & Motivation',
    episodes: [
      [40, 'How You Do Anything Is How You Do Everything'],
      [41, 'The Real MVPs: Celebrating Unsung Heroes'],
      [42, 'Clubhouse Leadership for Remote Teams'],
      [43, 'Play for the Name on the Front and the Back'],
      [44, 'Teaching the Next Generation: Mentorship Matters'],
      [45, 'Why Losing Can Be Your Greatest Win'],
      [46, 'Bring the Juice: Showing Up with Energy and Intention'],
      [47, 'Getting Better vs Getting Bitter'],
      [48, 'What I Miss About the Game and What I Apply Daily'],
      [49, '"Thanks, Coach": The Leaders Who Shaped Me'],
      [50, 'Finish the Year Like a Closer'],
      [51, '10 Things I Learned This Year from the Podcast'],
      [52, 'New Season, New Goals: Planning 2027'],
    ],
  },
];

const pad = (n) => String(n).padStart(2, '0');

export default function Episodes() {
  useReveal();

  return (
    <div id="page-episodes">
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/Baseball.png')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="section-tag">Season One</div>
          <h1>52 Episodes. <span>52 Leadership Lessons.</span></h1>
          <p className="page-hero-desc">Every week, one concept from the field translated into the boardroom. Solo deep-dives and guest conversations with athletes, coaches, and business leaders.</p>
        </div>
      </div>

      <div className="ep-list">
        {QUARTERS.map((q) => (
          <div className="ep-quarter reveal" key={q.label}>
            <div className="ep-quarter-label">{q.label}</div>
            {q.episodes.map(([num, title]) => (
              <div className="ep-row" key={num}>
                <div className="ep-row-num">{pad(num)}</div>
                <div className="ep-row-title">{title}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
