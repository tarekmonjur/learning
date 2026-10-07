"use client";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import classes from "./nav-link.module.css";

function NavLinkSuspense({ href, className, children }) {
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
  )
}

export default function NavLink(props) {
  return (
    <Suspense fallback="">
      <NavLinkSuspense {...props} />
    </Suspense>
  );
}
