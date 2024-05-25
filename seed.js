require('dotenv').config();  
require('./config/database');

require('dotenv').config();  
require('./config/database');
const Restaurant = require('./models/restaurant');




// Seed restaurant data
const seedRestaurants = async () => {
  try {
    const restaurants = [
      {
        name: 'Wagamama',
        location: 'Manama',
        menu: [dishSchema.breakfast[0],dishSchema.lunch[0],dishSchema.dinner[0]]  
      },
      {
        name: 'Paul',
        location: 'Seef',
        menu: [dishSchema.breakfast[1],dishSchema.lunch[1],dishSchema.dinner[1]] 
      },
      {
        name: 'Cafe Lilou',
        location: 'Juffair',
        menu: [dishSchema.breakfast[2],dishSchema.lunch[2],dishSchema.dinner[2]] 
      }
    ];

    // Saved each restaurant to the database
    for (const restaurantData of restaurants) {
      const restaurant = new Restaurant(restaurantData);
      await restaurant.save();
      console.log('Restaurant seeded:', restaurant);
    }
  } catch (err) {
    console.error('Error seeding restaurants:', err);
  }
};

// Call the function to seed restaurants
seedRestaurants();

