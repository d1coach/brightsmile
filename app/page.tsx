import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

const services = [
  {
    icon: "health_and_safety",
    title: "NHS Dentistry",
    description:
      "We proudly welcome NHS patients - new and existing. You'll always receive the best possible care available under the NHS first.",
  },
  {
    icon: "dentistry",
    title: "General & Family Dentistry",
    description:
      "Check-ups, fillings, crowns, bridges, root canals, and extractions - delivered gently and explained clearly.",
  },
  {
    icon: "straighten",
    title: "Invisalign & Orthodontics",
    description:
      "Straighter teeth without metal braces. Discreet, comfortable aligners fitted by our experienced team.",
  },
  {
    icon: "light_mode",
    title: "Teeth Whitening",
    description:
      "Professional whitening that's safe, effective, and tailored to your goals. Brighter results in just one visit.",
  },
  {
    icon: "emergency",
    title: "Emergency Dental Care",
    description:
      "In pain? Call your nearest branch. We do our best to see emergencies the same day or next day.",
  },
  {
    icon: "child_care",
    title: "Children's Dentistry",
    description:
      "A calm, friendly environment where young patients learn to love looking after their teeth - no fear, just fun.",
  },
];

const clinics = [
  {
    name: "Isleworth",
    address: "41 South Street, Isleworth, Middlesex TW7 7AA",
    phone: "020 8569 8081",
    email: "mail@isleworth.brightsmile.co.uk",
  },
  {
    name: "Epsom",
    address: "76 East Street, Epsom, Surrey KT17 1HF",
    phone: "01372 846290",
    email: "mail@epsom.brightsmile.co.uk",
  },
  {
    name: "Tadworth",
    address: "19 Shelvers Hill, Tadworth, Surrey KT20 5PU",
    phone: "01737 813115",
    email: "mail@tadworth.brightsmile.co.uk",
  },
];

const commitments = [
  {
    icon: "visibility",
    title: "Transparent Pricing",
    description: "Clear, written estimates before any treatment. No hidden fees. No surprises.",
  },
  {
    icon: "schedule",
    title: "Same-Week Appointments",
    description: "Online booking 24/7. Extended hours and weekend slots at every clinic.",
  },
  {
    icon: "favorite",
    title: "Fear-Free Care",
    description:
      "A gentle, patient approach every time. Nervous? Just let us know and we'll look after you.",
  },
  {
    icon: "forum",
    title: "Honest Communication",
    description:
      "Everything explained in plain English. No jargon, no judgement, no pressure.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container-lowest via-background to-primary-container/20" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-primary-container/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary-container/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="material-symbols-outlined text-lg">verified</span>
            Proudly NHS-Friendly - New Patients Welcome
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight text-on-surface leading-tight">
            The Dentist You&rsquo;ll{" "}
            <span className="text-primary">Actually</span>{" "}
            Recommend
          </h1>

          <p className="mt-6 text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Three modern clinics across Surrey and West London, built around one
            idea: dental care so good, patients look forward to coming back.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className={buttonVariants({
                className:
                  "bg-gradient-primary text-on-primary px-8 py-3.5 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all h-auto border-none",
              })}
            >
              Book Your Visit
            </Link>
            <Link
              href="tel:02085698081"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline transition-colors"
            >
              <span className="material-symbols-outlined">call</span>
              Or Call Us Now
            </Link>
          </div>

          {/* Trust bar */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-on-surface-variant">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">star</span>
              <span className="font-semibold text-on-surface">4.8★</span> from 500+ reviews
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">groups</span>
              3 clinics across Surrey &amp; London
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">health_and_safety</span>
              NHS &amp; Private
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Promise ── */}
      <section id="about" className="py-20 px-6 bg-surface-container-low scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface">
              Our Promise to Every Patient
            </h2>
            <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">
              Gentle, honest, and always on your side - whether you&rsquo;re NHS
              or private, every visit is built around your comfort and your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-sm transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {item.icon}
                  </span>
                </div>
                <h3 className="font-bold text-on-surface text-lg font-headline">
                  {item.title}
                </h3>
                <p className="mt-2 text-on-surface-variant text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface">
              Everything Your Smile Needs
            </h2>
            <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">
              From routine check-ups to specialist treatments, all under one
              roof - and always with the NHS option explained first.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group border border-outline-variant/50 rounded-2xl p-6 hover:border-primary/30 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-container/30 flex items-center justify-center mb-4 group-hover:bg-primary-container/50 transition-colors">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-bold text-on-surface text-lg font-headline">
                  {service.title}
                </h3>
                <p className="mt-2 text-on-surface-variant text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NHS Welcome Banner ── */}
      <section className="py-16 px-6 bg-gradient-primary text-on-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline flex items-center justify-center gap-3 flex-wrap">
            <Image
              src="/nhs.svg"
              alt="NHS"
              width={80}
              height={32}
              className="inline-block rounded-xs"
            />
            <span>Patients Are Family</span>
          </h2>
          <p className="mt-4 text-on-primary/90 max-w-2xl mx-auto text-lg leading-relaxed">
            We always explore the best NHS options first. Private treatments
            are only suggested when they&rsquo;re genuinely clinically beneficial
            - and the choice is always yours.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 mt-8 bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:scale-105 transition-transform shadow-lg"
          >
            Register as an NHS Patient
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ── Find Your Clinic ── */}
      <section id="clinics" className="py-20 px-6 bg-surface-container-low scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface">
              Find Your Nearest Clinic
            </h2>
            <p className="mt-4 text-on-surface-variant max-w-xl mx-auto">
              Three locations across Surrey and West London. Same-week
              appointments wherever possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clinics.map((clinic) => (
              <div
                key={clinic.name}
                className="bg-white rounded-2xl p-8 shadow-xs hover:shadow-sm transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-secondary text-2xl">
                    location_on
                  </span>
                </div>
                <h3 className="text-xl font-bold font-headline text-on-surface">
                  {clinic.name}
                </h3>
                <p className="mt-2 text-on-surface-variant text-sm">
                  {clinic.address}
                </p>
                <div className="mt-4 space-y-2">
                  <Link
                    href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                  >
                    <span className="material-symbols-outlined text-lg">call</span>
                    {clinic.phone}
                  </Link>
                  <Link
                    href={`mailto:${clinic.email}`}
                    className="flex items-center gap-2 text-on-surface-variant text-sm hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-lg">mail</span>
                    {clinic.email}
                  </Link>
                </div>
                <div className="mt-4 pt-4 border-t border-outline-variant/30">
                  <p className="text-xs text-on-surface-variant">
                    <span className="font-semibold">Mon–Thu:</span> 9am – 6pm
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    <span className="font-semibold">Fri:</span> 9am – 5pm
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    <span className="font-semibold">Sat:</span> By appointment
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-on-surface">
            Ready for a Better Dental Experience?
          </h2>
          <p className="mt-4 text-on-surface-variant text-lg max-w-xl mx-auto">
            Book online in seconds, or call your nearest clinic. New NHS
            patients are always welcome.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/book"
              className={buttonVariants({
                className:
                  "bg-gradient-primary text-on-primary px-8 py-3.5 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all h-auto border-none",
              })}
            >
              Book Appointment
            </Link>
            <Link
              href="tel:02085698081"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <span className="material-symbols-outlined">call</span>
              020 8569 8081
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
