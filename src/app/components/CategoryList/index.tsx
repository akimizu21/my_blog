/**
 * CategoryList
 */
/**
 * styles
 */
import styles from "./styles.module.css"

interface Props {
  selectedTab: string;
  setSelectedTab : React.Dispatch<React.SetStateAction<string>>;
}

export const CategoryList = (props: Props) => {
  const {selectedTab, setSelectedTab} = props;
  return (
    <>
      <h2 className={styles.title}>カテゴリー</h2>
      <ul className={styles.category}>
        <li className={`${styles.categoryList} ${selectedTab === "お金" ? styles.active : ""}`} onClick={() => setSelectedTab("お金")}>お金</li>
        <li className={`${styles.categoryList} ${selectedTab === "仕事" ? styles.active : ""}`} onClick={() => setSelectedTab("仕事")}>仕事</li>
        <li className={`${styles.categoryList} ${selectedTab === "暮らし" ? styles.active : ""}`} onClick={() => setSelectedTab("暮らし")}>暮らし</li>
        <li className={`${styles.categoryList} ${selectedTab === "旅行&グルメ" ? styles.active : ""}`} onClick={() => setSelectedTab("旅行&グルメ")}>旅行&グルメ</li>
        <li className={`${styles.categoryList} ${selectedTab === "趣味" ? styles.active : ""}`} onClick={() => setSelectedTab("趣味")}>趣味</li>
      </ul>
    </>
  )
}