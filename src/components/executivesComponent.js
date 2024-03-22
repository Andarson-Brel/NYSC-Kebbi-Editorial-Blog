import { executivesData } from "./data";
import ExecCard from "./execsCard";
export default function ExecutivesComponent() {
  return (
    <section className="execs-section">
      <h2 className="execs-intro-title">Meet Our Executives</h2>
      <div className="execs-card-cont">
        {executivesData.map((data, i) => (
          <ExecCard
            name={data.name}
            imgSrc={data.imgSrc}
            position={data.position}
            stateCode={data.stateCode}
            style={{ background: data.backgroundColor }}
            key={i}
          />
        ))}
      </div>
    </section>
  );
}
