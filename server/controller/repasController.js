const Repas = require ('../model/Repas');

// Create Repas
exports.createRepas = async(req, res) => {
    const images = req.files.map((file) => {
        return file.filename
    })
    try {
        const repas = await Repas.create({
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            images: images,
            restaurant : req.body.restaurant,
        });

        res.status(200).json({
            status: "success",
            data: repas
        });
    } catch (err) {
        console.log(err);
    }
};