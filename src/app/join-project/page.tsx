import Image from "next/image";
import { SubpageLayout } from "@/components/layout/subpage-layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
    {
        title: "Senior Frontend Engineer",
        startup: "InnovateAI",
        logo: "https://placehold.co/40x40.png",
        description: "Join us to build the next generation of AI-powered analytics tools. We're looking for an expert in React and TypeScript.",
        remuneration: "Equity + Salary",
        skills: ["React", "TypeScript", "Next.js", "TailwindCSS"],
        dataAiHint: "abstract geometric"
    },
    {
        title: "Product Designer (UI/UX)",
        startup: "Healthify",
        logo: "https://placehold.co/40x40.png",
        description: "Redesign the user experience of our mobile health application. A strong portfolio in mobile design is required.",
        remuneration: "Competitive Salary",
        skills: ["Figma", "User Research", "Prototyping"],
        dataAiHint: "minimalist pattern"
    },
    {
        title: "Backend Developer (Python)",
        startup: "ConnectSphere",
        logo: "https://placehold.co/40x40.png",
        description: "Develop and maintain the core API for our social networking platform. Experience with Django and PostgreSQL is a must.",
        remuneration: "Freelance Contract",
        skills: ["Python", "Django", "PostgreSQL", "REST APIs"],
        dataAiHint: "network nodes"
    },
    {
        title: "DevOps Engineer",
        startup: "SecureChain",
        logo: "https://placehold.co/40x40.png",
        description: "Build and manage our cloud infrastructure on AWS. Help us scale our blockchain-based security solutions securely.",
        remuneration: "Equity + Salary",
        skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
        dataAiHint: "server illustration"
    }
]

export default function JoinProjectPage() {
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
                        <Card key={project.title} className="flex flex-col">
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
