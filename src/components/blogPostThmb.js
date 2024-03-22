import { Link } from "react-router-dom";

export default function BlogPostThmb({
  imgSrc,
  category,
  title,
  description,
  id,
  user,
  handleDelete,
}) {
  const body = description;
  return (
    <div className="blog-post-content">
      <Link to={`blog-post/${id}`}>
        <div className="blog-post-img-cont">
          <img src={imgSrc} className="blog-post-img " alt={title} />
        </div>
      </Link>
      <div className="blog-post-desc-cont">
        <Link to={`blog-post/${id}`}>
          <h4 className="blog-category-title">{category}</h4>
          <h2 className="blog-title">{title}</h2>
          {/* <div
            className="blog-desc"
            dangerouslySetInnerHTML={{ __html: body }}
          /> */}
          <p className="blog-desc">{description}</p>
        </Link>
        {user && (
          <div className="button-icon-cont">
            <i
              className="fa-solid fa-trash-can"
              onClick={() => handleDelete(id)}
            ></i>

            <Link to={`/update/${id}`}>
              <i className="fa-regular fa-pen-to-square"></i>
            </Link>
          </div>
        )}
        <Link to={`blog-post/${id}`}>
          <button className="main-btn">Read More &gt;</button>
        </Link>
      </div>
    </div>
  );
}
