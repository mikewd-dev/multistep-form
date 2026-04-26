import "./Addons.scss";
import "./App.scss";

const Addons = () => {
  return (
    <div className="main">
      <h2>Pick your add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="addonSelector">
        <div className="onlineService">
          <input type="checkbox" />
          <div className="selectText">
            <h3>Online Service</h3>
            <p>Access to online multiplayer features</p>
          </div>
          <p>+$10/yr</p>
        </div>

        <div className="largerStorage">
          <input type="checkbox" />
          <div className="selectText">
            <h3>Larger Storage</h3>
            <p>Additional cloud storage for your games</p>
          </div>
          <p>+$20/yr</p>
        </div>
        <div className="customProfile">
          <input type="checkbox" />
          <div className="selectText">
            <h3>Customisable Profile</h3>
            <p>Personalize your gaming profile</p>
          </div>
          <p>+$20/yr</p>
        </div>
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
export default Addons;
