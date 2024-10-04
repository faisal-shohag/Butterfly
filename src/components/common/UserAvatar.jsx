import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const UserAvatar = ({image, name, height="100", width="100"}) => {
    return <>
        <Avatar className={` shadow-xl border-2 rounded-full`}>
            <AvatarImage className={`${height}px ${width}px`} src={image} alt={name}></AvatarImage>
            <AvatarFallback className={`${height}px ${width}px bg-zinc-950 text-white text-bold text-xl`}>
                <span className="text-white">{name.charAt(0).toUpperCase()}</span>
            </AvatarFallback>
        </Avatar>
    </>;
};

export default UserAvatar;