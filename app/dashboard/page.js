import { auth, createClerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardContent } from "@/components/dashboard-content";

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export default async function DashboardPage() {
  const { userId, sessionClaims } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // 1. Get role from session claims (Fastest)
  let role = sessionClaims?.metadata?.role;
  // Debug: Role from session (remove in production)
  // console.log("Dashboard: Role from session:", role);

  // 2. If role is missing in session, fetch live data from Clerk
  if (!role) {
  // Debug: Role missing in session (remove in production)
  // console.log("Dashboard: Role missing in session, fetching live data...");
    const user = await clerkClient.users.getUser(userId);
    role = user.publicMetadata?.role;
  // Debug: Live role from Clerk (remove in production)
  // console.log("Dashboard: Live role from Clerk:", role);

    // 3. If STILL missing, then it's a new user, assign 'student'
    if (!role) {
      await clerkClient.users.updateUserMetadata(userId, {
        publicMetadata: {
          role: "student",
        },
      });
      role = "student";
    }
  }

  // 3. Fetch full user data for display
  const user = await clerkClient.users.getUser(userId);

  // 4. Admin Check
  if (role !== "admin") {
    redirect("/");
  }

  return <DashboardContent user={JSON.parse(JSON.stringify(user))} />;
}
