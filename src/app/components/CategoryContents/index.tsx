/**
 * CategoryContents
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

interface Props {
  categorys: {
    name: string;
    contents: {
      id: number;
      title: string;
      text: string;
    }[];
  }[];
  contentsSelectedTab: string;
}

export const CategoryContents = (props: Props) => {
  const {categorys, contentsSelectedTab} = props;
  return (
    <>
      {categorys.map(category => 
        category.name === contentsSelectedTab && (
          <div key={category.name} className={styles.contents}>
            {category.contents.map((content) => (
              <div key={content.id} className={styles.contentsContainer}>
                <div className={styles.imageArea}>
                  <p className={styles.contentsTag}>{category.name}</p>
                  <Image 
                    src={localImage} 
                    alt="Contents Image"
                    layout="responsive"
                    className={styles.contentsImage} 
                  />
                </div>
                <div>
                  <p className={styles.title}>{content.title}</p>
                  <p className={styles.text}>{content.text}</p>
                </div>
              </div> 
            ))}
            <div>
              <p  className={styles.moreContents}>{category.name}についてもっと見る→</p>
            </div>
          </div>
        )
      )}
    </>
  )
}