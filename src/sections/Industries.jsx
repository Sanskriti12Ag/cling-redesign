import { useState } from 'react';
import {
  ArrowUpRight,
  Building2,
  Car,
  GraduationCap,
  HeartPulse,
  Landmark,
  Plane,
  ShoppingBag,
  Utensils,
  Zap,
  Shirt,
  Sparkles,
  Users,
  Home,
  Hotel,
  HardHat,
  TrendingUp,
} from 'lucide-react';

const industries = [
  {
    name: 'Healthcare & Wellness',
    short: 'HEALTH',
    description:
      'Smart solutions for patient care, telemedicine, wellness tracking and connected healthcare experiences.',
    icon: HeartPulse,
    code: '01',
    color: '#A8E6CF',
  },
  {
    name: 'Manufacturing',
    short: 'MANUFACTURING',
    description:
      'ERP, automation and process-driven software built around modern manufacturing operations.',
    icon: Building2,
    code: '02',
    color: '#A8C7FA',
  },
  {
    name: 'Banking, Finance & Insurance',
    short: 'FINTECH',
    description:
      'Secure platforms for financial services, smarter transactions and digital business workflows.',
    icon: Landmark,
    code: '03',
    color: '#D8B4FE',
  },
  {
    name: 'Retail & Logistics',
    short: 'COMMERCE',
    description:
      'eCommerce, supply-chain and logistics technology designed around movement and scale.',
    icon: ShoppingBag,
    code: '04',
    color: '#FFD59A',
  },
  {
    name: 'Apparel',
    short: 'FASHION',
    description:
      'Digital retail experiences connecting fashion brands with customers through modern technology.',
    icon: Shirt,
    code: '05',
    color: '#F7B7D2',
  },
  {
    name: 'Astrology & Spiritual',
    short: 'SPIRITUAL',
    description:
      'Engaging digital experiences for astrology, guidance, communities and spiritual services.',
    icon: Sparkles,
    code: '06',
    color: '#CDB4DB',
  },
  {
    name: 'Tourism',
    short: 'TRAVEL',
    description:
      'Smart booking and tourism solutions that make planning and travelling simpler.',
    icon: Plane,
    code: '07',
    color: '#9FE7F5',
  },
  {
    name: 'Social Networking',
    short: 'SOCIAL',
    description:
      'Custom platforms for communities, creators, businesses and meaningful digital connections.',
    icon: Users,
    code: '08',
    color: '#B8F2C8',
  },
  {
    name: 'Solar & Energy',
    short: 'ENERGY',
    description:
      'Technology for sustainable energy and IoT-powered solar management.',
    icon: Zap,
    code: '09',
    color: '#D7F36B',
  },
  {
    name: 'E-Learning',
    short: 'EDTECH',
    description:
      'Interactive learning products that make knowledge more accessible and engaging.',
    icon: GraduationCap,
    code: '10',
    color: '#E7C6FF',
  },
  {
    name: 'Property & Real Estate',
    short: 'PROPERTY',
    description:
      'Digital property management and real-estate platforms for smoother transactions.',
    icon: Home,
    code: '11',
    color: '#BFD8FF',
  },
  {
    name: 'Food & Restaurants',
    short: 'FOOD TECH',
    description:
      'Digital menus, ordering and delivery experiences for modern food businesses.',
    icon: Utensils,
    code: '12',
    color: '#FFB4A2',
  },
  {
    name: 'Taxi & Transport',
    short: 'MOBILITY',
    description:
      'Ride-hailing, rentals and fleet-management experiences built for modern mobility.',
    icon: Car,
    code: '13',
    color: '#B9D8FF',
  },
  {
    name: 'Hospitality',
    short: 'HOSPITALITY',
    description:
      'Hotel booking and hospitality management solutions for seamless guest experiences.',
    icon: Hotel,
    code: '14',
    color: '#F3C4A8',
  },
  {
    name: 'Construction & Infrastructure',
    short: 'CONSTRUCTION',
    description:
      'Technology for construction, project tracking and infrastructure management.',
    icon: HardHat,
    code: '15',
    color: '#D9D9D0',
  },
  {
    name: 'Trading & Investment',
    short: 'INVESTMENT',
    description:
      'Next-generation trading and investment platforms for faster financial decisions.',
    icon: TrendingUp,
    code: '16',
    color: '#BFEF8F',
  },
];

function Industries() {
  const [active, setActive] = useState(0);

  const industry = industries[active];
  const Icon = industry.icon;

  return (
    <section className="industries-section">
      <div className="section-number industries-section-number">
        05 / INDUSTRIES
      </div>

      <div className="industries-main">

        {/* LEFT SIDE */}
        <div className="industries-copy">
          <p className="industries-eyebrow">
            DIFFERENT PROBLEMS. DIFFERENT DOMAINS.
          </p>

          <h2>
            Technology
            <br />
            without a
            <br />
            <span>single industry.</span>
          </h2>

          <p className="industries-description">
            Cling builds technology across industries — adapting
            the product to the problem instead of forcing every
            business into the same solution.
          </p>

          <div className="industry-counter">
            <strong>{industry.code}</strong>
            <span>/ 16</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="industries-experience">

          {/* LARGE ACTIVE DISPLAY */}
          <div
            className="industry-display"
            style={{
              '--industry-color': industry.color,
            }}
          >
            <div className="industry-display-grid" />

            <div className="industry-display-circle industry-display-circle--one" />
            <div className="industry-display-circle industry-display-circle--two" />

            <div className="industry-display-icon">
              <Icon size={52} strokeWidth={1.2} />
            </div>

            <div className="industry-display-code">
              CLING / {industry.short}
            </div>

            <div className="industry-display-number">
              {industry.code}
            </div>

            <div className="industry-display-name">
              {industry.name}
            </div>

            <div className="industry-display-description">
              {industry.description}
            </div>

            <div className="industry-display-arrow">
              <ArrowUpRight size={22} strokeWidth={1.4} />
            </div>
          </div>

          {/* INDUSTRY LIST */}
          <div className="industries-list">
            {industries.map((item, index) => {
              const ItemIcon = item.icon;

              return (
                <button
                  key={item.name}
                  className={active === index ? 'active' : ''}
                  onMouseEnter={() => setActive(index)}
                  onClick={() => setActive(index)}
                  style={{
                    '--item-color': item.color,
                  }}
                >
                  <span>{item.code}</span>

                  <div>
                    <ItemIcon
                      size={15}
                      strokeWidth={1.5}
                    />

                    <strong>{item.name}</strong>
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.4}
                  />
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Industries;