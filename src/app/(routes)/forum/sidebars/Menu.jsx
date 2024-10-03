import { Button } from "@/components/ui/button";
import { Bell, Bookmark, Home } from "lucide-react";
import Link from "next/link";

const Menu = ({className}) => {
    return (
        <>
        <div className={className}>
            <Button
             variant="ghost"
             className="flex items-center justify-start gap-3"
             title="Home"
             asChild
            >
                <Link className="flex items-center gap-2" href="/forum">
                <Home size={18}/> Home
                </Link>
            </Button>

            <Button
             variant="ghost"
             className="flex items-center justify-start gap-3"
             title="Home"
             asChild
            >
                <Link className="flex items-center gap-2" href="/forum/saved">
                <Bell size={18}/> Notifications
                </Link>
            </Button>
            <Button
             variant="ghost"
             className="flex items-center justify-start gap-3"
             title="Home"
             asChild
            >
                <Link className="flex items-center gap-2" href="/forum/saved">
                <Bookmark size={18}/> Saved Posts
                </Link>
            </Button>
        </div>
        </>
    );
};

export default Menu;