import { useReveal } from '../hooks/useReveal.js';

export default function About() {
  useReveal();

  return (
    <div id="page-about">
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/Backgrounds-05.png')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="section-tag">About the Show</div>
          <h1>Leadership Lessons from <span>Sports, Business &amp; Life</span></h1>
          <p className="page-hero-desc">A weekly podcast translating what you learn on the field into what you need in the boardroom. For parents, professionals, and leaders who believe the best teams are built on culture.</p>
        </div>
      </div>

      <div className="about-body">
        <div className="about-grid reveal">
          <div>
            <h3>The Problem</h3>
            <p>Parents invest thousands of hours and dollars in youth sports but often miss the real return on investment: <strong>the leadership DNA their kids are building.</strong></p>
            <p>Young professionals who played sports rarely connect what they learned on the field to what they need in the boardroom.</p>
          </div>
          <div>
            <h3>The Solution</h3>
            <p>Dugout to the Boardroom is the only show that takes <strong>real sports experiences</strong> and reverse-engineers them into parenting advice and career strategy.</p>
            <p>Every week, you walk away with one leadership lesson you can apply today, whether you are coaching a Little League team, running a company, or just trying to be a better parent.</p>
          </div>
        </div>
        <div className="about-grid reveal">
          <div>
            <h3>The Format</h3>
            <p><strong>52 episodes per year.</strong> Weekly drops every Thursday, 9AM to 11AM EST. Available as both video and audio across YouTube, Spotify, and Apple Podcasts.</p>
            <p>Every 3rd or 4th episode will feature a guest. Solo episodes dive deep on one leadership concept. Guest episodes bring in athletes, coaches, and business leaders who have lived in both worlds.</p>
          </div>
          <div>
            <h3>The Connection</h3>
            <p>Dugout to the Boardroom is proudly produced by <strong>Coastal Wealth.</strong> The show creates an authentic bridge between the sports community and the families and professionals Coastal Wealth serves.</p>
            <p>The target audience of engaged sports parents represents one of the most valuable demographics in financial services: young families who value discipline, commitment, and long-term thinking.</p>
          </div>
        </div>
      </div>

      <section className="pillars">
        <div className="pillars-inner">
          <div className="pillars-header reveal"><h2>Season One Themes</h2></div>
          <div className="pillars-grid">
            <div className="pillar reveal">
              <div className="pillar-q">Q1 / Weeks 1 to 13</div>
              <h3>Grit, Mindset &amp; Foundation</h3>
              <p>Starting fast, embracing discomfort, consistency, patience, and why the scoreboard does not show everything.</p>
            </div>
            <div className="pillar reveal reveal-d1">
              <div className="pillar-q">Q2 / Weeks 14 to 26</div>
              <h3>Leadership, Culture &amp; Accountability</h3>
              <p>What makes a great captain, servant leadership, emotional intelligence, handling conflict, and championship habits.</p>
            </div>
            <div className="pillar reveal reveal-d2">
              <div className="pillar-q">Q3 / Weeks 27 to 39</div>
              <h3>Strategy, Development &amp; Execution</h3>
              <p>Risk and timing, adapting to the curveball, building routines, personal brand, and knowing your role.</p>
            </div>
            <div className="pillar reveal reveal-d3">
              <div className="pillar-q">Q4 / Weeks 40 to 52</div>
              <h3>Growth, Legacy &amp; Motivation</h3>
              <p>Mentorship, celebrating unsung heroes, remote team leadership, finishing strong, and planning the next season.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
