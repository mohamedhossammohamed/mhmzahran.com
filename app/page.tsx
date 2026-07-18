import Nav from './components/Nav';
import Background from './components/Background';
import Reveal from './components/Reveal';
import HeroPhoto from './components/HeroPhoto';

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
      <Reveal />
      <main>
        <section id="about" className="hero">
          <div className="hero-text">
            <h1 data-reveal style={{ '--i': 0 } as React.CSSProperties}>
              Mohamed Hossam Zahran
            </h1>
            <p className="role" data-reveal style={{ '--i': 1 } as React.CSSProperties}>
              Medical student · Technical director · Researcher
            </p>
            <p className="hero-body" data-reveal style={{ '--i': 3 } as React.CSSProperties}>
              I spend my time between medicine, startups, and research — building
              things, studying how systems behave, and trying to connect the two.
              I&apos;m particularly interested in personal knowledge management
              systems and how the tools we use shape the way we think. When
              I&apos;m not studying or shipping, I&apos;m usually refining a coffee
              recipe or tuning my note-taking setup — chasing work that feels
              deliberate and a vibe good.
            </p>
          </div>
          <HeroPhoto />
        </section>

        <section id="startups">
          <header className="section-head" data-reveal style={{ '--i': 0 } as React.CSSProperties}>
            <p className="kicker"><span className="num">01</span>Startups</p>
            <h2>What I&apos;m building</h2>
            <span className="rule" aria-hidden="true" />
          </header>
          <div data-reveal style={{ '--i': 1 } as React.CSSProperties}>
            <article className="card">
              <h3>Dietin</h3>
              <p className="meta">Co-founder</p>
              <p className="desc">
                A nutrition platform making personalized diet planning simple
                and accessible.
              </p>
              <a
                className="ref"
                href="https://www.dietin.pro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                dietin.pro <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </section>

        <section id="research">
          <header className="section-head" data-reveal style={{ '--i': 0 } as React.CSSProperties}>
            <p className="kicker"><span className="num">02</span>Research</p>
            <h2>What I&apos;m studying</h2>
            <span className="rule" aria-hidden="true" />
          </header>
          <div data-reveal style={{ '--i': 1 } as React.CSSProperties}>
            <article className="card">
              <h3>CW-Node</h3>
              <p className="meta">Research project</p>
              <p className="desc">
                An investigation into where bits-per-character compression
                metrics and generation quality diverge.
              </p>
              <a
                className="ref"
                href="https://mohamedhossammohamed.github.io/cw-node-research/"
                target="_blank"
                rel="noopener noreferrer"
              >
                cw-node-research <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </article>
          </div>
        </section>

        <section id="leadership">
          <header className="section-head" data-reveal style={{ '--i': 0 } as React.CSSProperties}>
            <p className="kicker"><span className="num">03</span>Leadership &amp; Community</p>
            <h2>Where I lead</h2>
            <span className="rule" aria-hidden="true" />
          </header>
          <div data-reveal style={{ '--i': 1 } as React.CSSProperties}>
            <article className="card">
              <h3>University Debate Team</h3>
              <p className="meta">Head of HR and Relations Management</p>
              <p className="desc">
                Leading recruitment, member development, and external relations
                for the team.
              </p>
            </article>
          </div>
        </section>

        <section id="interests">
          <header className="section-head" data-reveal style={{ '--i': 0 } as React.CSSProperties}>
            <p className="kicker"><span className="num">04</span>Interests &amp; Hobbies</p>
            <h2>Off the clock</h2>
            <span className="rule" aria-hidden="true" />
          </header>
          <ul className="tiles">
            <li data-reveal style={{ '--i': 0 } as React.CSSProperties}>
              <span className="tile-num">01</span>
              <h3>Language Acquisition</h3>
              <p>Studying how languages are learned — and collecting a few along the way.</p>
            </li>
            <li data-reveal style={{ '--i': 1 } as React.CSSProperties}>
              <span className="tile-num">02</span>
              <h3>Analog Focus</h3>
              <p>Deliberate offline practices — pen, paper, and deep work away from screens.</p>
            </li>
            <li data-reveal style={{ '--i': 2 } as React.CSSProperties}>
              <span className="tile-num">03</span>
              <h3>Technical Coffee Preparation</h3>
              <p>Treating brewing like lab work — ratios, temperatures, repeatable extractions.</p>
            </li>
            <li data-reveal style={{ '--i': 3 } as React.CSSProperties}>
              <span className="tile-num">04</span>
              <h3>Gaming</h3>
              <p>Strategy and story-driven games — systems thinking, off the clock.</p>
            </li>
          </ul>
        </section>

        <section id="contact">
          <header className="section-head" data-reveal style={{ '--i': 0 } as React.CSSProperties}>
            <p className="kicker"><span className="num">05</span>Contact</p>
            <h2>Find me elsewhere</h2>
            <span className="rule" aria-hidden="true" />
          </header>
          <ul className="directory" data-reveal style={{ '--i': 1 } as React.CSSProperties}>
            <li>
              <a href="https://mhmzahran.blogspot.com" target="_blank" rel="noopener noreferrer">
                <span className="dir-label">Blog</span>
                <span className="dir-host">mhmzahran.blogspot.com</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href="https://x.com/MohamedHz72007" target="_blank" rel="noopener noreferrer">
                <span className="dir-label">X</span>
                <span className="dir-host">@MohamedHz72007</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/mohamedhossammohamed" target="_blank" rel="noopener noreferrer">
                <span className="dir-label">GitHub</span>
                <span className="dir-host">mohamedhossammohamed</span>
                <span className="arrow" aria-hidden="true">↗</span>
              </a>
            </li>
          </ul>
          <p className="colophon" data-reveal style={{ '--i': 2 } as React.CSSProperties}>
            © 2026 Mohamed Hossam Zahran
          </p>
        </section>
      </main>
    </>
  );
}
