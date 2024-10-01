"use server"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Settings from "./Settings";
import MyBooks from "./MyBooks";
import NothingHere from "@/components/common/NothingHere";

const ProfileTabs = () => {
    return (
        <Tabs defaultValue="books" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="books">My Books</TabsTrigger>
                <TabsTrigger value="posts">Posts</TabsTrigger>
                <TabsTrigger value="followers">Followers</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="books">
               <MyBooks/>
            </TabsContent>
            <TabsContent value="posts">
               <NothingHere title={'You have no any posts!'} link={'/pages/forum'} buttonText={'Fly Now!'}/>
            </TabsContent>
            <TabsContent value="followers">
                <p>Followers</p>
            </TabsContent>
            <TabsContent value="settings">
                <Settings/>
            </TabsContent>
        </Tabs>
    );
};

export default ProfileTabs;