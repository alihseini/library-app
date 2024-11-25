import { useState } from "react";
import { books } from "../constants/mockData.js";
import BookCard from "./BookCard.jsx";
import FavoriteList from "./FavoriteList.jsx";
import styles from "./Main.module.css";
import SearchBox from "./SearchBox.jsx";

function Main() {
  const [likedList, setLikedList] = useState([]);
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState(books);

  const searchHandler = () => {
    if (search) {
      const newBookData = books.filter((i) =>
        i.title.toLowerCase().includes(search)
      );
      setBookData(newBookData);
    } else {
      setBookData(books);
    }
  };

  const likedListHandler = (book, status) => {
    if (status) {
      const newLikedList = likedList.filter((i) => i.id !== book.id);
      setLikedList(newLikedList);
    } else {
      setLikedList((likedList) => [...likedList, book]);
    }
  };

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.booksList}>
          {bookData.map((book) => (
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
    </>
  );
}

export default Main;
