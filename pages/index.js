import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/footer'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Ninjas from './ninjas'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name ="keywords" content='ninjas'></meta>
    </Head>
    <div>
      <h1 className={styles.title}>Welcome to the homepage!</h1>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem in nihil ut corporis harum necessitatibus architecto culpa consequatur earum animi dolorum, mollitia corrupti at! Eveniet, perferendis dolore? Quas, velit ullam?</p>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem in nihil ut corporis harum necessitatibus architecto culpa consequatur earum animi dolorum, mollitia corrupti at! Eveniet, perferendis dolore? Quas, velit ullam?</p>
      <Link href='/ninjas'><a className={styles.btn}>See Ninjas listing</a></Link>
    </div>
    </>
  )
}
