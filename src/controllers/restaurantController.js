const axios = require('axios');
const Transaction = require('../models/Transaction');

const searchRestaurants = async (req, res) => {
  const { location, latitude, longitude } = req.body;

  let query = {};
  if (location) {
    query.location = location;
  } else if (latitude && longitude) {
    query.latitude = latitude;
    query.longitude = longitude;
  }


  try {
    const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
      headers: {
        Authorization: `Bearer ${process.env.YELP_API_KEY}`,
      },
      params: {
        limit: 5,
        ...query,
      },
    });

    // Enviar la respuesta antes de guardar la transaccion
    res.json(response.data.businesses);

    // Guardar la transacción en MongoDB despues de enviar la respuesta
    const transaction = new Transaction({
      userId: req.user.userId,
      query,
      result: response.data.businesses,
    });

    await transaction.save();

  } catch (error) {
    console.error('Error fetching restaurants:', error.message);
    res.status(400).json({ error: 'Error fetching restaurants', details: error.message });
  }
};

module.exports = { searchRestaurants };

