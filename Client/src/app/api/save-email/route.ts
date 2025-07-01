// app/api/save-email/route.ts

import { NextRequest } from 'next/server'
import { MongoClient } from 'mongodb'

let cachedClient: MongoClient | null = null

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return new Response(JSON.stringify({ message: 'Invalid email' }), {
      status: 400,
    })
  }

  try {
    if (!cachedClient) {
      cachedClient = new MongoClient(process.env.ATLAS_URI!)
      await cachedClient.connect()
    }

    const db = cachedClient.db(process.env.DB)
    const collection = db.collection('newsletter_emails')

    await collection.insertOne({ _id: email })

    return new Response(JSON.stringify({ message: 'Email saved' }), {
      status: 200,
    })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    if (err.code === 11000) {
      return new Response(JSON.stringify({ message: 'Email already exists' }), {
        status: 400,
      })
    }

    return new Response(JSON.stringify({ message: err.message }), {
      status: 500,
    })
  }
}
