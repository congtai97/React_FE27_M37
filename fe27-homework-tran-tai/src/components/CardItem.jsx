import "./style.css";
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import { FaStar } from "react-icons/fa";
export const CardItem = () => {
  return (
    <div className="cardItem">
      <div className="card-image"></div>
      <div className="card-title">
        <h2>Title</h2>
        <div className="card-star">
          <FaStar className="star"></FaStar>
          <FaStar className="star"></FaStar>
          <FaStar className="star"></FaStar>
          <FaStar className="star"></FaStar>
          <p>5 (413)</p>
        </div>
        <span>Secondary text</span>
        <p>

          Lorem ipsum coládador sit amet, consectetur adipisdfsfsdicing elit,
          sed do eiusmod tempor

        </p>
      </div>
      <hr />
      <div className="card-subtitle">
        <p>Subtitle</p>
        <div className="item">
          <button>Item 1</button>
          <button>Item 2</button>
          <button>Item 3</button>
          <button>Item 4</button>
        </div>
      </div>
<<<<<<< Updated upstream
      <div className="action">{/* <a href="#">ACTION 1</a> */}</div>
=======
      <div className="action">
        <a href="#">ACTION 1</a>
      </div>
>>>>>>> Stashed changes
    </div>
  );
};
