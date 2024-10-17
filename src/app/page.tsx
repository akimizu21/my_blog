"use client"

import React from "react";
import Image from "next/image";
/**
 * data
 */
import { INIT_CATEGORYS } from "./constants/data";
/**
 * components
 */
import { Header } from "./components/Header";
import { CategoryList } from "./components/CategoryList";
import { CategoryContents } from "./components/CategoryContents";
/**
 * styles
 */
import styles from "./page.module.css"
/**
 * image
 */
import localImage from "../../public/main_image.png"

const Home = () =>  {
  const [categorys, setCategorys] = React.useState(INIT_CATEGORYS);
  const [selectedTab, setSelectedTab] = React.useState("お金");

  return (
    <>
      {/* Header領域 */}
      <Header/>
      {/* メイン画像表示領域 */}
      <div className={styles.imageArea}>
        <Image 
          src={localImage} 
          alt="Main Image"
          layout="fill"
          className={styles.image}
          />
      </div>
      {/* カテゴリー表示領域 */}
      <section className={styles.commonArea}>
        <CategoryList
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </section>
      {/* カテゴリーカード表示領域 */}
      <section>
        <CategoryContents 
          categorys={categorys}
          selectedTab={selectedTab}
        />
      </section>
      {/* New表示領域 */}
      <section>
        <h2 className={styles.commonArea}>New</h2>
        <div className={styles.newArea}>
          <div className={styles.newContesnts}>
            <h3 className={styles.title}>新着記事</h3>
            <Image src={localImage} alt="Contents Image" className={styles.newImage}/>
            <p className={styles.newTitle}>新着記事</p>
            <p className={styles.newText}>テキスト テキスト テキスト テキスト テキスト テキスト テキスト </p>
          </div>
          <div className={styles.newpickupArea}>
            <div className={styles.newpickupTitle}>
              <h3 className={styles.title}>新着</h3>
              <h3 className={styles.title}>おすすめ記事</h3>
            </div>
            <div>
              <div className={styles.contents}>
                <div className={styles.contentsInfo}>
                  <p>2024-10-19</p>
                  <p>お金</p>
                </div>
                <p className={styles.contentsTitle}>新着記事です 新着記事です 新着記事です 新着記事です 新着記事です 新着記事です </p>
              </div>
              <div className={styles.contents}>
                <div className={styles.contentsInfo}>
                  <p>2024-10-19</p>
                  <p>お金</p>
                </div>
                <p className={styles.contentsTitle}>新着記事です 新着記事です 新着記事です 新着記事です 新着記事です 新着記事です </p>
              </div>
              <div className={styles.contents}>
                <div className={styles.contentsInfo}>
                  <p>2024-10-19</p>
                  <p>お金</p>
                </div>
                <p className={styles.contentsTitle}>新着記事です 新着記事です 新着記事です 新着記事です 新着記事です 新着記事です </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;