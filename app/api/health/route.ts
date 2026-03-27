import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'Brain Training Landing Page API',
    timestamp: new Date().toISOString(),
  });
}
