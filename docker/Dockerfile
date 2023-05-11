FROM node:16-alpine as node-build

#Creamos carpeta
#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY * /

#USER node

RUN npm install 

COPY --chown=node:node . .

RUN npm run build

# construccion de servidor
FROM nginx:stable-alpine

COPY /home/node/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]