// require('dotenv').config();  
// require('./config/database');

// require('dotenv').config();  
// require('./config/database');
// const Restaurant = require('./models/restaurant');


// const dishSchema = {
//   breakfast: [
//     {
//       Item: 'Egg Ramen' ,
//       category: 'Breakfast' ,
//       description: ' Japanese soft-boiled egg marinated with Ramen' ,
//       price: 10.99
//     },
//     {
//       Item: 'Pancakes with Maple Syrup' ,
//       category: 'Breakfast' ,
//       description: 'Fluffy pancakes served with maple syrup and butter' ,
//       price: 8.99
//     },
//     {
//       Item: 'Vegetarian Omelette' ,
//       category: 'Breakfast' ,
//       description: 'Omelette filled with vegetables and cheese, served with toast' ,
//       price: 9.99
//     }
//   ],
//   lunch: [
//     {
//       Item: 'Chicken Caesar Salad' ,
//       category: 'Lunch' ,
//       description: 'Fresh romaine lettuce topped with grilled chicken, croutons, parmesan cheese, and Caesar dressing' ,
//       price: 12.99
//     },
//     {
//       Item: 'Grilled Vegetable Panini' ,
//       category: 'Lunch' ,
//       description: 'Grilled vegetables with pesto and mozzarella cheese on ciabatta bread' ,
//       price: 11.99
//     },
//     {
//       Item: 'Fish Tacos' ,
//       category: 'Lunch' ,
//       description: 'Grilled fish tacos with cabbage slaw, avocado, and chipotle mayo' ,
//       price: 14.99
//     }
//   ],
//   dinner: [
//     {
//         Item: 'Shrimp Scampi Pasta' ,
//         category: 'Dinner' ,
//         description: 'Pasta tossed with garlic, white wine, lemon juice, parsley, and shrimp' ,
//         price: 18.99
//       },
//     {
//       Item: 'Filet Mignon' ,
//       category: 'Dinner' ,
//       description: 'Tender filet mignon steak served with mashed potatoes and steamed vegetables' ,
//       price: 29.99
//     },
//     {
//       Item: 'Vegetable Curry' ,
//       category: 'Dinner' ,
//       description: 'Assorted vegetables cooked in a flavorful curry sauce, served with rice' ,
//       price: 16.99
//     }
//   ]
// };

// // Seed restaurant data
// const seedRestaurants = async () => {
//   try {
//     const restaurants = [
//       {
//         name: 'Wagamama',
//         location: 'Manama',
//         menu: [dishSchema.breakfast[0],dishSchema.lunch[0],dishSchema.dinner[0]]  
//       },
//       {
//         name: 'Paul',
//         location: 'Seef',
//         menu: [dishSchema.breakfast[1],dishSchema.lunch[1],dishSchema.dinner[1]] 
//       },
//       {
//         name: 'Cafe Lilou',
//         location: 'Juffair',
//         menu: [dishSchema.breakfast[2],dishSchema.lunch[2],dishSchema.dinner[2]] 
//       }
//     ];

//     // Saved each restaurant to the database
//     for (const restaurantData of restaurants) {
//       const restaurant = new Restaurant(restaurantData);
//       await restaurant.save();
//       console.log('Restaurant seeded:', restaurant);
//     }
//   } catch (err) {
//     console.error('Error seeding restaurants:', err);
//   }
// };

// // Call the function to seed restaurants
// seedRestaurants();

