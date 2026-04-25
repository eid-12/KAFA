# Stage 1: Build the React/Vite app
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
# إذا تستخدم pnpm (واضح من ملف pnpm-workspace)
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build

# Stage 2: Serve the app with Nginx
FROM nginx:stable-alpine
# نسخ ملفات الـ build لمجلد Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# نسخ إعدادات Nginx (اختياري، بس الأفضل نستخدم الافتراضي حالياً)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]