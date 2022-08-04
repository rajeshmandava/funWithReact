let cards = data.map((course) => {
  return <Card data={course} />;
});

console.log(cards);

ReactDOM.render(
  <div className="row">{cards}</div>,
  document.getElementById("root")
);
