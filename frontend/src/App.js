import './App.css';
import React, { useState, useEffect } from 'react'
import UpperTodo from './components/UpperTodo'
import AddTask from './components/AddTask';
import TodoCards from './components/TodoCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'



function App() {

  const [todos, setTodos] = useState([])

  // call this function
  const getTodoList = async () => { 
    try{
        const response = await axios.get('/api/')
        const { data } = response
        setTodos(data)
    } catch (err){
      console.log(err)
    }
  }

  useEffect(() => {
    getTodoList()
  }, [])



  // method to add new todo
  const addTodo = async newTodo => {
    console.log(newTodo)
    try{
      // POST request
      await axios.post('/api/', newTodo)
      getTodoList()

    } catch (err) {
        console.log(err)
    }
  }

  //handle completed todo items
  const completeTodo = async id  => {
    try{
      // use filter method to see which id matches
      const todo = todos.filter(todo => todo.id === id)[0]
      todo.completed = true
      await axios.put(`/api/${id}/`, todo)
      getTodoList()
    } catch (err) {
      console.log(err)
    }
  }

  //update todo
  const editTodo = async todo =>{
    try{
      await axios.put(`/api/${todo.id}/`, todo)
      getTodoList()
    } catch (err) {
      console.log(err)
    }
  }

  //handle delete functionality
  const deleteTodo = async id =>{
    try{
        await axios.delete(`/api/${id}/`)
        getTodoList()
    } catch (err){
      console.log('err')
    }
  }


  return (
    <>
      <UpperTodo/>
      <AddTask addTodo ={addTodo} />
      {todos.map((todo, index) => (
        // show todo details which are false
        !todo.completed && <TodoCards key={index} id ={todo.id} title={todo.title} body={todo.body}
        completeTodo = {completeTodo}
        deleteTodo = {deleteTodo}
        editTodo = {editTodo}
        />
      ))}
    </>
  );
}

export default App;
