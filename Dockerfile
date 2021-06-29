## stage: 1
FROM node:14.17-alpine as build
# working directory
WORKDIR /app
# copy everything to /app directory
COPY . /app
# add the node_modules folder to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache dependencies
RUN apk add --no-cache bash && npm install && npm run build


## Stage 2
# set up production environment
FROM nginx
# copy the build folder from react to the root of nginx (www)
COPY --from=build /app/build /usr/share/nginx/html
# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
COPY nginx/nginx.conf /etc/nginx/conf.d
# --------- /only for those using react router ----------
# expose port 80 to the outer world
# Default port exposure
EXPOSE 3000

WORKDIR /usr/share/nginx/html
COPY ./env.sh .
COPY .env .


# Make our shell script executable
RUN chmod +x env.sh

# start nginx
CMD ["/bin/sh", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]

