import { SubpageLayout } from "@/components/layout/subpage-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, Circle, Clock, PlusCircle } from "lucide-react";

const tickets = [
    { id: "T-201", subject: "Update logo on login page", status: "Completed", lastUpdate: "2 days ago" },
    { id: "T-203", subject: "Feature Request: Export data to CSV", status: "In Progress", lastUpdate: "3 hours ago" },
    { id: "T-204", subject: "Bug: User cannot reset password", status: "Open", lastUpdate: "1 day ago" },
];

const team = [
    { name: "Alice Mayer", role: "Project Manager", avatar: "https://placehold.co/48x48.png" },
    { name: "Bob Ross", role: "Lead Frontend Developer", avatar: "https://placehold.co/48x48.png" },
    { name: "Charlie Day", role: "Lead Backend Developer", avatar: "https://placehold.co/48x48.png" },
    { name: "Diana Prince", role: "UI/UX Designer", avatar: "https://placehold.co/48x48.png" },
];

const timeline = [
    { name: "Phase 1: Discovery & Planning", status: "Completed" },
    { name: "Phase 2: UI/UX Design", status: "Completed" },
    { name: "Phase 3: Frontend Development", status: "In Progress" },
    { name: "Phase 4: Backend Development", status: "In Progress" },
    { name: "Phase 5: Testing & QA", status: "Upcoming" },
    { name: "Phase 6: Deployment", status: "Upcoming" },
]


export default function CorpHubPage() {
    return (
        <SubpageLayout title="Corporate Hub">
            <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                    <TabsTrigger value="tickets">Tickets</TabsTrigger>
                    <TabsTrigger value="team">Team</TabsTrigger>
                </TabsList>
                <TabsContent value="dashboard" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Project Timeline</CardTitle>
                            <CardDescription>High-level overview of the project phases.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                {timeline.map(item => (
                                    <div key={item.name} className="flex items-center gap-4">
                                        <div>
                                            {item.status === 'Completed' ? <CheckCircle className="h-6 w-6 text-green-500" /> :
                                             item.status === 'In Progress' ? <Clock className="h-6 w-6 text-blue-500 animate-spin" /> :
                                             <Circle className="h-6 w-6 text-muted-foreground" />
                                            }
                                        </div>
                                        <p className="font-medium">{item.name}</p>
                                        <Badge variant="outline" className="ml-auto">{item.status}</Badge>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="tickets" className="mt-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                           <div>
                             <CardTitle>Support Tickets</CardTitle>
                             <CardDescription>Manage your modification requests and bug reports.</CardDescription>
                           </div>
                           <Button><PlusCircle className="mr-2 h-4 w-4"/>New Ticket</Button>
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
                <TabsContent value="team" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Your Project Team</CardTitle>
                            <CardDescription>The dedicated professionals from Infinity Software working on your project.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {team.map(member => (
                                <div key={member.name} className="flex items-center gap-4">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage src={member.avatar} data-ai-hint="person professional"/>
                                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{member.name}</p>
                                        <p className="text-sm text-muted-foreground">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </SubpageLayout>
    );
}
