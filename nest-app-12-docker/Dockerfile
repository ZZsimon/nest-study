# 基于已有的node镜像进行构建
FROM node:latest 

# 工作目录是 /app目录
WORKDIR /app

# 拷贝当前目录的文件到/app目录
COPY . .

RUN npm config set registry https://registry.npmmirror.com/

RUN npm install -g http-server

EXPOSE 8080

# 
VOLUME /app

CMD ["http-server", "-p", "8080"]
