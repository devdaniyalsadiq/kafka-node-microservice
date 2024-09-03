import { Consumer, ConsumerRunConfig, ConsumerSubscribeTopics } from "kafkajs"
import kafka from "../config"
import { topicName } from "./admin"

const consumerGroup = "user-1"

const initConsumer = async () => {
  try {
    const consumer: Consumer = kafka.consumer({ groupId: consumerGroup })
    await consumer.connect()
    console.log("Consumer COnnecting...")

    //subscribing topic
    await subscribe(consumer)
    await gettingMesssages(consumer)
  } catch (error: any) {
    console.error("Error while initializing consumer =>", error.message)
  }
}

const subscribe = async (consumer: Consumer) => {
  try {
    const topicsToSubscribe: ConsumerSubscribeTopics = {
      topics: [topicName],
      fromBeginning: true
    }
    await consumer.subscribe(topicsToSubscribe)
  } catch (error: any) {
    console.error("Error while subscribing to consumer=>", error.message)
  }
}

const gettingMesssages = async (consumer: Consumer) => {
  try {
    const consumerRunConfig: ConsumerRunConfig = {
      eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
        console.log(
          `Kafka Message Output - TOPIC [${topic}] - PARTITION [${partition}] - MESSAGE =>`,
          (message.value as Buffer).toString()
        )
      }
    }

    await consumer.run(consumerRunConfig)
  } catch (error: any) {
    console.error("Error while getting messages from kafka = >", error.message)
  }
}

export default initConsumer
