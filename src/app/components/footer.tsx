import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Products Section */}
          <div>
            <h3>PRODUCTS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-links">
                  Cakes
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Pastries
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Savories
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Customised Cakes
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Birthday Cakes
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Wedding Cakes
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT Section */}
          <div>
            <h3>SUPPORT</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-links">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Locate
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Raise a query
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3>POLICIES</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-links">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <Image
              src="/logo-white-transparent.png"
              alt="The bakest logo"
              width={100}
              height={24}
              priority
            />
            <p className="mb-4">
              Follow us on social media to find out the latest updates on our
              progress.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="#" className="hover:text-white">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" className="hover:text-white">
                <i className="fas fa-globe"></i> Website
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; 2025 - The Bakest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
