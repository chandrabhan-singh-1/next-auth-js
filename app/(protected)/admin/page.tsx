"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { UserRole } from "@prisma/client";
import { FaUserCheck } from "react-icons/fa";
import { toast } from "sonner";

export default function AdminPage() {
  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      }

      if (data.success) {
        toast.success(data.success);
      }
    });
  };

  const onApiRouteCheck = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API routes.");
      } else {
        toast.error("Forbidden API routes.");
      }
    });
  };

  return (
    <Card className="w-[600px] ">
      <CardHeader>
        <p className="text-2xl font-semibold flex items-center justify-center">
          <FaUserCheck className={"mr-2 text-sky-600"} /> Admin
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess message="You are Allowed to see this." />
        </RoleGate>
        <div className="flex flex-row w-full items-center justify-between border p-3 rounded-lg shadow-md">
          <p className="text-sm font-medium">Admin-Only API Route</p>
          <Button onClick={onApiRouteCheck}>Click to Test</Button>
        </div>

        <div className="flex flex-row w-full items-center justify-between border p-3 rounded-lg shadow-md">
          <p className="text-sm font-medium">Admin-Only Server Action</p>
          <Button onClick={onServerActionClick}>Click to Test</Button>
        </div>
      </CardContent>
    </Card>
  );
}
