
function TodoComputed({ itemsLeft, clearCompleted }) {

  return (
    <section className="py-4 px-4 flex justify-between bg-white rounded-b-md">
        <span className="text-gray-400">{itemsLeft} items left</span>
        <button onClick={clearCompleted} className="text-gray-400">Clear completed</button>
    </section>
  )
}

export default TodoComputed