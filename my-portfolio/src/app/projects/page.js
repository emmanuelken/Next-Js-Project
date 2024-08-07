import styles from '@/styles/projects.module.css'
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'TODOX',
    description: 'Task Management App',
    image: '/proj1.jpeg',
  },
  {
    title: 'EMPIRE-X',
    description: 'Crypto Exchange/Trading App',
    image: '/proj2.jpeg',
  },
  {
    title: 'SWIFT-TRAVELS',
    description: 'Travel Agency Website',
    image: '/proj3.jpeg',
  },
  {
    title: 'MOVIX',
    description: 'A Movie App',
    image: '/proj4.webp',
  },
];

export default function HomePage() {
  return (
    <div className={styles.container}>
  <main className={styles.main}>
    <h1 className={styles.title}>My Projects</h1>
    <div className={styles.projectList}>
      {projects.map((project, index) => (
        <div className={styles.projectCard} key={index}>
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  </main>
</div>

  )
}
