import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import workoutData from '../../exercises.json';

export default async function ServerAction() {
    const supabase = createServerActionClient({ cookies })

    const { error } = await supabase.from('workouts').insert(workoutData.map((item: any) => ({
        name: item.name,
        force: item.force,
        level: item.level,
        mechanic: item.mechanic,
        equipment: item.equipment,
        primaryMuscles: item.primaryMuscles,
        secondaryMuscles: item.secondaryMuscles,
        instructions: item.instructions,
        category: item.category
      }))).select()

  revalidatePath('/workouts')


  return (
    <ul className="my-auto">
      <p>done</p>
    </ul>
  );
}