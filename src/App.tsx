import { useState } from 'react';
import { mockTodayBlocks } from './data/mockData';
import type { TimeBlock } from './types';

function App() {
  // use state function to define the type of blocks --> An array of TimeBlock Objects
  // and then we initliaze it with our mockTodayBlock data which is the same struc

  const [blocks, setBlocks] = useState<TimeBlock[]>(mockTodayBlocks);

  return (
    <div className='min-h-screen bg-gray-50'>
      <header className='bg-white border-b border-gray-200 px-6 py-4'>
        <h1 className='text-2xl font-semibold text-gray-900'>Weekly Planner</h1>
      </header>

      <main className='max-w-4xl mx-auto px-6 py-8'>
        <h2 className='text-lg font-medium text-gray-900 mb-4'>
          Today's Schedule
        </h2>

        <div className='space-y-3'>
          {blocks.map((block) => (
            <div
              key={block.id}
              className='bg-white border border-gray-200 rounded-lg p-4'>
              <div className='flex items-center justify-between'>
                <div>
                  <h3 className='font-medium text-gray-900'>
                    {block.goalName}
                  </h3>
                  <p className='text-sm text-gray-500'>
                    {new Date(block.startTime).toLocaleTimeString('en-US', {
                      hour: 'numeric',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
                <span
                  className={`
                  px-3 py-1 rounded-full text-xs font-medium
                  ${block.status === 'completed' ? 'bg-green-100 text-green-800' : ''}
                  ${block.status === 'planned' ? 'bg-gray-100 text-gray-800' : ''}
                  ${block.status === 'skipped' ? 'bg-red-100 text-red-800' : ''}
                `}>
                  {block.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
