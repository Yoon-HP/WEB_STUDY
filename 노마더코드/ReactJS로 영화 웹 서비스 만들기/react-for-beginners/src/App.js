import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

/*
useEffect함수를 이용해 한번만 렌더링할 컴포넌트를 지정할 수 있음 ex) API 호출 등
useEffect의 매개변수 중 [] 에 아무것도 없다면 한번만 호출된다고 보장가능
Cleanup create와 destroy의 반복
컴포넌트가 사라지거나 없어질때 무언가를 보여주고 싶다면...
useEffect와 return을 이용해 구현

useEffect(() => {
  console.log("hi :)");
  return () => console.log("bye :(");
}, []);

*/
