import dbConnect from '@/app/api/db/dbConnect';
import { NextRequest, NextResponse } from 'next/server';
import EmailAuth from '../../../../../../models/EmailAuth';

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect();
  const { authNumber, email } = await req.json();

  //  클라이언트와 같은 인증번호 db에서 찾기
  const authNumbers = await EmailAuth.findOne({ authNumber });
  const authEmails = await EmailAuth.findOne({ email });

  // 현재시간
  const now = new Date();

  if (authNumbers && authEmails) {
    await EmailAuth.deleteOne({ authNumber });
    return NextResponse.json({ message: '메일 인증에 성공했습니다.' }, { status: 200 });
  }
  if (!authNumbers) {
    return NextResponse.json({ error: { message: '인증번호가 틀렸습니다.' } }, { status: 400 });
  }
  if (now > authEmails.date) {
    await EmailAuth.deleteOne({ authNumber });
    return NextResponse.json({ message: '인증시간이 만료되었습니다.' }, { status: 400 });
  }
}
