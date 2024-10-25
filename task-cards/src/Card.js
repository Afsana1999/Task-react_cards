import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
export const Card = ({ img, title, price }) => {
  return (
    <div className="Card">
      <div>
        <img src={img}  width={330} />
        <p className="Title">{title}</p>
        <span className="Title">{price}azn</span>
        <div>
          <button className="Button"><FontAwesomeIcon icon={faCartPlus} />  Add to basket</button>
        </div>
      </div>
    </div>
  );
};

