"use server"
import { createClient } from '@/utils/supabase/server'

export const getUser = async () => {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  // console.log(user)s
  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return user; 
};
