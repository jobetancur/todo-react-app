
function TodoFilter({ handleFilterChange }) {

  const handleLocalFilterChange = (e) => {
    handleFilterChange(e)
  }

  return (
    <section className="container mx-auto px-4">
        <div
          className="bg-white mt-6 p-4 flex justify-center gap-8 text-gray-500 font-semibold 
        rounded-md"
        >
          <button value="All" onClick={handleLocalFilterChange} className="hover:text-blue-600">All</button>
          <button value="Active" onClick={handleLocalFilterChange} className="hover:text-blue-600">Active</button>
          <button value="Completed" onClick={handleLocalFilterChange} className="hover:text-blue-600">Completed</button>
        </div>
    </section>
  )
}

export default TodoFilter