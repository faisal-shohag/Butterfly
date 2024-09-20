"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Book } from 'lucide-react';
import Lottie from "react-lottie-player";
import butterflyAnimation from '@/lottie/butterfly.json'; 

const mockData = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar: "https://i.postimg.cc/GmY0ZXtx/image.png",
    books: 127,
    favoriteGenre: "Science Fiction",
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar: "https://i.postimg.cc/QM3LscWG/image.png",
    books: 93,
    favoriteGenre: "Mystery",
  },
  {
    id: 3,
    name: "Carol Davis",
    avatar: "https://i.postimg.cc/5tqhtjwH/image.png",
    books: 215,
    favoriteGenre: "Fantasy",
  },
];

const FeaturedCommunityMembers = () => {
  return (
    <div className="py-12 relative custom-glass rounded-xl mb-10 mt-10">
          <div className="absolute right-[-100px] top-[-120px] w-60 h-60 z-10">
        <Lottie
          loop
          animationData={butterflyAnimation}
          play
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      
      <div className="max-w-7xl py-5 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold  mb-6">Featured Community Members</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockData.map((member) => (
            <Card key={member.id} className="overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription>{member.favoriteGenre} enthusiast</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Book size={16} />
                  <span>{member.books} books in collection</span>
                </div>
              </CardContent>
              <CardFooter>
                <Badge variant="secondary" className="mt-2">Top Contributor</Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCommunityMembers;