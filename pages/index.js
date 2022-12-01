import styles from "../styles/index.module.scss";
import Image from "next/image";
import Logo from "../assets/companyLogo.jpg";
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content_box}>
        <div className={styles.logoContainer}>
          <Image
            className={styles.logo_style}
            src={Logo}
            alt="company_logo"
            objectFit="contain"
          />
        </div>
        <h1>COMING SOON</h1>
      </div>
    </div>
  );
}
