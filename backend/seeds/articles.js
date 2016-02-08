exports.seed = function (knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('articles').del(),

        // Inserts seed entries
        knex('articles').insert([
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
        ])
    );
};
