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

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getName() {
    return this.firstName + " " + this.lastName;
  }
}

const robin = new Person("Robin", "Wàllen");
console.log(robin);

const dennis = new Person("Dennis", "Richie");
console.log(dennis);

const App = () => (
  <div>
    <h1>
      {welcome.greeting} {welcome.title}
    </h1>
    <Search />
    <h1>
      {welcome.greeting} {title()}
    </h1>

    <hr></hr>
    <List />
    <hr></hr>
    <List />
    <hr></hr>
  </div>
);

export default App;

const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
        <span>{item.popularLibraries}</span>
      </li>
    ))}
  </ul>
);

const Search = () => {
  const handleChange = (event) => {
    console.log(event);
    console.log(event.target.value);
  };
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={handleChange}></input>
    </div>
  );
};
