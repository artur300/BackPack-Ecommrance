 
 
  export function getproducts(productId)
 {
    let matchingProducts;
        Products_arr.forEach((productItem)=>
        {
            if(productItem.id===productId)
            {
                matchingProducts=productItem;
            }
        });

        return matchingProducts;
 }
 
 export const Products_arr = [
    { rating: 3, img: 'pic/backpack1.png', name: 'Blue Collage Medium Backpack', price: 5099, id:"1ffa4da2-86c5-11ee-b9d1-0242ac120002",keywords:["bluex", "medium", "college"]},
    { rating: 5, img: 'pic/backpack2.png', name: 'Red Hiking Medium Backpack', price: 7599,id:"1ffa5130-86c5-11ee-b9d1-0242ac120002",keywords:["red", "medium", "hiking"] },
    { rating: 4, img: 'pic/backpack3.png', name: 'Black Hiking Large Backpack', price: 8099,id:"1ffa5298-86c5-11ee-b9d1-0242ac120002",keywords:["black", "large", "hiking"] },
    { rating: 2, img: 'pic/backpack4.png', name: 'Green Hiking Large Backpack', price: 6599,id:"1ffa53b0-86c5-11ee-b9d1-0242ac120002",keywords:["green", "large", "hiking"] },


    { rating: 2, img: 'pic/backpack5.png', name: 'Green Medium Hiking Backpack ', price: 8099,id:"1ffa58b0-86c5-11ee-b9d1-0242ac120002",keywords:["green", "medium", "hiking"] },
    { rating: 2, img: 'pic/backpack6.png', name: 'Yellow Collage Medium Backpack', price: 1399,id:"1ffa59f0-86c5-11ee-b9d1-0242ac120002",keywords:["yellow", "medium", "college"] },
    { rating: 5, img: 'pic/backpack7.png', name: 'Gray Collage Medium Backpack', price: 3099, id:"1ffa5b1c-86c5-11ee-b9d1-0242ac120002",keywords:["gray", "medium", "college"]},
    { rating: 3, img: 'pic/backpack8.png', name: 'Beige Collage Small Backpack', price: 15099,id:"1ffa5c52-86c5-11ee-b9d1-0242ac120002",keywords:["beige", "small", "college"] },


    { rating: 4, img: 'pic/backpack9.png', name: 'Black Collage Small Backpack', price: 4599,id:"1ffa5d74-86c5-11ee-b9d1-0242ac120002",keywords:["black", "small", "college"] },
    { rating: 2, img: 'pic/backpack10.png', name: 'Black Hiking extra Large Backpack', price: 3099,id:"1ffa5eb4-86c5-11ee-b9d1-0242ac120002",keywords:["black", "extra large", "hiking"] },
    { rating: 5, img: 'pic/backpack12.png', name: 'Olive Collage Medium Backpack', price: 1399,id:"1ffa6468-86c5-11ee-b9d1-0242ac120002",keywords:["olive", "medium", "college"] },
    { rating: 5, img: 'pic/backpack13.png', name: 'Green Hiking Large Backpack', price: 3099, id:"1ffa65a8-86c5-11ee-b9d1-0242ac120002",keywords:["green", "large", "hiking"]},


    { rating: 3, img: 'pic/backpack15.png', name: 'Blue Collage Medium Backpack', price: 4599,id:"1ffa6814-86c5-11ee-b9d1-0242ac120002",keywords:["blue","medium","college"] },
    { rating: 2, img: 'pic/backpack18.png', name: 'Black Hiking Large Backpack', price: 1399,id:"1ffa6bac-86c5-11ee-b9d1-0242ac120002",keywords:["black","large","hiking"] },
    { rating: 1, img: 'pic/backpack19.png', name: 'Black Hiking extra Large Backpack', price: 3099, id:"1ffa70c0-86c5-11ee-b9d1-0242ac120002",keywords:["black","extra large","hiking"]},
    { rating: 2, img: 'pic/backpack20.png', name: 'Orange Hiking extra Large Backpack', price: 15099,id:"1ffa7214-86c5-11ee-b9d1-0242ac120002",keywords:["orange","extra large","hiking"] },


    { rating: 5, img: 'pic/backpack22.png', name: 'Green Collage Medium Backpack', price: 3099,id:"1ffa7480-86c5-11ee-b9d1-0242ac120002",keywords:["green","medium","college"] },
    { rating: 1, img: 'pic/backpack24.png', name: 'Red Hiking Large Backpack', price: 1399,id:"1ffa76e2-86c5-11ee-b9d1-0242ac120002",keywords:["red","large","hiking"] },
    { rating: 5, img: 'pic/backpack25.png', name: 'Olive Military Medium Backpack', price: 3099, id:"1ffa77f0-86c5-11ee-b9d1-0242ac120002",keywords:["olive","medium","military"]},
    { rating: 1, img: 'pic/backpack27.png', name: 'Black Collage Medium Backpack', price: 4599,id:"1ffa7fb6-86c5-11ee-b9d1-0242ac120002",keywords:["black","medium","college"] },
    

    { rating: 4, img: 'pic/backpack29.png', name: 'Orange Collage Medium Backpack', price: 13099,id:"1ffa8222-86c5-11ee-b9d1-0242ac120002",keywords:["orange","medium","college"] },
    { rating: 3, img: 'pic/backpack30.png', name: 'Orange Hiking Medium Backpack', price: 1399,id:"1ffa843e-86c5-11ee-b9d1-0242ac120002",keywords:["orange","medium","hiking"] },
    { rating: 5, img: 'pic/backpack31.png', name: 'Black Hiking Medium Backpack', price: 3099, id:"1ffa860a-86c5-11ee-b9d1-0242ac120002",keywords:["black","Medium","hiking"]},
    { rating: 1, img: 'pic/backpack32.png', name: 'Olive Collage Medium Backpack', price: 15099,id:"1ffa8786-86c5-11ee-b9d1-0242ac120002",keywords:["olive","medium","college"] },


    { rating: 2, img: 'pic/backpack33.png', name: 'Olive Military Medium Backpack', price: 4599,id:"1ffa8934-86c5-11ee-b9d1-0242ac120002",keywords:["olive","medium","military"] },
    { rating: 4, img: 'pic/backpack35.png', name: 'Black Hiking Large Backpack', price: 13099,id:"1ffa90be-86c5-11ee-b9d1-0242ac120002",keywords:["black","large","hiking"] },
    { rating: 4, img: 'pic/backpack36.png', name: 'Black Collage Small Backpack', price: 1399,id:"1ffa91ea-86c5-11ee-b9d1-0242ac120002",keywords:["black","small","college"] },
    { rating: 4, img: 'pic/backpack37.png', name: 'Black Hiking Large Backpack', price: 3099, id:"1ffa9302-86c5-11ee-b9d1-0242ac120002",keywords:["black","large","hiking"]},
   

    { rating: 1, img: 'pic/backpack42.png', name: 'Olive Military extra Large Backpack', price: 1399,id:"1ffa9b04-86c5-11ee-b9d1-0242ac120002",keywords:["olive","extra Large","military"] },
    { rating: 5, img: 'pic/backpack43.png', name: 'Green Hiking extra Large Backpack', price: 3099, id:"1ffa9c08-86c5-11ee-b9d1-0242ac120002",keywords:["green","extra Large","hiking"]},
    { rating: 3, img: 'pic/backpack44.png', name: 'Green Hiking Medium Backpack', price: 15099,id:"1ffa9cee-86c5-11ee-b9d1-0242ac120002",keywords:["green","medium","hiking"] },
    { rating: 2, img: 'pic/backpack45.png', name: 'Olive Military Medium Backpack', price: 4599,id:"1ffa9de8-86c5-11ee-b9d1-0242ac120002",keywords:["olive","medium","military"] },


    { rating: 3, img: 'pic/backpack46.png', name: 'Olive Military Medium Backpack', price: 3099,id:"1ffa9ec4-86c5-11ee-b9d1-0242ac120002",keywords:["olive","medium","military"] },
    { rating: 1, img: 'pic/backpack47.png', name: 'Olive Military Large Backpack', price: 13099,id:"1ffa9ff0-86c5-11ee-b9d1-0242ac120002",keywords:["olive","large","military"] },
    { rating: 1, img: 'pic/backpack48.png', name: 'Olive Military Medium Backpack', price: 1399,id:"1ffaa0e0-86c5-11ee-b9d1-0242ac120002",keywords:["olive","medium","military"] },
    { rating: 4, img: 'pic/backpack11.png', name: 'Black Hiking extra Large Backpack', price: 13099,id:"1ffa5fea-86c5-11ee-b9d1-0242ac120002",keywords:["black","extra large","hiking"] },
   
];