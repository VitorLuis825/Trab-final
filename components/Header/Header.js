import Link from "next/link";
import styles from './Header.module.css'

export default function Home() {
  return (
    <header className={styles.hedaer}>
        <Link href={'/'}>
          <img src="/logo.png" alt="logo"></img>
        </Link>
        <div className={styles.buttons}>
          <button>Loja</button>
          <button>Fale Conosco</button>
          <button>Quem somos</button>
        </div>
        <div>
          <img src="/icon1.png" alt="icone"></img>
          <img src="/icon2.png" alt="icone2"></img>
        </div>
    </header>
  )
}