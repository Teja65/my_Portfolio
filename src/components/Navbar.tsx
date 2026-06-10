import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { navLinks, personalInfo } from "../data/portfolio";

function ThemeIcon({ theme }: { theme: "light" | "dark" }) {
  if (theme === "dark") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <button className="navbar__brand" onClick={() => scrollTo("home")}>
          TV
        </button>

        <nav className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <button key={link.id} onClick={() => scrollTo(link.id)}>
              {link.label}
            </button>
          ))}
          <a
            className="navbar__resume"
            href={personalInfo.resumePath}
            download
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </nav>

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__theme"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            <ThemeIcon theme={theme} />
          </button>

          <button
            className="navbar__toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
