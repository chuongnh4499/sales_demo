import { Card, List } from 'antd'
import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
// interface PipeLineProps{}

const data = [
    {
        id: '1',
        title: 'Title 1',
    },
    {
        id: '2',
        title: 'Title 2',
    },
    {
        id: '3',
        title: 'Title 3',
    },
    {
        id: '4',
        title: 'Title 4',
    },
    {
        id: '5',
        title: 'Title 5',
    }
];

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
	padding: 10,
	margin: `0 50px 15px 50px`,
	background: isDragging ? "#4a2975" : "white",
	color: isDragging ? "white" : "black",
	border: `1px solid black`,
	fontSize: `20px`,
	borderRadius: `5px`,

	...draggableStyle
})

export const PipeLine: React.FC = () => {
    const [todo, setTodo] = useState(data);

    const onDragEnd = (result: DropResult) => {
        // const {source, destination} = result;
        // if(!destination) return

        // const items = Array.from(todo);
        // const [newOrder] =items.splice(source.index, 1);
        // items.splice(destination.index, 0, newOrder);

        // setTodo(items);
        console.log(result);
        
    }
    return (
        <>
            <h1>Pipeline</h1>
            <DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="todo">
					{(provided) => (
						<div className="todo" {...provided.droppableProps} ref={provided.innerRef}>
							{todo.map(({ id, title }, index) => {
								return (
									<Draggable key={id} draggableId={id} index={index}>
										{(provided, snapshot) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
											>
												{title}
											</div>
										)}
									</Draggable>
								)
							})}
						</div>
					)}
				</Droppable>
			</DragDropContext>
        </>
    )
}
