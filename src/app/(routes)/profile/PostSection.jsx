import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import UserAllPosts from "./UserAllPosts"
import UserExchanges from "./UserExchanges"
import UserHistory from "./UserHistory"

export default function PostSection() {
  return (
   <div className="w-full bg-white p-2 mt-3 rounded-md shadow-md">
     <Tabs defaultValue="Posts" className="w-full ">
  <TabsList className='w-full '>
    <TabsTrigger value="Posts" className='w-full'>Posts</TabsTrigger>
    <TabsTrigger value="Exchanges" className='w-full'>Exchanges</TabsTrigger>
    <TabsTrigger value="History" className='w-full'>History</TabsTrigger>
  </TabsList>
  <TabsContent value="Posts"><UserAllPosts /></TabsContent>
  <TabsContent value="Exchanges"><UserExchanges /></TabsContent>
  <TabsContent value="History"><UserHistory /></TabsContent>
</Tabs>
   </div>

  )
}
