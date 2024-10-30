/**
 * NewContens
 */
import Image from "next/image";
/**
 * styles
 */
import styles from "./styles.module.css"
/**
 * image
 */
import localImage from "../../../../public/main_image.png"

export const NewContens = (props) => {
  const {newestContent, newSelectedTab, setNewSElectedTab, newestContents, recommendContents} = props
  return (
    <>
      <h2 className={styles.commonArea}>New</h2>
        <div className={styles.newArea}>
          {/* 最新1件の記事 */}
          <div className={styles.newContesnts}>
            <h3 className={styles.title}>新着記事</h3>
            <Image src={localImage} alt="Contents Image" className={styles.newImage}/>
            {newestContent ? (
              <>
                <p className={styles.newTitle}>{newestContent.title}</p>
                <p className={styles.newText}>{newestContent.text}</p>
              </>
            ): (
              <p className={styles.newText}>新着記事がありません</p>
            )}
          </div>
          <div className={styles.newpickupArea}>
            {/* 最新3件の記事 */} 
            <ul className={styles.newpickupTitle}>
              <li className={`${styles.title} ${newSelectedTab === "新着" ? styles.active: ""}`} onClick={() => setNewSElectedTab("新着")}>新着</li>
              <li className={`${styles.title} ${newSelectedTab === "おすすめ記事" ? styles.active: ""}`} onClick={() => setNewSElectedTab("おすすめ記事")}>おすすめ記事</li>
            </ul>
            <div>
              {newSelectedTab === "新着" && (
                <>
                  {newestContents.map((content) => (
                    <div key={content.id} className={styles.contents}>
                      <div className={styles.contentsInfo}>
                        <p>{`${content.year}/${content.month}/${content.day}`}</p>
                        <p>{content.title}</p>
                      </div>
                      <p className={styles.contentsTitle}>{content.text} </p>
                    </div>
                  ))}
                </>
              )}
              {newSelectedTab === "おすすめ記事" && (
                <>
                  {recommendContents.map((content) => (
                    <div key={content.id} className={styles.contents}>
                      <div className={styles.contentsInfo}>
                        <p>{`${content.year}/${content.month}/${content.day}`}</p>
                        <p>{content.title}</p>
                      </div>
                      <p className={styles.contentsTitle}>{content.text}</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
    </>
  )
}