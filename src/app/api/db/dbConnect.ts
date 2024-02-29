import mongoose from 'mongoose';

const dbConnect = async () => {
  const MONGODB_URL = `${process.env.NEXT_PUBLIC_MONGODB_URI}`;

  try {
    // const opts: any = {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // };
    await mongoose.connect(MONGODB_URL);
    console.log('connect !!');
  } catch (error) {
    console.log('db error');
    throw new Error('SDB Connect Error');
  }
};

export default dbConnect;
