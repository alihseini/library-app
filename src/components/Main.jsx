import { useState } from "react";
import { books } from "../constants/mockData.js";
import BookCard from "./BookCard.jsx";
import FavoriteList from "./FavoriteList.jsx";
import styles from "./Main.module.css";

function Main() {
  const [likedList, setLikedList] = useState([]);
  const likedListHandler = (book, status) => {
    if (status) {
      const newLikedList = likedList.filter((i) => i.id !== book.id);
      setLikedList(newLikedList);
    } else {
      setLikedList((likedList) => [...likedList, book]);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.booksList}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            data={book}
            likedListHandler={likedListHandler}
          />
        ))}
      </div>
      {!!likedList.length && (
        <div className={styles.favoriteList}>
          <p>Favorite List</p>
          {likedList.map((book) => (
            <FavoriteList data={book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
