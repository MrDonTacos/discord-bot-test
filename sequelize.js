require('custom-env').env(true)

const sequelize = new Sequelize(
    process_env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: 'mssql',
	logging: false,
});