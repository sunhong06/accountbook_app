import { NextRequest, NextResponse } from 'next/server';
import User from '../../../../../models/User';
import dbConnect from '../../db/dbConnect';

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await dbConnect();
    const id = await req.json();
    const users = await User.findOne({ id });
    console.log(users);
    if (users === null) {
      return NextResponse.json({
        message: 'Available ID',
        status: 200,
      });
    } else {
      return NextResponse.json({
        message: 'Disabled ID',
        status: 403,
      });
    }
  } catch (error: any) {
    return new NextResponse(error);
  }
}
