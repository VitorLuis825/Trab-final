import styles from '../../styles/product.module.css'

export default function Product({product}){
    return(
        <div className={styles.page_wrapper}>
          <div className={styles.wizard}>
            Home/Loja/ {product.title}
          </div>
          <div className={styles.product_container}>
            <img src={product.image}></img>
            <div className={styles.texts}>
                <h1>{product.title}</h1>
                <p className={styles.desc}>{product.description}</p>
                <p className={styles.price}>R$ {product.price}</p>
            </div>
          </div>
        </div>
    )
}

export async function getStaticProps(context){
    const response = await fetch('https://fakestoreapi.com/products/' + String(context.params.id))
    const product = await response.json()
    console.log("eba")
    console.log(product)
    return{
        props : {product}
    }
}

export async function getStaticPaths(){
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    const paths = data.map((produto)=>{
        return {params : {id : String(produto.id)}}
    })
    return{
        paths,
        fallback : true
    }
}
