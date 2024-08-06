import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '@/helpers/emailservice';

export async function POST(req: NextRequest) {
    try {

        const data= await req.json();
        await sendEmail(data);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error: any) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}

// Met