import Menu from "./Menu";
// import Personal from "./Personal";
// import MonthlyPlan from "./MonthlyPlan";
//import YearlyPlan from "./YearlyPlan";//
import Addons from "./Addons";
import "./App.scss";

function App() {
  return (
    <div className='layout'>
      <Menu />
      {/* <Personal /> */}
      {/* <MonthlyPlan /> */}
      {/* <YearlyPlan /> */}
      <Addons />
    </div>
  )
}

export default App
