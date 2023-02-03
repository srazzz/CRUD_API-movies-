// each row = document ..all documents are under collection
const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
    movie_title: {
        type: String,
        required: true
    },

    release_date: {
        type: String,
        // required: true
    },
    genre: {
        type: String,
        // required: true,
    },
    mpaa_rating: {
        type: String,
        // required: true
    },
    total_gross: {
        type: String,
        // required: true
    },
    inflation_adjusted_gross: {
        type: String,
        // required: true
    }

    

})

module.exports = mongoose.model('disney_movies', moviesSchema)