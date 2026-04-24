import { Quote, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeading } from "./section-heading";

export function TestimonialsSection() {
  return (
    <section id="feedback" className="section-space bg-gradient-to-b from-mist/70 to-white">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Patient Feedback"
          title="Real stories that help new patients feel reassured before they book."
          description="Patient-centered copy and warm visual treatment create the kind of trust a clinic website should deliver in the first few seconds."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[2rem] border border-primary-100 bg-white p-6 shadow-card"
            >
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-ink">{item.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary-700">{item.treatment}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <Quote className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-4 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">{item.review}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
