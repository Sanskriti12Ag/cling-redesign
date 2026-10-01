import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const offices = [
  {
    label: 'NOIDA / HEAD OFFICE',
    address: (
      <>
        130, 131, 132, 2nd Floor,
        <br />
        Wave Galleria, Wave City,
        <br />
        NH-24, Noida, UP — 201015
      </>
    ),
  },
  {
    label: 'PUNE OFFICE',
    address: (
      <>
        Pune,
        <br />
        Maharashtra, India
      </>
    ),
  },
  {
    label: 'MORADABAD OFFICE',
    address: (
      <>
        Moradabad,
        <br />
        Uttar Pradesh, India
      </>
    ),
  },
];

function Contact() {
  return (
    <section className="contact-section">

      <div className="section-number contact-section-number">
        10 / CONTACT
      </div>

      <div className="contact-main">

        {/* LEFT */}

        <div className="contact-heading">

          <p className="contact-eyebrow">
            HAVE AN IDEA?
          </p>

          <h2>
            Let's make
            <br />
            something
            <br />
            <span>happen.</span>
          </h2>

          <p className="contact-description">
            Tell us what you're building, what you're trying
            to solve, or simply where you want to go next.
          </p>

          <a
            className="contact-email"
            href="mailto:info@clinginfotech.com"
          >
            <span>info@clinginfotech.com</span>

            <ArrowUpRight
              size={19}
              strokeWidth={1.4}
            />
          </a>

        </div>


        {/* RIGHT */}

        <div className="contact-content">

          <form className="contact-form">

            <div className="contact-form-heading">
              <span>START A CONVERSATION</span>
              <span>01 — 04</span>
            </div>

            <label>
              <span>01 / FULL NAME</span>

              <input
                type="text"
                placeholder="Your name"
              />
            </label>

            <label>
              <span>02 / EMAIL</span>

              <input
                type="email"
                placeholder="you@company.com"
              />
            </label>

            <label>
              <span>03 / COMPANY</span>

              <input
                type="text"
                placeholder="Company name"
              />
            </label>

            <label>
              <span>04 / MESSAGE</span>

              <textarea
                rows="4"
                placeholder="Tell us about your project..."
              />
            </label>

            <button type="button">
              SEND MESSAGE

              <ArrowUpRight
                size={18}
                strokeWidth={1.4}
              />
            </button>

          </form>


          {/* CONTACT INFO */}

          <div className="contact-details">

            {/* OFFICES */}

            <div className="contact-offices">

              <div className="contact-detail-heading">
                <MapPin
                  size={18}
                  strokeWidth={1.4}
                />

                <span>OUR OFFICES</span>
              </div>

              <div className="contact-office-list">

                {offices.map((office) => (
                  <div
                    className="contact-office"
                    key={office.label}
                  >
                    <span>{office.label}</span>

                    <p>
                      {office.address}
                    </p>
                  </div>
                ))}

              </div>

            </div>


            {/* PHONE */}

            <div className="contact-detail">

              <div className="contact-detail-icon">
                <Phone
                  size={18}
                  strokeWidth={1.4}
                />
              </div>

              <div>
                <span>PHONE</span>

                <a href="tel:+918264469132">
                  +91 8264469132
                </a>
              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-detail">

              <div className="contact-detail-icon">
                <Mail
                  size={18}
                  strokeWidth={1.4}
                />
              </div>

              <div>
                <span>EMAIL</span>

                <a href="mailto:info@clinginfotech.com">
                  info@clinginfotech.com
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;