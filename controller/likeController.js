const userModel = require('../model/userModel');
const itemModel = require('../model/itemModel');
const likeModel = require('../model/likeModel');
const mongoose = require('mongoose');


const createLike = async (req, res) => {
    try {
        const { count } = req.body
        const getItem = await itemModel.findById(req.params.item)
        const addLike = new likeModel({ count })
        
        addLike.item = getItem
        addLike.save() 

        getItem.like.push(mongoose.Types.ObjectId(addLike._id))
        getItem.save()

        res.status(201).json({message: "add Like", data: addLike})
    } catch (error) {
        res.status(404).json({
            message: error.message,
        })
    }
}
// const createLike = async (req, res) => {
//     try {
        
//     } catch (error) {
//         res.status(404).json({
//             message: error.message,
//         })
//     }
// }