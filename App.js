import { useState } from "react"
import Card from "./components/Card";


const App = () => {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("");

  const updateInput = (e) => {
    setUserInput(e.target.value);
  };
  const addHandler = () => {
    const newArr = [...list];
    newArr.push(userInput);
    setList(newArr);
    setUserInput("")
  };
  const removeHandler = (index) => {
    const newArr = [...list];
    newArr.splice(index, 1);
    setList(newArr);
  };

  return (
    <div>
      <h1>todo list</h1>
      <input type="text" value={userInput} onChange={updateInput} />
      <button onClick={addHandler}>add</button>
      <h2>{userInput}</h2>
      {list.map((item, index) => {
        return <Card index={index} removeHandler={removeHandler} key={index} item={item} />;
      })}
    </div>
  );
};


export default App;
