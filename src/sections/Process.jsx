import { ArrowDownRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'DISCOVER',
    description:
      'We understand the problem, the people and the opportunity before writing a single line of code.',
  },
  {
    number: '02',
    title: 'DESIGN',
    description:
      'We turn ideas into clear experiences, interfaces and systems that are simple to understand.',
  },
  {
    number: '03',
    title: 'BUILD',
    description:
      'Our engineers turn the design into reliable, scalable digital products built for the real world.',
  },
  {
    number: '04',
    title: 'SCALE',
    description:
      'Launch is only the beginning. We improve, optimize and evolve products as businesses grow.',
  },
];

function Process() {
  return (
    <section className="process-section">

      <div className="section-number">
        04 / PROCESS
      </div>

      <div className="process-main">

        <div className="process-intro">
          <p className="process-eyebrow">
            FROM IDEA TO IMPACT.
          </p>

          <h2>
            How we
            <br />
            <span>make it happen.</span>
          </h2>

          <p className="process-description">
            Great digital products are not built in a single
            step. We move from understanding to execution,
            keeping strategy, design and technology connected.
          </p>
        </div>

        <div className="process-list">

          {steps.map((step, index) => (
            <div className="process-item" key={step.number}>

              <div className="process-number">
                {step.number}
              </div>

              <div className="process-line">
                <span />
              </div>

              <div className="process-content">

                <div className="process-title-row">
                  <h3>{step.title}</h3>

                  <ArrowDownRight
                    size={28}
                    strokeWidth={1.4}
                    className="process-icon"
                  />
                </div>

                <p>
                  {step.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;