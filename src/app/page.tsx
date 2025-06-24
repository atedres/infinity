import {
  Rocket,
  Briefcase,
  Mic,
  Building,
  Infinity as InfinityIcon,
} from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

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
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <InfinityIcon className="h-6 w-6 text-primary" />
              <span className="font-bold sm:inline-block">
                Infinity Hub
              </span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline">
                  Welcome to Infinity Hub
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  The central platform for innovation, collaboration, and project excellence by Infinity Software.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full pb-12 md:pb-24 lg:pb-32">
          <div className="container grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-4 md:px-6">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                  {feature.icon}
                  <CardTitle className="font-headline">{feature.title}</CardTitle>
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
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex h-14 items-center justify-center">
           <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Infinity Software. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
