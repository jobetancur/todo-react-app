import TodoItem from "./TodoItem"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"

function TodoList({ todos, removeTodo, upDateTodo, handleDragEnd }) {
    
  return (
    <DragDropContext onDragEnd={ handleDragEnd }>
      <Droppable droppableId="todosDrop">
        {
          ( droppableProvider ) => (
            <div 
              className="bg-white rounded-t-md mt-8 dark:bg-gray-800"
              ref={ droppableProvider.innerRef }
              { ...droppableProvider.droppableProps }
            >  
              {
                todos.map(( todo, index ) => (
                  <Draggable 
                    key={ todo.id } 
                    index={ index }
                    draggableId={ todo.id.toString() }
                  >
                    {
                      ( draggableProvider ) => (
                        <TodoItem 
                          todo={ todo } 
                          removeTodo={ removeTodo } 
                          upDateTodo={ upDateTodo }
                          draggableProvider={ draggableProvider }
                        />
                      )
                    }
                  </Draggable>
                ))
              }
              { droppableProvider.placeholder }
            </div>
          )
        }
      </Droppable>
    </DragDropContext>
  )
}

export default TodoList