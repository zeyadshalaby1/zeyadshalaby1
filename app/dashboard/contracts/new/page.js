import { auth, createClerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ContractBuilder } from "@/components/contract-builder";

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export default async function NewContractPage() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // 1. Get role from session claims
  let role = sessionClaims?.metadata?.role;

  // 2. If role is missing in session, fetch live data from Clerk
  if (!role) {
    const user = await clerkClient.users.getUser(userId);
    role = user.publicMetadata?.role;
  }

  // 3. Admin Check
  if (role !== "admin") {
    redirect("/");
  }

  return (
    <div className="p-6">
      <ContractBuilder />
    </div>
  );
}
