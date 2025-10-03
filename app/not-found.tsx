import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-slate-900 px-6 text-center text-slate-100">
      <p className="text-sm uppercase tracking-[0.3em] text-slate-400">404 - Page not found</p>
      <h1 className="max-w-xl text-3xl font-semibold text-slate-100">
        The page you are looking for is currently unavailable.
      </h1>
      <p className="max-w-lg text-sm text-slate-300">
        You can return to the homepage or explore the resume section to learn more about Tharindu's work.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-slate-100 px-6 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-200"
        >
          Back to home
        </Link>
        <Link
          href="/resume"
          className="rounded-full border border-slate-200 px-6 py-2 text-sm font-semibold text-slate-100 hover:bg-slate-800"
        >
          View resume
        </Link>
      </div>
    </main>
  );
}
