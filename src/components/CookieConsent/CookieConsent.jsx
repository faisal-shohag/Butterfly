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
import { Button } from "../ui/button";

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
       
    );
};

export default CookieConsent;