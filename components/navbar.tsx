"use client";

import { Menu, Stethoscope, X } from "lucide-react";
import { useState } from "react";
import { contactDetails, navItems } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-primary-100/60 bg-white/85 backdrop-blur-xl">
      <div className="site-shell flex min-h-20 items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3 text-ink">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-100 text-primary-700">
            <Stethoscope className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
              MS ENT
            </span>
            <span className="block text-base font-bold">{contactDetails.name}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-primary-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer" className="primary-btn">
            Book Appointment
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary-100 text-primary-700 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-primary-100 bg-white lg:hidden">
          <nav className="site-shell flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-primary-50 hover:text-primary-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="primary-btn mt-2"
              onClick={() => setOpen(false)}
            >
              Book Appointment
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
