import { MongoClient, Db } from 'mongodb'
import env from '#start/env'

class MongoDB {
  private client: MongoClient | null = null
  private db: Db | null = null

  async connect(): Promise<Db> {
    if (this.db) {
      return this.db
    }

    const url = env.get('MONGO_URL', 'mongodb://localhost:27017')
    const dbName = env.get('MONGO_DB_NAME', 'hello-world')

    this.client = new MongoClient(url)
    await this.client.connect()
    this.db = this.client.db(dbName)

    console.log('Connected to MongoDB')
    return this.db
  }

  async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close()
      this.client = null
      this.db = null
      console.log('Disconnected from MongoDB')
    }
  }

  getDb(): Db {
    if (!this.db) {
      throw new Error('Database not connected. Call connect() first.')
    }
    return this.db
  }
}

export default new MongoDB()
