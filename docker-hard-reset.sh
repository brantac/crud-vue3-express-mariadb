#!/bin/bash
echo "Removing data directory"
sudo rm -vrf ./db/data/*
echo "Done"

echo "Removing all unused images"
docker system prune -af
echo "Done"

echo "Run docker compose"
docker compose up