import { ArrowRight, Clock3, MapPinned } from "lucide-react";
import { contactCards, contactDetails } from "@/data/site";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(contactDetails.mapEmbedQuery)}&z=15&output=embed`;

  return (
    <section id="contact" className="section-space">
      <div className="site-shell">
        <div className="section-card overflow-hidden">
          <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-10">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Make it simple for patients to reach the clinic in the way they prefer."
                description="A high-converting contact area should offer immediate reassurance, clear hours, and multiple ways to take the next step."
              />

              <div className="mt-8 space-y-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="flex items-start gap-4 rounded-3xl border border-primary-100 bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-slate-600">{card.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-3xl border border-primary-100 bg-mist p-5">
                <div className="flex items-center gap-3">
                  <Clock3 className="h-5 w-5 text-accent" />
                  <h3 className="text-lg font-bold text-ink">Opening Hours</h3>
                </div>
                <div className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
                  {contactDetails.hours.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer" className="primary-btn">
                  Book Appointment
                </a>
                <a
                  href={contactDetails.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn gap-2"
                >
                  WhatsApp Clinic
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-primary-100 via-white to-primary-50 p-5">
              <div className="flex h-full min-h-[24rem] flex-col rounded-[1.75rem] border border-white/80 bg-white/80 p-5 shadow-inner">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 text-white">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
                      Location
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-ink">{contactDetails.mapLabel}</h3>
                  </div>
                </div>

                <div className="mt-6 flex flex-1 flex-col overflow-hidden rounded-[1.5rem] border border-primary-100 bg-white shadow-sm">
                  <iframe
                    title={contactDetails.mapTitle}
                    src={mapEmbedSrc}
                    className="min-h-[20rem] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  <div className="border-t border-primary-100 bg-gradient-to-br from-primary-50 to-white px-5 py-4">
                    <p className="text-sm font-semibold text-ink">{contactDetails.mapTitle}</p>
                    <a
                      href={contactDetails.locationHref}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-btn mt-4"
                    >
                      Open Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
