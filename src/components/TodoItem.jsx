import CheckIcon from "./icons/CheckIcon"
import CrossIcon from "./icons/CrossIcon"

function TodoItem( { todo, removeTodo, upDateTodo } ) {

  return (
    <article className="flex py-6 gap-4 border-b px-4 dark:border-gray-700">
        <button
          onClick={() => upDateTodo (todo.id)} 
          className={ 
            `w-6 h-6 rounded-full border ${ todo.completed ? 
              "bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-300 flex justify-center items-center" 
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
            "text-gray-300 line-through dark:text-gray-500" 
              : 
            "text-gray-600 dark:text-gray-300" }` 
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