import { User } from "../lib/types";
import ProfileCard from "./ProfileCard";

const TeamSection = ({
  title,
  users,
}: {
  title: string;
  users: User[] | null;
}) => {
  return (
    <section className=" flex flex-col px-16  ">
      <span className="py-8 text-2xl font-semibold tracking-wide text-slate-500/90">
        {title}
      </span>
      <div className=" flex w-full flex-wrap items-center gap-8 border-b-2 border-slate-200 pb-10">
        {users?.length ? (
          users.map((user, index) => <ProfileCard key={index} user={user} />)
        ) : (
          <div className=" flex w-full justify-center text-slate-600">
            No users found.
          </div>
        )}
      </div>
    </section>
  );
};
export default TeamSection;
