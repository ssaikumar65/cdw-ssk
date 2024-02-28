export type User = {
  first_name: string;
  last_name: string;
  email: string;
  img: string;
  role: "admin" | "member";
};

export type AdminUser = User & {
  role: "admin";
};

export type MemberUser = User & {
  role: "member";
};
