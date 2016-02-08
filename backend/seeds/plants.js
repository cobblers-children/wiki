exports.seed = function (knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('plants').del(),

        // Inserts seed entries
        knex('plants').insert([
            {
                id: 'aronia',
                name: 'Aronia',
                group: 'aronia',
                description: '',
                body: ''
            },
            {
                id: 'blackberry_apache',
                name: 'Apache thornless blackberry',
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
        ])
    )
};
