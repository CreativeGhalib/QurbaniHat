import ProfileCard from "@/components/profile/ProfileCard";
import { getServerSession } from "@/lib/session";
import { redirect } from "next/navigation";
import React from "react";

const MyProfilePage = async () => {
  const session = await getServerSession();

  if (!session?.user) {
    redirect("/login?redirect=/my-profile");
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <ProfileCard user={session.user} />
    </div>
  );
};

export default MyProfilePage;
