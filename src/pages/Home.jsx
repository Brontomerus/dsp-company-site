import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="page">
      <p className="eyebrow">Welcome</p>
      <h1>Data solutions that scale with your business</h1>
      <p className="lead">
        DSP Company helps teams turn raw data into reliable insights with modern analytics,
        engineering, and cloud infrastructure.
      </p>

      <div className="card-grid">
        <article className="card">
          <h2>Analytics</h2>
          <p>
            Dashboards, reporting pipelines, and self-serve metrics so stakeholders can
            make decisions with confidence.
          </p>
        </article>
        <article className="card">
          <h2>Engineering</h2>
          <p>
            Robust data pipelines, warehouse modeling, and automation built for
            maintainability and growth.
          </p>
        </article>
        <article className="card">
          <h2>Strategy</h2>
          <p>
            Practical roadmaps that align tooling, team skills, and business goals
            without over-engineering.
          </p>
        </article>
      </div>

      <p className="cta-text">
        Want to learn more about who we are and how we work?{' '}
        <Link to="/about">Visit the About page</Link>.
      </p>
    </section>
  );
}
