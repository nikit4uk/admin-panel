import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { db } = await connectToDatabase();
    let body = JSON.parse( req.body);

    const header = await db.collection('Header').updateOne(
        { "block" : "header" },
        { $set: {
            "MainPage": body.MainPage,
            "LoginPage": body.LoginPage,
            "AdminPanel": body.AdminPanel,
        }}
    );

    res.status(200).json({ header });
}