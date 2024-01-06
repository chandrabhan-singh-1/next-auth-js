import { UserInfo } from "@/components/user-info";
import { currentUser } from "@/lib/auth";
import { FaUserAlt } from "react-icons/fa";

export default async function ServerPage() {
  const user = await currentUser();

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
