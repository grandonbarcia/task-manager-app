'use client';

import Image from 'next/image';
import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const STORES = [
  {
    id: '0e2f0db1-5457-46b0-949e-8032d2f9997a',
    name: 'Walmart',
    items: [
      { id: '26fd50b3-3841-496e-8b32-73636f6f4197', name: '3% Milk' },
      { id: 'b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525', name: 'Butter' },
    ],
    tint: 1,
  },
  {
    id: '487f68b4-1746-438c-920e-d67b7df46247',
    name: 'Indigo',
    items: [
      {
        id: '95ee6a5d-f927-4579-8c15-2b4eb86210ae',
        name: 'Designing Data Intensive Applications',
      },
      { id: '5bee94eb-6bde-4411-b438-1c37fa6af364', name: 'Atomic Habits' },
    ],
    tint: 2,
  },
  {
    id: '25daffdc-aae0-4d73-bd31-43f73101e7c0',
    name: 'Lowes',
    items: [
      { id: '960cbbcf-89a0-4d79-aa8e-56abbc15eacc', name: 'Workbench' },
      { id: 'd3edf796-6449-4931-a777-ff66965a025b', name: 'Hammer' },
    ],
    tint: 3,
  },
];

export default function Home() {
  const [data, setData] = useState(STORES);

  const handleDragDrop = (results: any) => {
    const { source, destination, type } = results;

    console.log(results);

    console.log('move');

    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    if (type === 'group') {
      const reorderedStores = [...data];

      const sourceIndex = source.index;
      const destinationIndex = destination.index;

      console.log(sourceIndex);
      console.log(destinationIndex);

      const [removedStore] = reorderedStores.splice(sourceIndex, 1);
      reorderedStores.splice(destinationIndex, 0, removedStore);

      return setData(reorderedStores);
    }
  };

  return (
    <main className="flex justify-evenly h-screen w-screen">
      <DragDropContext onDragEnd={handleDragDrop}>
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
      </div>
    </main>
  );
}

{
  /* <div className="flex h-10 mx-auto w-full bg-violet-400">
  <h2 className="mx-auto my-auto">Draggable</h2>
</div>; */
}
