import mongoose from 'mongoose';

export const schema = {
  address: {
     building: String,
     coord: [{
         type:Number,
         required: 'You must supply coordinates'
      } ],

     street:String ,
     zipcode: String
  },
  borough: {
    type: String,
    required:[true, 'Restaurant must have a borough'],
  },
    cuisine: {
    type: String,
    required:[true, 'Restaurant must have a cuisine'],
  },
  grades: [{
         date: {
           type: Date,
           required:[true, 'Grade for a restaurant must have a Date'],
         },
       grade: String,
       score: Number
     }
  ],
  name: {
  type: String,
  required:[true, 'Restaurant must have a name'],
},
  restaurant_id: {
  type: String,
  required:[true, 'Restaurant must have an ID'],
}

};

const restaurantSchema = new mongoose.Schema(schema);

export const Restaurant = mongoose.model('restaurant', restaurantSchema);
