FROM node:19.9.0 as nodebuild

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
#RUN chown -R node:node /home/node/app

WORKDIR /home/node/app

RUN ls -l

COPY . .

RUN ls -l
#USER node

RUN npm install

#RUN --chown=node:node . .

RUN npm run build

# construccion de servidor
FROM nginx:stable

COPY --from=nodebuild /home/node/app/dist /usr/share/nginx/html
#COPY /dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
