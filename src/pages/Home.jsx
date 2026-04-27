import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal.js';

export default function Home() {
  useReveal();

  return (
    <div id="page-home">
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            DUGOUT
            <span className="to-the">TO THE</span>
            BOARDROOM
          </h1>
          <div className="hero-tagline">
            <strong>Leadership lessons</strong> from sports, business &amp; life. Real locker room stories translated into career strategy and parenting wisdom.
          </div>
          <div className="hero-host-line">Hosted by Wicho Hernandez</div>
          <div className="hero-actions">
            <a href="#subscribe" className="btn btn-orange">Get Notified &rarr;</a>
            <Link to="/about" className="btn btn-outline">Learn More</Link>
          </div>
          <div className="hero-schedule">
            <div className="sched-item"><div className="sched-dot"></div><div className="sched-text">Live Every Thursday</div></div>
            <div className="sched-item"><div className="sched-dot"></div><div className="sched-text">9AM&ndash;11AM EST</div></div>
            <div className="sched-item"><div className="sched-dot"></div><div className="sched-text">Video + Audio</div></div>
          </div>
        </div>
      </section>

      <section className="concept">
        <div className="concept-inner">
          <div className="concept-left reveal">
            <div className="section-tag" style={{ marginBottom: 20 }}>The Concept</div>
            <h2 className="concept-quote">
              Great Leaders Aren't Born in Corner Offices.<br />
              <span>They're Built in Locker Rooms.</span>
            </h2>
          </div>
          <div className="concept-right reveal reveal-d1">
            <p>Parents invest thousands of hours and dollars in youth sports but often miss the real return on investment: <strong>the leadership DNA their kids are building.</strong></p>
            <p>Meanwhile, young professionals who played sports rarely connect what they learned on the field to what they need in the boardroom.</p>
            <p><strong>Dugout to the Boardroom lives in the intersection.</strong> Every week, you walk away with one leadership lesson you can apply today, whether you are coaching a Little League team, running a company, or just trying to be a better parent.</p>
          </div>
        </div>
      </section>

      <section className="audiences">
        <div className="audience-card reveal">
          <div className="audience-number">01</div>
          <div className="audience-tag">Primary Audience</div>
          <h3>Sports Parents</h3>
          <p>Ages 30 to 45, driving to practices, sitting in bleachers. You want to understand the deeper lessons your children are learning.</p>
        </div>
        <div className="audience-card reveal reveal-d1">
          <div className="audience-number">02</div>
          <div className="audience-tag">Secondary Audience</div>
          <h3>Young Professionals</h3>
          <p>Ages 22 to 35, you played sports and now you are navigating early-career leadership. Relatable advice, not corporate jargon.</p>
        </div>
        <div className="audience-card reveal reveal-d2">
          <div className="audience-number">03</div>
          <div className="audience-tag">Strategic Audience</div>
          <h3>Business Leaders</h3>
          <p>You believe the best teams are built on culture and competitive fire. This show speaks your language.</p>
        </div>
      </section>

      <section className="episodes-section">
        <div className="episodes-inner">
          <div className="episodes-header reveal">
            <h2>Coming Episodes</h2>
            <div className="section-tag">Preview</div>
          </div>
          <div className="ep-grid">
            <div className="ep-card reveal">
              <img className="ep-card-img" src="/images/ep-thumb-1.jpg" alt="" />
              <div className="ep-card-body">
                <div className="ep-tag">Special Personal Episode</div>
                <h3>What I Figured Out Over the Years</h3>
                <p>Wicho shares the leadership lessons that took decades to learn.</p>
              </div>
            </div>
            <div className="ep-card reveal reveal-d1">
              <img className="ep-card-img" src="/images/ep-thumb-2.jpg" alt="" />
              <div className="ep-card-body">
                <div className="ep-tag">Episode 35</div>
                <h3>The Important Truth About Team Dynamics</h3>
                <p>Why the best teams are built on culture, trust, and sacrifice.</p>
              </div>
            </div>
            <div className="ep-card reveal reveal-d2">
              <img className="ep-card-img" src="/images/ep-thumb-3.jpg" alt="" />
              <div className="ep-card-body">
                <div className="ep-tag">Episode 35</div>
                <h3>Lessons From the Field</h3>
                <p>How youth sports teach commitment and resilience.</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }} className="reveal">
            <Link to="/episodes" className="btn btn-dark">View All Episodes &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="host-section">
        <div className="host-inner">
          <div className="host-img-wrap reveal">
            <img className="host-img" src="/images/Wicho-Window-HEadshot.jpg" alt="Wicho Hernandez" />
            <div className="host-img-overlay"></div>
            <div className="host-img-border"></div>
          </div>
          <div className="host-info reveal reveal-d1">
            <div className="section-tag">Meet the Host</div>
            <h2>Luis "Wicho"<br />Hernandez</h2>
            <div className="host-role">Managing Partner · Coastal Wealth</div>
            <p>Former minor league ballplayer for the New York Mets. A four-year letterman at the University of Miami. Harvard-educated psychologist. Managing Partner at Coastal Wealth.</p>
            <div style={{ marginTop: 24 }}>
              <Link to="/host" className="btn btn-dark">Full Bio &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cta" id="subscribe">
        <div className="cta-inner reveal">
          <h2>Don't Miss the First Pitch</h2>
          <p>Be first to know when Dugout to the Boardroom goes live. Episode alerts, guest announcements, and behind-the-scenes content.</p>
          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Notify Me</button>
          </form>
          <div className="cta-platforms">
            <a href="#">YouTube</a>
            <a href="#">Spotify</a>
            <a href="#">Apple Podcasts</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </section>
    </div>
  );
}
