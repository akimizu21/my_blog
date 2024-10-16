/**
 * Header
 */

import Image from "next/image"
/**
 * styles
 */
import styles from "./styles.module.css"
/**
 * image
 */
import localImage from "../../../../public/logo.png"

export const Header = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Image src={localImage} alt="Logo" className={styles.image}/>
        </h1>
        <ul className={styles.nav}>
          <li className={styles.navList}>TOP</li>
          <li className={styles.navList}>カテゴリー</li>
          <li className={styles.navList}>about me</li>
          <li className={styles.navList}>サイトマップ</li>
          <li className={styles.navList}>お問い合わせ</li>
        </ul>
      </div>
    </>
  )
}