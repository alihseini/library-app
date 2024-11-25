import styles from "./FavoriteList.module.css"

function FavoriteList({ data: { title, image } }) {
  return (
    <div className={styles.favoriteBook}>
      <img src={image} alt="book image" />
      <p>{title}</p>
    </div>
  );
}

export default FavoriteList;
