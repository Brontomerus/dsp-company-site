import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <NavLink to="/" className="logo">
            DSP Company
          </NavLink>
          <nav className="nav">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              About
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} DSP Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
