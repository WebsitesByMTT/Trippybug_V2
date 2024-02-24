import Image from "next/image";
import styles from "./navbar.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href={"/"} className={styles.logo}>
          <Image className={styles.image} src={"/logo.png"} fill alt="logo" />
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href={"/flights "}>Flights</Link>
          </li>
          <li>
            <Link href={"/hotels "}>Hotels</Link>
          </li>
          <li>
            <Link href={"/cars "}>Cars</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
