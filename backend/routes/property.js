// In routes/property.js or wherever appropriate

const {Router} = require("express");
const router = Router();
const {Sell} = require("../db")


router.get('/:id', async (req, res) => {
    
    const property = await Sell.findById(req.params.id);
    if (!property) return res.status(404).json({ message: "Property not found" });
    res.json(property);
});

module.exports = router;
  