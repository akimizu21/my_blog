"use client"

import React from "react";
import Image from "next/image";
/**
 * data
 */
import { INIT_CONTENTS } from "./constants/data";
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
  const [addInputTitle, setAddInputTitle] = React.useState('');
  const [addInputText, setAddInputText] = React.useState('');
  const [contentsSelectedLabel, setContentsSelectedLabel] = React.useState("お金");
  const [contentsList, setContentsList] = React.useState(INIT_CONTENTS);
  const [contentsSelectedTab, setContentsSelectedTab] = React.useState("お金");
  const [newSelectedTab, setNewSElectedTab] = React.useState("新着")

  /**
   * addInputTitle更新処理
   * @param e 
   */
  const onChangeAddInputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddInputTitle(e.target.value);
  }

  /**
   * ContentsSelectedLabel更新処理
   * @param e 
   */
  const onChangeContentsSelectedLabel = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setContentsSelectedLabel(e.target.value);
  }

  /**
   * addInputText更新処理
   * @param e 
   */
  const onChangeAddInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddInputText(e.target.value);
  }

  /**
   * contents追加処理
   */
  const handleAddContents = () => {
    if(addInputTitle !== "" && addInputText !== "") {
      const newContent = {
        id: Date.now(),
        title: addInputTitle,
        text: addInputText,
      };
  
      const updatedContentsList = contentsList.map((category) => {
        if (category.name === contentsSelectedLabel) {
          return {
            ...category,
            contents: [...category.contents, newContent]
          };
        }
        return category;
      });
  
      setContentsList(updatedContentsList);
      setAddInputTitle('');
      setAddInputText('');
    }
  }

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
      {/* 記事追加領域 */}
      <section className={styles.commonArea}>
        <div className={styles.addContents}>
          <div className={styles.inputArea}>
            <label>記事タイトル</label>
            <input 
              type="text" 
              value={addInputTitle}
              onChange={onChangeAddInputTitle}
              className={styles.addForm}></input> 
          </div>
          <div className={styles.inputArea}>
            <label>カテゴリー</label>
            <select 
              value={contentsSelectedLabel}
              onChange={onChangeContentsSelectedLabel}
              className={styles.addForm}
            >
              {contentsList.map((content, index) => (
                <option key={index} value={content.name}>
                  {content.name}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.inputArea}>
            <label>記事内容</label>
            <input 
              type="text"
              value={addInputText}
              onChange={onChangeAddInputText}
              className={styles.addForm}></input> 
          </div>
          <button onClick={handleAddContents} className={styles.addButton}>追加</button>
        </div>
      </section>
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
          categorys={contentsList}
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