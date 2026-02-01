# Use nginx lightweight image
FROM nginx:alpine

# Remove default server config and add ours
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static site into nginx html folder
COPY public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]