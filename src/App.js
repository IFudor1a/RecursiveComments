import CommentsLabel from "./Components/CommentsLabel";
import FormComment from "./Components/FormComment";
import {useState} from "react";

function App() {
    const [toggle,setToggle] = useState(true)
  return (
    <div className="App">
      <FormComment setToggle={setToggle}/>
      <CommentsLabel setToggle={setToggle} toggle={toggle}/>

    </div>
  );
}
export default App;
