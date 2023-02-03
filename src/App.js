import "./App.css";
import MyFullName from "./components/MyFullName";
import { AllNames } from "./constants/AllNames";

const App = () => {
  return (
    <>
      {AllNames.map((item) => (
        <MyFullName name={item.name} age={item.age} />
      ))}

      {/* <MyFullName name={AllNames[0].name} age={AllNames[0].age} />
      <MyFullName name={AllNames[1].name} age={AllNames[1].age} />
      <MyFullName name={AllNames[2].name} age={AllNames[2].age} />
      <MyFullName name={AllNames[3].name} age={AllNames[3].age} />
      <MyFullName name={AllNames[4].name} age={AllNames[4].age} /> */}
    </>
  );
};

export default App;
