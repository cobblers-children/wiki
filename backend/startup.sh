#!/bin/bash

if ! nc -z $POSTGRES_HOST 5432; then
    echo "** Waiting for Postgres to start **"
    WAIT=0
    while ! nc -z $POSTGRES_HOST 5432; do
        sleep 1
        WAIT=$(($WAIT + 1))

        if [ "$WAIT" -gt 15 ]; then
            echo "Error: Postgres taking too long."
            exit 1
        fi
    done
fi

node_modules/.bin/knex migrate:latest && ./server.js
