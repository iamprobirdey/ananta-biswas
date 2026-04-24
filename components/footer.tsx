import { contactDetails, footerServices, quickLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink py-12 text-white">
      <div className="site-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-200">
            ENT Clinic
          </p>
          <h2 className="mt-3 max-w-sm text-2xl font-bold leading-tight">{contactDetails.footerTitle}</h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
            Trusted, modern ENT care with clear clinic information and patient-first
            communication.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            {quickLinks.map((item) => (
              <a key={item.href} href={item.href} className="block transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Services</h3>
          <div className="mt-4 space-y-3 text-sm text-white/70">
            {footerServices.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="mt-4 space-y-3 text-sm leading-7 text-white/70">
            <p>{contactDetails.address}</p>
            <p>{contactDetails.phone}</p>
            <p>{contactDetails.email}</p>
          </div>
        </div>
      </div>

      <div className="site-shell mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
        © 2026 {contactDetails.name}. All rights reserved.
      </div>
    </footer>
  );
}
