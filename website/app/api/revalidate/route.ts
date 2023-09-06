import { revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const req = await request.json();

  const secret = request.nextUrl.searchParams.get('secret');
  const model = req.model;

  if (secret !== process.env.STRAPI_TOKEN) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  let tag = '/';

  switch (model) {
    case 'cloth':
      tag = 'clothes';
      break;
    case 'sneaker':
      tag = 'sneakers';
      break;
    case 'special':
      tag = 'specials';
      break;
    case 'contact':
      tag = 'contacts';
      break;
  }

  revalidateTag(tag);
  revalidateTag('sitemap');

  console.log(`Revalidated tag: ${tag}`);

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
