"use client";

import { CalendarDays, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { BookingCalendar } from "./booking-calendar";
import { SectionHeading } from "./section-heading";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  reason: string;
};

type FormErrors = Partial<FormValues & { date: string; slot: string }>;

const initialValues: FormValues = {
  name: "",
  phone: "",
  email: "",
  reason: "",
};

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const nextErrors: FormErrors = {};

    if (!selectedDate) nextErrors.date = "Please choose a date.";
    if (!selectedSlot) nextErrors.slot = "Please choose a time slot.";
    if (!values.name.trim()) nextErrors.name = "Please enter your name.";
    if (!/^[0-9+\-\s()]{8,}$/.test(values.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.reason.trim()) nextErrors.reason = "Please share the reason for your visit.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) return;

    setSubmitted(true);
    setErrors({});
    setValues(initialValues);
    setSelectedDate("");
    setSelectedSlot("");
  }

  return (
    <section id="booking" className="section-space">
      <div className="site-shell">
        <div className="section-card overflow-hidden">
          <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-10">
            <div>
              <SectionHeading
                eyebrow="Appointments"
                title="Schedule your visit in a calm, patient-friendly booking flow."
                description="Choose a convenient date and time, then share a few details so the clinic can prepare for your consultation."
              />

              <div className="mt-8 rounded-[2rem] border border-primary-100 bg-white p-4 sm:p-5">
                <BookingCalendar
                  selectedDate={selectedDate}
                  selectedSlot={selectedSlot}
                  onDateChange={setSelectedDate}
                  onSlotChange={setSelectedSlot}
                  dateError={errors.date}
                  slotError={errors.slot}
                />
              </div>
            </div>

            <div className="rounded-[2rem] bg-gradient-to-br from-ink to-primary-800 p-6 text-white sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
                <CalendarDays className="h-4 w-4" />
                Mock scheduler for demo use
              </div>

              <h3 className="mt-5 text-2xl font-bold">Complete your appointment request</h3>
              <p className="mt-3 text-sm leading-6 text-white/75">
                This form uses mock booking logic only. You can later connect it to your preferred
                backend, CRM, or scheduling platform.
              </p>

              <form className="mt-8 space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    className="input-field"
                    value={values.name}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, name: event.target.value }))
                    }
                    placeholder="Enter your name"
                  />
                  {errors.name ? <p className="mt-2 text-sm text-rose-300">{errors.name}</p> : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className="input-field"
                    value={values.phone}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, phone: event.target.value }))
                    }
                    placeholder="Enter your phone number"
                  />
                  {errors.phone ? (
                    <p className="mt-2 text-sm text-rose-300">{errors.phone}</p>
                  ) : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="input-field"
                    value={values.email}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, email: event.target.value }))
                    }
                    placeholder="Enter your email"
                  />
                  {errors.email ? (
                    <p className="mt-2 text-sm text-rose-300">{errors.email}</p>
                  ) : null}
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/90" htmlFor="reason">
                    Reason for Visit
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    className="input-field resize-none"
                    value={values.reason}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, reason: event.target.value }))
                    }
                    placeholder="Ear pain, sinus issue, dizziness, throat discomfort..."
                  />
                  {errors.reason ? (
                    <p className="mt-2 text-sm text-rose-300">{errors.reason}</p>
                  ) : null}
                </div>

                <button type="submit" className="primary-btn w-full bg-accent hover:bg-teal-600">
                  Schedule Appointment
                </button>

                {submitted ? (
                  <div
                    className="rounded-3xl border border-emerald-300/40 bg-emerald-400/10 px-4 py-4 text-sm text-emerald-100"
                    aria-live="polite"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                      <p>
                        Your appointment request has been submitted successfully. The clinic will
                        contact you shortly to confirm your slot.
                      </p>
                    </div>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
