import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../db/dbConnect';
import Token from '../../../../../models/Token';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect();
  try {
    const refreshToken = req.cookies;
    cookies().delete('refreshToken');

    if (refreshToken) {
      await Token.deleteOne({ refreshToken });
      return NextResponse.json({ message: '로그아웃이 완료되었습니다.', success: true }, { status: 200 });
    }
    return NextResponse.json({ message: '이미 로그아웃 되었습니다.' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 405 });
  }
}
