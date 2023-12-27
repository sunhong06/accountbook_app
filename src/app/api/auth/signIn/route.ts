import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from 'next/server';
import User from '../../../../../models/User';
import dbConnect from '../../db/dbConnect';

interface RequestBody {
  id: string;
  password: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const { id, password } = await req.json();
    const user = await User.findOne({ id });

    const hashPwd = await bcrypt.compare(password, user.password);

    if (user && hashPwd) {
      return NextResponse.json({ message: '로그인 완료되었습니다.' }, { status: 200 });
    }
    if (!user) {
      return NextResponse.json({ message: '존재하지 않는 계정입니다.' }, { status: 405 });
    }
    if (!user && !hashPwd) {
      return NextResponse.json({ message: '아이디 또는 비밀번호가 틀렸습니다.' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: '로그인 실패하였습니다.(SERVER ERROR)' }, { status: 400 });
  }
}
