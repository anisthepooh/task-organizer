import React, {useEffect} from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'
import '../styling/card.css'
import { useState } from 'react'

function Card({item, index, setColumns, items, columns, setItems}) {


    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    
        const deleteHandler = () => {
                console.log("item: ", item.id)
                setItems(items.filter(el => el.id !== item.id))
                forceUpdate(); 
                
                
            }
    
        
    

  return (
    <div>
        <Draggable key={item.id} draggableId={item.id} index={index}>
            {(provided, snapshot) => {
                return (
                <div 
                className='card'
                ref={provided.innerRef} 
                {...provided.draggableProps} 
                {...provided.dragHandleProps}
                style={{
                    userSelect: 'none',
                    padding: 16,
                    margin: '0 0 8px 0',
                    minHeight: '50px',
                    backgroundColor: snapshot.isDragging ? '#263B4A' : '#456C86',
                    color: 'white',
                    borderRadius: '12px',
                    ...provided.draggableProps.style
                }}
                
                >
                    <div className='card-wrapper'>
                        <div className='task-button-wrapper'>
                            <div className='task-description'>
                                {item.content}
                            </div>
                            <button onClick={deleteHandler}>Delete</button>
                        </div>
                        
                        <div>
                            <div className='created'>
                                {item.createdDate}
                                <br/>
                                {item.createdTime}
                            </div>
                        </div>
                    </div>
                </div>
                )
            }}
        </Draggable>
    </div>
  )
}

export default Card