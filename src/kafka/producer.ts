import { Producer, ProducerRecord } from "kafkajs"
import kafka from "../config"
import { topicName } from "./admin"

const initProducer = async () => {
  try {
    const producer: Producer = kafka.producer()
    console.log("Connecting Producer...")

    await producer.connect()
    console.log("Producer Connected Successfully...")
    // Publishing Message to kafka
    await produceMessage(producer)
    //disconnecting producer
    await producer.disconnect()
  } catch (error: any) {
    console.error("Error while initializing producer = >", error.message)
  }
}

const produceMessage = async (producer: Producer) => {
  //Producer Config
  const producerConfig: ProducerRecord = {
    topic: topicName,
    messages: [
      {
        key: "name",
        value: "Ammar",
        partition: 0
      }
    ]
  }
  await producer.send(producerConfig)
}

export default initProducer
