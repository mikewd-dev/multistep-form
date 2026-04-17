
import "./Personal.css"

const Personal = () => {
  return (
    <div className="personal">
      <h2>Personal Information</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <form className="personalForm">
        <div className="field">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="e.g. Stephen King" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="e.g. stephenking@loremcom" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" placeholder="+1 234 567 8901" required />
        </div>
        <button className="formButton" type="button">Next Step</button>
      </form>
    </div>
  );
};
export default Personal;
