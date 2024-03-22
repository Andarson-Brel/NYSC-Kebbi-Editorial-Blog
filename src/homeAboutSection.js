import Button from "./components/button";

export default function HomeAbout() {
  return (
    <section className="about-home">
      <div className="line-cont">
        <div className="yellow-line"></div>
        <div className="purple-line"></div>
      </div>
      <div className="home-about-content-cont">
        <div className="home-about-content">
          <h4 className="home-about-title">about us</h4>
          <h2 className="home-about-title-main">
            We are a community of content writers who share their learnings
          </h2>
          <p className="about-home-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button
            style={{
              padding: "1rem 2rem 1rem 0",
              backgroundColor: "transparent",
              textAlign: "left",
              color: "#592EA9",
            }}
          >
            Read More &gt;
          </Button>
        </div>
        <div className="home-about-content">
          <h4 className="home-about-title">what we do</h4>
          <h2 className="home-about-title-main">
            Creating valuable content for creatives all around the world
          </h2>
          <p className="about-home-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}
