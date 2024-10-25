import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyBooks from "./MyBooks";
import UserPostList from "./UserPostList";
import UserBookExchanges from "./UserBookExchanges";

export default function PostSection({user}) {
  return (
    <div className=" mt-3 rounded-md shadow-md">
      <Tabs defaultValue="my_books" className="w-full ">
        <TabsList >
        <TabsTrigger value="my_books">
            My Books
          </TabsTrigger>
          <TabsTrigger value="Posts" >
            Posts
          </TabsTrigger>
          <TabsTrigger value="Exchanges">
            Exchanges
          </TabsTrigger>
        </TabsList>
        <TabsContent value="my_books">
          <MyBooks user={user}/>
        </TabsContent>
        <TabsContent value="Posts">
          <UserPostList user={user}/>
        </TabsContent>
        <TabsContent value="Exchanges">
          <UserBookExchanges userId={user?.id}/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
