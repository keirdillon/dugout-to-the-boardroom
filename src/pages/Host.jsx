import { useReveal } from '../hooks/useReveal.js';

export default function Host() {
  useReveal();

  return (
    <div id="page-host">
      <div className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/Green-background.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-inner">
          <div className="section-tag">Your Host</div>
          <h1>Luis "Wicho" <span>Hernandez</span></h1>
          <p className="page-hero-desc">Former minor league ballplayer. Harvard psychologist. Managing Partner. College baseball broadcaster. A career spent building teams in both the clubhouse and the corporate world.</p>
        </div>
      </div>

      <div className="host-full-bio">
        <div className="bio-grid">
          <div className="bio-photo reveal">
            <img src="/images/Wicho-Window-HEadshot.jpg" alt="Luis 'Wicho' Hernandez" />
            <div className="bio-photo-overlay"></div>
          </div>
          <div className="bio-text reveal reveal-d1">
            <h3>The Athlete</h3>
            <p>Wicho earned his Bachelor's degree in Business Administration from the <strong>University of Miami (1991 to 1994)</strong>, where he was a four-year letterman as a baseball player. After his college career, he played <strong>minor league baseball for the New York Mets</strong> in 1994.</p>

            <h3>The Scholar</h3>
            <p>He went on to earn a <strong>Master's degree in Industrial Psychology from Harvard University</strong> in 1996, combining his competitive drive with a deep understanding of human performance and organizational behavior.</p>

            <h3>The Business Leader</h3>
            <p>Wicho is currently serving as <strong>Managing Partner of Coastal Wealth</strong> (formerly MassMutual Miami), headquartered in Coral Gables with additional offices in Miami, Fort Lauderdale, and Ohio. Over one hundred employees throughout the various locations call Coastal Wealth the preferred place of employment.</p>
            <p>He is recognized as a leading businessman in the field of financial services, focusing on fulfilling the primary needs of corporations while educating families in the importance of planning for the future.</p>

            <h3>The Community Leader</h3>
            <p>Wicho is a <strong>Founding Director of Apollo Bank</strong> and currently serves on its Board of Directors. He founded <strong>Wicho's On The Green</strong>, a charity golf tournament in its 11th year that has raised money for organizations including the Autism Society Miami-Dade Chapter, MS South Florida, Children's Cancer Caring Center, and Miami's Lighthouse for the Blind.</p>
            <p>In 2013, Baptist Hospital recognized Wicho as the <strong>Philanthropic Volunteer of the Year.</strong></p>

            <div className="involvement-grid">
              <div className="involvement-item"><h4>YPO</h4><p>Young Presidents Organization</p></div>
              <div className="involvement-item"><h4>Apollo Bank</h4><p>Founding Board Director</p></div>
              <div className="involvement-item"><h4>Orange Bowl</h4><p>Committee Member</p></div>
              <div className="involvement-item"><h4>Iron Arrow</h4><p>Honor Society</p></div>
              <div className="involvement-item"><h4>United Way</h4><p>Benefactor</p></div>
              <div className="involvement-item"><h4>NACD Fellow</h4><p>Governance &amp; Cyber Risk</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
