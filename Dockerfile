# الـ Build stage
FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# الـ Run stage
FROM openjdk:17-jdk-slim
COPY --from=build /target/*.jar app.jar

# هنا السر: نخلي التطبيق يشتغل على بورت 80 (البورت الافتراضي للويب)
ENV SERVER_PORT=80
EXPOSE 80

ENTRYPOINT ["java", "-jar", "/app.jar"]