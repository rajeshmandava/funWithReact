import * as React from "react";

const welcome = {
  greeting: "Hey",
  title: "React",
};
const title = function () {
  return "New React";
};

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

const App = () => {
  const stories = [
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
  return (
    <div>
      <h1>
        {welcome.greeting} {welcome.title}
      </h1>
      <Search />
      <h1>
        {welcome.greeting} {title()}
      </h1>

      <hr></hr>
      <List list={stories} />
      <hr></hr>
      <List list={stories} />
      <hr></hr>
    </div>
  );
};

export default App;

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title}</a>
    </span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
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
