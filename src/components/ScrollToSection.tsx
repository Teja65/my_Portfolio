import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pathToSection } from '../data/portfolio';

export default function ScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = pathToSection[pathname] ?? 'home';
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}
