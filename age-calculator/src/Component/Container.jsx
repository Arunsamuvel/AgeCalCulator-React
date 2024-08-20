import arrowImage from "../assets/images/icon-arrow.svg";
import "../Component/container.css";

const Container = () => {
    
  return (
    <div className="main-container">
      <div className="dob">
        <form action="" className="form">
          <div className="day">
            <label htmlFor="">DAY</label>
            <input type="text" />
          </div>
          <div className="month">
            <label htmlFor="">MONTH</label>
            <input type="text" />
          </div>
          <div className="year">
            <label htmlFor="">YEAR</label>
            <input type="text" />
          </div>
        </form>
      </div>

      <button>
        <img src={arrowImage} alt="" className="arrowimage" />
      </button>
    </div>
  );
};

export default Container;
