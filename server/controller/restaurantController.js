const Restaurant = require('../model/Restaurant');


// Create Restaurant
exports.createRestaurant = async (req, res, next) => {
    const images = req.files.map((file) => {
        return file.filename
    })
    try {
        const restaurant = await Restaurant.create({
            name: req.body.name,
            city: req.body.city,
            phone: req.body.phone,
            address: req.body.address,
            images: images,
        });

        res.status(200).json({
            status: "success",
            data: restaurant
        });
    } catch (err) {
        console.log(err);
    }
};