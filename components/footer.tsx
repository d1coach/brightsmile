import Link from "next/link";
import Image from "next/image";

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

export function Footer() {
  return (
    <footer className="bg-on-surface text-surface py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Image
              alt="BrightSmile Dental Care"
              src="/logo-light.png"
              width={180}
              height={34}
            />
            <p className="text-surface/70 text-sm leading-relaxed max-w-xs">
              Three modern clinics across Surrey and West London - proudly
              NHS-friendly and open to everyone. The dentistry patients actually
              recommend.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link
                href="https://instagram.com/brightsmile.group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-surface/50 hover:text-primary-container transition-colors"
                aria-label="Instagram"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </Link>
            </div>
          </div>

          {/* Clinics */}
          {clinics.map((clinic) => (
            <div key={clinic.name} className="space-y-3">
              <h3 className="font-bold font-headline text-base text-surface">
                {clinic.name}
              </h3>
              <p className="text-surface/60 text-sm">{clinic.address}</p>
              <Link
                href={`tel:${clinic.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-primary-container font-semibold text-sm hover:underline"
              >
                <span className="material-symbols-outlined text-lg">call</span>
                {clinic.phone}
              </Link>
              <Link
                href={`mailto:${clinic.email}`}
                className="flex items-center gap-2 text-surface/60 text-sm hover:text-primary-container transition-colors"
              >
                <span className="material-symbols-outlined text-lg">mail</span>
                {clinic.email}
              </Link>
            </div>
          ))}
        </div>

        {/* Opening hours bar */}
        <div className="border-t border-surface/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center gap-6 text-sm text-surface/60">
            <span className="font-semibold text-surface/80 flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">schedule</span>
              Opening Hours
            </span>
            <span>Mon – Thu: 9:00am – 6:00pm</span>
            <span>Fri: 9:00am – 5:00pm</span>
            <span>Sat: By appointment only</span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="border-t border-surface/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface/40 text-xs">
            &copy; {new Date().getFullYear()} BrightSmile Dental Care. All
            rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6 text-xs text-surface/40">
            <Link href="#" className="hover:text-surface/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-surface/70 transition-colors">
              Complaints Procedure
            </Link>
            <Link href="#" className="hover:text-surface/70 transition-colors">
              Missed Appointment Policy
            </Link>
            <Link href="#" className="hover:text-surface/70 transition-colors">
              Patient Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
