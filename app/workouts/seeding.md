import { createServerActionClient } from '@supabase/auth-helpers-nextjs';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import workoutData from '../../exercises.json';


export default async function ServerAction() {
  const supabase = createServerActionClient({ cookies });

  const { data: existingData, error: existingError } = await supabase
  .from('workouts')
  .select();

if (existingError) {
  console.error('Error retrieving existing data:', existingError);
} else {
  const deletePromises = existingData.map((row) =>
    supabase.from('workouts').delete().match({ id: row.id })
  );

  await Promise.all(deletePromises);

  console.log('Data deleted successfully');

  
  const { data: insertData, error: insertError } = await supabase
    .from('workouts')
    .insert(
      workoutData.map((item) => ({
        name: item.name,
        force: item.force,
        level: item.level,
        mechanic: item.mechanic,
        equipment: item.equipment,
        primaryMuscles: item.primaryMuscles,
        secondaryMuscles: item.secondaryMuscles,
        instructions: item.instructions,
        category: item.category,
      }))
    );

  if (insertError) {
    console.error('Error inserting data:', insertError);
  } else {
    console.log('Data inserted successfully');
    
    const { data: newData, error: selectError } = await supabase
      .from('workouts')
      .select();

    if (selectError) {
      console.error('Error retrieving data:', selectError);
    } else {
      console.log('Retrieved data:', newData);
    }
  }
}

  revalidatePath('/workouts');

  return (
    <ul className="my-auto">
      <p>done</p>
    </ul>
  );
}
