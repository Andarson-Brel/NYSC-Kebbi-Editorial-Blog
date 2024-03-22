import Button from "./button";

export default function StateCordinatorsMsg() {
  const buttonstyle = { backgroundColor: "rgba(255, 208, 80, 1)" };
  return (
    <section className="state-cordinator-cont">
      <div className="state-cord-img-con">
        <img
          src="/images/img11.png"
          className="state-cord-img"
          alt="state-cord-img"
        />
      </div>
      <div className="state-cord-msg-cont">
        <h4 className="state-cord-title">STATE CORDINATORS MESSAGE</h4>
        <h2 className="state-cord-title-main">
          It started out as a simple idea and evolved into our passion
        </h2>
        <p className="state-cord-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <Button style={buttonstyle}>Read More &gt;</Button>
      </div>
    </section>
  );
}
