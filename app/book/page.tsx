"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type PatientType = "existing" | "new" | null;
type CareType = "nhs" | "private" | null;

const clinics = [
  {
    name: "Isleworth",
    address: "41 South Street, Isleworth, Middlesex TW7 7AA",
    phone: "020 8569 8081",
  },
  {
    name: "Epsom",
    address: "76 East Street, Epsom, Surrey KT17 1HF",
    phone: "01372 846290",
  },
  {
    name: "Tadworth",
    address: "19 Shelvers Hill, Tadworth, Surrey KT20 5PU",
    phone: "01737 813115",
  },
];

const privateServices = [
  {
    icon: "light_mode",
    title: "Teeth Whitening",
    description: "Professional brightening treatment.",
    duration: "45 mins",
    price: "From £250",
  },
  {
    icon: "straighten",
    title: "Invisalign Consultation",
    description: "Alignment assessment and scanning.",
    duration: "30 mins",
    price: "Free",
  },
  {
    icon: "dentistry",
    title: "Dental Implants",
    description: "Permanent tooth replacement.",
    duration: "60 mins",
    price: "From £1,500",
  },
  {
    icon: "auto_fix_high",
    title: "Veneers",
    description: "Porcelain or composite veneers.",
    duration: "60 mins",
    price: "From £400",
  },
];

const visitReasons = [
  { icon: "dentistry", label: "Check-up and clean" },
  { icon: "emergency", label: "Urgent or emergency" },
  { icon: "healing", label: "Ongoing treatment" },
  { icon: "help", label: "Something else" },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
];

function getWeekDates(): { day: string; date: number; month: string; full: string }[] {
  const dates: { day: string; date: number; month: string; full: string }[] = [];
  const today = new Date();
  // Start from next Monday
  const daysUntilMonday = (8 - today.getDay()) % 7 || 7;
  const nextMonday = new Date(today);
  nextMonday.setDate(today.getDate() + daysUntilMonday);

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  for (let i = 0; i < 5; i++) {
    const d = new Date(nextMonday);
    d.setDate(nextMonday.getDate() + i);
    dates.push({
      day: dayNames[d.getDay()],
      date: d.getDate(),
      month: monthNames[d.getMonth()],
      full: d.toISOString().split("T")[0],
    });
  }
  return dates;
}

export default function BookPage() {
  const [patientType, setPatientType] = useState<PatientType>(null);
  const [careType, setCareType] = useState<CareType>(null);
  const [selectedClinic, setSelectedClinic] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const weekDates = getWeekDates();

  // Determine which steps to show
  const showCareType = patientType === "new";
  const showClinic = patientType === "existing" || (patientType === "new" && careType !== null);
  const showReason = patientType === "existing" && selectedClinic !== null;
  const showService = patientType === "new" && careType === "private" && selectedClinic !== null;
  const showSchedule =
    (patientType === "existing" && selectedReason !== null) ||
    (patientType === "new" && careType === "nhs" && selectedClinic !== null) ||
    (patientType === "new" && careType === "private" && selectedService !== null);
  const showConfirm = showSchedule && selectedDate !== null && selectedTime !== null;

  // Step count for progress bar
  function getStepInfo() {
    if (patientType === "existing") {
      // Existing: Patient type > Clinic > Reason > Schedule > Confirm
      let current = 1;
      if (selectedClinic) current = 2;
      if (selectedReason) current = 3;
      if (selectedDate && selectedTime) current = 4;
      if (submitted) current = 5;
      return { current, total: 5 };
    }
    if (careType === "nhs") {
      // NHS new: Patient type > Care type > Clinic > Schedule > Confirm
      let current = 1;
      if (careType) current = 2;
      if (selectedClinic) current = 3;
      if (selectedDate && selectedTime) current = 4;
      if (submitted) current = 5;
      return { current, total: 5 };
    }
    if (careType === "private") {
      // Private new: Patient type > Care type > Clinic > Service > Schedule > Confirm
      let current = 1;
      if (careType) current = 2;
      if (selectedClinic) current = 3;
      if (selectedService) current = 4;
      if (selectedDate && selectedTime) current = 5;
      if (submitted) current = 6;
      return { current, total: 6 };
    }
    return { current: 1, total: 5 };
  }

  const { current: stepCurrent, total: stepTotal } = getStepInfo();

  if (submitted) {
    const clinic = clinics.find((c) => c.name === selectedClinic);
    const dateObj = weekDates.find((d) => d.full === selectedDate);
    return (
      <main className="pt-32 pb-20 px-6 max-w-2xl mx-auto text-center">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <span
            className="material-symbols-outlined text-primary text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold font-headline text-on-surface">
          Booking Request Sent
        </h1>
        <p className="mt-4 text-on-surface-variant max-w-md mx-auto">
          We&rsquo;ll be in touch shortly to confirm your appointment. If it&rsquo;s
          urgent, please call the clinic directly.
        </p>

        <div className="mt-8 bg-surface-container-low rounded-2xl p-6 text-left space-y-3">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">location_on</span>
            <div>
              <p className="font-bold text-on-surface">{clinic?.name}</p>
              <p className="text-sm text-on-surface-variant">{clinic?.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">calendar_today</span>
            <p className="text-on-surface">
              {dateObj?.day} {dateObj?.date} {dateObj?.month} at {selectedTime}
            </p>
          </div>
          {patientType === "new" && (
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">badge</span>
              <p className="text-on-surface">
                New {careType === "nhs" ? "NHS" : "Private"} Patient
              </p>
            </div>
          )}
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">call</span>
            <Link
              href={`tel:${clinic?.phone.replace(/\s/g, "")}`}
              className="text-primary font-semibold hover:underline"
            >
              {clinic?.phone}
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/"
            className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
      <header className="space-y-2 mb-8">
        <h1 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface">
          Book Your Visit
        </h1>
        <p className="text-on-surface-variant max-w-xl">
          Whether you&rsquo;re NHS or private, new or returning - we&rsquo;ll find
          the right appointment for you.
        </p>
      </header>

      {/* Progress bar */}
      <div className="flex items-center gap-1.5 mb-12">
        {Array.from({ length: stepTotal }).map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1.5 rounded-full transition-colors ${
              i < stepCurrent
                ? "bg-primary"
                : "bg-surface-container-highest"
            }`}
          />
        ))}
      </div>

      <div className="space-y-10">
        {/* Step: Patient Type */}
        <section className="space-y-4">
          <StepHeading
            number={1}
            title="Are you an existing patient?"
            active={true}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <SelectionCard
              icon="person"
              title="Yes, I'm a returning patient"
              subtitle="I've visited a BrightSmile clinic before"
              selected={patientType === "existing"}
              onClick={() => {
                setPatientType("existing");
                setCareType(null);
                setSelectedClinic(null);
                setSelectedService(null);
                setSelectedReason(null);
                setSelectedDate(null);
                setSelectedTime(null);
              }}
            />
            <SelectionCard
              icon="person_add"
              title="I'm a new patient"
              subtitle="This will be my first visit"
              selected={patientType === "new"}
              onClick={() => {
                setPatientType("new");
                setCareType(null);
                setSelectedClinic(null);
                setSelectedService(null);
                setSelectedReason(null);
                setSelectedDate(null);
                setSelectedTime(null);
              }}
            />
          </div>
        </section>

        {/* Step: NHS or Private (new patients only) */}
        {showCareType && (
          <section className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <StepHeading
              number={2}
              title="How would you like to be seen?"
              active={true}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SelectionCard
                icon="health_and_safety"
                title="NHS Patient"
                subtitle="Standard NHS dental care - charges apply per NHS band"
                selected={careType === "nhs"}
                onClick={() => {
                  setCareType("nhs");
                  setSelectedClinic(null);
                  setSelectedService(null);
                  setSelectedDate(null);
                  setSelectedTime(null);
                }}
              />
              <SelectionCard
                icon="workspace_premium"
                title="Private Patient"
                subtitle="Full range of cosmetic and specialist treatments"
                selected={careType === "private"}
                onClick={() => {
                  setCareType("private");
                  setSelectedClinic(null);
                  setSelectedService(null);
                  setSelectedDate(null);
                  setSelectedTime(null);
                }}
              />
            </div>
            {careType === "nhs" && (
              <div className="flex items-start gap-3 bg-primary/5 rounded-xl p-4 mt-2">
                <span className="material-symbols-outlined text-primary mt-0.5">info</span>
                <p className="text-sm text-on-surface-variant">
                  NHS treatment is charged in{" "}
                  <span className="font-semibold text-on-surface">three standard bands</span>{" "}
                  set by the NHS. Your dentist will explain which band applies at your
                  appointment. New NHS patients are always welcome.
                </p>
              </div>
            )}
          </section>
        )}

        {/* Step: Choose Clinic */}
        {showClinic && (
          <section className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <StepHeading
              number={patientType === "existing" ? 2 : 3}
              title="Choose your clinic"
              active={true}
            />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {clinics.map((clinic) => (
                <button
                  key={clinic.name}
                  onClick={() => {
                    setSelectedClinic(clinic.name);
                    setSelectedService(null);
                    setSelectedReason(null);
                    setSelectedDate(null);
                    setSelectedTime(null);
                  }}
                  className={`text-left p-5 rounded-xl transition-all ${
                    selectedClinic === clinic.name
                      ? "bg-surface-container-lowest border-2 border-primary shadow-xs"
                      : "bg-surface-container-low border-2 border-transparent hover:bg-surface-container-highest"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>
                    <h3 className="font-bold text-on-surface">{clinic.name}</h3>
                  </div>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    {clinic.address}
                  </p>
                  <p className="text-xs text-primary font-semibold mt-2">
                    {clinic.phone}
                  </p>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step: Visit Reason (existing patients) */}
        {showReason && (
          <section className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <StepHeading
              number={3}
              title="What do you need?"
              active={true}
            />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {visitReasons.map((reason) => (
                <button
                  key={reason.label}
                  onClick={() => {
                    setSelectedReason(reason.label);
                    setSelectedDate(null);
                    setSelectedTime(null);
                  }}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl text-center transition-all ${
                    selectedReason === reason.label
                      ? "bg-surface-container-lowest border-2 border-primary shadow-xs"
                      : "bg-surface-container-low border-2 border-transparent hover:bg-surface-container-highest"
                  }`}
                >
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {reason.icon}
                  </span>
                  <span className="text-sm font-semibold text-on-surface">
                    {reason.label}
                  </span>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step: Service (private new patients) */}
        {showService && (
          <section className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <StepHeading
              number={4}
              title="What treatment are you interested in?"
              active={true}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {privateServices.map((service) => (
                <button
                  key={service.title}
                  onClick={() => {
                    setSelectedService(service.title);
                    setSelectedDate(null);
                    setSelectedTime(null);
                  }}
                  className={`flex items-start gap-4 p-5 rounded-xl text-left transition-all ${
                    selectedService === service.title
                      ? "bg-surface-container-lowest border-2 border-primary shadow-xs"
                      : "bg-surface-container-low border-2 border-transparent hover:bg-surface-container-highest"
                  }`}
                >
                  <span className="material-symbols-outlined text-primary text-2xl mt-0.5">
                    {service.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-on-surface">{service.title}</h3>
                    <p className="text-sm text-on-surface-variant">
                      {service.description}
                    </p>
                    <p className="mt-2 text-xs font-bold text-primary">
                      {service.duration} &bull; {service.price}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        )}

        {/* Step: Schedule */}
        {showSchedule && (
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <StepHeading
              number={
                patientType === "existing"
                  ? 4
                  : careType === "private"
                    ? 5
                    : 4
              }
              title="Choose a date and time"
              active={true}
            />

            {/* Date picker */}
            <div>
              <p className="text-sm font-semibold text-on-surface mb-3">
                Next available week
              </p>
              <div className="flex gap-3">
                {weekDates.map((d) => (
                  <button
                    key={d.full}
                    onClick={() => {
                      setSelectedDate(d.full);
                      setSelectedTime(null);
                    }}
                    className={`flex-1 flex flex-col items-center gap-1 py-4 rounded-xl transition-all ${
                      selectedDate === d.full
                        ? "bg-primary text-on-primary shadow-xs"
                        : "bg-surface-container-low text-on-surface hover:bg-surface-container-highest"
                    }`}
                  >
                    <span className="text-xs font-medium opacity-70">{d.day}</span>
                    <span className="text-lg font-bold">{d.date}</span>
                    <span className="text-xs opacity-70">{d.month}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Time slots */}
            {selectedDate && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                <p className="text-sm font-semibold text-on-surface mb-3">
                  Available times
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-2 rounded-lg text-sm font-semibold transition-all ${
                        selectedTime === time
                          ? "bg-primary text-on-primary shadow-xs"
                          : "bg-surface-container-low text-on-surface hover:bg-surface-container-highest"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* Confirm & Submit */}
        {showConfirm && (
          <section className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
            <StepHeading
              number={
                patientType === "existing"
                  ? 5
                  : careType === "private"
                    ? 6
                    : 5
              }
              title="Your details"
              active={true}
            />
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low border-2 border-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1.5">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="07700 900000"
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low border-2 border-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-on-surface mb-1.5">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface-container-low border-2 border-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none transition-colors"
                />
              </div>
              {patientType === "new" && (
                <div>
                  <label className="block text-sm font-semibold text-on-surface mb-1.5">
                    Anything we should know?{" "}
                    <span className="font-normal text-on-surface-variant">(optional)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. nervous patient, mobility needs, preferred language..."
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low border-2 border-transparent text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none transition-colors resize-none"
                  />
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="bg-surface-container-low rounded-xl p-5 space-y-2">
              <h4 className="font-bold text-on-surface text-sm mb-3">Booking summary</h4>
              <SummaryRow icon="location_on" label={selectedClinic ?? ""} />
              <SummaryRow
                icon="calendar_today"
                label={`${weekDates.find((d) => d.full === selectedDate)?.day} ${weekDates.find((d) => d.full === selectedDate)?.date} ${weekDates.find((d) => d.full === selectedDate)?.month} at ${selectedTime}`}
              />
              {patientType === "new" && (
                <SummaryRow
                  icon="badge"
                  label={`New ${careType === "nhs" ? "NHS" : "Private"} Patient`}
                />
              )}
              {selectedReason && <SummaryRow icon="dentistry" label={selectedReason} />}
              {selectedService && <SummaryRow icon="dentistry" label={selectedService} />}
            </div>

            <Button
              onClick={() => setSubmitted(true)}
              className="w-full bg-gradient-primary text-on-primary py-4 rounded-full font-bold text-lg shadow-lg hover:scale-[1.02] transition-all h-auto border-none"
              size="lg"
            >
              Request Appointment
              <span className="material-symbols-outlined ml-1">arrow_forward</span>
            </Button>

            <p className="text-xs text-center text-on-surface-variant">
              This is a booking request, not a confirmed appointment. Our team will
              contact you to confirm availability.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}

/* ── Reusable components ── */

function StepHeading({
  number,
  title,
  active,
}: {
  number: number;
  title: string;
  active: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
          active
            ? "bg-primary text-on-primary"
            : "bg-surface-container-highest text-on-surface-variant"
        }`}
      >
        {number}
      </span>
      <h2 className="text-xl font-bold font-headline">{title}</h2>
    </div>
  );
}

function SelectionCard({
  icon,
  title,
  subtitle,
  selected,
  onClick,
}: {
  icon: string;
  title: string;
  subtitle: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex items-start gap-4 p-5 rounded-xl text-left transition-all ${
        selected
          ? "bg-surface-container-lowest border-2 border-primary shadow-xs"
          : "bg-surface-container-low border-2 border-transparent hover:bg-surface-container-highest"
      }`}
    >
      <span className="material-symbols-outlined text-primary text-2xl mt-0.5">
        {icon}
      </span>
      <div>
        <h3 className="font-bold text-on-surface">{title}</h3>
        <p className="text-sm text-on-surface-variant mt-0.5">{subtitle}</p>
      </div>
    </button>
  );
}

function SummaryRow({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-primary text-lg">{icon}</span>
      <span className="text-sm text-on-surface">{label}</span>
    </div>
  );
}
