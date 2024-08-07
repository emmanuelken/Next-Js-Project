// src/app/about/page.js
import Image from 'next/image';
import styles from '@/styles/About.module.css';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <div className={styles.profile}>
          <Image
            src="/portIMG.jpg" 
            alt="Profile Picture"
            width={250}
            height={250}
            className={styles.profileImage}
          />
          <div className={styles.profileText}>
            <p>
              I am a Software developer with passion for creating stunning and efficient websites/Apps. 
              I have experience in various technologies including React, Next.js, Node.js, and more.
              My projects showcase my ability to handle complex challenges and deliver exceptional results.
            </p>
          </div>
        </div>
        <section className={styles.skills}>
          <h2>Skills</h2>
          <ul>
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </section>
        <section className={styles.hobbies}>
          <h2>Hobbies</h2>
          <p>I enjoy Coding, Music, Video games, Reading and Hanging out with friends in my free time.</p>
        </section>
      </main>
    </div>
  );
}
