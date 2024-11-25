import styles from "./BookCard.module.css";
import { IoMdHeart } from "react-icons/io";

function BookCard({ data: { image, title, author, language, pages } }) {
  console.log(image);
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
      <button><IoMdHeart /></button>
    </div>
  );
}

export default BookCard;
