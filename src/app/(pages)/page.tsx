import Navber from '@/components/navber/Navber';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const problems = [
  {
    id: 1,
    title: 'Two Sum',
    description:
      'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    difficulty: 'Easy',
    tags: ['Array', 'Hash Table'],
  },
  {
    id: 2,
    title: 'Two Sum',
    description:
      'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    difficulty: 'Easy',
    tags: ['Array', 'Hash Table'],
  },
  {
    id: 3,
    title: 'Two Sum',
    description:
      'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    difficulty: 'Easy',
    tags: ['Array', 'Hash Table'],
  },
  {
    id: 4,
    title: 'Two Sum',
    description:
      'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    difficulty: 'Easy',
    tags: ['Array', 'Hash Table'],
  },
];

const HomePage = () => {
  return (
    <>
      <Navber />
      <section className="w-full">
        <div className="w-full max-w-[1500px] mx-auto p-5">
          {/* hero top */}
          <Card className="p-5">
            <CardHeader>
              <CardTitle className="font-extrabold font-abel text-4xl">
                Available Problems
              </CardTitle>
              <CardDescription>
                Choose any problem to open the challange page with instructions
                and a code editor.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center gap-5 w-full justify-between mt-5">
              <Card className="w-full">
                <CardHeader>
                  <CardDescription>Total Problems</CardDescription>
                  <CardTitle className="text-2xl font-bold">
                    {problems.length}
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="w-full">
                <CardHeader>
                  <CardDescription>Total Problems</CardDescription>
                  <CardTitle className="text-2xl font-bold">
                    {problems.length}
                  </CardTitle>
                </CardHeader>
              </Card>
            </CardContent>
          </Card>

          {/* hero bottom */}
          <div className="grid grid-cols-2 gap-5 mt-10">
            {problems.map((p) => (
              <Card key={p.id}>
                <CardHeader>
                  <CardTitle className="flex items-center w-full justify-between">
                    {p.title}
                    <Badge
                      variant={'outline'}
                      className="bg-[#081b17] border-[#16473d] text-[#46d8b8]"
                    >
                      {p.difficulty}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {p.description}
                  </CardDescription>
                  <CardContent className="w-full flex flex-col gap-5 p-0 mt-5">
                    <div className='flex items-center gap-2'>
                      {p.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant={'outline'}
                          className="bg-[#081923] border-[#13364b] text-[#69c8ff]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link href={'/'} className={cn(buttonVariants(), 'rounded-md py-2 h-auto')}>Solve Challange</Link>
                  </CardContent>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
