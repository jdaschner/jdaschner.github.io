import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="animate-fade-up py-20 text-center">
      <p className="font-mono text-accent text-6xl font-bold">404</p>
      <p className="mt-4 text-muted font-mono">
        <span className="text-accent2">~/</span> page not found
      </p>
      <Link
        to="/"
        className="inline-block mt-8 rounded-md bg-accent text-bg font-semibold text-sm px-5 py-2.5 hover:bg-accent/90 transition-colors"
      >
        cd ~/home
      </Link>
    </div>
  );
}
