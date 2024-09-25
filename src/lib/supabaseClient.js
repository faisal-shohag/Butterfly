import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Example usage
export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.error('Error fetching session:', error.message);
  }
  return data?.session;
};
