import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID={
    'seeker_Premium': 'price_1TgMU3RvzdIBmMCkjwjTvM2q',
    'seeker_Pro': 'price_1TgLsaRvzdIBmMCkZOiVp8N5',
    'recruiter_growth':'price_1TgMZFRvzdIBmMCkZrt7vgjO',
    'recruiter_enterprise':'price_1TgMZpRvzdIBmMCkpOvt9pDW'
}