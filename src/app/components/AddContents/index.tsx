/**
 * AddContents
 */
/**
 * styles
 */
import styles from "./styles.module.css"

export const AddContents = (props) => {
  const {addInputTitle, onChangeAddInputTitle, contentsSelectedLabel, onChangeContentsSelectedLabel, contentsList, addInputText, onChangeAddInputText, handleAddContents} = props;
  return (
    <>
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
            {contentsList.map((content, index: number) => (
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
    </>
  )
}