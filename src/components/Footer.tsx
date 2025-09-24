import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Facebook } from 'lucide-react';
import content from '../data/content.json';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 dark:bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="font-display text-2xl font-semibold text-white">MA Loom</span>
              <span className="text-2xl font-light text-accent-blue ml-2">— The Flow Studio</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {content.personal.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href={content.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-blue transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href={content.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-blue transition-colors duration-200"
                aria-label="TikTok"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5.16 20.5a6.33 6.33 0 0 0 10.14-5.09V7.5a8.16 8.16 0 0 0 4.65 1.49v-3.4a4.85 4.85 0 0 1-.36.1z"/>
                </svg>
              </a>
              <a
                href={content.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-blue transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href={content.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent-blue transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-blue transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-blue transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/ventures" className="text-gray-300 hover:text-accent-blue transition-colors duration-200">
                  Ventures
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-blue transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Automation & AI</span>
              </li>
              <li>
                <span className="text-gray-300">Agile Consulting</span>
              </li>
              <li>
                <span className="text-gray-300">Product Strategy</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} MA Loom — The Flow Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;