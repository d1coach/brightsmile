import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-5xl font-extrabold font-headline tracking-tight text-on-surface">
          Bright Smile Dental Care
        </h1>
        <p className="max-w-lg text-lg text-on-surface-variant">
          Redefining modern dentistry with a focus on patient comfort, radiant
          aesthetics, and long-term health.
        </p>
        <Link
          href="/book"
          className={buttonVariants({ className: "bg-gradient-primary text-on-primary px-8 py-3 rounded-full font-bold text-base shadow-lg hover:scale-105 transition-all h-auto border-none" })}
        >
          Book Your Visit
        </Link>
      </main>
    </div>
  );
}
