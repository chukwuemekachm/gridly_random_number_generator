#!/bin/bash

FILE="${PWD}/db.json"

if [ ! -f "$FILE" ]; then
    cp ./db.example.json ./db.json
    echo "**********************************"
    echo "*                                *"
    echo "*   Bootsraped a new data file   *"
    echo "*                                *"
    echo "**********************************"
fi
