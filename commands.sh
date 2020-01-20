sequelize model:create --name Clients --attributes email:string
sequelize db:migrate
sequelize db:migrate:undo
