import Link from 'next/link'
import styles from '../styles/index.module.css'

export default function Index() {
  // Header e buttton no mesmo fundo
  return (
    <>
      <img src="/cover.png"  className={styles.cover}>

      </img>
      
      <Link href="/produtos">
        <button className={styles.products_button}>
            COMPRAR
        </button>
      </Link>
      
    </>
  )
}