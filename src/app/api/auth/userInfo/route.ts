import { jwtUtils } from '@/utils/jwt';
import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const token = await req.json();
  console.log(token);
  const { verify } = jwtUtils();
  if (!token) {
    return NextResponse.json({ message: '토큰이 제공되지 않았습니다.' }, { status: 401 });
  }
  const verifyToken = verify(token);

  if (verifyToken.ok === false) {
    return NextResponse.json({ message: '토큰이 유효하지 않습니다.' }, { status: 401 });
  }
  const userId = verifyToken.userId;

  return NextResponse.json({ userId }, { status: 200 });
}
