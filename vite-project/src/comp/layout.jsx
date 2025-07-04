import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
        <h1>iije</h1>
      <header className="p-4 bg-gray-800 text-white flex justify-between">
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>

      <main className="p-6">
        <Outlet />
      </main>

      <footer className="p-4 bg-gray-200 text-center text-sm">
        ddfd
      </footer>
    </div>
  );
}

export default Layout;
