import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchButton from "./components/SearchButton";
import TeamSection from "./components/TeamSection";
import useDebounce from "./hooks/useDebounce";
import { AdminUser, MemberUser, User } from "./lib/types";
const URL = import.meta.env.VITE_MOCK_API;
function App() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<User[] | null>(null);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(URL);
      const result = (await res.json()) as User[];
      if (result) setUsers(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!users) return;

    const filteredUsers = users.filter((user) => {
      const searchTerm =
        `${user.first_name} ${user.last_name} ${user.email}`.toLowerCase();
      return searchTerm.includes(debouncedSearch.toLowerCase());
    });
    setFilteredUsers(filteredUsers);
  }, [debouncedSearch, users]);

  const adminData: AdminUser[] | null = filteredUsers
    ? (filteredUsers.filter((user) => user.role === "admin") as AdminUser[])
    : null;

  const memberData: MemberUser[] | null = filteredUsers
    ? (filteredUsers.filter((user) => user.role === "member") as MemberUser[])
    : null;

  return (
    <main className=" relative h-full w-full">
      <Header setSearch={setSearch} />
      <TeamSection title="Administrator" users={adminData} />
      <TeamSection title="Members" users={memberData} />
      <SearchButton />
    </main>
  );
}

export default App;
