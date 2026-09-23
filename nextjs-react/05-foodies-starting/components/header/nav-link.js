"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export default function NavLink({ href, className, children }) {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={classNames(
        className,
        classes.link,
        pathname.startsWith(href) ? classes.active : null,
      )}
    >
      {children}
    </Link>
  );
}
