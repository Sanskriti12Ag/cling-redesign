import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'App Development',
    category: 'PRODUCT ENGINEERING',
    description:
      'Custom mobile applications designed and engineered around real users, business goals and scalable technology.',
  },
  {
    number: '02',
    title: 'Custom Development',
    category: 'SOFTWARE',
    description:
      'Purpose-built web applications and digital platforms developed from the ground up instead of relying on pre-designed templates.',
  },
  {
    number: '03',
    title: 'IT Teams',
    category: 'ENGINEERING PARTNERSHIP',
    description:
      'Technology expertise and dedicated development support for entrepreneurs building and growing their next idea.',
  },
  {
    number: '04',
    title: 'ERP Systems',
    category: 'BUSINESS TECHNOLOGY',
    description:
      'Connected business systems that bring operations, teams and information together across an organization.',
  },
  {
    number: '05',
    title: 'Website Design',
    category: 'DIGITAL EXPERIENCE',
    description:
      'Purposeful websites designed around the brand, audience and business instead of simply being another URL on the web.',
  },
  {
    number: '06',
    title: 'Digital Marketing',
    category: 'GROWTH',
    description:
      'Digital strategies designed to help businesses promote their products, reach the right audience and grow online.',
  },
  {
    number: '07',
    title: 'Social Media',
    category: 'BRAND & COMMUNITY',
    description:
      'Social-first strategies that help brands connect with audiences across the platforms where they spend their time.',
  },
  {
    number: '08',
    title: 'SEO & Google Ads',
    category: 'PERFORMANCE',
    description:
      'Search visibility and paid acquisition strategies designed to connect businesses with people actively looking for them.',
  },
  {
    number: '09',
    title: 'Political Campaigns',
    category: 'CAMPAIGN TECHNOLOGY',
    description:
      'Digital campaign solutions spanning technology, communication and audience engagement.',
  },
  {
    number: '10',
    title: '3D Animation',
    category: 'VISUAL INNOVATION',
    description:
      '3D visual experiences ranging from product visualisation and architectural rendering to character and promotional animation.',
  },
  {
    number: '11',
    title: 'AI / ML',
    category: 'INTELLIGENT SYSTEMS',
    description:
      'Intelligent systems using AI, machine learning and language technologies to automate, understand and improve experiences.',
  },
  {
    number: '12',
    title: 'Career Counselling',
    category: 'EDUCATION',
    description:
      'Technology-focused career guidance and development support for students and professionals.',
  },
];

function Services() {
  return (
    <section className="services-section">

      <div className="section-number">
        02 / CAPABILITIES
      </div>

      <div className="services-main">

        <div className="services-heading">

          <p className="services-eyebrow">
            ONE TEAM. MANY POSSIBILITIES.
          </p>

          <div className="services-count">
            <span>12</span>
            <small>CAPABILITIES</small>
          </div>

          <h2>
            From
            <br />
            <span>idea</span> to
            <br />
            impact.
          </h2>

          <p className="services-description">
            Cling brings technology, design, growth and
            innovation together under one roof — helping
            businesses move from an idea to something real.
          </p>

        </div>

        <div className="services-list">

          {services.map((service) => (
            <article
              className="service-item"
              key={service.number}
            >

              <div className="service-number">
                {service.number}
              </div>

              <div className="service-content">

                <div className="service-top">

                  <div>
                    <span className="service-category">
                      {service.category}
                    </span>

                    <h3>
                      {service.title}
                    </h3>
                  </div>

                  <div className="service-arrow">
                    <ArrowUpRight
                      size={21}
                      strokeWidth={1.5}
                    />
                  </div>

                </div>

                <p>
                  {service.description}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;