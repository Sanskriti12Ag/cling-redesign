import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  BarChart3,
  Check,
  ClipboardList,
  FileText,
  House,
  Mail,
  Search,
  Users,
} from 'lucide-react';

const products = [
  {
    name: 'Rusho',
    category: 'HOME SERVICES',
    number: '01',
    description:
      'An on-demand home services platform connecting customers with verified professionals for cleaning, home help, errands and more.',
    features: ['Fast booking', 'Verified staff', 'Live tracking'],
    icon: House,
    visual: 'rusho',
  },
  {
    name: 'ArvionPulse',
    category: 'LEAD INTELLIGENCE',
    number: '02',
    description:
      'A lead-generation platform that brings business discovery, data enrichment and analytics together across multiple sources.',
    features: ['Multi-source search', 'Data enrichment', 'Analytics'],
    icon: Search,
    visual: 'pulse',
  },
  {
    name: 'Task Flow',
    category: 'PRODUCTIVITY',
    number: '03',
    description:
      'A task and project management platform designed to help teams organize work, monitor progress and collaborate.',
    features: ['Team management', 'Projects', 'Task tracking'],
    icon: ClipboardList,
    visual: 'task',
  },
  {
    name: 'Cling Sales',
    category: 'SALES PLATFORM',
    number: '04',
    description:
      'A sales portal for managing leads, follow-ups, assignments, task management and real-time lead tracking.',
    features: ['Lead management', 'Follow-ups', 'Live tracking'],
    icon: Users,
    visual: 'sales',
  },
  {
    name: 'Cling Invoice',
    category: 'FINANCE WORKFLOW',
    number: '05',
    description:
      'An invoice and reimbursement workflow connecting submission, manager approval, history and reporting.',
    features: ['Invoice creation', 'Approvals', 'Reports'],
    icon: FileText,
    visual: 'invoice',
  },
  {
    name: 'Cling Income',
    category: 'FINANCIAL ANALYTICS',
    number: '06',
    description:
      'A financial tracking portal for monitoring income, expenses, invoices and business profitability.',
    features: ['Income tracking', 'Expenses', 'Profit'],
    icon: BarChart3,
    visual: 'income',
  },
  {
    name: 'Cling Emails',
    category: 'EMAIL AUTOMATION',
    number: '07',
    description:
      'An automated mailing platform for scheduling campaigns, tracking engagement and managing outreach workflows.',
    features: ['Scheduling', 'Open-rate tracking', 'Templates'],
    icon: Mail,
    visual: 'emails',
  },
];

function ProductPreview({ product }) {
  const Icon = product.icon;

  return (
    <div className={`product-preview product-preview--${product.visual}`}>
      <div className="preview-topbar">
        <div className="preview-brand">
          <span className="preview-dot" />
          <strong>{product.name.toUpperCase()}</strong>
        </div>

        <span className="preview-status">LIVE PRODUCT</span>
      </div>

      <div className="preview-body">
        <div className="preview-sidebar">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="preview-content">
          <div className="preview-heading">
            <div>
              <small>PRODUCT OVERVIEW</small>
              <h3>{product.name}</h3>
            </div>

            <Icon size={22} strokeWidth={1.5} />
          </div>

          <div className="preview-metrics">
            <div>
              <small>ACTIVE</small>
              <strong>24</strong>
            </div>
            <div>
              <small>PROGRESS</small>
              <strong>82%</strong>
            </div>
            <div>
              <small>STATUS</small>
              <strong>ON</strong>
            </div>
          </div>

          <div className="preview-chart">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <div className="preview-table">
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>

      <div className="preview-caption">
        CLING / {product.category}
      </div>
    </div>
  );
}

function Products() {
  const [selected, setSelected] = useState(0);
  const product = products[selected];

  return (
    <section className="products-section">
      <div className="section-number products-section-number">
        04 / PRODUCTS
      </div>

      <div className="products-main">
        <div className="products-intro">
          <p className="products-eyebrow">
            DIGITAL PRODUCTS. REAL USE CASES.
          </p>

          <div className="products-count">
            <strong>07</strong>
            <span>PRODUCTS<br />IN THE CLING ECOSYSTEM</span>
          </div>

          <h2>
            We don't<br />
            just build<br />
            <span>for clients.</span>
          </h2>

          <p className="products-description">
            Cling's product ecosystem spans home services,
            lead intelligence, productivity, sales, finance
            and communication.
          </p>

          <div className="products-index">
            {products.map((item, index) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.name}
                  className={selected === index ? 'active' : ''}
                  onClick={() => setSelected(index)}
                >
                  <span className="product-index-number">
                    {item.number}
                  </span>

                  <span className="product-index-name">
                    <Icon size={15} strokeWidth={1.5} />
                    {item.name}
                  </span>

                  <ArrowUpRight size={15} strokeWidth={1.5} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="products-stage">
          <AnimatePresence mode="wait">
            <motion.div
              key={product.name}
              className="product-selected"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.35 }}
            >
              <div className="product-selected-meta">
                <span>{product.number} / 07</span>
                <span>{product.category}</span>
              </div>

              <ProductPreview product={product} />

              <div className="product-selected-info">
                <div>
                  <span>SELECTED PRODUCT</span>
                  <h3>{product.name}</h3>
                </div>

                <div className="product-selected-copy">
                  <p>{product.description}</p>

                  <div className="product-features">
                    {product.features.map((feature) => (
                      <span key={feature}>
                        <Check size={12} strokeWidth={2} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Products;