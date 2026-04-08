import { NextResponse } from 'next/server';
import { getProjectsServer, getProjectBySlugServer } from '@/lib/supabase';

// GET /api/projects - Fetch all projects
export async function GET() {
  try {
    const projects = await getProjectsServer();

    return NextResponse.json({
      success: true,
      data: projects,
      count: projects.length
    });
  } catch (error) {
    console.error('API Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch projects',
        message: error.message
      },
      { status: 500 }
    );
  }
}

// POST /api/projects - Create a new project (admin only)
export async function POST(request) {
  try {
    const { createServerSupabaseClient } = await import('@/lib/supabase');
    const supabaseAdmin = createServerSupabaseClient();

    const body = await request.json();
    const { title, description, technologies, github_url, live_url, image_url } = body;

    // Validate required fields
    if (!title || !description) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
          message: 'Title and description are required'
        },
        { status: 400 }
      );
    }

    // Insert new project
    const { data, error } = await supabaseAdmin
      .from('projects')
      .insert([
        {
          title,
          description,
          technologies: technologies || [],
          github_url,
          live_url,
          image_url,
          created_at: new Date().toISOString()
        }
      ])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to create project',
          message: error.message
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      data,
      message: 'Project created successfully'
    });
  } catch (error) {
    console.error('API Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: error.message
      },
      { status: 500 }
    );
  }
}