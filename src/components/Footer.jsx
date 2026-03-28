import { FiPhone, FiMail, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";

function Footer() {
  return (
    <footer className="snap-start bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Contact</h2>
          <div className="flex items-center gap-2">
            <FiPhone className="text-blue-400" />
            <span>+92 3202108037</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-purple-400" />
            <span>contact@devsol.pk</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Quick Links</h2>
          <div className="flex flex-col gap-2">
            {["About Us", "Services", "Careers", "FAQ", "Contact Us"].map((link, idx) => (
              <a
                key={idx}
                href={`/${link.toLowerCase().replace(/\s+/g, "")}`}
                className="hover:text-blue-400 transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Social & Newsletter */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Follow Me</h2>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-400 transition">
              <FiFacebook />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FiTwitter />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FiLinkedin />
            </a>
            <a href="#" className="hover:text-blue-400 transition">
              <FiInstagram />
            </a>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Subscribe to Newsletter</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-l-full text-gray-900 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 rounded-r-full hover:from-blue-600 hover:to-purple-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Ahmed Raza Dev. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;