exports.seed = function (knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('groups').del(),

        // Inserts seed entries
        knex('groups').insert([
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
            ]
        )
    );
};
