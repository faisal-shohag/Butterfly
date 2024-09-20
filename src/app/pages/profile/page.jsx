"use client"

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Star, Settings, Bell, Book, BookOpen, BookMarked } from 'lucide-react';

const Profile = () => {
  const [notifications, setNotifications] = useState(true);

  // Mock data - replace with actual data fetching in a real application
  const user = {
    name: "Jane Doe",
    avatar: "https://i.postimg.cc/QM3LscWG/image.png",
    booksListed: 12,
    booksBorrowed: 3,
    booksLent: 5,
    favoriteGenres: ["Science Fiction", "Mystery", "Fantasy"],
    rating: 4.5,
  };

  const bookActivities = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Listed" },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", status: "Borrowed" },
    { id: 3, title: "1984", author: "George Orwell", status: "Lent" },
  ];

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">{user.name}</h2>
              <div className="flex items-center mt-1">
                <Star className="text-yellow-400 mr-1" size={16} />
                <span>{user.rating.toFixed(1)}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card>
            <CardHeader>
              <CardTitle>Book Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <Book className="mx-auto mb-2" />
                  <div className="font-bold">{user.booksListed}</div>
                  <div className="text-sm text-gray-500">Listed</div>
                </div>
                <div className="text-center">
                  <BookOpen className="mx-auto mb-2" />
                  <div className="font-bold">{user.booksBorrowed}</div>
                  <div className="text-sm text-gray-500">Borrowed</div>
                </div>
                <div className="text-center">
                  <BookMarked className="mx-auto mb-2" />
                  <div className="font-bold">{user.booksLent}</div>
                  <div className="text-sm text-gray-500">Lent</div>
                </div>
              </div>
              <ul className="space-y-2">
                {bookActivities.map((book) => (
                  <li key={book.id} className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{book.title}</div>
                      <div className="text-sm text-gray-500">{book.author}</div>
                    </div>
                    <Badge>{book.status}</Badge>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Reading Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-bold mb-2">Favorite Genres</h3>
              <div className="flex flex-wrap gap-2">
                {user.favoriteGenres.map((genre, index) => (
                  <Badge key={index} variant="secondary">{genre}</Badge>
                ))}
              </div>
              <Button className="mt-4">Edit Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews">
          <Card>
            <CardHeader>
              <CardTitle>Reviews and Ratings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold mb-2">Your Overall Rating</h3>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={i < Math.floor(user.rating) ? "text-yellow-400" : "text-gray-300"} size={24} />
                    ))}
                    <span className="ml-2 text-lg font-bold">{user.rating.toFixed(1)}</span>
                  </div>
                </div>
                <Button>View All Reviews</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-bold">Notification Preferences</h3>
                  <p className="text-sm text-gray-500">Receive email notifications</p>
                </div>
                <Switch 
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <Button className="w-full">
                <Settings className="mr-2 h-4 w-4" /> Manage Account Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;