# FlightStatus - Backend

## Overview

The backend is powered by Java Spring Boot, ensuring efficient data processing and scalability. PostgreSQL serves as the database, managing all flight and user data securely and efficiently

## Tech Stack

- **Java**: Programming language used.
- **Spring Boot**: Framework for building the backend application.


## Getting Started

### Prerequisites

Ensure you have the following installed:

- **JDK** (Java Development Kit) 8 or higher
- **Maven** (or **Gradle**) for project management and build
- **Git** for version control
- **PostgreSQL** (or other database systems, if applicable)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Set up the database**

   - Create a PostgreSQL database named `[your-database-name]`.
   - Update the database configuration in `src/main/resources/application.properties` or `src/main/resources/application.yml`:

     ```properties
     spring.datasource.url=jdbc:postgresql://localhost:5432/your-database-name
     spring.datasource.username=your-username
     spring.datasource.password=your-password
     spring.jpa.hibernate.ddl-auto=update
     ```

3. **Build the project**

   Using Maven:

   ```bash
   mvn clean install
   ```

   Or using Gradle:

   ```bash
   ./gradlew build
   ```

4. **Run the application**

   Using Maven:

   ```bash
   mvn spring-boot:run
   ```

   Or using the built JAR file:

   ```bash
   java -jar target/your-app-name.jar
   ```

   The application will be available at `http://localhost:8080`.

## Usage

Flight data can be posted on the database via [http://localhost:8090/api/add]
Sample JSON :
```yaml
{
    "flightId": "6E 2342",
    "airline": "Indigo",
    "status": "Delayed",
    "departureGate": "C3",
    "arrivalgate": "D4",
    "scheduledDeparture": "2024-07-26T16:00:00Z",
    "scheduledArrival": "2024-07-26T20:00:00Z",
    "actualDeparture": null,
    "actualArrival": null,
    "notifications": [
        {
            "notificationId": "2",
            "message": "Your flight 6E 2342 is delayed. New departure time: 2024-07-26T17:00:00Z. Departure gate: C3.",
            "timeStamp": "2024-07-26T15:30:00Z",
            "method": "Email",
            "recipient": "user@example.com"
        }
    ]
}
```

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Spring Boot](https://spring.io/projects/spring-boot)
