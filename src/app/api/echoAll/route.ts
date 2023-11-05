import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const params = Object.fromEntries(searchParams.entries());

  return NextResponse.json(params);
}
