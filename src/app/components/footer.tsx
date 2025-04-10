import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Products Section */}
          <div>
            <h3 className="mb-4">PRODUCTS</h3>
            <ul className="space-y-3">
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
            <h3 className="mb-4">SUPPORT</h3>
            <ul className="space-y-3">
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
              <li>
                <a href="#" className="footer-links">
                  CSR
                </a>
              </li>
              <li>
                <a href="#" className="footer-links">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Policies Section */}
          <div>
            <h3 className="mb-4">POLICIES</h3>
            <ul className="space-y-3">
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
              <li>
                <a href="#" className="footer-links">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <Image
              src="/logo-white-transparent.png"
              alt="The bakest logo"
              width={180}
              height={24}
              priority
              className="mb-2"
            />

            <p>
              <i className="fa fa-map-marker mr-2" aria-hidden="true"></i>J20/1,
              First Floor, Abdul Fazal Enclave Part 1, Jamia Nagar, Okhla, New
              Delhi - 110025, India
            </p>
            <p>
              <i className="fa fa-phone mr-2" aria-hidden="true"></i>+91
              9990508005, +91 9990507005
            </p>

            <div className="flex space-x-4 mt-2 mb-12">
              <a href="#">
                <i className="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i className="fa fa-envelope"></i>
              </a>
            </div>

            <h3>Also available on:</h3>
            <Image
              src="/swiggy-zomato.png"
              alt="Swiggy and Zomato"
              width={180}
              height={24}
              priority
              className="mt-2"
            />
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
