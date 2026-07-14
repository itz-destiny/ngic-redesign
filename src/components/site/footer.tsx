import { Mail } from "lucide-react";
import { NAV_LINKS, SITE, LEADERSHIP } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--brand-green)] via-[var(--brand-blue)] to-[var(--brand-violet)] font-heading text-sm font-bold text-black">
                N
              </span>
              <span className="font-heading text-lg font-semibold">
                {SITE.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              An initiative of the {SITE.organizer}, delivered in partnership
              with {SITE.partnerConsultancy}.
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/90 hover:text-[var(--brand-green)]"
            >
              <Mail className="size-4" />
              {SITE.email}
            </a>
          </div>

          <div>
            <div className="text-sm font-medium">Explore</div>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2">
            <div className="text-sm font-medium">Leadership Team</div>
            <ul className="mt-4 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {LEADERSHIP.map((person) => (
                <li key={person.name} className="text-sm">
                  <span className="text-foreground/90">{person.name}</span>
                  <span className="block text-muted-foreground">
                    {person.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.fullName}. All rights reserved.
          </p>
          <p className="max-w-lg">
            This is an independent redesign concept created to demonstrate a
            potential rebuild of nextgeninnovation.ng — not an official NBTI
            or Federal Government of Nigeria production.
          </p>
        </div>
      </div>
    </footer>
  );
}
