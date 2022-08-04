function Card() {
  return (
    <div className="row">
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src="https://picsum.photos/seed/picsum/200/300" />
          </div>
          <div className="card-content">
            <p>React From the Beginning</p>
            <p>Rajesh Mandava</p>
          </div>
          <div className="card-action">
            <a href="#">$9.99</a>
          </div>
        </div>
      </div>
    </div>
  );
}
