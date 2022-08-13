import * as React from "react";

const welcome = {
  greeting: "Hey",
  title: "React",
};
const title = function () {
  return "New React";
};

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    popularLibraries: "Material UI, Ant Design, React-Bootstrap",

    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    popularLibraries: "Redux-Actions, Reselect, Redux-Saga",
    objectID: 1,
  },
];

function App() {
  return (
    <>
      <div>
        <h1>
          {welcome.greeting} {welcome.title}
        </h1>
        <h1>
          {welcome.greeting} {title()}
        </h1>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text"></input>
      </div>
      <hr></hr>
      <div>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
              <span>{item.popularLibraries}</span>
            </li>
          );
        })}
      </div>
    </>
  );
}
export default App;
