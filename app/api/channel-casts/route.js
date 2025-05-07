import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    const CHANNEL_ID = "300";
    const FARCASTER_API_URL = `https://api.neynar.com/v2/farcaster/channel/casts?id=${300}&limit=20`;
    
    const response = await axios.get(FARCASTER_API_URL, {
        headers: {
            'accept': 'application/json',
            'api_key': '0DF27A40-13AA-4833-9A8D-D9F871220248'
        }
    });

    return NextResponse.json(response.data);
}