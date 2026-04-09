import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-50 w-full py-12 px-6 border-t border-zinc-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="space-y-4">
          <span className="text-lg font-bold text-zinc-900 font-headline">
            Bright Smile Dental Care
          </span>
          <p className="text-zinc-500 text-sm max-w-xs">
            Redefining modern dentistry with a focus on patient comfort, radiant
            aesthetics, and long-term health.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Link
              className="text-zinc-500 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Contact Us
            </Link>
            <Link
              className="text-zinc-500 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              className="text-zinc-500 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-zinc-500 hover:text-primary transition-colors text-sm"
              href="#"
            >
              Patient Portal
            </Link>
          </div>
        </div>

        <div className="space-y-4 text-left md:text-right">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Bright Smile Dental Care. All
            rights reserved.
          </p>
          <div className="flex justify-start md:justify-end gap-4">
            <span className="material-symbols-outlined text-zinc-400 hover:text-primary cursor-pointer transition-colors">
              social_leaderboard
            </span>
            <span className="material-symbols-outlined text-zinc-400 hover:text-primary cursor-pointer transition-colors">
              photo_camera
            </span>
            <span className="material-symbols-outlined text-zinc-400 hover:text-primary cursor-pointer transition-colors">
              emergency
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
