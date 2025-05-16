import { NextResponse } from 'next/server';
import { fetchWithRetry } from '@/utils/api';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const response = await fetchWithRetry('/utilities/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'reel',
        source: 'instagram',
        quality: '720',
        url: body.url
      }),
    }, {
      maxRetries: 3,
      delayMs: 200,
      backoffFactor: 2
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch download URLs: ${errorText}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to process request' },
      { status: 500 }
    );
  }
}
