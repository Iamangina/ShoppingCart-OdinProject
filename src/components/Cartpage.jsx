import styles from './Cartpage.module.css';
import { useOutletContext } from 'react-router';

export default function Cartpage(){
    
    const { cart } = useOutletContext();
    const {increase} = useOutletContext();
    const {decrease} = useOutletContext();

    const sumTotal = cart.reduce((total, product) => {
            return total + (product.quantity*product.price)}, 0);

    return(
        <>
            <h1 className={styles.title}>Your cart</h1>
            <div className={styles.titles}>
                <p>Products</p>
                <div className={styles.titlePriceQ}>
                    <p>Quantity</p>
                    <p>Total</p>
                </div>
            </div>
            <div className={styles.cartgrid}>
                {cart.map(product => (
                    
                    <div key={product.id} className={styles.productcard}>
                        <img className={styles.productimg} src={product.img} alt={product.title} />
                        <div className={styles.info}>
                            <p className={styles.producttitle}>{product.title}</p>
                            <p className={styles.productprice}>${product.price}</p>
                        </div>
                        <div className={styles.totalAndQuantity}>
                            <div className={styles.quantityBtn}>
                                <button onClick={() => decrease(product.id)}>-</button>
                                <p className={styles.productquantity}>{product.quantity}</p>
                                <button onClick={() => increase(product.id)}>+</button>
                            </div>
                            <p className={styles.producttotal}>{product.quantity*product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <h3 className={styles.sumTotal}> Estimated total {sumTotal} </h3>
        </>
    )
}