FROM node:20-alpine
WORKDIR /li_jason_ui_garden_build_checks
COPY li_jason_ui_garden_build_checks/package*.json ./
RUN npm install --legacy-peer-deps
# RUN npm run build
COPY li_jason_ui_garden_build_checks/ .
EXPOSE 8018
CMD ["npm", "run", "storybook"]