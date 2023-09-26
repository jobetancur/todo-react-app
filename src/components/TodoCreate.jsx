import { useState } from "react";

function TodoCreate({ createTodo }) {

    const [ titleValue, setTitleValue ] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      const title = titleValue;

      if (title.trim().length > 0) {
        createTodo (title);
        setTitleValue('');
      } else {
        setTitleValue('');
      }

    }

    const handleValueChange = (e) => {
      setTitleValue(e.target.value);
    }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
        <span className="inline-block  border-2 w-5 h-5 rounded-full"></span>
        <input
          type="text"
          placeholder="Create a new todo..."
          className="rounded-md w-full text-gray-400 outline-none font-medium"
          value={titleValue}
          onChange={handleValueChange}
        />
    </form>
  )
}

export default TodoCreate