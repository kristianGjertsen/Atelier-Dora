"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

//Hjem

export default function Header() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Hjem" },
    { href: "/utstillinger", label: "Utstillinger" },
    { href: "/kunstnere", label: "Kunstnere" },
    { href: "/galleri", label: "Galleri" },
  ];
  return (
<header className="sticky top-0 z-50 bg-canvas shadow-sm">
  <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
  <Link href="/" className="text-xl font-bold text-charcoal">Galleri</Link>
  <ul className="flex gap-6 text-sm">
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={active ? "border-b-2 border-dust-blue text-dust-blue pb-1" : "text-charcoal hover:text-highlight"}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
