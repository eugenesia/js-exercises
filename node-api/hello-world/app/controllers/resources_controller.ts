import type { HttpContext } from '@adonisjs/core/http'
import mongodb from '#services/mongodb'
import type { Resource } from '../types/resource.js'

export default class ResourcesController {
  async index({ response }: HttpContext) {
    try {
      const db = await mongodb.connect()
      const collection = db.collection<Resource>('resources')

      const resources = await collection.find({}).toArray()

      return response.ok({
        success: true,
        data: resources,
        count: resources.length
      })
    } catch (error) {
      return response.internalServerError({
        success: false,
        message: 'Failed to fetch resources',
        error: error.message
      })
    }
  }
}
