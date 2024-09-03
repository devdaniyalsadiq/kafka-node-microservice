# KafkaJS TypeScript Project

This repository contains a sample project to demonstrate the use of KafkaJS in a TypeScript environment. The project includes initialization and usage of Kafka admin, producer, and consumer clients.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)

### Running Zookeeper and Kafka with Docker

To run Zookeeper and Kafka, use the following Docker commands:

1. **Run Zookeeper**:
    ```sh
    docker run -d --name zookeeper -p 2181:2181 zookeeper:3.6.3
    ```

2. **Run Kafka**:
    ```sh
    docker run -d --name kafka -p 9092:9092 --link zookeeper:zookeeper \
    -e KAFKA_ZOOKEEPER_CONNECT=zookeeper:2181 \
    -e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 \
    -e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
    confluentinc/cp-kafka:latest
    ```

### Setting Up the Project

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install Dependencies**:
    ```sh
    pnpm install
    ```

3. **Build the Project**:
    ```sh
    pnpm run build
    ```

### Running the Project

To run the project, use the following command:

```sh
pnpm start
