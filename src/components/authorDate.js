export default function AuthorDate({
  data,
  authorNameStyle,
  authorGenStyle,
  fontSize,
}) {
  // console.log(data.timestamp);
  const date = data?.timestamp?.toDate().toDateString();
  // console.log(date);

  return (
    <div className="user-detail" style={(authorGenStyle, fontSize)}>
      <p>
        By{" "}
        <span className="author" style={authorNameStyle}>
          {data?.author}
        </span>
      </p>
      |<p>{date}</p>
    </div>
  );
}
