"use client";

import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UserUsageProps {
  users: UserProps[];
}

const Users: React.FC<UserUsageProps> = ({ users = [] }) => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-2 p-4">
        {users.map((user) => (
          <UserCard key={user.email} name={user.name} email={user.email} address={user.address} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const respones = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await respones.json();
  return {
    props: { users },
  };
}

export default Users;
