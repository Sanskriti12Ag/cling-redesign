import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    number: '01',
    name: 'MyFSSAI',
    category: 'MOBILE',
    type: 'Food & Compliance',
    description:
      'A mobile product designed around food-business compliance and easier access to essential services.',
    visual: 'mobile',
  },
  {
    number: '02',
    name: 'Cargo Trip',
    category: 'MOBILE',
    type: 'Logistics',
    description:
      'A logistics platform with separate experiences for customers and drivers, built around delivery and tracking.',
    visual: 'logistics',
  },
  {
    number: '03',
    name: 'Matrix',
    category: 'ERP',
    type: 'Business Management',
    description:
      'A custom ERP system bringing different business operations into one connected platform.',
    visual: 'erp',
  },
  {
    number: '04',
    name: 'AI Chat Bot',
    category: 'AI',
    type: 'Artificial Intelligence',
    description:
      'A conversational AI system exploring how businesses can use intelligent interactions and automation.',
    visual: 'ai',
  },
  {
    number: '05',
    name: 'PhonoLogix',
    category: 'AI',
    type: 'Education & AI',
    description:
      'Interactive learning experiences combining games, recognition technology and AI.',
    visual: 'game',
  },
  {
    number: '06',
    name: 'TaskFlow',
    category: 'WEB',
    type: 'Productivity',
    description:
      'A project management platform for organizing teams, tasks and day-to-day workflows.',
    visual: 'task',
  },
];

const filters = ['ALL', 'MOBILE', 'WEB', 'ERP', 'AI'];

function ProjectVisual({ type }) {
  return (
    <div className={`project-visual project-visual--${type}`}>
      <div className="visual-noise" />

      {type === 'mobile' && (
        <>
          <div className="phone phone--one">
            <div className="phone-screen">
              <span />
              <strong>MYFSSAI</strong>
              <div className="phone-block" />
              <div className="phone-block small" />
              <div className="phone-button" />
            </div>
          </div>

          <div className="phone phone--two">
            <div className="phone-screen">
              <span />
              <strong>EXPLORE</strong>
              <div className="phone-image" />
              <div className="phone-lines" />
            </div>
          </div>
        </>
      )}

      {type === 'logistics' && (
        <>
          <div className="map-grid" />
          <div className="map-route" />
          <div className="map-point map-point--one" />
          <div className="map-point map-point--two" />

          <div className="map-card">
            <small>ACTIVE DELIVERY</small>
            <strong>CARGO TRIP</strong>
            <span>TRACKING • LIVE</span>
          </div>
        </>
      )}

      {type === 'erp' && (
        <div className="erp-window">
          <div className="erp-sidebar">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="erp-main">
            <div className="erp-heading">
              <strong>MATRIX</strong>
              <span>BUSINESS OVERVIEW</span>
            </div>

            <div className="erp-cards">
              <div />
              <div />
              <div />
            </div>

            <div className="erp-chart">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}

      {type === 'ai' && (
        <>
          <div className="ai-circle" />
          <div className="ai-ring ai-ring--one" />
          <div className="ai-ring ai-ring--two" />

          <div className="ai-panel">
            <small>INTELLIGENT SYSTEM</small>
            <strong>AI / CHAT</strong>

            <div className="ai-message">
              <span />
              <span />
              <span />
            </div>
          </div>
        </>
      )}

      {type === 'game' && (
        <>
          <div className="game-grid" />

          <div className="game-object">
            <div className="game-face">
              <span />
              <span />
            </div>
          </div>

          <div className="game-label">
            AI BODY
            <br />
            RECOGNITION
          </div>
        </>
      )}

      {type === 'task' && (
        <div className="task-window">
          <div className="task-top">
            <strong>TASKFLOW</strong>
            <span>+ NEW TASK</span>
          </div>

          <div className="task-columns">
            <div>
              <small>TO DO</small>
              <article />
              <article />
            </div>

            <div>
              <small>IN PROGRESS</small>
              <article />
              <article />
            </div>

            <div>
              <small>DONE</small>
              <article />
              <article />
            </div>
          </div>
        </div>
      )}

      <div className="visual-caption">
        CLING / {type.toUpperCase()}
      </div>
    </div>
  );
}

function Work() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filteredProjects =
    activeFilter === 'ALL'
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section className="work-section">
      <div className="section-number">
        03 / WORK
      </div>

      <div className="work-main">

        <div className="work-intro">
          <p className="work-eyebrow">
            A FEW THINGS WE'VE BUILT
          </p>

          <h2>
            From idea
            <br />
            to
            <br />
            <span>something real.</span>
          </h2>

          <p className="work-description">
            Cling works across mobile apps, web platforms,
            business systems and AI. Here are a few projects
            that show the range.
          </p>

          <div className="work-filters">
            {filters.map((filter) => (
              <button
                key={filter}
                className={
                  activeFilter === filter ? 'active' : ''
                }
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="work-filter-status">
            <span>VIEWING</span>

            <strong>
              {String(filteredProjects.length).padStart(2, '0')}
            </strong>

            <span>
              {filteredProjects.length === 1
                ? 'PROJECT'
                : 'PROJECTS'}
            </span>
          </div>
        </div>

        <div className="work-list">
          {filteredProjects.map((project) => (
            <article
              className="work-project"
              key={project.number}
            >
              <div className="work-project-meta">
                <span>{project.number}</span>
                <span>{project.category}</span>
              </div>

              <div className="work-project-heading">
                <div>
                  <p>{project.type}</p>

                  <h3>{project.name}</h3>
                </div>

                <div className="work-project-arrow">
                  <ArrowUpRight
                    size={25}
                    strokeWidth={1.4}
                  />
                </div>
              </div>

              <p className="work-project-description">
                {project.description}
              </p>

              <ProjectVisual type={project.visual} />
            </article>
          ))}

          {filteredProjects.length === 0 && (
            <div className="work-empty">
              Nothing here yet.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export default Work;