import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PostSection() {
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
          User Books
        </TabsContent>
        <TabsContent value="Posts">
          User Posts
        </TabsContent>
        <TabsContent value="Exchanges">
          Exchanges
        </TabsContent>
      </Tabs>
    </div>
  );
}
