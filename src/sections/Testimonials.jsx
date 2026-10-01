import { ArrowUpRight, Quote } from 'lucide-react';

const proof = [
  {
    number: '01',
    value: '350+',
    label: 'HAPPY CLIENTS',
    text: 'A growing client base across different industries, business models and digital products.',
  },
  {
    number: '02',
    value: '390+',
    label: 'PROJECTS',
    text: 'Mobile apps, custom web platforms, ERPs, AI solutions and business systems.',
  },
  {
    number: '03',
    value: '32M+',
    label: 'LINES OF CODE',
    text: 'A simple measure of the scale of technology built across the Cling ecosystem.',
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">

      <div className="section-number">
        09 / TRUST
      </div>

      <div className="testimonials-main">

        <div className="testimonials-intro">

          <p className="testimonials-eyebrow">
            YOUR VOICE. OUR PRIDE.
          </p>

          <h2>
            Built with
            <br />
            people,
            <br />
            <span>not just code.</span>
          </h2>

          <p className="testimonials-description">
            Every project starts with understanding the people,
            business and problem behind the idea. The numbers
            are the result of that process.
          </p>

          <div className="quote-mark">
            <Quote size={26} strokeWidth={1.2} />
          </div>

        </div>


        <div className="testimonials-content">

          <div className="testimonial-statement">

            <div className="testimonial-statement-top">
              <span>CLING / CLIENT EXPERIENCE</span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.3}
              />
            </div>

            <blockquote>
              “Making your idea happen”
            </blockquote>

            <p>
              From first conversations to finished products,
              Cling works with businesses and entrepreneurs
              to turn ideas into technology that can actually
              be used.
            </p>

          </div>


          <div className="proof-grid">

            {proof.map((item) => (
              <article
                className="proof-card"
                key={item.number}
              >

                <div className="proof-card-top">
                  <span>{item.number}</span>

                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.3}
                  />
                </div>

                <strong>{item.value}</strong>

                <span className="proof-label">
                  {item.label}
                </span>

                <p>{item.text}</p>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;