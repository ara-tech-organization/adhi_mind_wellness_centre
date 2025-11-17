import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-wellness-violet text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-4">
              Adhi Mind Wellness Centre
            </h3>
            <p className="text-wellness-sparkle leading-relaxed mb-6">
              Empowering minds and cultivating clarity through compassionate,
              evidence-based mental wellness care in Thanjavur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">
              Quick Links
            </h4>
            <nav className="space-y-3">
              <Link
                to="/"
                className="block text-wellness-sparkle hover:text-white transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-wellness-sparkle hover:text-white transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block text-wellness-sparkle hover:text-white transition-colors duration-200"
              >
                Our Services
              </Link>
              <Link
                to="/approach"
                className="block text-wellness-sparkle hover:text-white transition-colors duration-200"
              >
                Therapeutic Approach
              </Link>
              <Link
                to="/contact"
                className="block text-wellness-sparkle hover:text-white transition-colors duration-200"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">
              Contact Information
            </h4>
            <div className="space-y-3 text-wellness-sparkle">
              <p>
                <strong className="text-white">Address:</strong>
                <br />
                No.32, Shop No.2 (First Floor), <br />GAN Plaza (Near Titan Showroom), <br />
                Municipal Colony, Medical College Road,<br /> Thanjavur, Tamil Nadu - 613007
              </p>
              <p>
                <strong className="text-white">Phone:</strong>
                <br />
                {/* <a href="tel:+919543347345" className="hover:text-white transition-colors">95433 47345</a><br /> */}
                <a
                  href="tel:+917200175761"
                  className="hover:text-white transition-colors"
                >
                  72001 75761
                </a>
              </p>
              <p>
                <strong className="text-white">Email:</strong>
                <br />
                <a
                  href="mailto:adhimindwellnesscentre@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  adhimindwellnesscentre@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-wellness-lavender/20 mt-8 pt-8 text-center">
          <p className="text-wellness-sparkle">
            © 2025 Adhi Mind Wellness Center. All rights reserved.
          </p>
          <p className="text-wellness-sparkle/80 text-sm mt-2">
            <Link
              to="https://discovertechnologies.co/"
              className="inline-block"
            >
              Website created by ARA Discover Technologies - A unit of ARA
              Discoveries Pvt. Ltd.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
