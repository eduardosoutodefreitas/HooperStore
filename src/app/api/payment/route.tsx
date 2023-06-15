import { NextResponse } from 'next/server'
import { stripe } from '@/app/utils/stripe'

export async function POST(request: Request) {
  const body = await request.json()
  const origin = request.headers.get('origin')
  const session = await stripe.checkout.sessions.create({
    submit_type: 'pay',
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: body,
    success_url: `${origin}/success`,
    cancel_url: `${origin}/cancel`
  })

  return NextResponse.json(session)
}
