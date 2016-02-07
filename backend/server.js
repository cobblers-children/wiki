#!/usr/bin/env node

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register(
    [
        {
            register: require('hapi-sequelize'),
            options: {
                dialect: 'postgres',
                host: 'postgres',
                port: 5432,
                database: 'wiki',
                user: process.env.POSTGRES_USER,
                pass: process.env.POSTGRES_PASSWORD,
                models: ['models/**/*.js'],
                sequelize: {
                    define: {
                        underscoredAll: true
                    }
                }
            }
        }
    ], function(err) {
        if (err) {
            console.error('failed to load plugin');
            console.error(err);
        } else {
            var db = server.plugins['hapi-sequelize'].db;

            db.sequelize.sync().then(function() {
                server.start(() => {
                    bootstrap(db.sequelize.models);
                });
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
            var models = request.server.plugins['hapi-sequelize'].db.sequelize.models;

            models.Article.findById(request.params.articleID).then((article) => {
                reply({ article: article });
            });
        }
    },
    {
        method: 'GET',
        path: '/plants/{plantID}',
        handler: function (request, reply) {
            var models = request.server.plugins['hapi-sequelize'].db.sequelize.models;

            models.Plant.findById(request.params.plantID).then((plant) => {
                plant.getGroup().then((group) => {
                    var groups = [];
                    groups.push(group);

                    reply({ plant: plant, groups: groups });
                });
            });
        }
    }
]);

function bootstrap(models) {
    preloadArticles(models);
    preloadGroups(models);
    preloadPlants(models);
    console.log('Server starting at:', server.info.uri);
}

function preloadArticles(models) {
    var articles = [
        {
            id: 'welcome',
            name: 'Food Forest Info',
            description: 'Food Forest Info',
            image: '/assets/images/chive.png',
            body: '## Welcome to Food Forest Info\n' +
            'First time here?  [Learn about us](/article/intro) \n' +
            '## Get Involved\n' +
            'If you like this site and want to help out, [we have some suggestions](/article/contribute).\n' +
            '## Plant of the week\n' +
            '[Aronia](/plant/aronia)'
        },
        {
            id: 'contribute',
            name: 'How to Contribute',
            description: 'How to Contribute',
            image: '/assets/images/shovel.png',
            body: '## How Can You Help?\n' +
            'We are not yet ready to accept much direct help from the community.  If you can code, then see us on [GitHub](https://github.com/food-forest). There are other ways you can help us all in the meantime.\n' +
            '## Pictures\n' +
            'Good pictures of plants are going to be one of the hardest things to come by.  If you have access to plants and a good eye, start taking pictures.  We\'ll need them soon, but it\'ll take some time before we can accept uploads.\n' +
            '## Volunteer\n' +
            'What we need right now are more success stories.  Nothing beats hands-on experience helping with an existing Food Forest Project.  In exchange for your time you will learn a lot about plants and help build something at the same time.  Find a local project, or one you can visit.\n' +
            '#### United States\n' +
            '* Seattle, Washington:  [Beacon Food Forest](http://www.beaconfoodforest.org/)\n' +
            '* Tacoma, Washington:  [Swan Creek Park Food Forest](http://swancreekparkfoodforest.weebly.com/get-involved.html)\n' +
            '\n' +
            'Do you know of a project not listed here? [Contact us](https://github.com/jdmarshall/foodforest/issues/new)'
        },
        {
            id: 'intro',
            name: 'An Introduction',
            description: 'An Introduction',
            body: '## Food Forests Explained\n' +
            'On this site, we hope to connect people who want to learn about plants with the people who understand them.  We\'ll ' +
            'use plain language, presented in easily digested pieces.  We hope when you\'re done that you will want to try growing ' +
            'your own. We want to help you with that, too.\n' +
            '\n' +
            'There\'s a common problem on the Internet.  You want to learn about something new, but everything you find is written ' +
            'by experts who seem to be used to talking to other experts.  Words you don\'t know.  \'Explanations\' that only lead to ' +
            'more questions and little understanding.  Details that seem out of place or just too much.  It\'s a rare person who ' +
            'can take a complicated subject and make the rest of us understand it.\n' +
            '\n' +
            'More questions?  See our [Frequently Asked Questions](/article/faq)'
        },
        {
            id: 'faq',
            name: 'Frequently Asked Questions',
            description: 'Frequently Asked Questions',
            body: '## What is a Food Forest?\n' +
            'A Food Forest is pretty much what it sounds like:  A lot of plants, most of them with parts you can eat.\n' +
            'There are a lot of different names for this concept, but \'food forest\' is by far the simplest.\n' +
            '## What is Permaculture?\n' +
            'If a Food Forest is *what* you have, Permaculture is *how* you get it.  It\'s a philosophy and a set of\n' +
            'practices intended to create gardens or farms that contain a wide variety useful plants, and which resemble what we\n' +
            'think of as \'Nature\'.\n' +
            'In fact, what many of us think of as \'Nature\' has rarely been the natural state of things.  Indigenous peoples the\n' +
            'world over have been using sophisticated land management practices for millenia, and while this has been documented\n' +
            'for a long time, it is only in recent years that these facts are being recognized.  Even the forests that John Muir\n' +
            'so famously loved were largely the product of the First Peoples of California.\n' +
            'In permaculture you start with the soil.  Other than water, it\'s the most important element in a successful\n' +
            'project.  You fill the soil with plants that fill a variety of roles. The plants complement each other, sometimes in\n' +
            'very complicated ways. Then you care for the plants in a way that takes care of the soil and is in keeping with the\n' +
            'role the plant fulfills.  Permaculture works *with* the plants, not against them.  If something isn\'t\n' +
            'happy, you don\'t fight it.  You move on and try something else.\n'
        }
    ];

    models.Article.bulkCreate(articles);
}

function preloadGroups(models) {
    var groups = [
        {
            id: 'aronia',
            name: 'Chokeberries',
            description: '',
            body: ''
        },
        {
            id: 'blueberry',
            name: 'Blueberries',
            description: '',
            body: ''
        },
        {
            id: 'currant',
            name: 'Currants',
            description: '',
            body: ''
        },
        {
            id: 'goji',
            name: 'Goji Berries',
            description: '',
            body: ''
        },
        {
            id: 'elaeagnus',
            name: 'Silverberries',
            description: '',
            body: ''
        },
        {
            id: 'seaberry',
            name: 'Seaberries',
            description: '',
            body: ''
        },
        {
            id: 'mahonia',
            name: 'Mahonia ',
            description: '',
            body: 'Spiny, evergreen foliage, winter flowers.  The dark blue berries are edible, high in vitamin C.'
        },
        {
            id: 'blackberry',
            name: 'Blackberries',
            description: '',
            body: ''
        },
        {
            id: 'gooseberry',
            name: 'Gooseberries',
            description: '',
            body: ''
        },
        {
            id: 'honeyberry',
            name: 'Honeyberries',
            description: '',
            body: ''
        },
        {
            id: 'honeysuckle',
            name: 'Honeysuckle',
            description: '',
            body: ''
        },
        {
            id: 'raspberry',
            name: 'Raspberries',
            description: '',
            body: ''
        },
        {
            id: 'elderberry',
            name: 'Elderberries',
            description: '',
            body: ''
        },
        {
            id: 'ceanothus',
            name: 'Ceanothus',
            description: '',
            body: 'Tiny, fragrant flowers in dense clusters. Preferred forage for many pollinator species.'
        },
        {
            id: 'apple',
            name: 'Apples',
            description: '',
            body: ''
        },
        {
            id: 'pear',
            name: 'Pears',
            description: '',
            body: ''
        },
        {
            id: 'plum',
            name: 'Plums',
            description: '',
            body: ''
        },
        {
            id: 'walnut',
            name: 'Walnuts',
            description: '',
            body: ''
        },
        {
            id: 'corylus',
            name: 'Hazelnuts',
            description: '',
            body: ''
        },
        {
            id: 'borage',
            name: 'Borages',
            description: '',
            body: 'Leaf hairs can cause skin irritation, itching or rashes in some individuals.'
        },
        {
            id: 'mint',
            name: 'Mint',
            description: '',
            body: ''
        }
    ];

    models.Group.bulkCreate(groups);
}

function preloadPlants(models) {
    var plants = [
        {
            id: 'aronia',
            name: 'Aronia',
            group: 'aronia',
            description: '',
            body: ''
        },
        {
            id: 'blackberry_apache',
            name:'Apache thornless blackberry',
            group: 'blackberry',
            description: '',
            body: '*in progress*'
        },
        {
            id: 'blueberry_bluecrop',
            name: 'Northland Blueberry',
            group: 'blueberry',
            description: '',
            body: ''
        },
        {
            id: 'blueberry_chandler',
            name: 'Chandler Blueberry',
            group: 'blueberry',
            description: '',
            body: ''
        },
        {
            id: 'blueberry_misty',
            name: 'Blueberry \'Misty\'',
            group: 'blueberry',
            description: '',
            body: ''
        },
        {
            id: 'blueberry_northland',
            name: 'Blueberry \'Northland\'',
            group: 'blueberry',
            description: '',
            body: ''
        },
        {
            id: 'blueberry_olympia',
            name: 'Olympia Blueberry',
            group: 'blueberry',
            description: '',
            body: ''
        },
        {
            id: 'blueberry_spartan',
            name: 'Spartan Blueberry',
            group: 'blueberry',
            description: '',
            body: ''
        },
        {
            id: 'blueberry_sunshine',
            name: 'Sunshine Blueberry',
            group: 'blueberry',
            description: '',
            body: ''
        },
        {
            id: 'currant_white_imperial',
            name: 'White Imperial Currant',
            group: 'currant',
            description: '',
            body: ''
        },
        {
            id: 'currant_black_titania',
            name: 'Titania Black Currant',
            group: 'currant',
            description: '',
            body: ''
        },
        {
            id: 'jostaberry',
            name: 'Jostaberry',
            group: 'gooseberry',
            description: '',
            body: ''
        },
        {
            id: 'goji',
            name: 'Goji berry',
            group: 'goji',
            description: '',
            body: ''
        },
        {
            id: 'goji_crimson',
            name: 'Crimson Star Goji berry',
            group: 'goji',
            description: '',
            body: ''
        },
        {
            id: 'gooseberry_invicta',
            name: 'Invicta Gooseberry',
            group: 'gooseberry',
            description: '',
            body: ''
        },
        {
            id: 'gooseberry_welcome',
            name: 'Welcome Gooseberry',
            group: 'gooseberry',
            description: '',
            body: ''
        },
        {
            id: 'goumi_red_gem',
            name: 'Red Gem Goumi Berry',
            group: 'elaeagnus',
            description: '',
            body: ''
        },
        {
            id: 'honeyberry_blue_moon',
            name: 'Honeyberry \'Blue Moon\'',
            group: 'honeyberry',
            description: '',
            body: ''
        },
        {
            id: 'honeyberry_blue_pagoda',
            name: 'Honeyberry \'Blue Pagoda\'',
            group: 'honeyberry',
            description: '',
            body: ''
        },
        {
            id: 'honeyberry_blue_velvet',
            name: 'Honeyberry \'Blue Velvet\'',
            group: 'honeyberry',
            description: '',
            body: ''
        },
        {
            id: 'honeysuckle_blue_pacific',
            name: 'Blue Pacific Honeysuckle',
            group: 'honeysuckle',
            description: '',
            body: ''
        },
        {
            id: 'honeysuckle_himalayan',
            name: 'Himalayan Honeysuckle',
            group: 'honeysuckle',
            description: '',
            body: ''
        },
        {
            id: 'raspberry_golden',
            name: 'Golden raspberry',
            group: 'raspberry',
            description: '',
            body: ''
        },
        {
            id: 'seaberry',
            name: 'Seaberry',
            group: 'seaberry',
            description: '',
            body: ''
        },
        {
            id: 'seaberry_golden',
            name: 'Golden Sweet Seaberry',
            group: 'seaberry',
            description: '',
            body: ''
        },
        {
            id: 'elderberry_samdal',
            name: 'S Vigra \'Samdal\'',
            group: 'elderberry',
            description: '',
            body: ''
        },
        {
            id: 'oregon_grape_low',
            name: 'low Oregon grape',
            group: 'mahonia',
            description: '',
            body: ''
        },
        {
            id: 'ceanothus',
            name: 'California Lilac',
            group: 'ceanothus',
            description: '',
            body: ''
        },
        {
            id: 'apple_a8502s',
            name: 'Grafted Apple (A8502S)',
            group: 'apple',
            description: 'Grafted Apple Tree, Cox and Pristine',
            body: ''
        },
        {
            id: 'apple_chehalis',
            name: 'Chehalis Apple',
            group: 'apple',
            description: '',
            body: ''
        },
        {
            id: 'apple_king_edward',
            name: 'King Edward VII Apple',
            group: 'apple',
            description: '',
            body: ''
        },
        {
            id: 'apple_pristine',
            name: 'Pristine Apple',
            group: 'apple',
            description: '',
            body: ''
        },
        {
            id: 'pear_blakes_pride',
            name: 'Pear \'Blake\'s Pride\'',
            group: 'pear',
            description: '',
            body: ''
        },
        {
            id: 'pear_highland',
            name: 'Highland Pear',
            group: 'pear',
            description: '',
            body: ''
        },
        {
            id: 'pear_spalding',
            name: 'Spalding Pear',
            group: 'pear',
            description: '',
            body: ''
        },
        {
            id: 'pear_yoinashi',
            name: 'Asian Pear (Yoinashi)',
            group: 'pear',
            description: '',
            body: ''
        },
        {
            id: 'plum_grafted',
            name: 'Grafted Plum (C3454)',
            group: 'plum',
            description: '',
            body: ''
        },
        {
            id: 'plum_italian',
            name: 'Italian Plum',
            group: 'plum',
            description: '',
            body: ''
        },
        {
            id: 'plum_laxton_early',
            name: 'Early Laxton Plum',
            group: 'plum',
            description: '',
            body: ''
        },
        {
            id: 'plum_methley',
            name: 'Methley Plum',
            group: 'plum',
            description: '',
            body: ''
        },
        {
            id: 'plum_shiro',
            name: 'Shiro Plum',
            group: 'plum',
            description: '',
            body: ''
        },
        {
            id: 'olive_autumn',
            name: 'Autumn Olive',
            group: 'elaeagnus',
            description: '',
            body: ''
        },
        {
            id: 'walnut_butternut',
            name: 'Butternut tree',
            group: 'walnut',
            description: '',
            body: ''
        },
        {
            id: 'walnut_heartnut',
            name: 'Heartnut tree',
            group: 'walnut',
            description: '',
            body: ''
        },
        {
            id: 'corylus_unknown',
            name: 'Filbert',
            group: 'corylus',
            description: 'Filbert (Hazelnut) plant',
            body: ''
        },
        {
            id: 'spearmint',
            name: 'Spearmint',
            group: 'mint',
            description: '',
            body: ''
        },
        {
            id: 'comfrey',
            name: 'Comfrey',
            group: 'borage',
            description: '',
            body: ''
        }
    ];

    models.Plant.bulkCreate(plants);
}
