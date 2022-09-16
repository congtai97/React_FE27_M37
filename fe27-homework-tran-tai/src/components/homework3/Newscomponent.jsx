import "./newscomponent.scss";

function Newscomponent(props) {
  return (
    <div className="new-item">
      <div className="id">{props.id}</div>
      <div className="img">
        <img src={props.images} alt="" />
      </div>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="by">
          by <span className="by-name">{props.developer}</span>
        </div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}

export default Newscomponent;
