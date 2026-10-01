function Stats() {
  const stats = [
    {
      number: '32M+',
      label: 'LINES OF CODE',
    },
    {
      number: '350+',
      label: 'HAPPY CLIENTS',
    },
    {
      number: '390+',
      label: 'PROJECTS COMPLETED',
    },
    {
      number: '1500+',
      label: 'COFFEES WITH CLIENTS',
    },
  ];

  return (
    <section className="stats-section">

      <div className="section-number">
        01 / THE SCALE
      </div>

      <div className="stats-main">

        <div className="stats-heading">

          <p className="stats-eyebrow">
            MORE THAN NUMBERS.
          </p>

          <h2>
            IDEAS
            <br />
            <span>IN MOTION.</span>
          </h2>

          <p className="stats-description">
            From a first conversation to a product used by real
            people, Cling brings strategy, design and technology
            together to make ideas happen.
          </p>

        </div>

        <div className="stats-feature">

          <div className="stats-feature-number">
            32
            <span>M+</span>
          </div>

          <div className="stats-feature-label">
            LINES OF CODE
          </div>

          <div className="stats-feature-copy">
            Built across years of solving real business problems
            through software, design and technology.
          </div>

        </div>

        <div className="stats-grid">

          {stats.slice(1).map((stat) => (
            <div className="stat" key={stat.label}>

              <span className="stat-number">
                {stat.number}
              </span>

              <span className="stat-label">
                {stat.label}
              </span>

            </div>
          ))}

        </div>

        <div className="stats-story">

          <div className="story-label">
            THE CLING STORY
          </div>

          <div className="story-content">

            <p>
              What started as a technology company has grown into
              a multidisciplinary team working across software,
              business systems, AI, digital experiences and more.
            </p>

            <div className="story-timeline">

              <div>
                <strong>2019</strong>
                <span>FOUNDATION</span>
              </div>

              <div>
                <strong>2020</strong>
                <span>EXPANSION</span>
              </div>

              <div>
                <strong>2021</strong>
                <span>MOMENTUM</span>
              </div>

              <div>
                <strong>2022</strong>
                <span>GROWTH</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;