import Link from 'next/link'
import styles from '../../styles/products.module.css'

export default function Products({products}) {
  return (
    <div className={styles.products_main}>
      <h2>Nossos produtos</h2>
      <hr></hr>
      <div className={styles.products_container}>
        {products.map((product)=>{
          return(
            <div className={styles.product} key={product.id}>
              <img src={product.image} />
              <div>
                <h2>{product.title}</h2>
                <span>R${product.price}</span>
                <Link href={"/produtos/" + product.id}>
                  <button>Comprar</button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
    
  )
}

export async function getStaticProps(){
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json()
  return{
    props : {products}
  }

}
