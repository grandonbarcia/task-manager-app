'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import initialData from './initial-data';

type taskId = {
  'task-1': { id: string; content: string };
  'task-2': { id: string; content: string };
  'task-3': { id: string; content: string };
  'task-4': { id: string; content: string };
};

export default function Home() {
  const [data, setData] = useState(initialData);

  // const handleDragDrop = (results: any) => {
  //   const { source, destination, type } = results;

  //   console.log(results);

  //   console.log('move');

  //   if (!destination) return;

  //   if (
  //     source.droppableId === destination.droppableId &&
  //     source.index === destination.index
  //   )
  //     return;

  //   if (type === 'group') {
  //     const reorderedStores = [...data];

  //     const sourceIndex = source.index;
  //     const destinationIndex = destination.index;

  //     console.log(sourceIndex);
  //     console.log(destinationIndex);

  //     const [removedStore] = reorderedStores.splice(sourceIndex, 1);
  //     reorderedStores.splice(destinationIndex, 0, removedStore);

  //     return setData(reorderedStores);
  //   }
  // };

  return (
    <main className="flex justify-evenly h-screen w-screen">
      {data.columnOrder.map((columnId: string | number) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map(
          (taskId: string) => data.tasks[taskId]
        );
        return column.title;
      })}
    </main>
  );
}

{
  /* <div className="flex h-10 mx-auto w-full bg-violet-400">
  <h2 className="mx-auto my-auto">Draggable</h2>
  </div>; */
}

{
  /* <DragDropContext onDragEnd={handleDragDrop}>
  <div className="h-1/2 w-1/4 bg-emerald-200 rounded text-center p-5">
    <h1 className="text-2xl font-bold">Droppable</h1>
    <Droppable droppableId="ROOT" type="group">
      {(provided) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {data.map((store, index) => (
            <Draggable
              draggableId={store.id}
              key={store.id}
              index={index}
            >
              {(provided) => (
                <div
                  className="flex h-10 mx-auto w-full bg-violet-400"
                  {...provided.dragHandleProps}
                  {...provided.draggableProps}
                  ref={provided.innerRef}
                >
                  <h2 className="mx-auto my-auto">{store.name}</h2>
                </div>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
</DragDropContext>
<div className="h-1/2 w-1/4 bg-emerald-200 rounded text-center">
  <h1 className="text-2xl font-bold">Droppable</h1>
  <div className="flex h-10 mx-auto w-1/2 bg-violet-400">
    <h2 className="mx-auto my-auto">Draggable</h2>
  </div>
</div> */
}
