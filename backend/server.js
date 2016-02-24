#!/usr/bin/env node

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(
    [
        {
            register: require('hapi-bookshelf-models'),
            options: {
                knex: {
                    client: 'pg',
                    connection: {
                        host: process.env.POSTGRES_HOST,
                        port: 5432,
                        database: 'wiki',
                        user: process.env.POSTGRES_USER,
                        password: process.env.POSTGRES_PASSWORD
                    },
                    //debug: true,
                    pool: {
                        min: 2,
                        max: 10
                    },
                    migrations: {
                        tableName: 'knex_migrations'
                    }
                },
                plugins: ['registry'], // Required
                models: 'models',
                base: function (bookshelf) {
                    // Add timestamps to all models
                    return bookshelf.Model.extend({
                        hasTimestamps: true
                    })
                }
            }
        }
    ], function(err) {
        if (err) {
            console.error('failed to load plugin');
            console.error(err);
        } else {
            server.start(() => {
                console.log('Server starting at:', server.info.uri);
            });
        }
    }
);

server.route([
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Welcome');
        }
    },
    {
        method: 'GET',
        path: '/articles/{articleID}',
        handler: function (request, reply) {
            var Article = request.server.plugins.bookshelf.model('Article');

            new Article({id: request.params.articleID}).fetch().then((article) => {
                reply({ article: article });
            });
        }
    },
    {
        method: 'GET',
        path: '/plants/{plantID}',
        handler: function (request, reply) {
            var Plant = request.server.plugins.bookshelf.model('Plant');
            var Group = request.server.plugins.bookshelf.model('Group');

            new Plant({id: request.params.plantID}).fetch({withRelated: ['group']}).then((plant) => {
                var groups = [];

                groups.push(plant.related('group'));

                reply({ plant: plant.toJSON({ shallow: true }), groups: groups});
            });
        }
    }
]);
