const sequelize = require('../db.js')
const {DataTypes} = require('sequelize')

const User = sequelize.define( 'user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})


const Entry = sequelize.define( 'entry', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    dateEntry: {type: DataTypes.DATE},
})

const Info = sequelize.define( 'info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    firstname: {type: DataTypes.STRING, allowNull: false},
    lastname: {type: DataTypes.STRING, allowNull: false},
    patronymic: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
})

const Service = sequelize.define( 'service', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
})


User.hasMany(Entry)
Entry.belongsTo(User)

User.hasMany(Info)
Info.belongsTo(User)

Info.hasMany(Entry)
Entry.belongsTo(Info)

Service.hasMany(Entry)
Entry.belongsTo(Service)




module.exports = {
    User,
    Entry,
    Info,
    Service
}