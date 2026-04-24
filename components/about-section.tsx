import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { aboutHighlights, contactDetails } from "@/data/site";
import { SectionHeading } from "./section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-space bg-gradient-to-b from-white to-mist/80">
      <div className="site-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative mx-auto w-full max-w-md pb-16 lg:pb-0">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-primary-100 via-white to-primary-50 p-5 shadow-soft">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-white">
              <Image
                src="/doctor-ananta.jpeg"
                alt={contactDetails.name}
                fill
                className="object-cover object-[center_12%]"
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
            </div>
          </div>
          <div className="absolute bottom-0 right-4 rounded-3xl border border-white/80 bg-white px-5 py-4 shadow-card lg:-bottom-6 lg:-right-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Qualification</p>
            <p className="mt-2 max-w-[14rem] text-sm font-semibold text-ink">
              {contactDetails.qualification}
            </p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="About Me"
            title="Specialist-led ENT care built on trust, detail, and thoughtful communication."
            description={contactDetails.intro}
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-primary-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
                Doctor
              </p>
              <p className="mt-2 text-xl font-bold text-ink">{contactDetails.name}</p>
            </div>
            <div className="rounded-3xl border border-primary-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
                Experience
              </p>
              <p className="mt-2 text-xl font-bold text-ink">{contactDetails.experience}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-3xl border border-primary-100 bg-white px-4 py-4 shadow-sm"
              >
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
