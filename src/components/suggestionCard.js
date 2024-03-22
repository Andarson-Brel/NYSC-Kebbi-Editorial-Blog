import AuthorDate from "./authorDate";
import Excerpt from "./exerpt";

export default function SuggestionCard({ data }) {
  return (
    <div className="suggestion-card">
      <div className="suggestion-thmb-cont">
        <img className="suggestion-thmb" src={data?.imgUrl} alt={data?.title} />
      </div>
      <AuthorDate data={data} authorNameStyle={{ color: "#592EA9" }} />
      <h3 className="suggestion-heading">{data?.title}</h3>
      <p className="suggestion-p">
        {<Excerpt str={data?.description} count={70} />}
      </p>
    </div>
  );
}
