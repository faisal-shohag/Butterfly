import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import {  createServerClient } from '@supabase/ssr'
import { insertUserData } from '@/app/pages/authentication/login/action'
export async function GET(request) {
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get('code')
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get('next') ?? '/'

  if (code) {
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          get(name) {
            return cookieStore.get(name)?.value
          },
          set(name, value, options) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name, options) {
            cookieStore.delete({ name, ...options })
          },
        },
      }
    )
    const {data,  error } = await supabase.auth.exchangeCodeForSession(code)
    console.log("USER AUTH DATA======", data.user.user_metadata)
    insertUserData(supabase, {
      full_name: data.user.user_metadata.full_name,
      avatar_url: data.user.user_metadata.avatar_url,
      email: data.user.email,
      id: data.user.id, 
    })
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  
  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/pages/authentication/login?error=Error login `)
}