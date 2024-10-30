"use client"

import React from "react";
import Image from "next/image";
/**
 * data
 */
import { INIT_CONTENTS, INIT_CONTENTS_ID, ContentItem, Contents } from "./constants/data";
/**
 * components
 */
import { Header } from "./components/Header";
import { CategoryList } from "./components/CategoryList";
import { CategoryContents } from "./components/CategoryContents";
import { AddContents } from "./components/AddContents";
import { NewContens } from "./components/NewContents";
/**
 * styles
 */
import styles from "./page.module.css"
/**
 * image
 */
import localImage from "../../public/main_image.png"

const Home = () =>  {
  // addInputTitle
  const [addInputTitle, setAddInputTitle] = React.useState('');
  // addInputText
  const [addInputText, setAddInputText] = React.useState('');
  // contentsSelectedLabel
  const [contentsSelectedLabel, setContentsSelectedLabel] = React.useState("お金");
  // contentsListの初期値
  const [contentsList, setContentsList] = React.useState(INIT_CONTENTS);
  // 採番用ID
  const [uniqueId, setUniqueId] = React.useState(INIT_CONTENTS_ID);
  // contentsSelectedTab
  const [contentsSelectedTab, setContentsSelectedTab] = React.useState("お金");
  // newSelectedTab
  const [newSelectedTab, setNewSElectedTab] = React.useState("新着")
  // 最新1件を取得
  const [newestContent, setNewestContent] = React.useState<ContentItem | null>(null);
  // 最新3件を取得
  const [newestContents, setNewestContents] = React.useState<ContentItem[]>([]);
  // おすすめ記事を取得
  const [recommendContents, setRecommendContents] = React.useState<ContentItem[]>([]);
  
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
      const nextUniqueId = uniqueId + 1;
      const d = new Date();
      const newContent = {
        id: nextUniqueId,
        title: addInputTitle,
        text: addInputText,
        year: d.getFullYear(),
        month: d.getMonth() + 1,
        day: d.getDate(),
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
      // Idをインクリメント
      setUniqueId(nextUniqueId);
      // タイトルフォームを初期化
      setAddInputTitle('');
      // テキストフォームを初期化
      setAddInputText('');
    }
  }

  /**
   * 最新記事を取得
   */
  React.useEffect(() => {
    const allContents = contentsList.flatMap(category => category.contents);
    // allContentsが空かどうかをチェック
    if (allContents.length === 0){
      setNewestContent(null);
      setNewestContents([]);
    } else {
      const sortedContents = [...allContents].sort((a, b) => b.id - a.id);
      // 最新1件
      setNewestContent(sortedContents[0]);
      // 最新3件
      setNewestContents(sortedContents.slice(0, 3));
    }
  }, [contentsList]);

  React.useEffect(() => {
    const allContents = contentsList.flatMap(category => category.contents);
    // allContentsが空かどうかをチェック
    if (allContents.length === 0){
      setRecommendContents([]);
    } else {
      const selectedContents = allContents
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
      setRecommendContents(selectedContents)
    }
  }, [contentsList]);

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
       <AddContents 
        addInputTitle={addInputTitle}
        onChangeAddInputTitle={onChangeAddInputTitle}
        contentsSelectedLabel={contentsSelectedLabel}
        onChangeContentsSelectedLabel={onChangeContentsSelectedLabel}
        contentsList={contentsList}
        addInputText={addInputText}
        onChangeAddInputText={onChangeAddInputText}
        handleAddContents={handleAddContents}
       />
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
      <section className={styles.commonArea}>
       <NewContens 
        newestContent={newestContent}
        newSelectedTab={newSelectedTab}
        setNewSElectedTab={setNewSElectedTab}
        newestContents={newestContents}
        recommendContents={recommendContents}
      />
      </section>
    </>
  );
}
export default Home;