import { NextRequest, NextResponse } from 'next/server';
import User from '../../../../../models/User';
import dbConnect from '../../db/dbConnect';

export async function POST(req: NextRequest, res: NextResponse) {
  await dbConnect();
  const id = await req.json();
  const users = await User.findOne({ id });

  if (!users) {
    return NextResponse.json(
      {
        message: '사용가능한 ID입니다.',
        success: true,
      },
      { status: 200 },
    );
  } else {
    return NextResponse.json(
      {
        message: '이미 사용 중인 아이디입니다.',
        success: false,
      },
      { status: 409 },
    );
  }
}
