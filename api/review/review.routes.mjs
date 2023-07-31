import express from 'express'
import { requireAuth } from '../../middlewares/requireAuth.middleware.mjs'
import { getReviews, addReview } from './review.controller.mjs'
const router = express.Router()

router.get('/', getReviews)
router.post('/', addReview)

export const reviewRoutes = router
