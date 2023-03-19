//Technologies
import React from "react";
import { Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
//Components
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
//Images
import preworkStudyGuide from "./images/prework-study-guide.png";
import cinemaTravelGuide from "./images/cinema-travel-guide.png";
import chefsChoice from "./images/chefs-choice.png";
import codingQuiz from "./images/coding-quiz.png";
import portfolioOne from "./images/portfolio-one.png";

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Josefin Sans', sans-serif;
}
`;
export default function Portfolio() {
  return (
    <>
      <div>
        <GlobalStyle />
        <Header />
        <NavBar />
        <Routes>
          <Route path="" element={<AboutMe />} />
          <Route
            path="/projects"
            element={<ProjectList projects={projects} />}
          />
          <Route path="/contact-me" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

const projects = [
  {
    id: 1,
    name: "1. Prework Study Guide",
    image: preworkStudyGuide,
    alt: "Prework Study Guide Landing Page",
    description:
      "This study guide provides useful tips or information for a beginner to the Bootcamp. It incorporates information about HTML, CSS, Git and Javascript, so that when you (the possible beginner) is lost or requires addition information, this web app is the place to go! I learned that coding is an on-going process and will be adding more information as I continue through my coding journey.",
    deployedLink: "https://godwingi.github.io/prework-study-guide/",
    githubRepoLink: "https://github.com/godwingi/prework-study-guide",
  },
  {
    id: 2,
    name: "2. Portfolio Made With Plain HTML & CSS",
    image: portfolioOne,
    alt: "Portfolio One Landing Page",
    description:
      "In trying to show my progress through my learning, here is the first portfolio I created. This portfolio showcases where I started off with, and how far I've come. The journey is important.",
    deployedLink: "https://godwingi.github.io/godwin-portfolio/",
    githubRepoLink: "https://github.com/godwingi/godwin-portfolio",
  },
  {
    id: 3,
    name: "3. Coding Quiz",
    image: codingQuiz,
    alt: "Coding Quiz Landing Page",
    description:
      "The following application is a simple coding quiz in a multiple choice format. When you get a wrong answer, the time is decreased by 15 seconds. If you answer all the questions correctly, you will get a -- You Win -- prompt, asking you to give your initals to store and then put on a leaderboard. If you lose, you can start the game if you wish by refreshing the browser.",
    deployedLink: "https://godwingi.github.io/code-quiz/",
    githubRepoLink: "https://github.com/godwingi/code-quiz",
  },
  {
    id: 4,
    name: "4. Cinema Travel Guide / Group Project",
    image: cinemaTravelGuide,
    alt: "Cinema Travel Landing Page",
    description:
      "This app is designed to allow its users to search a place of interest, in order to see the current weather, and view the top three (3) movies that has that city or country’s name in it.",
    deployedLink: "https://kcl20.github.io/Cinema-Travel-Guide/",
    githubRepoLink: "https://github.com/kcl20/Cinema-Travel-Guide",
  },
  {
    id: 5,
    name: "5. Chef's Choice / Group Project",
    image: chefsChoice,
    alt: "Chef's Choice Landing Page",
    description:
      "Introducing “Chef’s Choice” – a recipe bank that holds a plethora of recipes added by a variety of users. The recipes are all categorized by type of meal and/or preference of meal. Once you’ve chosen your meal, you can then use the embedded link to purchase the ingredients on the Walmart website.",
    deployedLink: "https://chefs-choise.herokuapp.com/",
    githubRepoLink: "https://github.com/WeitheFang/chefs-choice",
  },
  {
    id: 6,
    name: "6. Project #3 / Group Project",
    image: "TDB",
    alt: "TBD",
    description: "TBD",
    deployedLink: "TBD",
    githubRepoLink: "TBD",
  },
];
