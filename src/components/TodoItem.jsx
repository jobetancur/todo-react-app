import CheckIcon from "./icons/CheckIcon"
import CrossIcon from "./icons/CrossIcon"

function TodoItem( { todo, removeTodo, upDateTodo } ) {

  return (
    <article className="flex py-6 gap-4 border-b px-4">
        <button
          onClick={() => upDateTodo (todo.id)} 
          className={ 
            `w-6 h-6 rounded-full border-2 ${ todo.completed ? 
              "bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-300 flex justify-center items-center" 
                : 
              "inline-block flex-none" 
            }` 
          }
        >
          {
            todo.completed && <CheckIcon />
          }
        </button>
        <p className={ 
          `grow font-medium ${ todo.completed ? 
            "text-gray-300 line-through" 
              : 
            "text-gray-600" }` 
          }
        >
          { todo.title }
        </p>
        <button onClick={() => removeTodo (todo.id)} className="flex-none">
          <CrossIcon />
        </button>
    </article>
  )
}

export default TodoItem