"use server"
import { createClient } from '@/utils/supabase/server'

export const userNav = async () => {
  const supabase = createClient();
  const { data: { user }, error } = await supabase.auth.getUser();
  
  if (error) {
    console.error('Error fetching user:', error);
    return null;
  }

  return user; // Return user data to be fetched by the client component
};
