import UpdateProfileForm from "@/components/profile/UpdateProfileForm";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const UpdateProfilePage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login?redirect=/my-profile/update");
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <UpdateProfileForm user={session.user} />
    </div>
  );
};

export default UpdateProfilePage;
