import dbConnect from '@/app/api/db/dbConnect';
import Token from '../../../../../models/Token';
import { jwtUtils } from '@/utils/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  await dbConnect();

  const refreshToken = req.cookies.get('refreshToken')?.value;

  const { sign, refresh, refreshVerify } = jwtUtils();

  if (!refreshToken) {
    return NextResponse.json({ message: '리프레시 토큰이 제공되지 않았습니다.' }, { status: 400 });
  }
  // 리프레시 토큰을 검증
  const user = await Token.findOne({ refreshToken });
  if (refreshToken === user.refreshToken) {
    const AccessToken = sign(user.id);
    return NextResponse.json({ AccessToken }, { status: 200 });
  }
  if (refreshVerify(refreshToken)) {
    const newRefreshToken = refresh(user.id);
    return NextResponse.json({ newRefreshToken }, { status: 200 });
  } else {
    return NextResponse.json({ message: '리프레시 토큰이 유효하지 않습니다.' }, { status: 401 });
  }
}
