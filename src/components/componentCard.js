import { Link } from "react-router-dom";

export default function CategoryCard({
  imgSrc,
  categoryTitle,
  CategoryCardPa,
  style,
}) {
  return (
    <Link to={`/blog/${categoryTitle}`}>
      <div className="category-content" style={style}>
        <div className="icon-cont">
          <img src={imgSrc} alt="icon-img" />
        </div>
        <h4 className="category-title">{categoryTitle}</h4>
        <p className="category-card-p">{CategoryCardPa}</p>
      </div>
    </Link>
  );
}
