#!/bin/bash
echo "Removing data directory"
sudo rm -vrf ./db/data/*
echo "Done"

echo "Removing unused objects"
docker system prune -f
echo "Done"

echo "Removing image"
docker rmi docker-course_db:latest
docker rmi docker-course_api:latest
echo "Done"

echo "Run docker compose"
docker compose up