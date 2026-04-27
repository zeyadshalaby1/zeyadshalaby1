"use server";

import { createClerkClient } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

/**
 * Update user role and enrolled courses in Clerk publicMetadata
 * @param {string} userId - Target user ID
 * @param {string} role - 'admin' | 'student'
 * @param {string[]} courses - Array of course IDs
 */
export async function updateUserMetadata(targetUserId, role, courses = []) {
  const { sessionClaims } = await auth();

  // Security check: Only admins can update user roles/enrollments
  if (sessionClaims?.metadata?.role !== "admin") {
    throw new Error("Unauthorized: Only admins can manage roles.");
  }

  try {
    const updatedUser = await clerkClient.users.updateUserMetadata(targetUserId, {
      publicMetadata: {
        role: role,
        enrolledCourses: courses,
      },
    });

    return { success: true, user: updatedUser };
  } catch (error) {
    console.error("Clerk Metadata Update Error:", error);
    return { success: false, error: error.message };
  }
}
