import React, {  useState } from 'react';

import Paginate from "../components/paginate"

const Search = ({ book, catetag }) => {
  const [showPosts, setShowPosts] = useState(book);
  const [inputValue, setInputValue] = useState();
//console.log(book)
  // カテゴリーリスト
  const categories =catetag //["コミック","小説","少年コミック"]
  // カテゴリー絞り込み
  const selectCategory = (category) => {
    // allを選択した場合は早期return
    if (category === "all") {
      setShowPosts(book);
      return;
    }

    const selectedPosts = book.filter((post) => {
    //console.log(post.Category)
    const cate =post.Category.split(',')
        return [...cate, ...category].filter(item => cate.includes(item) && category.includes(item)).length > 0
    //return book.Category === category
    });
    setShowPosts(selectedPosts);
  };

  // フリーキーワードでの絞り込み
  const search = (value) => {
    if (value !== "") {
      const serchedPosts = book.filter(
        (post) =>
          Object.values(post).filter(
            (item) =>
              item !== undefined &&
              item !== null &&
              item.toString().toUpperCase().indexOf(value.toString().toUpperCase()) !== -1
          ).length > 0
      );
      setShowPosts(serchedPosts);
      return;
    }

    setShowPosts(book);
    return;
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };

    return (
      <>
      {/* カテゴリー選択ボタン */}
      <div>
        <h4>クリックしてカテゴリーで絞り込みが可能</h4>
        <button onClick={() => selectCategory("all")}>全て</button>
        {categories.map((category) => (
          <button onClick={() => selectCategory(category)}>{category}</button>
        ))}
      </div>
            {/* フリーキーワード検索フォーム */}
      <div>
        <h4>フリーキーワード検索</h4>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>

        <Paginate itemsPerPage={10} items={showPosts} />
      </>
    );
  }

export default Search
