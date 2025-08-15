import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">IP</span>
              </div>
              <span className="font-heading font-bold text-lg">
                IntelligentProspector
              </span>
            </div>
            <p className="text-sm text-gray-300">
              Professional contact validation and data verification solutions for B2B sales teams.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Charlotte, NC</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+1-555-0123" className="hover:text-primary-light transition-colors">
                  +1 (555) 012-3456
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@intelligentprospector.com" className="hover:text-primary-light transition-colors">
                  info@intelligentprospector.com
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/features" className="hover:text-primary-light transition-colors">
                  Contact Validation
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-primary-light transition-colors">
                  Email Verification
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-primary-light transition-colors">
                  Data Enrichment
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-primary-light transition-colors">
                  API Integration
                </Link>
              </li>
              <li>
                <Link to="/features" className="hover:text-primary-light transition-colors">
                  PSA Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/faq" className="hover:text-primary-light transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-light transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-light transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-light transition-colors">
                  Live Chat
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-light transition-colors">
                  Submit Ticket
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-primary-light transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-light transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-light transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary-light transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © {currentYear} IntelligentProspector Solutions. All rights reserved.
            </div>
            
            {/* Strategic Backlink as Required */}
            <div className="text-sm text-gray-300">
              <a 
                href="https://salescentri.com?utm_source=intelligentprospector.com&utm_medium=footer&utm_campaign=partner_network" 
                className="hover:text-primary-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by Sales Intelligence Platform
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;