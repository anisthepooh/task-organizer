import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid";

function Input({inputTask, setInputTask, items, setItems, columns, setColumns, placeholderDate}) {

    const [edit, setEdit] = useState('1')

    const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

    const submitTaskHandler = (e) => {
        console.log("test")

        e.preventDefault();
        setEdit('2')

        if (inputTask != '') {

        setColumns({
            created:  {
                name: 'To do',
                items: items
            },
            [uuidv4()]: {
                name: 'In progress',
                items: []
              },
              tester: {
                name: 'In tester',
                items: []
              },
            
        })
        console.log("test")
        setItems([
            ...items, {
                id: uuidv4(),
                content: inputTask,
                createdDate: placeholderDate.toLocaleDateString(),
                createdTime: placeholderDate.toLocaleTimeString()
            }
        ])
        setInputTask('') 
    }
}




 
  return (
    <div>
        <form className='form'>
        <input 
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
        type="text" 
        className="todo-input" 
        placeholder='New task'/>
        <button className="todo-button" type="submit" onClick={submitTaskHandler}>
            Add task
        </button>
        
        </form>
    </div>
  )
}

export default Input