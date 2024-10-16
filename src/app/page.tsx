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
      </section>
    </>
  );
}
export default Home;