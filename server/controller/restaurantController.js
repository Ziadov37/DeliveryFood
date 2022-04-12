const Restaurant = require('../model/Restaurant');


// Create Restaurant
exports.createRestaurant = async (req, res, next) => {
    const images = req.files.map((file) => {
        return file.filename
    })

    const validateRestaurentname = async name => {
        let restaurant = await Restaurant.findOne({name});
        return restaurant ? false : true;
    };
    
    try {
        let restaurantNameNotTaken = await validateRestaurentname(req.body.name);
        if(!restaurantNameNotTaken){
            return res.status(400).json({
                message : "Restaurent name is already taken",
                success: false
            });
        }
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