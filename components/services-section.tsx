import { ArrowUpRight } from "lucide-react";
import { contactDetails, services } from "@/data/site";
import { SectionHeading } from "./section-heading";

export function ServicesSection() {
  return (
    <section id="services" className="section-space">
      <div className="site-shell">
        <SectionHeading
          eyebrow="Services"
          title="Complete ENT care designed around comfort, clarity, and lasting recovery."
          description="Each service is presented in a patient-friendly format to make treatment options easier to understand and act on."
          align="center"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group rounded-[1.75rem] border border-primary-100 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-primary-200"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition group-hover:text-primary-800"
                >
                  Book Appointment
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
