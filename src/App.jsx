import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

// const initialState = [
//   {
//     id: 1,
//     title: 'Complete online JavaScript course',
//     completed: true
//   },
//   {
//     id: 2,
//     title: 'Jog around the park 3x',
//     completed: false
//   },
//   {
//     id: 3,
//     title: '10 minutes meditation',
//     completed: false
//   },
//   {
//     id: 4,
//     title: 'Read for 1 hour',
//     completed: false
//   },
//   {
//     id: 5,
//     title: 'Pick up groceries',
//     completed: false
//   },
//   {
//     id: 6,
//     title: 'Complete Todo App on Frontend Mentor',
//     completed: false
//   }
// ]

const initialState = JSON.parse(localStorage.getItem('todos')) || [];

function App() {

  const [ todos, setTodos ] = useState(initialState);
  const [ itemsLeft, setItemsLeft ] = useState(0);
  const [ filterValue, setFilterValue ] = useState('All');

  useEffect(() => { 
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false
    }
    setTodos([ ...todos, newTodo ]); 
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); 
  }

  const upDateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)); 
  }

  useEffect(() => {
    setItemsLeft(todos.filter(todo => !todo.completed).length);
  }, [todos])

  const clearCompleted = () => setTodos(todos.filter(todo => !todo.completed));

  const handleFilterChange = (e) => setFilterValue(e.target.value);
  
  const filteredTodos = () => {
    switch (filterValue) {
      case 'All':
        return todos;
      case 'Active':
        return todos.filter(todo => !todo.completed);
      case 'Completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }

  const handleDragEnd = (result) => {
    if(!result.destination) return;
  
    const initialIndex = result.source.index;
    const finalIndex = result.destination.index;
    
    const newTodos = [ ...todos ];  
    const [ removed ] = newTodos.splice(initialIndex, 1);
    
    newTodos.splice(finalIndex, 0, removed);
    
    setTodos(newTodos);
  }

  return (
    <div 
      className="
        bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat bg-gray-200 min-h-screen dark:bg-gray-900
        dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]
        md:bg-[url('./assets/images/bg-desktop-light.jpg')]
        md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]
      "
    >

      <Header />

      <main className="container mx-auto px-4 mt-6 md:max-w-3xl">

        <TodoCreate createTodo={ createTodo } />

        <TodoList 
          todos={ filteredTodos() } // Se envían los todos filtrados para que se muestren en pantalla.
          removeTodo={ removeTodo } 
          upDateTodo={ upDateTodo }
          handleDragEnd={ handleDragEnd }
        />

        <TodoComputed 
          itemsLeft={ itemsLeft }
          clearCompleted={ clearCompleted }
        /> 

        <TodoFilter 
          handleFilterChange={ handleFilterChange }
          filterValue={ filterValue }
          
        />

      </main>

      {/* Footer */}
      <section className="text-center mt-14 text-gray-500">
        Drag and drop to reorded list
      </section>
    </div>
  );
}

export default App;
