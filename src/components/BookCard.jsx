import { useState } from "react";
import styles from "./BookCard.module.css";
import { IoMdHeart } from "react-icons/io";

function BookCard({ data, likedListHandler }) {
  const { image, title, author, language, pages } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    likedListHandler(data, like);
    setLike((like) => !like);
  };

  return (
    <div className={styles.bookCard}>
      <img src={image} alt="book-image" />
      <div className={styles.texts}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages} pages</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <IoMdHeart color={like ? "red" : "#e0e0e0"} />
      </button>
    </div>
  );
}

export default BookCard;
