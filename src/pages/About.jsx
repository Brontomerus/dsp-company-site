export default function About() {
  return (
    <section className="page">
      <p className="eyebrow">About us</p>
      <h1>Building a better world for the special needs community in Ohio</h1>
      <p className="lead">
        DSP Care Solutions exists to enable the people who provide care — independent
        providers, direct support professionals, and the agencies that oversee them — to
        work with greater clarity, fairness, and impact.
      </p>

      <div className="content-block">
        <h2>Our mission</h2>
        <p>
          Too often, the people who deliver frontline care are burdened by complex systems,
          opaque processes, and administrative work that pulls them away from the individuals
          they support. We change that by building practical tools, starting with our
          flagship product{' '}
          <a href="https://easyip-ohio.com" target="_blank" rel="noopener noreferrer">
            easyIP Ohio
          </a>
          , and expanding into a broad offering centered on direct support professionals
          across the state.
        </p>
        <p>
          We partner with providers and government agencies to enforce transparency, strengthen
          compliance with existing policies, and create systems where accountability and
          compassion go hand in hand.
        </p>
      </div>

      <div className="content-block">
        <h2>What is a DSP?</h2>
        <p>
          A DSP, or direct support professional, is someone who works with people with
          intellectual or developmental disabilities to live their life to the fullest and
          engage in their communities. DSPs are caregivers, teachers, mentors, confidants,
          and much more to the people that they support. They enable independence, teach
          new skills, and encourage and support full community participation.
        </p>
        <p className="source-note">
          Source:{' '}
          <a
            href="https://dodd.ohio.gov/providers/dsp-resources/dsp_resources"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ohio Department of Developmental Disabilities
          </a>
        </p>
      </div>

      <div className="content-block">
        <h2>What we believe</h2>
        <ul className="value-list">
          <li>
            <strong>Care comes first</strong> — technology should serve providers and
            the individuals they support, not the other way around.
          </li>
          <li>
            <strong>Fairness and equity</strong> — every community in Ohio deserves
            access to tools and systems that work for them, not just some.
          </li>
          <li>
            <strong>Transparency builds trust</strong> — clear compliance processes help
            providers, agencies, and families move forward together.
          </li>
          <li>
            <strong>Innovation with responsibility</strong> — we use AI thoughtfully to
            enhance caregiving and improve systems across all 88 Ohio counties.
          </li>
        </ul>
      </div>

      <div className="content-block">
        <h2>Who we serve</h2>
        <p>
          Our primary focus is independent providers — the dedicated professionals who
          operate independently within Ohio&apos;s developmental disabilities landscape.
          Through easyIP Ohio and our expanding DSP-focused offerings, we aim to support
          the entire ecosystem: direct support professionals, provider agencies, and the
          government partners responsible for oversight and policy.
        </p>
      </div>

      <div className="content-block">
        <h2>Contact</h2>
        <p>
          Interested in learning more about easyIP Ohio or partnering with us? Reach out at{' '}
          <a href="mailto:hello@dspcaresolutions.com">hello@dspcaresolutions.com</a>.
        </p>
      </div>
    </section>
  );
}
