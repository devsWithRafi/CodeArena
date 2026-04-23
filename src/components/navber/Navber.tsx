import { MdCodeOff } from 'react-icons/md';
import { Button } from '../ui/button';
import ThemeToggle from '../ThemeToggle';

const Navber = () => {
  return (
    <nav className="flex items-center w-full sticky top-0 border-b border-white/15 p-5">
      <header className="max-w-[1500px] mx-auto w-full flex items-center justify-between">
        {/* nav left */}
        <div className="flex items-center gap-3">
          <span className="bg-white text-black p-2 rounded-md">
            <MdCodeOff size={20} />
          </span>
          <h2 className="font-bold text-xl">CodeArena</h2>
        </div>

        {/* nav right */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button className="rounded-md font-medium px-3 py-2 h-auto">
            Start Coding
          </Button>
        </div>
      </header>
    </nav>
  );
};

export default Navber;
