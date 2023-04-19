FROM node:12.2.0-alpine
WORKDIR app
COPY . .
RUN npm install
EXPOSE 3001 3000
CMD ["node","start"]
