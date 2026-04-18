import { Link } from "react-router-dom";
import { PhoneIcon, MailIcon, MapPinIcon } from "../icons/Icons";
import logo from "../../assets/logo.png";
import { contentRoutes, locationRouteMap } from "../../data/locations";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Conditions", href: "/#conditions" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight text-snow/60 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logo}
                alt="Adapt Physiotherapy Logo"
                className="h-10 md:h-12 w-auto"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium physiotherapy for those who demand more from their recovery.
              Evidence-based care, delivered with compassion.
            </p>
            <p className="text-xs mt-4 text-snow/40">
              Also serving nearby areas: Vikhroli, Ghatkopar.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-label text-snow/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-snow transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location Pages */}
          <div>
            <h4 className="text-label text-snow/40 mb-6">Location Pages</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link className="hover:text-snow transition-colors duration-300" to={locationRouteMap.powai}>
                  Physiotherapy in Powai
                </Link>
              </li>
              <li>
                <Link className="hover:text-snow transition-colors duration-300" to={locationRouteMap.hiranandani}>
                  Physiotherapy in Hiranandani
                </Link>
              </li>
              <li>
                <Link className="hover:text-snow transition-colors duration-300" to={locationRouteMap.vikhroli}>
                  Physiotherapy in Vikhroli
                </Link>
              </li>
            </ul>
          </div>

          {/* Treatment Pages */}
          <div>
            <h4 className="text-label text-snow/40 mb-6">Treatment Guides</h4>
            <ul className="space-y-3 text-sm">
              {contentRoutes.map((route) => (
                <li key={route.slug}>
                  <Link className="hover:text-snow transition-colors duration-300" to={route.href}>
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label text-snow/40 mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm">
                <PhoneIcon className="w-4 h-4 text-primary" />
                +91 77385 56911
              </li>
              <li className="flex items-center gap-3 text-sm">
                <MailIcon className="w-4 h-4 text-primary" />
                adaptrehabilitation@gmail.com
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPinIcon className="w-4 h-4 text-primary mt-0.5" />
                <span>
                  Galleria Shopping Mall, Central Ave,<br />
                  Hiranandani Gardens, Powai,<br />
                  Mumbai, Maharashtra 400076
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-snow/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-xs text-snow/30">
            © {new Date().getFullYear()} Adapt Physiotherapy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
