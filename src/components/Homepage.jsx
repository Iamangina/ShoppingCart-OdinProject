import styles from './Homepage.module.css'

import mainImg from '../images/main.png'
import delivery from '../images/delivery.png'

import { useEffect, useState } from 'react'

export default function Homepage() {

    const images = [mainImg, delivery]

    const [currentImg, setCurrentImg] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImg(prevIndex =>
                (prevIndex + 1) % images.length
            )
        }, 3000)

        return () => clearInterval(timer)

    }, [images.length])

    return (
        <main className={styles.homepage}>
            <img
                src={images[currentImg]}
                alt="banner"
                className={styles.imgBanner}
            />
        </main>
    )
}

