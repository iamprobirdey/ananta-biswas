import Image from "next/image";
import { ArrowRight, CalendarCheck2, ShieldPlus, Star, Stethoscope } from "lucide-react";
import { contactDetails, highlightStats, trustBadges } from "@/data/site";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero-glow">
      <div className="site-shell section-space grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-100 bg-white/80 px-4 py-2 text-sm font-medium text-primary-700 shadow-soft">
            <ShieldPlus className="h-4 w-4" />
            Trusted ENT care for the whole family
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Breathe easier, hear clearly, and get expert ENT care without the wait.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Personalized ear, nose, and throat treatment focused on accurate diagnosis,
            compassionate care, and a simple path to reach the clinic when you need help.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={contactDetails.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="primary-btn gap-2"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="secondary-btn gap-2">
              View Services
              <Stethoscope className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-primary-100 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative mx-auto max-w-xl rounded-[3rem] border border-white/80 bg-gradient-to-br from-primary-100 via-primary-200 to-accent/40 p-6 shadow-soft">
            <div className="absolute left-3 top-3 z-20 rounded-3xl bg-lime-100 px-4 py-3 shadow-card sm:-left-4 sm:top-12">
              <div className="flex items-center gap-2 text-sm font-bold text-lime-700">
                <CalendarCheck2 className="h-4 w-4" />
                Fast Patient Support
              </div>
              <p className="mt-1 text-xs text-slate-600">Call, visit, or message the clinic</p>
            </div>

            <div className="absolute right-3 top-24 z-20 max-w-[10rem] rounded-3xl bg-primary-600 px-4 py-4 text-white shadow-card sm:-right-4 sm:top-16">
              <div className="flex gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-2 text-sm font-semibold">Trusted by local families</p>
              <p className="mt-1 text-xs text-primary-50/90">
                Gentle consultations and clear treatment plans.
              </p>
            </div>

            <div className="relative z-10 overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-primary-300 via-primary-400 to-primary-100">
              <div className="relative aspect-[4/4.8] min-h-[32rem]">
                <Image
                  src="/doctor-ananta.jpeg"
                  alt={contactDetails.name}
                  fill
                  priority
                  className="object-cover object-[center_10%]"
                  sizes="(min-width: 1024px) 34rem, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/10 via-transparent to-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-shell pb-10 sm:pb-16">
        <div className="section-card grid gap-6 px-6 py-8 sm:px-8 lg:grid-cols-3 lg:px-10">
          {highlightStats.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className="rounded-3xl bg-mist px-5 py-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-primary-700 shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
