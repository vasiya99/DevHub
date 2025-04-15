import { Link } from 'react-router-dom';
import './Layout.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <nav className="navbar">
        <div className="logo">DevHub</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <main className="main-content">{children}</main>

      <footer className="footer">
        © {new Date().getFullYear()} DevHub · <a href="https://github.com/vasiya99" target="_blank">GitHub</a>
      </footer>
    </div>
  );
}