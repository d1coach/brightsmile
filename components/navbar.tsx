import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-xs">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 h-20">
        <Link href="/" className="flex items-center">
          <Image
            alt="BrightSmile Dental Care"
            src="/logo.png"
            width={200}
            height={38}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            className="text-on-surface-variant hover:text-on-surface transition-colors font-medium"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface transition-colors font-medium"
            href="/#services"
          >
            Services
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface transition-colors font-medium"
            href="/#clinics"
          >
            Our Clinics
          </Link>
          <Link
            className="text-on-surface-variant hover:text-on-surface transition-colors font-medium"
            href="/#about"
          >
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="tel:02085698081"
            className="hidden lg:flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline"
          >
            <span className="material-symbols-outlined text-lg">call</span>
            020 8569 8081
          </Link>
          <Link
            href="/book"
            className={buttonVariants({
              className:
                "bg-gradient-primary text-on-primary px-6 py-2.5 rounded-full font-bold text-sm tracking-tight hover:scale-95 transition-transform duration-200 border-none",
            })}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
