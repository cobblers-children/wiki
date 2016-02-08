#!/bin/bash

node_modules/.bin/knex migrate:latest && ./server.js
