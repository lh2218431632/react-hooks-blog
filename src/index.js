import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const bookList = [
  {
    img: "./logo192.png",
    bookName: "西游记",
    author: "林浩",
  },
  {
    img: "./logo192.png",
    bookName: "水浒传",
    author: "哈哈哈",
  },
];

const bookItem = bookList.map((prop) => {
  return (
    <Book img={prop.img} bookName={prop.bookName} author={prop.author}></Book>
  );
});

function BookList() {
  return <section className="booklist">{bookItem}</section>;
}

function Book({ img, bookName, author }) {
  return (
    <div className="book">
      <Image img={img}></Image>
      <BookName bookName={bookName}></BookName>
      <Author author={author}></Author>
    </div>
  );
}

const Image = ({ img }) => {
  return (<img src={img}></img>);
};

function BookName({ bookName }) {
  return (<h4>{bookName}</h4>);
}

function Author({ author }) {
  return (<h4>{author}</h4>);
}

ReactDOM.render(<BookList/>, document.getElementById("root"));
