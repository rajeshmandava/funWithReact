import * as React from "react";

const App = () => {
  const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
  ];
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  // const searchedStories = stories.filter(function (story) {
  //   return story.author.includes(searchTerm);
  // });
  // const searchedStories = stories.filter((story) =>
  //   story.title.includes(searchTerm)
  // );

  const filterWords = words.filter(function (word) {
    return word.includes(searchTerm);
  });
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <hr />
      {/* <List list={searchedStories} /> */}
      <hr></hr>
      <List2 list2={filterWords} />
    </div>
  );
};

const Search = (props) => {
  const handleChange = (event) => {
    props.onSearch(event);
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={props.onSearch} />
    </div>
  );
};

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);

const List2 = (props) => (
  <ul>
    {props.list2.map((item) => (
      <li>{item}</li>
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

export default App;
