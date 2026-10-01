import HeroVisual from '../components/HeroVisual';

function Hero() {
  return (
    <section className="hero">

      <div className="hero__top">
        <span>CLING / DIGITAL ENGINEERING</span>
        <span>EST. 2010</span>
      </div>

      <div className="hero__content">

        <div className="hero__copy">

          <p className="hero__eyebrow">
            TECHNOLOGY · DESIGN · INNOVATION
          </p>

          <h1>
            WE BUILD
            <br />
            <span>WHAT'S NEXT.</span>
          </h1>

          <div className="hero__bottom">

            <p>
              Digital products, intelligent systems and experiences
              designed to move businesses forward.
            </p>

            <div className="hero__actions">
              <button>
                START A PROJECT ↗
              </button>

              <button>
                EXPLORE WORK ↓
              </button>
            </div>

          </div>

        </div>

        <HeroVisual />

      </div>

    </section>
  );
}

export default Hero;