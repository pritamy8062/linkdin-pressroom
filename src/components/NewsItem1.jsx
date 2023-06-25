import React from "react";

export default function NewsItem1(props) {
  const { heading, author, date, paragraph, categories, image } = props;

  return (
    <div>
      <img src={image} alt="" className="newsimage" />
      <h1 className="headingOfNews">{heading}</h1>
      <div className="dateandpromotion">
        <h3 className="heading2OfNews">{author} </h3>
        <li className="date">{date}</li>
      </div>
      <p className="paragraphOfNews">{paragraph}</p>
      <div className="categoryAndLink">
        <h3 className="categories">Categories: </h3>
        <ul className="allcategories">
          <li>Research </li>,<li>Data and insights</li>
          {/* {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
