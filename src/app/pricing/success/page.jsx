import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'
import { Card, Button } from '@heroui/react'
import Link from 'next/link' // Import standard Next.js Link
import { createSubscription } from '@/lib/action/subcription'

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details,
    metadata,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  const customerEmail = customer_details?.email || 'your email'
 

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {
    const subInfo={
      email:customerEmail,
      planId: metadata.planId
    }
      
    const result=await createSubscription(subInfo)

    return (
      <div className="flex justify-center items-center w-full min-h-screen p-4 sm:p-6 bg-gradient-to-br from-slate-50 via-gray-100 to-slate-200 dark:from-zinc-950 dark:via-zinc-900 dark:to-black">
        <Card className="w-full max-w-md border border-white/20 dark:border-zinc-800/50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-2xl rounded-2xl overflow-hidden p-8 text-center transition-all duration-300 hover:shadow-success/5">
          
          {/* Animated Success Checkmark Icon */}
          <div className="mx-auto w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-success-50 dark:bg-success-950/30 text-success border border-success-200 dark:border-success-800/30 shadow-lg shadow-success/10">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={2.5} 
              stroke="currentColor" 
              className="w-8 h-8 animate-bounce"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>

          {/* Badge */}
          <span className="text-xs font-bold tracking-wider uppercase text-success px-2.5 py-1 bg-success-100/50 dark:bg-success-950/50 rounded-full">
            Payment Successful
          </span>
          
          {/* Headline */}
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-zinc-50 mt-4 mb-3">
            Thank You for Upgrading!
          </h2>
          
          {/* Description Text */}
          <p className="text-sm font-medium text-slate-500 dark:text-zinc-400 mb-8 leading-relaxed">
            We appreciate your business! A confirmation email and purchase receipt will be sent to{' '}
            <span className="font-semibold text-slate-800 dark:text-zinc-200 underline decoration-primary decoration-2 underline-offset-2">
              {customerEmail}
            </span>.
          </p>

          <hr className="border-slate-100 dark:border-zinc-800/80 my-5 w-full" />

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 w-full">
            
            {/* SOLVED: Wrapped the Client Button with Next.js Link Wrapper instead of polymorphic "as" rendering */}
            <Link href="/dashboard" className="w-full select-none" prefetch={false}>
              <Button 
                color="primary" 
                size="lg"
                radius="lg"
                className="font-bold text-sm tracking-wide bg-gradient-to-r from-primary to-primary-600 hover:opacity-95 shadow-lg shadow-primary/20 dark:shadow-none transition-transform active:scale-[0.98] w-full text-white"
              >
                Go to Dashboard
              </Button>
            </Link>
            
            <p className="text-xs font-medium text-slate-400 dark:text-zinc-500 mt-2">
              Have questions? Email us at{' '}
              <a href="mailto:support@heireloop.com" className="text-primary hover:underline font-semibold">
                support@heireloop.com
              </a>
            </p>
          </div>

        </Card>
      </div>
    )
  }
}
