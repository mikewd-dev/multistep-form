import "./Plan.css";
import "./App.css";
import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";
const Plan = () => {
  return (
    <div className="main">
      <h2>Select Your Plan</h2>
      <p>You can choose between monthly and yearly plans.</p>
      <div className="planSelector">
        <div className="arcade">
          <img src={arcadeIcon} alt="Arcade" />
        </div>
        <div className="advanced">
          <img src={advancedIcon} alt="Advanced" />
        </div>
        <div className="pro">
          <img src={proIcon} alt="Pro" />
        </div>
      </div>
      <div className="planPeriod">
        <span>Monthly</span>
        <label className="switch">
            <input type="checkbox" />
            <span
              className="slider round"
              data-on="Monthly"
              data-off="Yearly"
            ></span>
        </label>
        <span>Yearly</span>
      </div>
    </div>
  );
};
export default Plan;
