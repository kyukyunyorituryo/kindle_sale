import React, {  useState } from 'react';

import Paginate from "../components/paginate"

const Search = ({ book, catetag, pubtag }) => {
  const [showPosts, setShowPosts] = useState(book);
  const [inputValue, setInputValue] = useState();
console.log(book)
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
//出版社一覧
const publishers=pubtag || ``
  // 出版社絞り込み
  const selectPublisher = (publisher) => {
    // allを選択した場合は早期return
    if (publisher === "all") {
      setShowPosts(book);
      return;
    }
    const selectedPosts = book.filter((post) => {
    //console.log(post.Category)
    const pub =post.Publisher.split(',')
        return [...pub, ...publisher].filter(item => pub.includes(item) && publisher.includes(item)).length > 0
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
  if (publishers.length === 0){
    return (
      <>
      {/* カテゴリー選択ボタン */}
      <details> <summary><strong>クリックしてカテゴリー選択ボタンの表示</strong></summary>
      <div>
        <h4>クリックしてカテゴリーで絞り込みが可能</h4>
        <button className="categorybutton" onClick={() => selectCategory("all")}>全て</button>
        {categories.map((category) => (
          <button className="categorybutton" onClick={() => selectCategory(category)}>{category}</button>
        ))}
      </div>
</details>
            {/* フリーキーワード検索フォーム */}

      <div>      
        <h4>フリーキーワード検索</h4>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>

        <Paginate itemsPerPage={10} items={showPosts} />
      </>
      )
  }
    return (
      <>
      {/* カテゴリー選択ボタン */}
      <div>
        <h4>クリックしてカテゴリーと出版社で絞り込みが可能</h4>
      <details> <summary><strong>クリックしてカテゴリー選択ボタンの表示</strong></summary>
       <p>カテゴリー： <button className="categorybutton" onClick={() => selectCategory("all")}>全て</button>
        {categories.map((category) => (
          <button className="categorybutton" onClick={() => selectCategory(category)}>{category}</button>
        ))}</p></details>
      {/* 出版社選択ボタン */}
      <details> <summary><strong>クリックして出版社選択ボタンの表示</strong></summary>
       <p>出版社：
        <button className="categorybutton" onClick={() => selectPublisher("all")}>全て</button>
        {publishers.map((publisher) => (
          <button className="categorybutton" onClick={() => selectPublisher(publisher)}>{publisher}</button>
        ))}</p></details>
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
