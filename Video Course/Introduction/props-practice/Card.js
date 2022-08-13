// function Card(props) {
//   console.log(props);
//   return (
//     <div className="col s2">
//       <div className="card hoverable small">
//         <div className="card-image">
//           <img src={props.data.image} />
//         </div>
//         <div className="card-content">
//           <p>{props.data.course}</p>
//           <p>{props.data.instructor}</p>
//         </div>
//         <div className="card-action">
//           <a href="#">$9.99</a>
//         </div>
//       </div>
//     </div>
//   );
// }

class Card extends React.Component {
  constructor() {
    super();
    console.log("Constructor ran");
  }
  render() {
    return (
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src={this.props.data.image} />
          </div>
          <div className="card-content">
            <p>{this.props.data.course}</p>
            <p>{this.props.data.instructor}</p>
          </div>
          <div className="card-action">
            <a href="#">$9.99</a>
          </div>
        </div>
      </div>
    );
  }
}
