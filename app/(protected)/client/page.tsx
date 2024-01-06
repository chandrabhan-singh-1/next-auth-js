"use client";

import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { FaUserAlt } from "react-icons/fa";

export default function ClientPage() {
  const user = useCurrentUser();

  if (!user) {
    return <div>User Not Found!</div>;
  }

  return (
    <div>
      <UserInfo
        label="User Details"
        user={user}
        Icon={<FaUserAlt className={"mr-2 text-sky-600"} />}
      />
    </div>
  );
}
