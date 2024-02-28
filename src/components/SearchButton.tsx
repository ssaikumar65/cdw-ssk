import { Plus } from "lucide-react";

const SearchButton = () => {
  return (
    <div className=" fixed bottom-8 right-8 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-indigo-400 text-white shadow-md hover:cursor-pointer hover:bg-indigo-500 hover:shadow-lg">
      <Plus size={30} />
    </div>
  );
};
export default SearchButton;
