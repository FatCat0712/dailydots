import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const navItemClass =
  "rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-200 hover:text-neutral-900";

const navItemActiveClass =
  "bg-neutral-900 text-white hover:bg-neutral-800 hover:text-white";

export default function AppShell() {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageTitleByPath: Record<string, string> = {
      "/": "Home - Dailydots",
      "/journals": "My Journals - Dailydots",
      "/journal": "Add New Journal - Dailydots",
    };

    document.title = pageTitleByPath[pathname] ?? "Dailydots";
  }, [pathname]);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-100"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 24 24" 
                className="h-5 w-5 text-neutral-700"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8" cy="9" r="1.25" fill="currentColor" />
                <circle cx="12" cy="12" r="1.25" fill="currentColor" />
                <circle cx="16" cy="15" r="1.25" fill="currentColor" />
              </svg>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Daily Journal
              </p>
              <h1 className="text-lg font-semibold tracking-tight">Daily Dots</h1>
            </div>
          </div>
          <nav className="flex items-center gap-1 rounded-xl border border-neutral-200 bg-white p-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${navItemClass} ${isActive ? navItemActiveClass : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/journals"
              className={({ isActive }) =>
                `${navItemClass} ${isActive ? navItemActiveClass : ""}`
              }
            >
              My Journals
            </NavLink>
            <NavLink
              to="/journal"
              className={({ isActive }) =>
                `${navItemClass} ${isActive ? navItemActiveClass : ""}`
              }
            >
              Add New Journal
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <Outlet />
      </main>
    </div>
  );
}
