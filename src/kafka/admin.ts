import { Admin, ITopicConfig, Kafka } from "kafkajs"
import kafka from "../config"

export const topicName = "NAMES"
const initAdmin = async () => {
  const admin = kafka.admin()
  console.log("Admin Connecting...")
  admin.connect()
  console.log("Admin Connected....")

  const topic = await createTopics(admin)
  if (topic) console.log("Topic Created...")

  await admin.disconnect()
  console.log("Admin Disconnected...")
}

const createTopics = async (admin: Admin): Promise<boolean | undefined> => {
  try {
    console.log(`Creating Topic...-[${topicName}]`)
    const topics: ITopicConfig[] = [{ topic: topicName, numPartitions: 2 }]
    const topic = await admin.createTopics({ topics })
    return topic
  } catch (error: any) {
    console.error("Error while creating topics = >", error.message)
  }
}

export default initAdmin
