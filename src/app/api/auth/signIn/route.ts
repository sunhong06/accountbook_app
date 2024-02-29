import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import User from '../../../../../models/User';
import dbConnect from '../../db/dbConnect';
import { jwtUtils } from '@/utils/jwt';
import Token from '../../../../../models/Token';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect();
  const { id, password } = await req.json();

  const user = await User.findOne({ id });
  const { sign, refresh } = jwtUtils();
  const hashPwd = await bcrypt.compare(password, user.password);

  const refreshToken = refresh(user.id);
  const accessToken = sign(user.id);

  const userRefreshToken = await new Token({
    id: user.id,
    refreshToken,
  });

  if (user && hashPwd) {
    userRefreshToken.save();
    cookies().set({
      name: 'refreshToken',
      value: refreshToken,
      httpOnly: true,
      path: '/',
    });
    return NextResponse.json(
      { message: '로그인이 완료 되었습니다', id: user.id, accessToken, refreshToken, success: true },
      { status: 200 },
    );
  }
  if (!user) {
    return NextResponse.json({ message: '존재하지 않는 계정입니다.' }, { status: 405 });
  }
  if (!user && !hashPwd) {
    return NextResponse.json({ message: '아이디 또는 비밀번호가 틀렸습니다.' }, { status: 400 });
  }
}
