import { ArrowUpRight, ScanFace, Box, BrainCircuit } from 'lucide-react';

const innovations = [
  {
    number: '01',
    title: 'AI / ML',
    description:
      'AI-powered systems that help businesses automate tasks, analyse information and build more intelligent digital experiences.',
    icon: BrainCircuit,
  },
  {
    number: '02',
    title: 'Computer Vision',
    description:
      'Computer vision solutions for recognising faces and detecting suspicious activity from visual information.',
    icon: ScanFace,
  },
  {
    number: '03',
    title: '3D Experiences',
    description:
      '3D animation and visualisation used to bring products, environments and ideas to life through immersive digital experiences.',
    icon: Box,
  },
];

function Innovation() {
  return (
    <section className="innovation-section">

      <div className="section-number">
        07 / INNOVATION
      </div>

      <div className="innovation-main">

        {/* LEFT */}
        <div className="innovation-heading">

          <p className="innovation-eyebrow">
            WHERE TECHNOLOGY GETS EXPERIMENTAL
          </p>

          <h2>
            Building
            <br />
            beyond
            <br />
            <span>the obvious.</span>
          </h2>

          <p className="innovation-description">
            Cling explores AI, computer vision and 3D
            technologies to create practical solutions for
            businesses and digital experiences.
          </p>

          <div className="innovation-mark">
            <span>AI</span>
            <span>3D</span>
            <span>CV</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="innovation-content">

          <div className="innovation-visual">

            <div className="innovation-grid" />

            <div className="innovation-orbit innovation-orbit--one" />
            <div className="innovation-orbit innovation-orbit--two" />
            <div className="innovation-orbit innovation-orbit--three" />

            <div className="innovation-core">
              <span>CLING</span>
              <strong>AI</strong>
            </div>

            <div className="innovation-node innovation-node--one">
              <span>VISION</span>
            </div>

            <div className="innovation-node innovation-node--two">
              <span>3D</span>
            </div>

            <div className="innovation-node innovation-node--three">
              <span>DATA</span>
            </div>

            <div className="innovation-live">
              <span />
              CURRENT TECH FOCUS
            </div>

          </div>

          <div className="innovation-list">

            {innovations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="innovation-item"
                  key={item.number}
                >
                  <div className="innovation-item-number">
                    {item.number}
                  </div>

                  <div className="innovation-item-icon">
                    <Icon
                      size={22}
                      strokeWidth={1.4}
                    />
                  </div>

                  <div className="innovation-item-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  <div className="innovation-item-arrow">
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.4}
                    />
                  </div>
                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Innovation;