import TodoItem from "./TodoItem"

function TodoList({ todos, removeTodo, upDateTodo }) {
    
  return (
    <div className="bg-white rounded-t-md mt-8">
        
        {
            todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} upDateTodo={upDateTodo} />
            ))
        }

    </div>
  )
}

export default TodoList