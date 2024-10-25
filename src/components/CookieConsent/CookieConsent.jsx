"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Cookies from "js-cookie"
import { useEffect, useState } from "react";


const CookieConsent = () => {
    const [open, setOpen] = useState(false)

    useEffect(()=>{
        const consent = Cookies.get('cookie_consent')
        if(!consent){
         
                setOpen(true)
         
        }

       
    }, [])

    const acceptCookies = ()=>{
        Cookies.set('cookie_consent', 'accepted', {expires: 365})
        setOpen(false)
    }

    const declineCookies = ()=>{
        Cookies.set('cookie_consent', 'declined', {expires: 365})
        setOpen(false)
    }

    if(!open) return null
    return (
        <AlertDialog open={open}>
      <AlertDialogTrigger/>
        
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>We use cookies</AlertDialogTitle>
          <AlertDialogDescription>
           We use cookies to improve your experience on our site. Accept cookies for a better experience.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={declineCookies}>Decline</AlertDialogCancel>
          <AlertDialogAction onClick={acceptCookies}>Accept</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    );
};

export default CookieConsent;