import { NextResponse } from 'next/server';
import { getProjectBySlugServer } from '@/lib/supabase';

// GET /api/projects/[slug] - Fetch project by slug
export async function GET(request, { params }) {
  try {
    const { slug } = params;

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing slug parameter'
        },
        { status: 400 }
      );
    }

    const project = await getProjectBySlugServer(slug);

    if (!project) {
      return NextResponse.json(
        {
          success: false,
          error: 'Project not found'
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('API Error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch project',
        message: error.message
      },
      { status: 500 }
    );
  }
}