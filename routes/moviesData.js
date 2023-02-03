// Both of them are almost similar except findOneAndRemove uses findAndModify with remove flag and time complexity will be a bit higher compare to findOneAndDelete because you are doing an update. Delete are always faster.



const express = require('express')
const router = express.Router()
const Data = require('../models/schema')
// Get request READ OPERATION
router.get('/', async (req, res) => {
    try {
        const data = await Data.collection.find().toArray()
        // console.log(data)
        res.json(data)
        // sending json file of response
    }
    catch (err) {
        res.send('Error' + err)
    }

    // console.log('get request ')
})

//READ OPERATION BY ID
router.get('/:id', async (req, res) => {
    try {
        const single_data = await Data.findOne({ _id: req.params.id })
        res.json(single_data)
        // sending json file of response
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }

    // console.log('get request ')
})

router.post('/', (req, res) => {
    try {
        const data = req.body
        Data.collection.insertOne({ movie_title: req.body.movie_title, release_date: req.body.release_date, genre: req.body.genre, mpaa_rating: req.body.mpaa_rating, total_gross: req.body.mpaa_Rating, inflation_adjusted_gross: req.body.inflation_adjusted_gross });
        res.status(201).json(data)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

// router.patch('/:id', async (req, res) => {
//     try{
//         Data.findOneAndUpdate(
//             { _id: req.params.id },
//             { $set: { movie_title: req.body.movie_title, release_date: req.body.release_date, genre: req.body.genre, mpaa_rating: req.body.mpaa_rating, total_gross: req.body.total_gross, inflation_adjusted_gross: req.body.inflation_adjusted_gross } },
//             { new: true },
//             function (err, result) {
//             if (!err) {

//                 res.status().send(result);
//             }
//     }
//     catch(err){
//         res.status(400).json({ message: error.message })
//     }
// });




// UPDATE OPERATION
router.patch('/:id', async (req, res) => {
    try {
        // const id = req.params.id;
        // const updatedData = req.body;
        // const options = { new: true };

        const result = await Data.findOneAndUpdate(
            { _id: req.params.id },
                        { $set: { movie_title: req.body.movie_title, release_date: req.body.release_date, genre: req.body.genre, mpaa_rating: req.body.mpaa_rating, total_gross: req.body.total_gross, inflation_adjusted_gross: req.body.inflation_adjusted_gross } },
                        { new: true }
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


// DELETE OPERATION
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const removed_data = await Data.findByIdAndDelete(id)
        res.json(removed_data)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


module.exports = router