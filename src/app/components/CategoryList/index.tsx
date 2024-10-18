/**
 * CategoryList
 */
/**
 * styles
 */
import styles from "./styles.module.css"

interface Props {
  contentsSelectedTab: string;
  setContentsSelectedTab : React.Dispatch<React.SetStateAction<string>>;
}

export const CategoryList = (props: Props) => {
  const {contentsSelectedTab, setContentsSelectedTab} = props;
  return (
    <>
      <h2 className={styles.title}>カテゴリー</h2>
      <ul className={styles.category}>
        <li className={`${styles.categoryList} ${contentsSelectedTab === "お金" ? styles.active : ""}`} onClick={() => setContentsSelectedTab("お金")}>お金</li>
        <li className={`${styles.categoryList} ${contentsSelectedTab === "仕事" ? styles.active : ""}`} onClick={() => setContentsSelectedTab("仕事")}>仕事</li>
        <li className={`${styles.categoryList} ${contentsSelectedTab === "暮らし" ? styles.active : ""}`} onClick={() => setContentsSelectedTab("暮らし")}>暮らし</li>
        <li className={`${styles.categoryList} ${contentsSelectedTab === "旅行&グルメ" ? styles.active : ""}`} onClick={() => setContentsSelectedTab("旅行&グルメ")}>旅行&グルメ</li>
        <li className={`${styles.categoryList} ${contentsSelectedTab === "趣味" ? styles.active : ""}`} onClick={() => setContentsSelectedTab("趣味")}>趣味</li>
      </ul>
    </>
  )
}