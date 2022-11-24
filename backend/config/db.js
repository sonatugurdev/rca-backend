const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://admin:admin12345Beyyoglu@cluster0.4voy9.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'beyyoglu-database',
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
