# Stage 1: Build
FROM maven:3.8.5-openjdk-17 AS build
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Run
# استبدلنا النسخة القديمة بنسخة مدعومة ومستقرة
FROM eclipse-temurin:17-jre-alpine
COPY --from=build /target/*.jar app.jar

# بما أنك تبي بدون بورت، التطبيق داخلياً بيشتغل على 8080
# والـ Nginx Proxy Manager هو اللي بيحول له الطلبات
EXPOSE 8080

ENTRYPOINT ["java", "-jar", "/app.jar"]