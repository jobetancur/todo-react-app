
function TodoComputed({ itemsLeft, clearCompleted }) {

  return (
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md dark:bg-gray-800">
        <span className="text-gray-400 dark:text-gray-300">
          {itemsLeft} items left
        </span>
        <button 
          onClick={ clearCompleted } 
          className="text-gray-400 dark:text-gray-300"
        >
          Clear completed
        </button>
    </section>
  )
}

export default TodoComputed