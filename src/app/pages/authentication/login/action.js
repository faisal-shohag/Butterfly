'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { getURL } from '@/utils/helper'

export async function login(formData) {
  const supabase = createClient()

  const loginData = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const {data, error } = await supabase.auth.signInWithPassword(loginData)
 
  if (error) {
    redirect(`/pages/authentication/login?error=${error.message}`)
  }

  if( data.user.user_metadata){
    console.log("SIGNIN DATA==", data.user.user_metadata)
    // insertUserData(supabase, {
    //   email: data.user.email,
    //   full_name: data.user.user_metadata.full_name,
    //   id: data.user.id,
    // })
  }else{
    console.log("SIGNIN DATA==", data)
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signup(formData) {
  const supabase = createClient()

  const signUpData = {
    email: formData.get('email'),
    options: {
      data: {
        full_name: formData.get('displayName'),
      },
    },
    
    password: formData.get('password'),
  }

  const {data, error } = await supabase.auth.signUp(signUpData)
 
  if (error) {
    redirect(`/pages/authentication/login?error=${error.message}`)
  }

   
  const d = {
    email: formData.get('email'),
    password: formData.get('password'),
    full_name: formData.get('displayName'),
  }
   
  
  if( data.user.user_metadata){
    console.log("SIGNUP DATA(M)==", data.user)
    insertUserData(supabase, {...d, id: data.user.id})

  }else{
    console.log("SIGNUP DATA==", data)
    // insertUserData(supabase, d)
  }

  if(!error) {
    redirect(`/pages/authentication/login?error=verify`)
  }
 

  

  revalidatePath('/', 'layout')
  redirect('/')
}


export async function signOut() {
    const supabase = createClient()
    await supabase.auth.signOut()
    redirect('/pages/authentication/login')
}


export async function oAuthSignIn(provider){
  if(!provider){
    return redirect('/pages/authentication/login?error=No Provider selected')
  }

  const supabase = createClient()
  const redirectUrl = getURL("/auth/callback")
  const {data, error} =await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectUrl
    }
  })
  console.log(data)


  if(error){
    console.log(error)
    return redirect('/pages/authentication/login?error=Error signing in')
  }

  return redirect(data.url)
}



export async function insertUserData(supabase, userData) {
  const { data, error } = await supabase
    .from('User')
    .upsert(userData)

  if (error) {
    console.error('Error inserting user data:', error)
  }
}