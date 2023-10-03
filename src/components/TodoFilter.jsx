
function TodoFilter({ handleFilterChange, filterValue }) {

  const handleLocalFilterChange = (e) => handleFilterChange(e)
  
  return (
    <section className="container mx-auto px-4">
        <div
          className="bg-white mt-6 p-4 flex justify-center gap-8 text-gray-500 font-semibold 
        rounded-md dark:bg-gray-800"
        >
          <button 
            value="All" 
            onClick={handleLocalFilterChange} 
            className={ `
              ${ 
                filterValue === 'All' ? 
                  'text-blue-500' 
                    : 
                  'text-gray-400 hover:text-blue-500 dark:text-gray-300' 
              }` }
          >
            All
          </button>
          <button 
            value="Active" 
            onClick={handleLocalFilterChange} 
            className={ `
              ${ 
                filterValue === 'Active' ? 
                  'text-blue-500' 
                    : 
                  'text-gray-400 hover:text-blue-500 dark:text-gray-300' 
              }` }
          >
            Active
          </button>
          <button 
            value="Completed" 
            onClick={handleLocalFilterChange} 
            className={ `
              ${ 
                filterValue === 'Completed' ? 
                  'text-blue-500' 
                    : 
                  'text-gray-400 hover:text-blue-500 dark:text-gray-300' 
              }` }
          >
            Completed
          </button>
        </div>
    </section>
  )
}

export default TodoFilter