// Update with your config settings.

module.exports = {

    development: {
        client: 'postgresql',
        connection: {
            host: '192.168.99.100',
            database: 'wiki',
            user: 'postgres',
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

    staging: {
        client: 'postgresql',
        connection: {
            host: 'postgres',
            database: 'wiki',
            user: 'postgres',
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
            host: 'postgres',
            database: 'wiki',
            user: 'postgres',
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
