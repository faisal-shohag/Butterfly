"use client";
import { useSession } from 'next-auth/react';
import { usernameSchema } from "@/lib/validation";
import { GiPostStamp } from "react-icons/gi";
import { SetUsernameDB } from "./action";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';


const { Button } = require("@/components/ui/button");
const {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} = require("@/components/ui/form");
const { Input } = require("@/components/ui/input");
const { zodResolver } = require("@hookform/resolvers/zod");
const { useForm } = require("react-hook-form");

export default function SetUsernameForm() {
    const router = useRouter()
    const session = useSession();
  const form = useForm({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: "",
    },
  });

  useEffect(() => {
    if(session.status==="authenticated" && session.data && session.data.user.username) {
      router.push('/')
    }
  }, [session, router])
   

  const onSubmit = async (data) => {
    toast.loading("Setting username...", {id: 'set-username'});
    const response = await SetUsernameDB(data.username);
    if (response.success) {
      toast.success(response.success,  {id: 'set-username'});
    session.update({...session.data.user, username: data.username})
    
    if(session.data.user.username) {
      router.push('/')
    }
     

    } else {
      toast.error(response.error,  {id: 'set-username'});
    }
  };

  return (
    <div className="custom-glass-2 rounded-xl  max-w-2xl mx-auto py-5">
      <Form {...form}>
        <form
          className="gap-3 text-center flex justify-center items-center flex-col rounded-xl"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div>
            <GiPostStamp className="shimmer" size={60} />
          </div>
          <div className="font-bold">Set Username</div>

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Enter username" {...field} />
                </FormControl>
                <FormMessage className="w-[200px]" />
              </FormItem>
            )}
          />
          <Button type="submit" className="">
            Set Username
          </Button>
        </form>
      </Form>
    </div>
  );
}
