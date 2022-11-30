//DB
const spoti1 = 'spoti1';

//Mongoose Connection
mongoose.connect(`mongodb://localhost:27017/${spoti1}`)
        .then(() => {
            console.log("Connection Open")
        })
        .catch(err => console.log(err))






        