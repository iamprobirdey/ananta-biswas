"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import { bookingSlots } from "@/data/site";

type BookingCalendarProps = {
  selectedDate: string;
  selectedSlot: string;
  onDateChange: (value: string) => void;
  onSlotChange: (value: string) => void;
  dateError?: string;
  slotError?: string;
};

const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function BookingCalendar({
  selectedDate,
  selectedSlot,
  onDateChange,
  onSlotChange,
  dateError,
  slotError,
}: BookingCalendarProps) {
  const today = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);

  const [monthCursor, setMonthCursor] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1),
  );

  const days = useMemo(() => {
    const year = monthCursor.getFullYear();
    const month = monthCursor.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prefixDays = firstDay.getDay();
    const totalDays = lastDay.getDate();
    const items: Array<Date | null> = [];

    for (let index = 0; index < prefixDays; index += 1) {
      items.push(null);
    }

    for (let day = 1; day <= totalDays; day += 1) {
      items.push(new Date(year, month, day));
    }

    return items;
  }, [monthCursor]);

  return (
    <div className="rounded-[2rem] border border-primary-100 bg-mist p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
            Select Date
          </p>
          <h3 className="mt-2 text-xl font-bold text-ink">
            {monthCursor.toLocaleString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-100 bg-white text-primary-700 transition hover:border-primary-300"
            onClick={() =>
              setMonthCursor(
                (current) => new Date(current.getFullYear(), current.getMonth() - 1, 1),
              )
            }
            aria-label="View previous month"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-100 bg-white text-primary-700 transition hover:border-primary-300"
            onClick={() =>
              setMonthCursor(
                (current) => new Date(current.getFullYear(), current.getMonth() + 1, 1),
              )
            }
            aria-label="View next month"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-7 gap-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
        {weekdayLabels.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-7 gap-2">
        {days.map((day, index) => {
          if (!day) {
            return <div key={`empty-${index}`} className="aspect-square" aria-hidden="true" />;
          }

          const isPast = day < today;
          const iso = formatDate(day);
          const isSelected = selectedDate === iso;

          return (
            <button
              key={iso}
              type="button"
              disabled={isPast}
              onClick={() => onDateChange(iso)}
              className={[
                "aspect-square rounded-2xl text-sm font-semibold transition",
                isSelected
                  ? "bg-primary-600 text-white shadow-md"
                  : "bg-white text-slate-700 hover:bg-primary-50",
                isPast ? "cursor-not-allowed opacity-40 hover:bg-white" : "",
              ].join(" ")}
              aria-pressed={isSelected}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>

      {dateError ? <p className="mt-3 text-sm text-rose-600">{dateError}</p> : null}

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">
          Available Slots
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {bookingSlots.map((slot) => {
            const isSelected = selectedSlot === slot;

            return (
              <button
                key={slot}
                type="button"
                onClick={() => onSlotChange(slot)}
                className={[
                  "rounded-2xl border px-4 py-3 text-sm font-semibold transition",
                  isSelected
                    ? "border-primary-600 bg-primary-600 text-white"
                    : "border-primary-100 bg-white text-slate-700 hover:border-primary-300 hover:bg-primary-50",
                ].join(" ")}
                aria-pressed={isSelected}
              >
                {slot}
              </button>
            );
          })}
        </div>
        {slotError ? <p className="mt-3 text-sm text-rose-600">{slotError}</p> : null}
      </div>
    </div>
  );
}
