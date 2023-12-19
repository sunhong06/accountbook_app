import mongoose from 'mongoose';
import { NextRequest, NextResponse } from 'next/server';
import User from '../../../../../models/User';
import dbConnect from '@/app/api/db/dbConnect';
import bcrypt from 'bcrypt';

export async function GET(req: NextRequest) {
  try {
    await dbConnect();
    const msg = await User.find();
    return new NextResponse(JSON.stringify(msg), { status: 200 });
  } catch (error: any) {
    return new NextResponse(error);
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const user = await req.json();
    const { id, password, email, date } = user;
    console.log(id);
    // bcrypt 비밀번호 암호화
    const hash = bcrypt.hashSync(password, 10);

    const newUser = new User({
      id,
      email,
      password: hash,
      date,
    });

    const savedUser = await newUser.save();

    return NextResponse.json({
      message: 'User created successfully',
      status: 200,
      savedUser,
    });
  } catch (error: any) {
    return new NextResponse(error);
  }
}
