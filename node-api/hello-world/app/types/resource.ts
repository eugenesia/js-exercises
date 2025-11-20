import { ObjectId } from 'mongodb'

export interface Resource {
  _id?: ObjectId
  name: string
  description?: string
  createdAt?: Date
  updatedAt?: Date
}
