import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from '../../../../config/email';

export async function POST(req: NextRequest, res: NextResponse) {
  const email = await req.json();
  const payload = Math.floor(100000 + Math.random() * 900000) + '';

  if (email) {
    return sendEmail({ email, payload })
      .then(() => {
        return new Response(JSON.stringify({ message: '메일을 성공적으로 보냈습니다' }), {
          // status: 200,
        });
      })
      .catch((error) => {
        return new Response(JSON.stringify({ message: '메일 전송에 실패했습니다' }), {
          // status: 500,
        });
      });
  }
}
