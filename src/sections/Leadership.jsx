import { ArrowUpRight } from 'lucide-react';

const leaders = [
  {
    number: '01',
    name: 'Ramesh Singh',
    role: 'CO-FOUNDER & DIRECTOR',
    initials: 'RS',
    accent: '#C8FF3D',
  },
  {
    number: '02',
    name: 'Ashi Gupta',
    role: 'MANAGING DIRECTOR',
    initials: 'AG',
    accent: '#A8E6CF',
  },
  {
    number: '03',
    name: 'Akshay Gupta',
    role: 'CEO',
    initials: 'AK',
    accent: '#D8B4FE',
  },
];

function Leadership() {
  return (
    <section className="leadership-section">

      <div className="section-number">
        08 / LEADERSHIP
      </div>

      <div className="leadership-main">

        <div className="leadership-intro">
          <p className="leadership-eyebrow">
            THE PEOPLE BEHIND THE WORK
          </p>

          <h2>
            People
            <br />
            building
            <br />
            <span>the future.</span>
          </h2>

          <p className="leadership-description">
            A multidisciplinary team bringing together technology,
            design, business thinking and years of experience
            building digital products.
          </p>

          <div className="leadership-note">
            <span>CLING / PEOPLE</span>
            <span>03 LEADERS</span>
          </div>
        </div>

        <div className="leadership-list">

          {leaders.map((leader) => (
            <article
              className="leader-card"
              key={leader.name}
              style={{
                '--leader-accent': leader.accent,
              }}
            >

              <div className="leader-top">
                <span>{leader.number}</span>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.4}
                />
              </div>

              <div className="leader-portrait">

                <div className="leader-grid" />

                <div className="leader-circle">
                  <span>{leader.initials}</span>
                </div>

                <div className="leader-code">
                  CLING / LEADERSHIP
                </div>

                <div className="leader-index">
                  {leader.number}
                </div>
              </div>

              <div className="leader-info">
                <div>
                  <h3>{leader.name}</h3>
                  <p>{leader.role}</p>
                </div>

                <span className="leader-line" />
              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Leadership;