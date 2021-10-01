#!/bin/bash
#Para as instâncias do docker correndo para abrir o port
docker stop $(docker ps -q)
#Criar a imagem
docker build -t "borba/node-app:latest" .
#Rodar container usando a imagem
docker run -it -p 3001:3000 -v /app/node_modules -v $(pwd):/app borba/node-app