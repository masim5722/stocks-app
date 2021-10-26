FROM node
WORKDIR /frontend
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_NAME=stocks
EXPOSE 3000
#RUN npm run build
CMD["npm", "start"]