import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className="page">
      <p className="eyebrow">DSP Care Solutions</p>
      <h1>So providers can focus on what matters most: caring for people</h1>
      <p className="lead">
        We build tools and services that help independent providers and direct support
        professionals across Ohio spend less time on paperwork and more time supporting
        individuals with intellectual and developmental disabilities to live full, meaningful lives.
      </p>

      <div className="card-grid">
        <article className="card">
          <h2>Empowering providers</h2>
          <p>
            Independent providers carry enormous responsibility. We remove friction from
            daily operations so they can do what they do best — provide compassionate,
            person-centered care.
          </p>
        </article>
        <article className="card">
          <h2>Supporting DSPs</h2>
          <p>
            Direct support professionals are caregivers, teachers, mentors, and advocates.
            Our growing offering is built around the people who make community inclusion
            possible every day.
          </p>
        </article>
        <article className="card">
          <h2>Transparency &amp; compliance</h2>
          <p>
            We help providers and government agencies meet policy requirements with clarity,
            fostering fairness and equity in the communities we call home.
          </p>
        </article>
      </div>

      <article className="content-block product-highlight">
        <p className="eyebrow">Flagship product</p>
        <h2>easyIP Ohio</h2>
        <p>
          Our flagship platform,{' '}
          <a href="https://easyip-ohio.com" target="_blank" rel="noopener noreferrer">
            easyIP Ohio
          </a>
          , is purpose-built for independent providers navigating Ohio&apos;s developmental
          disabilities system — simplifying workflows so care stays at the center.
        </p>
      </article>

      <div className="card-grid">
        <article className="card">
          <h2>Innovation with purpose</h2>
          <p>
            We leverage thoughtful, responsible AI to improve the caregiving experience
            and strengthen the systems that support providers — not replace the human
            connection at the heart of this work.
          </p>
        </article>
        <article className="card">
          <h2>Across all 88 counties</h2>
          <p>
            Ohio&apos;s special needs community is statewide. We are building solutions
            designed to reach every county, every provider, and every individual who
            deserves equitable access to quality support.
          </p>
        </article>
      </div>

      <p className="cta-text">
        Learn more about our mission, our values, and the role of direct support professionals.{' '}
        <Link to="/about">Visit the About page</Link>.
      </p>
    </section>
  );
}
