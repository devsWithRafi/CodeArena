import { Separator } from '@/components/ui/separator';
import PNavber from './_component/PNavber';
import { Badge } from '@/components/ui/badge';
import MarkdownText from '@/components/MarkdownText';
import LanguageSelect from './_component/LanguageSelect';
import CodeEditor from './_component/CodeEditor';
import { Button } from '@/components/ui/button';
import { languageList } from '@/lib/languageList';
import { Group, Panel } from 'react-resizable-panels';

interface languageType {
  language: string;
  version: string;
  aliases: string[];
}

const url = 'https://emkc.org/api/v2/piston/runtimes'

const texts = `
# Task

Given an integer \`n\`, perform the following conditional actions:

- If \`n\` is odd, print **Weird**
- If \`n\` is even and in the inclusive range of \`2 \le n \le 5\`, print **Not Weird**
- If \`n\` is even and in the inclusive range of \`6 \le n \le 20\`, print **Weird**
- If \`n > 20\`, print **Not Weird**

---

## Mathematical Definition

An integer \`n\` is:

- **Odd** if:  
  $$ n \bmod 2 = 1 $$

- **Even** if:  
  $$ n \bmod 2 = 0 $$

---

## Input Format

A single line containing a positive integer \`n\`.

---

## Constraints

- $$ 1 \le n \le 100 $$

---

## Output Format

Print **Weird** if the number is weird. Otherwise, print **Not Weird**.

---

## Sample Input 0

\`\`\`bash
3
\`\`\`

## Sample Output 0

\`\`\`bash
Weird
\`\`\`

### Explanation 0

\`n = 3\`  
$$ 3 \bmod 2 = 1 $$  

So it is **odd**, therefore print **Weird**.

---

## Sample Input 1

\`\`\`bash
24
\`\`\`

## Sample Output 1

\`\`\`bash
Not Weird
\`\`\`

### Explanation 1

\`n = 24\`  
$$ n \\bmod 2 = 0 $$ 
$$ x > 20 $$  

So it is **even** and greater than 20, therefore print **Not Weird**.
`;

const fetchLanguage = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const filterData = data.filter((lang: languageType) =>
      languageList.some(item => item.name === lang.language.toLowerCase()),
    );

    const languages = filterData.filter((lang: languageType) => {
      if (
        lang.language.toLowerCase() === 'javascript' &&
        parseFloat(lang.version) < 18
      )
        return false;
      if (
        lang.language.toLowerCase() === 'typescript' &&
        parseFloat(lang.version) < 5
      )
        return false;
      return true;
    });

    return languages;
  } catch (error) {
    console.log(error);
  }
};

const ChallangePage = async () => {
  const languages = await fetchLanguage();

  return (
    <>
      <PNavber />
      <section className="w-full h-[calc(100vh-64px)] p-5 flex gap-2 justify-between">
        <Group>
          {/* PAGE LEFT */}
          <Panel defaultSize="50%" minSize='30%'>
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10">
              {/* top */}
              <div className="px-5 h-20 flex flex-col justify-center">
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
              <Separator className="bg-white/10" />

              {/* bottom */}
              <div className="px-5 overflow-y-scroll h-[calc(100%-80px)] pb-20">
                <MarkdownText text={texts} />
              </div>
            </div>
          </Panel>

          {/* PAGE RIGHT */}
          <Panel defaultSize="50%" minSize="30%">
            <div className="w-full h-full rounded-2xl overflow-hidden border border-white/10">
              {/* top */}
              <div className="px-5 h-20 flex justify-between gap-5">
                <div className="flex items-center justify-between gap-5 font-semibold">
                  Code Editor
                  <LanguageSelect languages={languages} />
                </div>

                <div className="text-sm flex items-center gap-3 text-muted-foreground mt-1">
                  <Badge
                    variant={'outline'}
                    className="bg-[#222222] border-[#424141] text-[#adadad]"
                  >
                    TypeScript
                  </Badge>
                  <Button variant={'outline'}>Formate</Button>
                </div>
              </div>
              <Separator className="bg-white/10" />

              {/* code editor */}
              <div className="h-[calc(100%-80px)]">
                <CodeEditor />
              </div>
            </div>
          </Panel>
        </Group>
      </section>
    </>
  );
};

export default ChallangePage;
