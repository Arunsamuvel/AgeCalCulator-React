import arrowImage from "../assets/images/icon-arrow.svg";

const Container = () => {
  return (
    <div>
      <div className="dob">
        <form action="" className="form">
          <div>
            <label htmlFor="">DAY</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">MONTH</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="">YEAR</label>
            <input type="text" />
          </div>
        </form>
        <button>
          <img src={arrowImage} alt="" className="arrowimage" />
        </button>
      </div>
    </div>
  );
};

export default Container;
