import { reviewService } from './review.service.mjs'
import { logger } from '../../services/logger.service.mjs'

export async function getReviews(req, res) {
  try {
    const filterBy = req.query
    const reviews = await reviewService.query(filterBy)
    res.send(reviews)
  } catch (err) {
    logger.error('Failed to get reviews', err)
    res.status(500).send({ err: 'Failed to get reviews' })
  }
}

export async function addReview(req, res) {
  try {
    const review = req.body
    const addedReview = await reviewService.addReview(review)
    res.send(addedReview)
  } catch (err) {
    logger.error('Failed to add review', err)
    res.status(500).send({ err: 'Failed to add review' })
  }
}
