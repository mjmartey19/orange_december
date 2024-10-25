import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">Contact us for inquiries or bookings:</h2>
        <p className="mb-2">Email: info@bonvastours.com</p>
        <p className="mb-6">Call/WhatsApp: +233 261 671 686/+233 549 876 194</p>

        <div className="flex justify-center space-x-4 mb-6">
          {[
            { Icon: FaFacebookF, href: '#', label: 'Facebook' },
            { Icon: FaTwitter, href: '#', label: 'Twitter' },
            { Icon: FaInstagram, href: '#', label: 'Instagram' },
            { Icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="bg-white text-black p-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <div className="text-sm">
          <p className="mb-2">
            All Rights Reserved |
            <a href="#" className="underline ml-1 hover:text-gray-300">Terms and Conditions</a> |
            <a href="#" className="underline ml-1 hover:text-gray-300">Privacy Policy</a>
          </p>
          <p>Copyright © 2024 Bonvas Tours</p>
        </div>
      </div>
    </footer>
  );
}