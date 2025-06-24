
import {
  Rocket,
  Briefcase,
  Mic,
  Building,
  Infinity as InfinityIcon,
  LayoutDashboard,
  Quote
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const features = [
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: 'Milestone',
    description: 'A dedicated space for our invested startups to monitor project development and access educational courses.',
    href: '/milestone',
    cta: 'View Dashboard',
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Join Project',
    description: 'A platform for freelancers and tech graduates to find and join exciting startup projects we are building.',
    href: '/join-project',
    cta: 'Browse Projects',
  },
  {
    icon: <Mic className="h-8 w-8 text-primary" />,
    title: 'Sound Sphere',
    description: 'A social hub for developers, designers, and founders to connect, share, and collaborate.',
    href: '/sound-sphere',
    cta: 'Enter the Sphere',
  },
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: 'Corp Hub',
    description: 'An exclusive portal for corporate clients to track projects, manage support, and view their team.',
    href: '/corp-hub',
    cta: 'Access Hub',
  },
   {
    icon: <LayoutDashboard className="h-8 w-8 text-primary" />,
    title: 'Admin Dashboard',
    description: 'Manage courses, projects, and view support tickets from a centralized dashboard.',
    href: '/admin-dashboard',
    cta: 'Go to Admin',
  },
];

const testimonials = [
    {
        quote: "Infinity Hub transformed our project management. The seamless integration and dedicated support are second to none.",
        author: "Jane Doe",
        role: "CEO, InnovateAI",
        avatar: "https://placehold.co/48x48.png",
        dataAiHint: "person smiling"
    },
    {
        quote: "As a freelancer, finding quality projects was tough. Infinity Hub's 'Join Project' feature connected me with my dream team.",
        author: "John Smith",
        role: "Lead Developer, Healthify",
        avatar: "https://placehold.co/48x48.png",
        dataAiHint: "professional portrait"
    },
    {
        quote: "The educational resources in the Milestone dashboard have been invaluable for our startup's growth. Highly recommended!",
        author: "Emily White",
        role: "Founder, ConnectSphere",
        avatar: "https://placehold.co/48x48.png",
        dataAiHint: "person thinking"
    }
];

const stats = [
    { value: "50+", label: "Projects Launched" },
    { value: "100+", label: "Startups Accelerated" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "500+", label: "Community Members" },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <InfinityIcon className="h-6 w-6 text-primary" />
              <span className="font-bold sm:inline-block">
                Infinity Hub
              </span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
             <nav className="flex items-center space-x-2">
                <Button variant="ghost" asChild>
                    <Link href="#">Login</Link>
                </Button>
                <Button asChild>
                    <Link href="#">Sign Up</Link>
                </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero / About Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
                 <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline">
                        Accelerating Innovation, Together
                        </h1>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                        Infinity Hub is the central platform by Infinity Software, designed to bridge the gap between visionary startups, talented freelancers, and forward-thinking corporations. We provide the tools, resources, and connections to turn great ideas into reality.
                        </p>
                    </div>
                </div>
                <Image
                    src="https://placehold.co/600x400.png"
                    alt="Team working in an office"
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    data-ai-hint="office team"
                />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
                    {stats.map(stat => (
                        <div key={stat.label} className="flex flex-col items-center justify-center space-y-2">
                            <p className="text-4xl font-bold tracking-tighter sm:text-5xl text-primary">{stat.value}</p>
                            <p className="text-sm font-medium tracking-wide text-muted-foreground">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>


        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container space-y-12 px-4 md:px-6">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Our Ecosystem</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Explore the different portals of Infinity Hub, each tailored to a unique part of our community.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
                    {features.map((feature) => (
                    <Card key={feature.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                        {feature.icon}
                        <CardTitle className="font-headline text-xl">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                        <CardDescription>{feature.description}</CardDescription>
                        </CardContent>
                        <CardFooter>
                        <Button asChild className="w-full" variant="outline">
                            <Link href={feature.href}>{feature.cta}</Link>
                        </Button>
                        </CardFooter>
                    </Card>
                    ))}
                </div>
            </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">What Our Partners Say</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                            Hear from the leaders and creators who have grown with Infinity Hub.
                        </p>
                    </div>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {testimonials.map(testimonial => (
                        <Card key={testimonial.author}>
                            <CardContent className="p-6 space-y-4">
                                <Quote className="h-6 w-6 text-primary" />
                                <p className="text-muted-foreground">"{testimonial.quote}"</p>
                                <div className="flex items-center gap-4 pt-4">
                                    <Avatar>
                                        <AvatarImage src={testimonial.avatar} data-ai-hint={testimonial.dataAiHint} />
                                        <AvatarFallback>{testimonial.author.split(' ').map(n=>n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.author}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      </main>
      <footer className="border-t">
        <div className="container flex flex-col items-center justify-center gap-4 h-28 text-center md:h-20 md:flex-row md:justify-between">
           <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Infinity Software. All Rights Reserved.</p>
           <Button asChild variant="secondary">
                <Link href="mailto:contact@infinitysoftware.com">Email Us For Your Needs</Link>
           </Button>
        </div>
      </footer>
    </div>
  );
}
