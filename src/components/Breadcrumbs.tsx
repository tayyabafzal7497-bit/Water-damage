import Link from "next/link";
import { IconChevronDown } from "./icons";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="container-x py-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink/60">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <IconChevronDown className="h-3.5 w-3.5 -rotate-90 text-ink/30" />
            )}
            {item.href ? (
              <Link href={item.href} className="hover:text-sky-deep hover:underline">
                {item.name}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-ink">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
