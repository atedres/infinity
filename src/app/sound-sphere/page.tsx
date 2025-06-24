"use client"
import Image from "next/image";
import { SubpageLayout } from "@/components/layout/subpage-layout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mic, Users, MessageCircle, Heart, Share2 } from "lucide-react";

const posts = [
    {
        author: "Alex Johnson",
        handle: "@alexj",
        avatar: "https://placehold.co/40x40.png",
        content: "Just hit a major breakthrough on my side project using Rust and WebAssembly. The performance is mind-blowing! Anyone else exploring this stack?",
        likes: 12,
        comments: 4
    },
    {
        author: "Samantha Lee",
        handle: "@samlee_design",
        avatar: "https://placehold.co/40x40.png",
        content: "Struggling with creating a truly accessible color palette for a new dashboard UI. Any tips or resources would be highly appreciated! #a11y #design",
        likes: 28,
        comments: 11
    }
]

const rooms = [
    { name: "Weekly Tech Roundup", participants: 42, topic: "General Tech" },
    { name: "Design Systems AMA", participants: 18, topic: "Design" },
    { name: "Startup Pitch Practice", participants: 9, topic: "Startups" },
]

export default function SoundSpherePage() {
    return (
        <SubpageLayout title="Sound Sphere">
            <Tabs defaultValue="feed" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="feed">Post Feed</TabsTrigger>
                    <TabsTrigger value="rooms">Audio Rooms</TabsTrigger>
                </TabsList>
                <TabsContent value="feed" className="mt-6 space-y-6">
                    <Card>
                        <CardHeader>
                            <h3 className="text-lg font-medium">Create a Post</h3>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Textarea placeholder="What's on your mind? Share your challenges, wins, or questions..." />
                            <Button>Post to Sphere</Button>
                        </CardContent>
                    </Card>

                    <div className="space-y-4">
                        {posts.map((post, index) => (
                            <Card key={index}>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <Avatar>
                                            <AvatarImage src={post.avatar} data-ai-hint="person portrait"/>
                                            <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="w-full">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold">{post.author}</span>
                                                <span className="text-sm text-muted-foreground">{post.handle}</span>
                                            </div>
                                            <p className="my-2 text-foreground/90">{post.content}</p>
                                            <div className="flex items-center justify-between text-muted-foreground pt-2">
                                                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                                    <MessageCircle className="h-4 w-4" /> {post.comments}
                                                </Button>
                                                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                                    <Heart className="h-4 w-4" /> {post.likes}
                                                </Button>
                                                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                                                    <Share2 className="h-4 w-4" /> Share
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="rooms" className="mt-6 space-y-6">
                     <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                         {rooms.map((room, index) => (
                            <Card key={index}>
                                <CardContent className="p-6 space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="bg-primary/10 p-3 rounded-full">
                                            <Mic className="h-6 w-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">{room.name}</h4>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Users className="h-4 w-4" />
                                                <span>{room.participants} listening</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="w-full">Join Room</Button>
                                </CardContent>
                            </Card>
                         ))}
                     </div>
                </TabsContent>
            </Tabs>
        </SubpageLayout>
    );
}
