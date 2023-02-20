const express = require('express')
const router = express.Router()
const axios = require('axios')


const url = 'https://jsonplaceholder.typicode.com/posts'


router.get('/', (req, res) => {
    res.render('index')
})

router.get('/post', async (req, res) => {
    const response = await axios.get(url)
    
    res.render('post', {
        post : response.data
    })
})


module.exports = router;