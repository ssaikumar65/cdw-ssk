import { User } from "../lib/types";

const ProfileCard = ({ user }: { user: User }) => {
  return (
    <div className=" flex w-80 items-center gap-4 rounded-lg bg-white px-5 py-4 shadow-md transition-all hover:cursor-pointer hover:shadow-xl">
      <div className=" flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
        <img
          src={user.img}
          className=" h-full w-full object-cover"
          alt={`${user.first_name} ${user.last_name}`}
        />
      </div>
      <div className=" flex flex-col">
        <span className="">{`${user.first_name} ${user.last_name}`}</span>
        <span className=" text-xs text-zinc-400">{user.email}</span>
      </div>
    </div>
  );
};
export default ProfileCard;
