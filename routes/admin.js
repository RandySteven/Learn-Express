const express = require('express');

const router = express.Router();

// :/admin/home
router.use('/home', (req, res)=>{
    res.json({path: '/admin/home', message:'Welcome admin home page', data:null});
});

// :/admin/list
router.use('/list', (req, res)=>{
    res.json({path: '/admin/list', message:'Welcome admin list page', data:null});
});

module.exports = router;