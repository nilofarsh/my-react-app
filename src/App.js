import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import  Todos  from "./MyComponents/Todos";
import { useState,useEffect } from "react";
import AddTodo from './MyComponents/AddTodo';
import { About } from "./MyComponents/About";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  
  const onDelete=(todo)=>{
    
    console.log("its for delete button");
    setTodos(todos.filter((e)=>{
     return  e !==todo
    }))
  }
  const add =(title,desc)=>{
    // console.log("Form Submitted",title,desc);
    let sno = todos.length + 1
    const myTodo ={
      sno :sno,
    title :title,
    desc:desc
    }
    // console.log(myTodo);
    setTodos([...todos,myTodo])
    

  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  // const [todos, setTodos] = useState(
  //   [
  //   {
  //     "sno" :"1",
  //   "title" :"part 1",
  //   "desc":"accountibilty for part1"
  //   },
  //   {
  //     "sno" :"2",
  //   "title" :"part 2",
  //   "desc":"accountibilty for part2"
  //   },
  //   {
  //     "sno" :"3",
  //   "title" :"part 3",
  //   "desc":"accountibilty for part3"
  //   }
  // ]);
  return (

<div>
<> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <AddTodo add={add} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </>
</div>
  )

}

export default App;
