import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { oAuthSignIn } from "./action";

export function OAuthButtons () {
    const oAuthProvider = [
        {
            name: 'github',
            displayName: "Github",
            icon: <Github/>,
        }
    ]

    return <div className="flex flex-col justify-center">
        {
            oAuthProvider.map((provider) => (
                <Button onClick={async () => {
                    await oAuthSignIn(provider.name)
                } } key={provider.name} className="flex items-center gap-2">
                    {provider.icon}
                    <span className="text-sm font-medium">
                        Continue with {provider.displayName}
                    </span>
                </Button>
            ))
        
        }
       
    </div>
}