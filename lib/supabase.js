import { createClient } from "@supabase/supabase-js";

// ============================================
// CLIENT-SIDE SUPABASE CLIENT (for browser)
// ============================================

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Validate required environment variables
if (!supabaseUrl) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_URL. Please set it in your .env.local file."
  );
}

if (!supabaseAnonKey) {
  throw new Error(
    "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY. Please set it in your .env.local file."
  );
}

// Create the main client for client-side operations
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// ============================================
// SERVER-SIDE SUPABASE CLIENT (for API routes & Server Components)
// ============================================

/**
 * Create a server-side Supabase client with service role key
 * This should only be used in API routes or Server Components
 */
export function createServerSupabaseClient() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceRoleKey) {
    console.warn(
      "SUPABASE_SERVICE_ROLE_KEY is not set. Server-side operations may fail."
    );
    // Fallback to anon key for read-only operations (not recommended for production)
    return createClient(supabaseUrl, supabaseAnonKey);
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Create slug from title (for URL-friendly naming)
export function generateSlug(title) {
  if (!title) return "";
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s\u0600-\u06FF-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ============================================
// DATA FETCHING FUNCTIONS (Client-side safe)
// ============================================

// Fetch all projects
export async function getProjects() {
  try {
    console.log("🔍 جاري جلب المشاريع من Supabase...");

    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("❌ خطأ في جلب المشاريع:", error);
      console.error("تفاصيل الخطأ:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      return [];
    }

    console.log(`✅ تم جلب ${data?.length || 0} مشروع بنجاح`);
    return data || [];
  } catch (err) {
    console.error("❌ خطأ غير متوقع في getProjects:", err);
    console.error("تفاصيل الخطأ:", err.message);
    return [];
  }
}

// Fetch single project by ID
export async function getProjectById(id) {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching project:", error);
      return null;
    }

    return data;
  } catch (err) {
    console.error("Error in getProjectById:", err);
    return null;
  }
}

// Fetch project by slug
export async function getProjectBySlug(slug) {
  try {
    const { data, error } = await supabase
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching projects:", error);
      return null;
    }

    // Find project by matching generated slug
    if (data && data.length > 0) {
      // Decode the slug to match Arabic characters properly
      const decodedSlug = decodeURIComponent(slug);
      const project = data.find((p) => generateSlug(p.title) === decodedSlug);
      return project || null;
    }

    return null;
  } catch (err) {
    console.error("Error in getProjectBySlug:", err);
    return null;
  }
}

// Fetch all testimonials
export async function getTestimonials() {
  try {
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Error fetching testimonials:", error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error("Error in getTestimonials:", err);
    return [];
  }
}

// ============================================
// SERVER-SIDE FUNCTIONS (for API routes)
// ============================================

/**
 * Server-side function to fetch all projects
 * Use this in API routes or Server Components
 */
export async function getProjectsServer() {
  const supabaseAdmin = createServerSupabaseClient();

  try {
    const { data, error } = await supabaseAdmin
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Server error fetching projects:", error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error("Error in getProjectsServer:", err);
    return [];
  }
}

/**
 * Server-side function to fetch project by slug
 * Use this in API routes or Server Components
 */
export async function getProjectBySlugServer(slug) {
  const supabaseAdmin = createServerSupabaseClient();

  try {
    const { data, error } = await supabaseAdmin
      .from("projects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Server error fetching projects:", error);
      return null;
    }

    // Find project by matching generated slug
    if (data && data.length > 0) {
      // Decode the slug to match Arabic characters properly
      const decodedSlug = decodeURIComponent(slug);
      const project = data.find((p) => generateSlug(p.title) === decodedSlug);
      return project || null;
    }

    return null;
  } catch (err) {
    console.error("Error in getProjectBySlugServer:", err);
    return null;
  }
}

/**
 * Server-side function to fetch testimonials
 * Use this in API routes or Server Components
 */
export async function getTestimonialsServer() {
  const supabaseAdmin = createServerSupabaseClient();

  try {
    const { data, error } = await supabaseAdmin
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Server error fetching testimonials:", error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error("Error in getTestimonialsServer:", err);
    return [];
  }
}
