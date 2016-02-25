// Update with your config settings.

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            host: 'postgres',
            database: 'wiki',
            user: 'wiki',
            password: 'notasecret'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    staging: {
        client: 'postgresql',
        connection: {
            host: process.env.POSTGRES_HOST,
            database: 'wiki',
            user: 'wiki',
            password: process.env.POSTGRES_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    },

    production: {
        client: 'postgresql',
        connection: {
            host: process.env.POSTGRES_HOST,
            database: 'wiki',
            user: 'wiki',
            password: process.env.POSTGRES_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations'
        }
    }
};
