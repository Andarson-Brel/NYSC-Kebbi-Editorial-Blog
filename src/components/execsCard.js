export default function ExecCard({ position, style, imgSrc, stateCode, name }) {
  return (
    <div className="execs-card" style={style}>
      <div className="exec-img-cont">
        <img className="exec-img" src={imgSrc} alt={position} />
      </div>
      <h3 className="exec-name">{name}</h3>
      <h5>{position}</h5>
      <p className="exec-state-code">{stateCode}</p>
    </div>
  );
}
