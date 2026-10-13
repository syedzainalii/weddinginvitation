"use client";

import { invitation } from "@/lib/invitation";
import { downloadIcs } from "@/lib/ics";
import Ornament from "./Ornament";
import LocationQR from "./LocationQR";

export default function DetailsSection() {
  const { event, venue, contacts } = invitation;

  return (
    <section className="px-6 py-10 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-gold-dark">
        The Details
      </p>
      <Ornament className="my-3" />

      <div className="mx-auto max-w-sm space-y-6">
        <div>
          <h3 className="font-script text-3xl text-maroon">When</h3>
          <p className="mt-1 text-lg font-semibold">
            {event.day}, {event.date}
          </p>
          <p className="text-gold-dark">{event.time} onwards</p>
          <button type="button" className="btn-outline mt-3" onClick={downloadIcs}>
            Add to calendar
          </button>
        </div>

        <Ornament />

        <div>
          <h3 className="font-script text-3xl text-maroon">Where</h3>
          <p className="mt-1 text-lg font-semibold">{venue.name}</p>
          <p className="text-gold-dark">{venue.area}</p>
          <a
            href={venue.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-3"
          >
            View on Google Maps
          </a>
          <div className="mt-6">
            <LocationQR />
          </div>
        </div>

        <Ornament />

        <div>
          <h3 className="font-script text-3xl text-maroon">Contact</h3>
          <div className="mt-3 flex flex-col items-center gap-3">
            {contacts.map((c) => (
              <a key={c.phone} href={`tel:${c.phone}`} className="btn-outline">
                {c.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
