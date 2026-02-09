import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-8">
      <div className="max-w-md text-center">
        <h1 className="text-display font-bold text-accent mb-4">404</h1>
        <h2 className="text-h3 font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-body-lg text-gray-600 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-xl shadow-lg transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/resume"
            className="px-6 py-3 bg-white border border-gray-300 hover:border-accent text-gray-900 font-semibold rounded-xl shadow-lg transition-colors"
          >
            View Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
