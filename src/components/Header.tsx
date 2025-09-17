import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      const section = document.getElementById("whyus");
      section?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: "whyus" } });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const linkClass = (path: string) =>
    `text-white font-medium transition-all duration-200 inline-block relative ${
      isActive(path)
        ? "after:content-[''] after:block after:w-6 after:h-[2px] after:bg-white after:mt-1"
        : "hover:after:content-[''] hover:after:block hover:after:w-6 hover:after:h-[2px] hover:after:bg-white hover:after:mt-1"
    }`;

  return (
    <header className="bg-[#4b0173] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" onClick={handleNavClick}>
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/logo.png`}
                alt="Adhi Mind Wellness Centre Logo"
                className="h-12 lg:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation (visible from lg and above) */}
          <nav className="hidden lg:flex space-x-8 text-center">
            <Link
              to="/"
              onClick={handleNavClick}
              className={`text-white font-medium pb-1 transition-all duration-200 ${
                isActive("/") ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className={`text-white font-medium pb-1 transition-all duration-200 ${
                isActive("/about") ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"
              }`}
            >
              About Us
            </Link>
            <a
              href="#whyus"
              onClick={handleClick}
              className={`text-white font-medium pb-1 transition-all duration-200 ${
                location.hash === "#whyus"
                  ? "border-b-2 border-white"
                  : "hover:border-b-2 hover:border-white"
              }`}
            >
              Why us
            </a>
            <Link
              to="/services"
              onClick={handleNavClick}
              className={`text-white font-medium pb-1 transition-all duration-200 ${
                isActive("/services") ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"
              }`}
            >
              Services
            </Link>
            <Link
              to="/approach"
              onClick={handleNavClick}
              className={`text-white font-medium pb-1 transition-all duration-200 ${
                isActive("/approach") ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"
              }`}
            >
              Approach
            </Link>
            <Link
              to="/gallery"
              onClick={handleNavClick}
              className={`text-white font-medium pb-1 transition-all duration-200 ${
                isActive("/gallery") ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              onClick={handleNavClick}
              className={`text-white font-medium pb-1 transition-all duration-200 ${
                isActive("/contact") ? "border-b-2 border-white" : "hover:border-b-2 hover:border-white"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button (visible from lg and above) */}
          <div className="hidden lg:block">
            <Link to="/contact" onClick={handleNavClick}>
              <Button className="bg-wellness-violet hover:bg-wellness-violet/90 text-white px-6 py-2 rounded-full transition-all duration-200">
                Book a Session
              </Button>
            </Link>
          </div>

          {/* Mobile menu button (only below lg) */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation (only below lg) */}
        {isMenuOpen && (
          <div className="lg:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" onClick={handleNavClick} className={linkClass("/")}>
                Home
              </Link>
              <Link to="/about" onClick={handleNavClick} className={linkClass("/about")}>
                About Us
              </Link>
              <span
                onClick={(e) => {
                  setIsMenuOpen(false);
                  e.preventDefault();
                  if (location.pathname === "/") {
                    const section = document.getElementById("whyus");
                    section?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    navigate("/", { state: { scrollTo: "whyus" } });
                  }
                }}
                className="text-white font-medium cursor-pointer transition-all duration-200 inline-block relative hover:after:content-[''] hover:after:block hover:after:w-6 hover:after:h-[2px] hover:after:bg-white hover:after:mt-1"
              >
                Why us
              </span>
              
              <Link to="/services" onClick={handleNavClick} className={linkClass("/services")}>
                Services
              </Link>
              <Link to="/approach" onClick={handleNavClick} className={linkClass("/approach")}>
                Approach
              </Link>
              <Link to="/gallery" onClick={handleNavClick} className={linkClass("/gallery")}>
                Gallery
              </Link>
              <Link to="/contact" onClick={handleNavClick} className={linkClass("/contact")}>
                Contact
              </Link>
              <Link to="/contact" onClick={handleNavClick}>
                <Button className="bg-white text-black hover:bg-white/90 px-6 py-2 rounded-full transition-all duration-200 w-fit">
                  Book a Session
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
