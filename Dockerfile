# -------- STAGE 1: Build Angular App --------
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npx ng build --configuration production

# -------- STAGE 2: Nginx Server --------
FROM nginx:alpine

COPY --from=build /app/dist/my-portfolio /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
