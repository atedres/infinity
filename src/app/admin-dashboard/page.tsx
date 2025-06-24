
"use client";

import { SubpageLayout } from "@/components/layout/subpage-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Briefcase, Ticket } from "lucide-react";

// Mock data, in a real app this would come from a database
const courses = [
    { title: "Startup Funding 101", description: "Learn the fundamentals of raising capital." },
    { title: "Agile Project Management", description: "Master the scrum framework for faster delivery." },
    { title: "Growth Hacking Strategies", description: "Discover unconventional marketing techniques." },
];

const projects = [
    {
        title: "Senior Frontend Engineer",
        startup: "InnovateAI",
        remuneration: "Equity + Salary",
    },
    {
        title: "Product Designer (UI/UX)",
        startup: "Healthify",
        remuneration: "Competitive Salary",
    },
    {
        title: "Backend Developer (Python)",
        startup: "ConnectSphere",
        remuneration: "Freelance Contract",
    },
];

const tickets = [
    { id: "T-201", subject: "Update logo on login page", status: "Completed", lastUpdate: "2 days ago" },
    { id: "T-203", subject: "Feature Request: Export data to CSV", status: "In Progress", lastUpdate: "3 hours ago" },
    { id: "T-204", subject: "Bug: User cannot reset password", status: "Open", lastUpdate: "1 day ago" },
];


export default function AdminDashboardPage() {
    return (
        <SubpageLayout title="Admin Dashboard">
            <Tabs defaultValue="courses" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="courses">
                        <BookOpen className="mr-2 h-4 w-4" />
                        Manage Courses
                    </TabsTrigger>
                    <TabsTrigger value="projects">
                        <Briefcase className="mr-2 h-4 w-4" />
                        Manage Projects
                    </TabsTrigger>
                    <TabsTrigger value="tickets">
                        <Ticket className="mr-2 h-4 w-4" />
                        View Tickets
                    </TabsTrigger>
                </TabsList>

                {/* Manage Courses Tab */}
                <TabsContent value="courses" className="mt-6 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Upload New Course</CardTitle>
                            <CardDescription>Add a new educational course for startups.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="course-title">Course Title</Label>
                                <Input id="course-title" placeholder="e.g., Advanced Marketing" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="course-description">Description</Label>
                                <Textarea id="course-description" placeholder="A brief summary of the course content." />
                            </div>
                            <Button>Upload Course</Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Existing Courses</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Description</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {courses.map((course, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{course.title}</TableCell>
                                            <TableCell>{course.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Manage Projects Tab */}
                <TabsContent value="projects" className="mt-6 space-y-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>Add New Project</CardTitle>
                            <CardDescription>Post a new job opportunity for freelancers.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="project-title">Project Title</Label>
                                    <Input id="project-title" placeholder="e.g., Senior Frontend Engineer" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="startup-name">Startup Name</Label>
                                    <Input id="startup-name" placeholder="e.g., InnovateAI" />
                                </div>
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="project-description">Description</Label>
                                <Textarea id="project-description" placeholder="Detailed job description..." />
                            </div>
                             <div className="grid grid-cols-2 gap-4">
                               <div className="space-y-2">
                                    <Label htmlFor="remuneration">Remuneration</Label>
                                    <Input id="remuneration" placeholder="e.g., Equity + Salary" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="skills">Skills Required</Label>
                                    <Input id="skills" placeholder="Comma-separated, e.g., React, TypeScript" />
                                </div>
                            </div>
                            <Button>Add Project</Button>
                        </CardContent>
                    </Card>
                     <Card>
                        <CardHeader>
                            <CardTitle>Existing Projects</CardTitle>
                        </CardHeader>
                        <CardContent>
                             <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Title</TableHead>
                                        <TableHead>Startup</TableHead>
                                        <TableHead>Remuneration</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {projects.map((project, index) => (
                                        <TableRow key={index}>
                                            <TableCell className="font-medium">{project.title}</TableCell>
                                            <TableCell>{project.startup}</TableCell>
                                            <TableCell>{project.remuneration}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* View Tickets Tab */}
                <TabsContent value="tickets" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Support Tickets</CardTitle>
                            <CardDescription>Incoming tickets from corporate clients.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Ticket ID</TableHead>
                                        <TableHead>Subject</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Last Update</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {tickets.map(ticket => (
                                        <TableRow key={ticket.id}>
                                            <TableCell className="font-mono">{ticket.id}</TableCell>
                                            <TableCell className="font-medium">{ticket.subject}</TableCell>
                                            <TableCell>
                                                <Badge
                                                    variant={ticket.status === 'Completed' ? 'default' : ticket.status === 'In Progress' ? 'secondary' : 'destructive'}
                                                     className={ticket.status === 'Completed' ? 'bg-green-500/20 text-green-700' : ticket.status === 'In Progress' ? 'bg-blue-500/20 text-blue-700' : 'bg-yellow-500/20 text-yellow-700'}
                                                >
                                                    {ticket.status}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{ticket.lastUpdate}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </SubpageLayout>
    );
}
