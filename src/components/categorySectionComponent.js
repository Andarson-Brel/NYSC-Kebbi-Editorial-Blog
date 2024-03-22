import CategoryCard from "./componentCard";

export default function CategorySection({ titleText, titleStyle }) {
  return (
    <section className="category-section">
      <h4 className="category-title" style={titleStyle}>
        {titleText}
      </h4>
      <div className="home-category-container">
        <CategoryCard
          style={{}}
          imgSrc={"/images/shuttle-icon.svg"}
          categoryTitle={"CDS Sensitization"}
          CategoryCardPa={
            " Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          }
        />
        <CategoryCard
          style={{ backgroundColor: "#FFD050", border: "none" }}
          imgSrc={"/images/shuttle-icon.svg"}
          categoryTitle={"NYSC News"}
          CategoryCardPa={
            " Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          }
        />
        <CategoryCard
          style={{}}
          imgSrc={"/images/shuttle-icon.svg"}
          categoryTitle={"Camp Activities"}
          CategoryCardPa={
            " Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          }
        />
        <CategoryCard
          style={{}}
          imgSrc={"/images/shuttle-icon.svg"}
          categoryTitle={"Kebbi Nysc Events"}
          CategoryCardPa={
            " Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
          }
        />
      </div>
    </section>
  );
}
