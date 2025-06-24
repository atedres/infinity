import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SubpageLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-8">
        <Button variant="outline" size="icon" className="h-9 w-9" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Back to Hub</span>
          </Link>
        </Button>
        <h1 className="font-headline text-xl font-semibold tracking-tight">{title}</h1>
      </header>
      <main className="flex-1 p-4 md:p-8 lg:p-10">
        <div className="mx-auto w-full max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
}
