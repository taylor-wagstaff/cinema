import styles from './page.module.css'
import Card from '../../components/card'
import { movieData } from './moviedata'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <Card data={movieData[0]} />
        <Card data={movieData[1]} />
        <Card data={movieData[2]} />
        <Card data={movieData[3]} />

      </div>
    </main>
  )
}
