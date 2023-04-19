FROM node:12.2.0-alpine
COPY . .
RUN npm install
RUN cd /frontend
RUN npm install
EXPOSE 3001 3000
CMD ["node","start"]
