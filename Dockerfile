FROM node:20-alpine
WORKDIR /li_jason_final_site
COPY li_jason_final_site/package*.json ./
RUN npm install --legacy-peer-deps
# RUN npm run build
COPY li_jason_final_site/ .
EXPOSE 3000
CMD ["npm", "start"]