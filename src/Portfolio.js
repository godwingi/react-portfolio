import React from "react"
import Header from "./components/Header"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import AboutMe from "./components/AboutMe"
import ProjectList from "./components/ProjectList"
import preworkStudyGuide from "./images/prework-study-guide.png"
import cinemaTravelGuide from "./images/cinema-travel-guide.png"
import chefsChoice from "./images/chefs-choice.png"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle `
body {
  font-family: 'Josefin Sans', sans-serif;
}
`

export default function Portfolio() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <NavBar />
      <AboutMe />
      <ProjectList projects={projects} />
      <Footer />
    </div>
  );
}


const projects = [
  {
    id: 1,
    name: "Prework Study Guide",
    image: {preworkStudyGuide},
    alt: "Prework Study Guide Landing Page",
    description:
      "This study guide provides useful tips or information for a beginner to the Bootcamp. It incorporates information about HTML, CSS, Git and Javascript, so that when you (the possible beginner) is lost or requires addition information, this web app is the place to go! I learned that coding is an on-going process and will be adding more information as I continue through my coding journey.",
    deployedLink: "https://godwingi.github.io/prework-study-guide/",
    githubRepoLink: "https://github.com/godwingi/prework-study-guide",
  },
  {
    id: 2,
    name: "Cinema Travel Guide",
    image: {cinemaTravelGuide},
    alt: "Cinema Travel Landing Page",
    description:
      "This app is designed to allow its users to search a place of interest, in order to see the current weather, and view the top three (3) movies that has that city or country’s name in it.",
    deployedLink: "https://kcl20.github.io/Cinema-Travel-Guide/",
    githubRepoLink: "https://github.com/kcl20/Cinema-Travel-Guide",
  },
  {
    id: 3,
    name: "Chef's Choice",
    image: {chefsChoice},
    alt: "Chef's Choice Landing Page",
    description:
      "Introducing “Chef’s Choice” – a recipe bank that holds a plethora of recipes added by a variety of users. The recipes are all categorized by type of meal and/or preference of meal. Once you’ve chosen your meal, you can then use the embedded link to purchase the ingredients on the Walmart website.",
    deployedLink: "https://chefs-choise.herokuapp.com/",
    githubRepoLink: "https://github.com/WeitheFang/chefs-choice",
  },
];
