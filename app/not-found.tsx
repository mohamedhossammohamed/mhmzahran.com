import Link from 'next/link';
import Background from './components/Background';

export default function NotFound() {
  return (
    <>
      <Background />
      <main className="not-found">
        <p className="kicker"><span className="num">404</span>Lost reference</p>
        <h1>This entry doesn&apos;t exist.</h1>
        <Link className="ref" href="/">
          Back to index <span className="arrow" aria-hidden="true">↗</span>
        </Link>
      </main>
    </>
  );
}
