import { NextRequest, NextResponse } from 'next/server';

// GET /api/enrollment — retrieve enrollment info
export async function GET() {
  return NextResponse.json({
    course: 'Brain Health Course',
    duration: '8 weeks',
    schedule: 'Every Tuesday at 6:00 PM',
    price: 729,
    stripeLink: 'https://securelink-prod.valorpaytech.com:4430/?redirect=1&uid=86f2b44a-5305-11f1-a8e1-12a0879a85b1',
    spotsAvailable: true,
  });
}

// POST /api/enrollment — handle enrollment interest / lead capture
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required.' },
        { status: 400 }
      );
    }

    // TODO: integrate with Supabase or email provider here
    // Example: await supabase.from('enrollments').insert({ name, email, phone });

    console.log('New enrollment interest:', { name, email, phone });

    return NextResponse.json(
      {
        success: true,
        message: `Thanks ${name}! We'll be in touch at ${email} with enrollment details.`,
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }
}
