import initAdmin from "./kafka/admin"
import initProducer from "./kafka/producer"
import initConsumer from "./kafka/consumer"

const run = async () => {
  //   await initAdmin()
  await initProducer()
  await initConsumer()
}

run().catch(console.error)
