# Step 1: ใช้ Node.js เพื่อติดตั้งและ build React
FROM node:18-alpine AS build
WORKDIR /app

# คัดลอก package.json และ package-lock.json
COPY package.json package-lock.json ./
RUN npm install

# คัดลอกโค้ดทั้งหมดและ build React
COPY . .
RUN npm run build

# Step 2: ใช้ Nginx เสิร์ฟไฟล์ที่ build แล้ว
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# ลบไฟล์ default ออกจาก Nginx
RUN rm -rf ./*

# คัดลอกไฟล์ React ที่ build แล้วจากขั้นตอนก่อนหน้า
COPY --from=build /app/dist ./

# คัดลอกไฟล์ nginx.conf ที่เราแก้ไขไว้
COPY nginx.conf /etc/nginx/nginx.conf


# รัน Nginx
CMD ["nginx", "-g", "daemon off;"]
