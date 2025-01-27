FROM mcr.microsoft.com/playwright:focal

WORKDIR /app

COPY tests /app/tests/
COPY package.json /app/
COPY . .


RUN npm cache clean --force 
RUN npm init -y
RUN apt-get update && apt-get install -y wget gnupg ca-certificates && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt install -y nodejs

CMD ["npx", "playwright", "test"]