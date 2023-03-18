// import { NextApiRequest, NextApiResponse } from 'next';
// import { connectToDatabase } from '@/lib/mongodb';

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     let { db } = await connectToDatabase();
//     let body = JSON.parse( req.body);

//     const titlesMain = await db.collection('Titles').updateOne(
//         { "block" : "Main" },
//         { $set: {
//             "title": body.title,
//             "subtitle": body.subtitle,
//             "text1": body.text1,
//             "text2": body.text2,
//             "btn": body.btn,
//         }}
//     );

//     res.status(200).json({ titlesMain });
// }

import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/lib/mongodb';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { collection, filter } = req.query;
    const body = JSON.parse(req.body);

    const { db } = await connectToDatabase();
    const result = await db.collection(collection).updateOne(
        JSON.parse(filter),
        { $set: body }
    );
    res.status(200).json({ result });
}

