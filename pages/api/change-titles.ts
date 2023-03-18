// import { NextApiRequest, NextApiResponse } from 'next';
// import { connectToDatabase } from '@/lib/mongodb';

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     const { collection, filter } = req.query;
//     const body = JSON.parse(req.body);

//     const { db } = await connectToDatabase();
//     const result = await db.collection(collection).updateOne(
//         JSON.parse(filter),
//         { $set: body }
//     );
//     res.status(200).json({ result });
// }

import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';

interface UpdateResult {
    matchedCount: number;
    modifiedCount: number;
    upsertedCount?: number;
    upsertedId?: {
        _id: string;
    };
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<UpdateResult>
) {
    const { collection, filter } = req.query;
    const body = JSON.parse(req.body);

    if (typeof collection !== 'string' || typeof filter !== 'string') {
        res.status(400).json({ message: 'Invalid request' });
        return;
    }

    const { db } = await connectToDatabase();
    const result = await db.collection(collection).updateOne(
        JSON.parse(filter),
        { $set: body }
    );

    res.status(200).json({ result });
}