import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Link, Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const logoPath = `${import.meta.env.BASE_URL}assets/agilemaps-mark.jpg`;

function Brand({ onClick }: { onClick?: () => void }) {
  return (
    <Link href="/" className="brand" aria-label="AgileMaps home" onClick={onClick}>
      <img className="brand-mark" src={logoPath} alt="" />
      <span>AgileMaps</span>
    </Link>
  );
}

function NavigationLink({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return (
    <Link href="/work-in-progress" className="nav-link" onClick={onClick}>
      {children}
    </Link>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Brand onClick={closeMenu} />
        <nav className="desktop-nav" aria-label="Main navigation">
          <NavigationLink>Explore</NavigationLink>
          <NavigationLink>Create</NavigationLink>
          <NavigationLink>My Maps</NavigationLink>
        </nav>
        <div className="nav-actions">
          <NavigationLink>Sign In</NavigationLink>
          <Link href="/work-in-progress" className="button header-cta">
            Create Roadmap
          </Link>
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
      {menuOpen ? (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          <NavigationLink onClick={closeMenu}>Explore</NavigationLink>
          <NavigationLink onClick={closeMenu}>Create</NavigationLink>
          <NavigationLink onClick={closeMenu}>My Maps</NavigationLink>
          <NavigationLink onClick={closeMenu}>Sign In</NavigationLink>
          <Link href="/work-in-progress" className="button" onClick={closeMenu}>
            Create Roadmap
          </Link>
        </nav>
      ) : null}
    </header>
  );
}

function RoadmapVisual() {
  return (
    <div className="roadmap-frame" aria-label="Abstract visual roadmap from foundations to an outcome">
      <svg className="roadmap-grid" viewBox="0 0 640 370" preserveAspectRatio="none" aria-hidden="true">
        <line x1="74" y1="0" x2="74" y2="370" />
        <line x1="150" y1="0" x2="150" y2="370" />
        <line x1="226" y1="0" x2="226" y2="370" />
        <line x1="302" y1="0" x2="302" y2="370" />
        <line x1="378" y1="0" x2="378" y2="370" />
        <line x1="454" y1="0" x2="454" y2="370" />
        <line x1="530" y1="0" x2="530" y2="370" />
        <line x1="606" y1="0" x2="606" y2="370" />
        <line x1="0" y1="74" x2="640" y2="74" />
        <line x1="0" y1="148" x2="640" y2="148" />
        <line x1="0" y1="222" x2="640" y2="222" />
        <line x1="0" y1="296" x2="640" y2="296" />
      </svg>
      <svg className="roadmap-svg" viewBox="0 0 640 370" role="img">
        <title>A branching roadmap of connected concepts</title>
        <path className="roadmap-line faint" d="M34 298 C112 299 127 285 170 246 S240 180 304 174" />
        <path className="roadmap-line" d="M34 298 C113 298 127 280 170 239 L257 160" />
        <path className="roadmap-line" d="M257 160 L333 95 L454 95" />
        <path className="roadmap-line" d="M257 160 L337 232 L440 232" />
        <path className="roadmap-line" d="M337 232 L407 306 L525 306" />
        <path className="roadmap-line faint" d="M337 232 L430 169 L566 169" />
        <path className="roadmap-line" d="M454 95 L520 49" />
        <path className="roadmap-line faint" d="M440 232 L519 191" />
        <g className="roadmap-node">
          <circle className="core" cx="34" cy="298" r="6" />
          <text x="34" y="323">START</text>
        </g>
        <g className="roadmap-node">
          <rect x="211" y="137" width="92" height="46" />
          <text x="257" y="160">FOUNDATIONS</text>
        </g>
        <g className="roadmap-node">
          <rect x="404" y="72" width="100" height="46" />
          <text x="454" y="95">JAVASCRIPT</text>
        </g>
        <g className="roadmap-node">
          <rect x="389" y="209" width="102" height="46" />
          <text x="440" y="232">FRONTEND</text>
        </g>
        <g className="roadmap-node">
          <rect x="474" y="283" width="102" height="46" />
          <text x="525" y="306">FULL STACK</text>
        </g>
        <g className="roadmap-node">
          <circle cx="520" cy="49" r="5" />
          <text x="520" y="25">REACT</text>
        </g>
        <g className="roadmap-node">
          <circle cx="566" cy="169" r="5" />
          <text x="566" y="145">SHIP</text>
        </g>
        <g className="roadmap-node">
          <circle cx="519" cy="191" r="4" />
        </g>
      </svg>
      <div className="roadmap-caption">
        <span>06</span> connected paths / 01 direction
      </div>
    </div>
  );
}

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy-block">
          <div className="eyebrow">A visual map for moving forward</div>
          <h1 className="hero-title">
            Map Your
            <br />
            Way <em>Forward.</em>
          </h1>
          <p className="hero-copy">
            Create and explore visual roadmaps that turn complex goals into clear paths.
          </p>
          <div className="hero-actions">
            <Link href="/work-in-progress" className="button button-arrow">
              Explore Roadmaps
            </Link>
            <Link href="/work-in-progress" className="button button-outline">
              Create a Roadmap
            </Link>
          </div>
          <div className="hero-meta">
            <span className="meta-dot" />
            <span>Turn the unknown into a route</span>
          </div>
        </div>
        <RoadmapVisual />
      </section>

      <section className="intro-section" aria-labelledby="intro-heading">
        <div className="section-kicker">01 / The idea</div>
        <div>
          <h2 className="intro-heading" id="intro-heading">
            Your path.
            <br />
            Your map.
          </h2>
          <p className="intro-text">
            AgileMaps helps you visualize the path from where you are to where you want to be.
            <strong> Build structured roadmaps, discover paths created by others, and eventually make them your own.</strong>
          </p>
        </div>
      </section>

      <section className="steps-section" aria-labelledby="steps-heading">
        <div className="steps-head">
          <h2 className="steps-heading" id="steps-heading">
            How it works
          </h2>
          <p className="steps-note">One idea. Many routes.<br />Choose your next node.</p>
        </div>
        <div className="steps-list">
          <article className="step">
            <div className="step-number">01 — Discover</div>
            <h3 className="step-title">Find your starting point.</h3>
            <p className="step-copy">Find roadmaps built around the skills and goals you care about.</p>
          </article>
          <article className="step">
            <div className="step-number">02 — Explore</div>
            <h3 className="step-title">See what connects.</h3>
            <p className="step-copy">Follow the connections between concepts and understand what comes next.</p>
          </article>
          <article className="step">
            <div className="step-number">03 — Build</div>
            <h3 className="step-title">Make it yours.</h3>
            <p className="step-copy">Create and customize your own path through the things you want to learn.</p>
          </article>
        </div>
      </section>

      <section className="cta-section" aria-labelledby="cta-heading">
        <h2 className="cta-heading" id="cta-heading">Where will your map take you?</h2>
        <p className="cta-copy">Start exploring the paths people are building.</p>
        <Link href="/work-in-progress" className="button button-arrow">
          Explore AgileMaps
        </Link>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="footer-logo">
          <img className="footer-mark" src={logoPath} alt="" />
          AgileMaps
        </Link>
        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/work-in-progress" className="footer-link">Explore</Link>
          <Link href="/work-in-progress" className="footer-link">Create</Link>
          <Link href="/work-in-progress" className="footer-link">My Maps</Link>
          <Link href="/work-in-progress" className="footer-link">GitHub</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span className="copyright">© 2025 AgileMaps. Still finding the route.</span>
        <span className="footer-status"><span className="status-dot" /> Prototype / early access</span>
      </div>
    </footer>
  );
}

function WorkInProgress() {
  return (
    <main className="wip-page">
      <section className="wip-content" aria-labelledby="wip-title">
        <div className="wip-code">AGILEMAPS / 001</div>
        <h1 className="wip-title" id="wip-title">Work in Progress</h1>
        <p className="wip-message">This part of AgileMaps is still being built.</p>
        <Link href="/" className="button button-outline wip-back">Back to map</Link>
      </section>
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Header />
      <Switch>
        <Route path="/" component={() => <><Home /><Footer /></>} />
        <Route path="/work-in-progress" component={WorkInProgress} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div className="site-shell">
            <Router />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;