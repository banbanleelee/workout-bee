'use client';

// TODO: Duplicate or move this file outside the `_examples` folder to make it a route

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useEffect, useState } from 'react';
import { Card, Button } from "flowbite-react";

export default function ClientComponent() {
  const [workouts, setWorkouts] = useState<any[]>([]);

  // Create a Supabase client configured to use cookies
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getWorkouts = async () => {
      // This assumes you have a `todos` table in Supabase. Check out
      // the `Create Table and seed with data` section of the README 👇
      // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
      const { data } = await supabase.from('workouts').select();
      if (data) {
        setWorkouts(data);
      }
    };

    getWorkouts();
  }, [supabase, setWorkouts]);
  
  const workoutData = Object.keys(workouts).map((key: any) => {
    return workouts[key];
  });

  console.log(workoutData);

  return (
  <div>
    {workoutData.map((item) => 
      <Card key={item.id}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17 9a1 1 0 0 0-1 1 6.994 6.994 0 0 1-11.89 5H7a1 1 0 0 0 0-2H2.236a1 1 0 0 0-.585.07c-.019.007-.037.011-.055.018-.018.007-.028.006-.04.014-.028.015-.044.042-.069.06A.984.984 0 0 0 1 14v5a1 1 0 1 0 2 0v-2.32A8.977 8.977 0 0 0 18 10a1 1 0 0 0-1-1ZM2 10a6.994 6.994 0 0 1 11.89-5H11a1 1 0 0 0 0 2h4.768a.992.992 0 0 0 .581-.07c.019-.007.037-.011.055-.018.018-.007.027-.006.04-.014.028-.015.044-.042.07-.06A.985.985 0 0 0 17 6V1a1 1 0 1 0-2 0v2.32A8.977 8.977 0 0 0 0 10a1 1 0 1 0 2 0Z"/>            </svg>
            Force: {item.force}
          </button>
          <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
            </svg>
            Level: {item.level}
          </button>
          <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
            <svg className="w-3 h-3 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.383.076a1 1 0 0 0-1.09.217L11 1.586 9.707.293a1 1 0 0 0-1.414 0L7 1.586 5.707.293a1 1 0 0 0-1.414 0L3 1.586 1.707.293A1 1 0 0 0 0 1v18a1 1 0 0 0 1.707.707L3 18.414l1.293 1.293a1 1 0 0 0 1.414 0L7 18.414l1.293 1.293a1 1 0 0 0 1.414 0L11 18.414l1.293 1.293A1 1 0 0 0 14 19V1a1 1 0 0 0-.617-.924ZM10 15H4a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0-4H4a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2Zm0-4H4a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z"/>
            </svg>
            Category: {item.category}
          </button>
        </div>
        <div>
          <p>Instruction: </p>
          <p>{item.instructions[0]}</p>
        </div>
      </Card>
    )}
     
  </div>
  );
}


{/* <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>



<span className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded mr-2 dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
<svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
</svg>
3 days ago
</span>
<span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
<svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
</svg>
2 minutes ago
</span>

<div className="flex items-center flex-no-wrap">
<span className="bg-gray-200 text-grey-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 mx-4 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
<svg className="w-5 h-5" viewBox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#020202" stroke-width="2px" stroke-miterlimit="10">
    <path className="cls-1" d="M9.14,16.77S8,13.17,10.09,11A14.12,14.12,0,0,1,13,9.13a4.78,4.78,0,1,1,5.61,4.7c-1.83,2.77-5.83,7.71-11.33,7.71C4.36,21.54,1.5,13,1.5,9.13V4.48A2.26,2.26,0,0,1,3.64,2.23c1.73-.09,4,0,4.54,1.17C9,5.11,7.23,8.18,5.32,8.18c0,1.5,1.83,4.76,3.49,6.56"/>   
  </svg>
  <span className="px-2">Force: {item.force}</span>
</span>            
<span className="bg-gray-200 text-grey-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 mx-4 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
<svg className="w-5 h-5" viewBox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#020202" stroke-width="2px" stroke-miterlimit="10">
  <polygon className="cls-1" points="8.29 1.71 18.5 1.71 13.86 9.14 17.57 9.14 7.36 20.29 9.21 12.86 5.5 12.86 8.29 1.71"></polygon>            </svg>
  <span className="px-2">Level: {item.level}</span>
</span>        
</div>
<div className="flex items-center flex-no-wrap">
<span className="flex-none w-1/2 bg-gray-200 text-grey-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 mx-4 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
<svg className="w-5 h-5" viewBox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#020202" stroke-width="2px" stroke-miterlimit="10">
  <polygon className="cls-1" points="22.75 8.09 22.75 22.75 8.09 22.75 1.25 15.91 1.25 1.25 15.91 1.25 22.75 8.09"></polygon><polyline className="cls-1" points="8.09 22.75 8.09 8.09 22.75 8.09"></polyline><polyline className="cls-1" points="15.91 1.25 15.91 15.91 1.25 15.91"></polyline><line className="cls-1" x1="1.25" y1="1.25" x2="8.09" y2="8.09"></line><line className="cls-1" x1="15.91" y1="15.91" x2="22.75" y2="22.75"></line>            </svg>
  <span className="px-2 ">Category: {item.category}</span>
</span>     
<span className="flex-none w-1/2 bg-gray-200 text-grey-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 mx-4 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
<svg className="w-5 h-5" viewBox="0 0 20 20" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#020202" stroke-width="2px" stroke-miterlimit="10">
  <path className="cls-1" d="M.5,12H5.28l6.11-7.06A2,2,0,0,0,12,3.51a2,2,0,0,1,2-2,2.74,2.74,0,0,1,2,.8,2.79,2.79,0,0,1,.8,2c0,2-2.87,5.86-2.87,5.86h6A2.61,2.61,0,0,1,22.5,12.7a2.94,2.94,0,0,1-.05.51L20.89,21A1.91,1.91,0,0,1,19,22.52H11.25a9.13,9.13,0,0,1-4-.95h0a9.08,9.08,0,0,0-4.06-1H.5"></path>            </svg>
  <span className="px-2">Primary Muscle: {item.primaryMuscles}</span>
</span>     
</div>
<p>Instruction: </p>
<p>{item.instructions[0]}</p>      
</a>  */}