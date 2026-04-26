import "./MonthlyPlan.scss";
import "./App.scss";
import arcadeIcon from "./assets/images/icon-arcade.svg";
import advancedIcon from "./assets/images/icon-advanced.svg";
import proIcon from "./assets/images/icon-pro.svg";
const MonthlyPlan = () => {
  return (
    <div className="main">
      <h2>Select Your Plan</h2>
      <p>You can choose between monthly and yearly plans.</p>
      <div className="planSelector">
        <div className="arcade">
          <img src={arcadeIcon} alt="Arcade" />
          <h3>Arcade</h3>
          <p>$9/mo</p>
        </div>
        <div className="advanced">
          <img src={advancedIcon} alt="Advanced" />
          <h3>Advanced</h3>
          <p>$12/mo</p>
        </div>
        <div className="pro">
          <img src={proIcon} alt="Pro" />
          <h3>Pro</h3>
          <p>$15/mo</p>
        </div>
      </div>
      <div className="planPeriod">
        <span className="periodToggle">Monthly</span>
        <label className="switch">
            <input type="checkbox" />
            <span
              className="slider round"
              data-on="Monthly"
              data-off="Yearly"
            ></span>
        </label>
        <span className="periodToggle">Yearly</span>
      </div>
      <div className="buttons">
        <a type="" className="goBack">
          Go Back
        </a>
        <button className="formButton">Next Step</button>
      </div>
    </div>

  );
};
export default MonthlyPlan;
