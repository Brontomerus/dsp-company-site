export default function About() {
  return (
    <section className="page">
      <p className="eyebrow">About us</p>
      <h1>Built on clarity, craft, and collaboration</h1>
      <p className="lead">
        DSP Company is a small team focused on helping organizations get more value
        from their data without unnecessary complexity.
      </p>

      <div className="content-block">
        <h2>Our mission</h2>
        <p>
          We believe data work should be transparent, reproducible, and aligned with
          real business outcomes. We partner with clients to design systems that teams
          can own long after a project ends.
        </p>
      </div>

      <div className="content-block">
        <h2>What we value</h2>
        <ul className="value-list">
          <li>
            <strong>Simplicity</strong> — prefer straightforward solutions over flashy ones.
          </li>
          <li>
            <strong>Quality</strong> — test pipelines, document decisions, and ship reliably.
          </li>
          <li>
            <strong>Partnership</strong> — work alongside your team, not in a black box.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Contact</h2>
        <p>
          Reach us at{' '}
          <a href="mailto:hello@example.com">hello@example.com</a>
          {' '}to discuss a project or ask a question.
        </p>
      </div>
    </section>
  );
}
