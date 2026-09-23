import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBG from "./main-header-bg";
import classes from "./main-header.module.css";
import NavLink from "./nav-link";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBG />

      <header className={classes.header}>
        <NavLink href="/" className={classes.logo}>
          <Image src={logoImg} alt="A foodies here" priority />
          NextLevel Food
        </NavLink>

        <nav className={classes.nav}>
          <ul>
            <li>
            <NavLink href="/meals"> Browse Meals </NavLink>
            </li>
            <li>
            <NavLink href="/community"> Foodies Community </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
