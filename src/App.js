import { useState, useEffect } from "react"
import './App.css';
//匯入components
import Form from './components/Form'
import TodoList from './components/TodoList';


function App() {

  /**
   * useState 會回傳一個包含兩個值的 array，第一個值是 state、第二個值是用來更新 state 的函式。
   * 每當 state 值改變，就會觸發 re-render
   */
  const [inputText, setInputText] = useState("") //默認空值
  const [inputText1, setInputText1] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all") //默認分類:全部
  const [filteredTodos, setFilteredTodos] = useState([]) //完成與未完成

  //第一次開啟
  useEffect(() => {
    getLocalTodos()
  }, [])

  //USE EFFECT 將狀態放入新array
  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  //Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break
      default:
        setFilteredTodos(todos)
        break
    }
  }
  //儲存local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }
  //
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Vic Kuo的英文小筆記</h1>
      </header>
      {/* 使用Form TodoList */}
      <Form
        inputText={inputText}
        inputText1={inputText1}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setInputText1={setInputText1}
        setStatus={setStatus}
      />
      {/* 傳送todos至TodoList */}
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
