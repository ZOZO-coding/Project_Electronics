const Item = require('../models/Item')

const fs = require('fs')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

mongoose.connection.once("open", () => {
    console.log("connected to mongodb")
})

const itemList = JSON.parse(fs.readFileSync(`${__dirname}/seed.json`, 'utf-8'))

const deleteDatabase = async () => {
    try {
        await Item.deleteMany()
    } catch (error) {
        console.log(error);
    } finally {
        console.log('deletion complete');
    }
}

const importDatabase = async () => {
    try {
        await Item.create(itemList)
    } catch (error) {
        console.log(error)
    } finally {
        console.log('insertion complete');
    }
}

if (process.argv[2] === '--delete') {
    deleteDatabase()
} else if (process.argv[2] === '--import') {
    importDatabase()
}

// run in command line
// node ./backend/seed/importData.js --delete or --import