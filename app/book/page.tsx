import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// Button from shadcn v4 uses @base-ui (no asChild)

export const metadata: Metadata = {
  title: "Book Appointment | Bright Smile Dental Care",
};

const services = [
  {
    icon: "dentistry",
    title: "Regular Checkup",
    description: "Cleaning, exam, and X-rays.",
    duration: "60 mins",
    price: "$120",
    selected: true,
  },
  {
    icon: "auto_fix_high",
    title: "Teeth Whitening",
    description: "Professional brightening treatment.",
    duration: "45 mins",
    price: "$250",
    selected: false,
  },
  {
    icon: "medical_services",
    title: "Emergency Care",
    description: "Same-day urgent dental assistance.",
    duration: "30 mins",
    price: "Varies",
    selected: false,
  },
  {
    icon: "orthopedics",
    title: "Invisalign Consult",
    description: "Alignment assessment and scanning.",
    duration: "30 mins",
    price: "Free",
    selected: false,
  },
];

const dentists = [
  {
    name: "Dr. Sarah L.",
    specialty: "General",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBRC4QYSeb88v904uIKt48X9swgpNL7kUWA5ovBw0pS_OkVwBqGMFJ-MTMSLcolrzO20-EEMipa7U5-l-wPXqoUQMfvsDozaM-OYOwOVeNFY77_d4GWgADNNjwLF3no3LKnocr-fSkvCAyXMGGkp9B3La1hkdDA_Cm3mIGOwXbpessaexMq1td0UIbM62Yn2pqJc4pjiFJNSDu6hixhNNBXzLTa9xtNOvUlIJr7XWHEx-pNqMB-pH_VBG4SeXcUmUVooSHGCmt7PM-s",
    selected: false,
  },
  {
    name: "Dr. Marcus K.",
    specialty: "Cosmetic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAtjynQvVJ2FUGyzXk--wTOAg7lYhrvg8oEqkFbyyqdXSPn4awAb2aZyyNzbjYBgSvDcpAz1_FFa88ANN4JU9D95ra9SGWAeNYQIrXcqJT5hnRZxQFYmIeDsIK-l7mwlqj9NVFFzxGyok4dzr1ANGT1sjT2z4cTR3CqpjDxV3SxQIeoQpREIV6Ez_aFPMrUbjgPi8XZFdRWB4JeKz6jnVfdOjzVsVNn01enoMBwYhia8P1xArX_ua2kKd_SXdx4SPXdqL5OihJxyoLj",
    selected: false,
  },
];

export default function BookPage() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Booking Canvas */}
        <div className="lg:col-span-8 space-y-8">
          <header className="space-y-2">
            <h1 className="text-4xl font-extrabold font-headline tracking-tight text-on-surface">
              Book Your Visit
            </h1>
            <p className="text-on-surface-variant max-w-xl">
              Experience dental care that feels like a spa day. Follow the steps
              below to find your perfect time.
            </p>
          </header>

          {/* Multi-Step Indicator */}
          <div className="flex items-center gap-2 mb-12">
            <div className="flex-1 h-1.5 rounded-full bg-primary" />
            <div className="flex-1 h-1.5 rounded-full bg-surface-container-highest" />
            <div className="flex-1 h-1.5 rounded-full bg-surface-container-highest" />
            <div className="flex-1 h-1.5 rounded-full bg-surface-container-highest" />
          </div>

          {/* Step 1: Select Service */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-sm">
                1
              </span>
              <h2 className="text-xl font-bold font-headline">
                Select Service
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <button
                  key={service.title}
                  className={`flex items-start gap-4 p-5 rounded-xl text-left transition-all ${
                    service.selected
                      ? "bg-surface-container-lowest border-2 border-primary-container"
                      : "bg-surface-container-low hover:bg-surface-container-highest"
                  }`}
                >
                  <span className="material-symbols-outlined text-primary text-3xl">
                    {service.icon}
                  </span>
                  <div>
                    <h3 className="font-bold text-on-surface">
                      {service.title}
                    </h3>
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

          {/* Step 2: Choose Dentist */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold text-sm">
                  2
                </span>
                <h2 className="text-xl font-bold font-headline">
                  Choose a Dentist
                </h2>
              </div>
              <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-widest italic">
                Optional
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              {dentists.map((dentist) => (
                <button
                  key={dentist.name}
                  className="flex flex-col items-center p-4 rounded-xl bg-surface-container-low hover:bg-surface-container-highest transition-all min-w-[120px] text-center"
                >
                  <Image
                    className="w-16 h-16 rounded-full object-cover mb-3 grayscale"
                    alt={`Portrait of ${dentist.name}`}
                    src={dentist.image}
                    width={64}
                    height={64}
                  />
                  <span className="font-bold text-sm text-on-surface">
                    {dentist.name}
                  </span>
                  <span className="text-xs text-on-surface-variant">
                    {dentist.specialty}
                  </span>
                </button>
              ))}

              {/* Any Available option */}
              <button className="flex flex-col items-center p-4 rounded-xl bg-surface-container-lowest border-2 border-primary-container transition-all min-w-[120px] text-center">
                <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-3">
                  <span className="material-symbols-outlined text-primary">
                    groups
                  </span>
                </div>
                <span className="font-bold text-sm text-on-surface">
                  Any Available
                </span>
                <span className="text-xs text-on-surface-variant">
                  Fastest booking
                </span>
              </button>
            </div>
          </section>

          {/* Navigation Action */}
          <div className="flex justify-end pt-8">
            <Button
              className="bg-gradient-primary text-on-primary px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all h-auto border-none"
              size="lg"
            >
              Continue to Schedule
              <span className="material-symbols-outlined">arrow_forward</span>
            </Button>
          </div>
        </div>

        {/* Sidebar Reassurance */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-low rounded-xl p-8 space-y-8 sticky top-28">
            <h3 className="text-2xl font-bold font-headline text-on-surface tracking-tight">
              Why Patients Love Us
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white flex items-center justify-center text-primary shadow-xs">
                  <span className="material-symbols-outlined">verified</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">
                    Zero-Pain Guarantee
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    We use the latest sedation and gentle care techniques for a
                    stress-free experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white flex items-center justify-center text-secondary shadow-xs">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">On-Time Policy</h4>
                  <p className="text-sm text-on-surface-variant">
                    Your time is valuable. We pride ourselves on seen patients
                    within 5 minutes of their slot.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white flex items-center justify-center text-tertiary shadow-xs">
                  <span className="material-symbols-outlined">spa</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">
                    Relaxation Lounge
                  </h4>
                  <p className="text-sm text-on-surface-variant">
                    Complimentary tea, noise-canceling headphones, and weighted
                    blankets available.
                  </p>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="pt-6 border-t border-outline-variant/20">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-yellow-500 text-sm"
                      style={{
                        fontVariationSettings: "'FILL' 1",
                      }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <span className="text-xs font-bold text-on-surface">
                  4.9/5 Google Rating
                </span>
              </div>
              <p className="text-xs italic text-on-surface-variant">
                &ldquo;The most relaxing dental experience I&rsquo;ve ever had.
                It felt more like a spa visit than a checkup.&rdquo; &mdash;
                Elena R.
              </p>
            </div>

            {/* Clinic Image */}
            <div className="rounded-xl overflow-hidden relative h-40">
              <Image
                className="w-full h-full object-cover"
                alt="Modern luxury dental clinic interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFgB1OmZ1A08cKtEcMZJqy6KKRS4K_4Zvw7e3cowmWq97Xbuxx8YgKoj4I3OOxuroRZIfxd90krpnNejVPJfIELhOGLnW4cJkVx5jLFalbpScDET74ymn1N9Dfk8krzk92Dbp7NbYtdllt_D0taGGnURq_OIuCvp_5MG1NH6wdhfdYeh1HFYZq-eQ7Nn2kOedYl02gezyllTzuvWY318XMVAHgm6q5MqH2mF6GnpivPpaCZ2NOxOHkC_nNE6JqCp2FqsxDzhVC7TN5"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent flex items-end p-4">
                <span className="text-white text-xs font-medium">
                  Tour our sanctuary
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
