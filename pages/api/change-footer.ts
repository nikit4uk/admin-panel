import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let { db } = await connectToDatabase();
    let body = JSON.parse( req.body);

    const footer = await db.collection('Footer').updateOne(
        { "block" : "footer" },
        { $set: {
            "Date": body.Date,
            "Rights": body.Rights,
        }}
    );

    res.status(200).json({ footer });
}