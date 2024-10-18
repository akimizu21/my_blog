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
  const [contentsSelectedTab, setContentsSelectedTab] = React.useState("お金");
  const [newSelectedTab, setNewSElectedTab] = React.useState("新着")

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
          contentsSelectedTab={contentsSelectedTab}
          setContentsSelectedTab={setContentsSelectedTab}
        />
      </section>
      {/* カテゴリーカード表示領域 */}
      <section>
        <CategoryContents 
          categorys={categorys}
          contentsSelectedTab={contentsSelectedTab}
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
            <ul className={styles.newpickupTitle}>
              <li className={`${styles.title} ${newSelectedTab === "新着" ? styles.active: ""}`} onClick={() => setNewSElectedTab("新着")}>新着</li>
              <li className={`${styles.title} ${newSelectedTab === "おすすめ記事" ? styles.active: ""}`} onClick={() => setNewSElectedTab("おすすめ記事")}>おすすめ記事</li>
            </ul>
            <div>
              {newSelectedTab === "新着" && (
                <>
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
                </>
              )}
              {newSelectedTab === "おすすめ記事" && (
                <>
                  <div className={styles.contents}>
                    <div className={styles.contentsInfo}>
                      <p>2024-10-19</p>
                      <p>お金</p>
                    </div>
                    <p className={styles.contentsTitle}>おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です  </p>
                  </div>
                  <div className={styles.contents}>
                    <div className={styles.contentsInfo}>
                      <p>2024-10-19</p>
                      <p>お金</p>
                    </div>
                    <p className={styles.contentsTitle}>おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です  </p>
                  </div>
                  <div className={styles.contents}>
                    <div className={styles.contentsInfo}>
                      <p>2024-10-19</p>
                      <p>お金</p>
                    </div>
                    <p className={styles.contentsTitle}>おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です おすすめ記事です  </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;