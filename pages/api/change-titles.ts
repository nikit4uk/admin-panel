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
import { UpdateResult } from 'mongodb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { collection, filter } = req.query;
    const body = JSON.parse(req.body);

    const { db } = await connectToDatabase();
    const result: UpdateResult = await db.collection(collection).updateOne(
        JSON.parse(filter),
        { $set: body }
    );
    res.status(200).json({ result });
}