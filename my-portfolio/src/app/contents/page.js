// src/app/contents/page.js
import styles from '../../styles/Contents.module.css';

async function fetchContents() {
    try {
      const res = await fetch(`${process.env.BASE_URL}/api/contents`, {
        cache: 'no-store',
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const contents = await res.json();
      return contents;
    } catch (error) {
      console.error('Failed to fetch contents:', error);
      return [];
    }
  }
  

export default async function ContentsPage() {
  const contents = await fetchContents();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Content Page</h1>
        <section className={styles.contents}>
          <ul>
            {contents.map(content => (
              <li key={content.id} className={styles.contentCard}>
                <h2>{content.title}</h2>
                <p>{content.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
