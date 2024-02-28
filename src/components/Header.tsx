import { Search } from "lucide-react";

const Header = ({
  setSearch,
}: {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <header className=" flex w-full items-center justify-between bg-indigo-400 px-16 py-4">
      <span className=" text-2xl text-white">Team</span>
      <div className=" flex items-center gap-2 overflow-hidden rounded-full bg-slate-100 px-4 py-2">
        <Search />
        <input
          className=" h-full w-32 bg-transparent text-sm outline-none sm:w-72"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
    </header>
  );
};
export default Header;
