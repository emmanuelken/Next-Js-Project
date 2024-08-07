import styles from "./page.module.css";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      <h1 className={styles.title}>Hello! and Welcome</h1>
        <div className={styles.profile}>
          <Image
            src="/portIMG.jpg"  // Ensure this path points to your image in the public folder
            alt="Profile Picture"
            width={250}
            height={250}
            quality={100}
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <p>
            I'm Emmanuel Ken, a passionate developer with a flair for creating dynamic and innovative web applications.
            </p>
          </div>
        </div>
        <p className={styles.description}>Discover my projects, learn more about me, and get in touch.</p>
      </main>
    </div>
  );
}
