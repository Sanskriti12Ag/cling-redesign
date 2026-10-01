import {
  ArrowUpRight,
  Globe2,
  Target,
  Eye,
  Users,
} from 'lucide-react';

const journey = [
  {
    year: '2019',
    title: 'FOUNDATION',
    text: 'Building the foundation and establishing Cling’s identity.',
  },
  {
    year: '2020',
    title: 'EXPANSION',
    text: 'Diversifying services while staying focused on quality.',
  },
  {
    year: '2021',
    title: 'MOMENTUM',
    text: 'Growing the client base and embracing new technologies.',
  },
  {
    year: '2022',
    title: 'GROWTH',
    text: 'Taking on larger projects and delivering greater value.',
  },
];

function About() {
  return (
    <section className="about-section">
      <div className="section-number">
        06 / ABOUT CLING
      </div>

      <div className="about-main">

        <div className="about-heading">
          <p className="about-eyebrow">
            MORE THAN JUST SOFTWARE.
          </p>

          <h2>
            Ideas,
            <br />
            people &
            <br />
            <span>technology.</span>
          </h2>

          <p className="about-intro">
            Cling is an IT solutions company working across
            websites, applications, business systems, digital
            marketing and emerging technologies.
          </p>
        </div>

        <div className="about-story">
          <div className="about-story-top">
            <span>OUR STORY</span>
            <ArrowUpRight
              size={20}
              strokeWidth={1.4}
            />
          </div>

          <p>
            What started with a focus on technology has grown
            into a multidisciplinary team working across
            products, platforms, support, innovation and ideas.
            Cling works with businesses to understand both the
            problem and the industry before building a solution.
          </p>

          <div className="about-story-note">
            MAKING YOUR IDEAS HAPPEN.
          </div>
        </div>

        <div className="about-principles">

          <article className="about-principle">
            <div className="about-principle-icon">
              <Eye
                size={22}
                strokeWidth={1.4}
              />
            </div>

            <div>
              <span>01 / VISION</span>

              <h3>
                Build technology
                <br />
                that helps businesses grow.
              </h3>

              <p>
                Cling focuses on delivering web, development
                and marketing solutions while continuously
                improving quality, service and technology.
              </p>
            </div>
          </article>

          <article className="about-principle">
            <div className="about-principle-icon">
              <Target
                size={22}
                strokeWidth={1.4}
              />
            </div>

            <div>
              <span>02 / MISSION</span>

              <h3>
                Keep learning.
                <br />
                Keep adapting.
              </h3>

              <p>
                Investing in people, processes and new
                technologies helps Cling respond to changing
                markets and evolving customer needs.
              </p>
            </div>
          </article>

        </div>

        <div className="about-reach">

          <div className="about-reach-heading">
            <div className="about-reach-icon">
              <Globe2
                size={25}
                strokeWidth={1.3}
              />
            </div>

            <div>
              <span>03 / REACH</span>
              <h3>Built for different markets.</h3>
            </div>
          </div>

          <div className="about-reach-content">
            <p>
              Cling works with clients across different
              markets and industries, combining local
              understanding with technology built for
              broader audiences.
            </p>

            <div className="about-reach-tags">
              <span>INDIA</span>
              <span>GLOBAL CLIENTS</span>
              <span>DIVERSE INDUSTRIES</span>
            </div>
          </div>

        </div>

        <div className="about-journey">

          <div className="about-journey-heading">
            <span>THE JOURNEY</span>

            <p>
              A few milestones from Cling's early years.
            </p>
          </div>

          <div className="about-timeline">
            {journey.map((item) => (
              <div
                className="about-timeline-item"
                key={item.year}
              >
                <strong>{item.year}</strong>

                <div>
                  <span>{item.title}</span>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        <div className="about-client-note">
          <Users
            size={20}
            strokeWidth={1.4}
          />

          <span>
            350+ CLIENTS · 390+ PROJECTS · MANY DIFFERENT IDEAS
          </span>
        </div>

      </div>
    </section>
  );
}

export default About;