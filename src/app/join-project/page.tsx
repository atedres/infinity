
"use client";

import { useState, useEffect } from 'react';
import Image from "next/image";
import { SubpageLayout } from "@/components/layout/subpage-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface Project {
    id: string;
    title: string;
    startup: string;
    logo: string;
    description: string;
    remuneration: string;
    skills: string[];
    dataAiHint: string;
}

export default function JoinProjectPage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            if (!db) return;
            try {
                const querySnapshot = await getDocs(collection(db, "projects"));
                const projectsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Project[];
                setProjects(projectsList);
            } catch (error) {
                console.error("Error fetching projects: ", error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <SubpageLayout title="Join a Project">
            <div className="space-y-8">
                <div className="text-center">
                    <p className="text-lg text-muted-foreground">
                        Discover exciting opportunities to work with the innovative startups we're investing in.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                    {projects.map(project => (
                        <Card key={project.id} className="flex flex-col">
                            <CardHeader>
                                <div className="flex items-start gap-4">
                                    <Image
                                      src={project.logo}
                                      alt={`${project.startup} logo`}
                                      width={48}
                                      height={48}
                                      className="rounded-lg border"
                                      data-ai-hint={project.dataAiHint}
                                    />
                                    <div>
                                        <CardTitle>{project.title}</CardTitle>
                                        <CardDescription>at {project.startup}</CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="flex-1 space-y-4">
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                                <div className="space-y-2">
                                     <h4 className="text-sm font-semibold">Skills Required:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.skills.map(skill => (
                                            <Badge key={skill} variant="secondary">{skill}</Badge>
                                        ))}
                                    </div>
                                </div>
                                 <h4 className="text-sm font-semibold">Remuneration: <span className="text-sm font-normal text-muted-foreground">{project.remuneration}</span></h4>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Apply Now</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </SubpageLayout>
    )
}
