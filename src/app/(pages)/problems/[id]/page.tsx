import { Separator } from '@/components/ui/separator';
import PNavber from './_component/PNavber';
import { Badge } from '@/components/ui/badge';
import MarkdownText from '@/components/MarkdownText';

const ChallangePage = () => {
  return (
    <>
      <PNavber />
      <section className="w-full h-[calc(100vh-64px)] p-5 flex gap-5 justify-between">
        {/* PAGE LEFT */}
        <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/10">
          {/* top */}
          <div className="p-5">
            <h2 className="w-full flex items-center justify-between gap-5 font-semibold">
              Longest Substring Without Repeating Characters
              <Badge
                variant={'outline'}
                className="bg-[#1b0808] border-[#471616] text-[#d84646]"
              >
                Medium
              </Badge>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Acceptance: 36.7%, Topics: Hash Table, String, Sliding Window
            </p>
          </div>
          <Separator className="min-h-0.5 bg-white/10" />

          {/* bottom */}
          <div className="p-5 overflow-hidden overflow-y-scroll h-full max-h-full">
            {/* <p className="">
              Give a string s, find the length of the longest substring without
              repeating characters.
            </p> */}

            <MarkdownText text="You **hi** want to consider using a sliding window approach to solve this problem efficiently." />
          </div>
        </div>

        {/* PAGE RIGHT */}
        {/* <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-white/10"></div> */}
      </section>
    </>
  );
};

export default ChallangePage;
