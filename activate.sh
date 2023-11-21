#!/bin/bash

docker build -t ver_tech_fellowship .

docker-compose -f docker-compose.yml up -d
