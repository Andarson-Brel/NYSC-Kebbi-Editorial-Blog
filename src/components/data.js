// Get the current date
const today = new Date();

// Format the date as a full date string (e.g., "Thursday, October 5, 2023")
const fullDate = today.toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
});
const executivesData = [
  {
    backgroundColor: "#F4F4F4",
    position: "President",
    name: "Aliyu Sambo",
    stateCode: "Kb/22c/123",
    imgSrc: "/images/img13.jpg",
  },
  {
    backgroundColor: "#FBF6EA",
    position: " Vice President",
    name: "Godwin Gift",
    stateCode: "Kb/22c/123",
    imgSrc: "/images/img15.jpg",
  },
  {
    backgroundColor: "#F4F4F4",
    position: "Secretary",
    name: "Monye Ruth",
    stateCode: "Kb/22c/123",
    imgSrc: "/images/img12.jpg",
  },
  {
    backgroundColor: "#F4F4F4",
    position: "News Editor",
    name: "Daniel Innocent",
    stateCode: "Kb/22c/123",
    imgSrc: "/images/img19.jpg",
  },
  {
    backgroundColor: "#F4F4F4",
    position: "Protocol",
    name: "Felix",
    stateCode: "Kb/22c/123",
    imgSrc: "/images/img17.jpg",
  },
  {
    backgroundColor: "#F4F4F4",
    position: "P.R.O",
    name: "Aliyu Sambo",
    stateCode: "Kb/22c/123",
    imgSrc: "/images/img18.jpg",
  },
  {
    backgroundColor: "#F4F4F4",
    position: "Treasurer",
    name: "Gloria John",
    stateCode: "Kb/22c/123",
    imgSrc: "/images/img16.jpg",
  },
  {
    backgroundColor: "#FBF6EA",
    position: "Welfare",
    name: "Evelyn Favour",
    stateCode: "Kb/22c/123",
    imgSrc: "/images/img14.jpg",
  },
];
const heroSectionData = [
  {
    date: fullDate,
    bgImg: "/images/img1.jpg",
    title:
      "Youth Empowerment in Action: Birnin Kebbi NYSC Editorial CDS Initiatives",
    category: "Sensitization",
    author: "Ruth Monye",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    date: fullDate,
    bgImg: "/images/img2.jpg",
    title: "Meet the Faces Behind Birnin Kebbi's NYSC Editorial CDS",
    category: "Camp Activity",
    author: "Daniel Andara",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    date: fullDate,
    bgImg: "/images/img3.jpg",
    title: "Meet the Faces Behind Birnin Kebbi's NYSC Editorial CDS",
    category: "NYSC Event",
    author: "Daniel Andara",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    date: fullDate,
    bgImg: "/images/img4.jpg",
    title:
      "From Page to Community: How Birnin Kebbi NYSC Editorial CDS Impacts...",
    category: "Party",
    author: "Daniel Andara",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    date: fullDate,
    bgImg: "./images/img5.jpg",
    title:
      "Youth Empowerment in Action: Birnin Kebbi NYSC Editorial CDS Initiatives",
    category: "Camp Activity",
    author: "Daniel Andara",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    date: fullDate,
    bgImg: "./images/img6.jpg",
    title:
      "From Page to Community: How Birnin Kebbi NYSC Editorial CDS Impacts...",
    category: "Sensitization",
    author: "Daniel Andara",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

export { heroSectionData, executivesData };
