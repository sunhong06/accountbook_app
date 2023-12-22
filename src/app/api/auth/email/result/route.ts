import dbConnect from '@/app/api/db/dbConnect';
import { NextRequest, NextResponse } from 'next/server';
import EmailAuth from '../../../../../../models/EmailAuth';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const authNumber = await req.json();
    //  클라이언트와 같은 인증번호 db에서 찾기
    const authNumbers = await EmailAuth.findOne({ authNumber: authNumber.body.authNumber });
    const authEmails = await EmailAuth.findOne({ email: authNumber.body.email });
    // 현재시간
    const now = new Date();

    if (authNumbers !== null && authEmails !== null) {
      await EmailAuth.deleteOne({ authNumber: authNumber.body.authNumber });
      return NextResponse.json({ message: '메일 인증에 성공했습니다.' }, { status: 200 });
    }
    if (authNumbers === null) {
      return NextResponse.json({ message: '인증번호가 틀렸습니다.' }, { status: 400 });
    }

    if (now > authEmails.date) {
      await EmailAuth.deleteOne({ authNumber: authNumber.body.authNumber });
      return NextResponse.json({ message: '인증시간이 만료되었습니다.' }, { status: 200 });
    }
  } catch (error: any) {
    return new NextResponse(error);
  }
}
