import Link from "next/link"

const { Button } = require("@/components/ui/button")
const { ShieldCheck } = require("lucide-react")


const Verified  = async ({title, subtitle}) => {
    return (
      <div className="w-full max-w-md mx-auto space-y-2 border  p-10 rounded-xl shadow-xl text-center flex justify-center flex-col items-center bg-white dark:bg-zinc-900">
        <di className="text-green-500 shimmer"><ShieldCheck className="text-green-500" size={40}/></di>
        <div className="text-xl font-bold">
          {title}
        </div>
        <div className="text-sm font-semibold">
            {subtitle}
        </div>
       <Link href={'/api/auth/signin'}><Button>Login Now</Button></Link> 
      </div>
    )
  }

  export default Verified