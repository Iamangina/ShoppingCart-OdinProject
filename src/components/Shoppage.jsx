import swiss from '../pocketKnives/knife1.jpg';
import trail from '../pocketKnives/knife2.jpg';
import ranger from '../pocketKnives/knife3.webp';
import hunter from '../pocketKnives/knife4.webp';
import farmer from '../pocketKnives/knife5.webp';
import tinker from '../pocketKnives/knife6.webp';

import styles from './Shoppage.module.css';

import { useOutletContext } from 'react-router';

export default function Shoppage(){

    const { addToCart } = useOutletContext();

    

    const knives = [
        {
            id: 1,
            title: "SwissToolSpirit X Plus Ratchet",
            price: 58800,
            img: swiss,  
            quantity: 1
        },
        {
            id: 2,
            title: "Trailmaster MW",
            price: 12500,
            img: trail,
            quantity: 1
        },
        {
            id: 3,
            title: "Ranger 78M",
            price: 19200,
            img: ranger,
            quantity: 1
        },
        {
            id: 4,
            title: "Hunter XT Grip",
            price: 15700,
            img: hunter,
            quantity: 1
        },
        {
            id: 5,
            title: "Farmer X Alox",
            price: 15800,
            img: farmer,
            quantity: 1
        },
        {
            id: 6,
            title: "Super Tinker",
            price: 9200,
            img: tinker,
            quantity: 1
        }


    ]
    return(
        <>
        <h1 className={styles.title}>Small Swiss Army Pocket Knives</h1>
        <p className={styles.info}>A small Victorinox pocket knife is a convenient tool for everyday use. Their compact size makes it easy to put them in a pocket or hang on a key ring, making them perfect for problem solving on the go. 
            These knives offer a variety of features, including blades , screws, and scissors, making them essential for tasks like opening packages, cutting rope, and making quick repairs.</p>
        <div className={styles.shopgrid}>
            {knives.map(product => (
                <div key={product.id} className={styles.productcard}>
                    <img className={styles.productimg} src={product.img} alt={product.title} />
                    <p className={styles.producttitle}>{product.title}</p>
                    <p className={styles.productprice}>${product.price}</p>
                    <button className={styles.productbtn} onClick={() => addToCart(product)}>Add to cart</button>
                </div>
            ))}
        </div>
        </>
    )
}