import { Kafka } from "kafkajs"

const kafka = new Kafka({
  clientId: "Test-App",
  brokers: ["localhost:9092"]
})

export default kafka
