
        let currentUser = null;
        let allRecipes = [];
        let filteredRecipes = [];
        let currentCategory = 'all';
        const ADMIN_EMAIL = 'rehan94@gmail.com';
        const ADMIN_PASSWORD = 'coderrehan';

        const categories = [
            { name: 'all', emoji: '🍽️', label: 'All Recipes' },
            { name: 'Italian', emoji: '🍝', label: 'Italian' },
            { name: 'Indian', emoji: '🍛', label: 'Indian' },
            { name: 'Chinese', emoji: '🍲', label: 'Chinese' },
            { name: 'Mexican', emoji: '🌮', label: 'Mexican' },
            { name: 'Japanese', emoji: '🍱', label: 'Japanese' },
            { name: 'Thai', emoji: '🍜', label: 'Thai' },
            { name: 'American', emoji: '🍔', label: 'American' },
            { name: 'French', emoji: '🥐', label: 'French' },
            { name: 'Greek', emoji: '🥙', label: 'Greek' },
            { name: 'Korean', emoji: '🍲', label: 'Korean' },
            { name: 'Desserts', emoji: '🍰', label: 'Desserts' },
            { name: 'Healthy', emoji: '🥗', label: 'Healthy' },
            { name: 'Breakfast', emoji: '🥞', label: 'Breakfast' }
        ];
const sampleRecipes = [
  
  {"id":"it-1", "name":"Margherita Pizza", "category":"Italian", "image":"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500", "time":"25 min", "ingredients":["Pizza dough","Tomato sauce","Mozzarella"], "instructions":["Roll dough","Add sauce & cheese","Bake"], "addedBy":"system"},
  {"id":"it-2", "name":"Lasagna", "category":"Italian", "image":"https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=500", "time":"60 min", "ingredients":["Lasagna noodles","Meat sauce","Cheese"], "instructions":["Layer noodles","Add sauce & cheese","Bake"], "addedBy":"system"},
  {"id":"it-3", "name":"Spaghetti Carbonara", "category":"Italian", "image":"https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500", "time":"20 min", "ingredients":["Spaghetti","Eggs","Bacon"], "instructions":["Cook pasta","Fry bacon","Mix eggs & pasta"], "addedBy":"system"},
  {"id":"it-4", "name":"Risotto", "category":"Italian", "image":"https://plus.unsplash.com/premium_photo-1695240028448-9a8bf3e164f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Umlzb3R0b3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000", "time":"30 min", "ingredients":["Arborio rice","Broth","Onion"], "instructions":["Sauté onion","Add rice & broth","Stir till creamy"], "addedBy":"system"},
  {"id":"it-6", "name":"Gnocchi", "category":"Italian", "image":"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500", "time":"55 min", "ingredients":["Potatoes","Flour","Egg"], "instructions":["Boil potatoes","Mix with flour and egg","Shape and boil"], "addedBy":"system"},
  {"id":"it-7", "name":"Penne Arrabbiata", "category":"Italian", "image":"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500", "time":"20 min", "ingredients":["Penne","Tomatoes","Chili flakes"], "instructions":["Cook penne","Prepare spicy tomato sauce","Mix"], "addedBy":"system"},
  {"id":"it-8", "name":"Fettuccine Alfredo", "category":"Italian", "image":"https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500", "time":"18 min", "ingredients":["Fettuccine","Cream","Parmesan"], "instructions":["Cook pasta","Make cream sauce","Combine"], "addedBy":"system"},
  {"id":"it-9", "name":"Tiramisu", "category":"Italian", "image":"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500", "time":"20 min", "ingredients":["Ladyfingers","Mascarpone","Coffee"], "instructions":["Layer biscuits & cream","Chill","Dust with cocoa"], "addedBy":"system"},
  {"id":"it-10", "name":"Caprese Salad", "category":"Italian", "image":"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500", "time":"5 min", "ingredients":["Mozzarella","Tomato","Basil"], "instructions":["Slice ingredients","Layer neatly","Add olive oil"], "addedBy":"system"},

  
  {"id":"in-1","name":"Chicken Curry","category":"Indian","image":"https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=500","time":"40 min","ingredients":["Chicken","Curry spices","Onion"],"instructions":["Sauté onions","Add chicken & spices","Simmer"],"addedBy":"system"},
  {"id":"in-3","name":"Dal Makhani","category":"Indian","image":"https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500","time":"50 min","ingredients":["Lentils","Butter","Tomato"],"instructions":["Boil lentils","Make tomato masala","Mix & serve"],"addedBy":"system"},
  {"id":"in-4","name":"Biryani","category":"Indian","image":"https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500","time":"60 min","ingredients":["Rice","Chicken","Spices"],"instructions":["Layer rice and chicken","Cook together","Serve hot"],"addedBy":"system"},
  {"id":"in-5","name":"Butter Chicken","category":"Indian","image":"https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500","time":"35 min","ingredients":["Chicken","Tomato","Butter"],"instructions":["Marinate chicken","Simmer in tomato gravy","Add butter"],"addedBy":"system"},
  {"id":"in-6","name":"Aloo Gobi","category":"Indian","image":"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500","time":"30 min","ingredients":["Potato","Cauliflower","Spices"],"instructions":["Chop veggies","Cook with spices","Serve hot"],"addedBy":"system"},
  {"id":"in-7","name":"Paneer Tikka","category":"Indian","image":"https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500","time":"25 min","ingredients":["Paneer","Bell pepper","Yogurt"],"instructions":["Marinate","Skewer","Grill"],"addedBy":"system"},
  {"id":"in-8","name":"Samosa","category":"Indian","image":"https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500","time":"40 min","ingredients":["Potato filling","Pastry","Spices"],"instructions":["Prepare filling","Wrap in pastry","Deep fry"],"addedBy":"system"},
    {"id":"in-9","name":"Chole Bhature","category":"Indian","image":"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500","time":"45 min","ingredients":["Chickpeas","Flour","Spices"],"instructions":["Cook chickpeas","Make dough","Fry bhature"],"addedBy":"system"},

  {"id":"ch-1","name":"Kung Pao Chicken","category":"Chinese","image":"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500","time":"30 min","ingredients":["Chicken","Peanuts","Soy sauce"],"instructions":["Cook chicken","Stir-fry","Add sauce"],"addedBy":"system"},
  {"id":"ch-2","name":"Fried Rice","category":"Chinese","image":"https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500","time":"20 min","ingredients":["Rice","Eggs","Vegetables"],"instructions":["Cook rice","Stir-fry with veggies","Add eggs"],"addedBy":"system"},
  {"id":"ch-3","name":"Sweet and Sour Pork","category":"Chinese","image":"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500","time":"30 min","ingredients":["Pork","Peppers","Sweet sour sauce"],"instructions":["Fry pork","Stir-fry vegetables","Coat in sauce"],"addedBy":"system"},
  {"id":"ch-4","name":"Spring Rolls","category":"Chinese","image":"https://images.unsplash.com/photo-1563245372-f21724e3856d?w=500","time":"40 min","ingredients":["Pastry","Vegetables","Pork"],"instructions":["Add filling","Roll and seal","Fry"],"addedBy":"system"},
  {"id":"ch-5","name":"Mapo Tofu","category":"Chinese","image":"https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500","time":"25 min","ingredients":["Tofu","Ground pork","Spicy paste"],"instructions":["Cook pork","Add tofu","Simmer"],"addedBy":"system"},
  {"id":"ch-6","name":"Wonton Soup","category":"Chinese","image":"https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=500","time":"50 min","ingredients":["Wontons","Broth","Green onions"],"instructions":["Make wontons","Boil in broth","Garnish"],"addedBy":"system"},
  {"id":"ch-7","name":"Chow Mein","category":"Chinese","image":"https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500","time":"25 min","ingredients":["Noodles","Vegetables","Soy sauce"],"instructions":["Boil noodles","Stir-fry with veggies","Add sauce"],"addedBy":"system"},
  {"id":"ch-8","name":"Dim Sum","category":"Chinese","image":"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500","time":"90 min","ingredients":["Pastry","Meat","Seafood"],"instructions":["Add filling","Steam","Serve"],"addedBy":"system"},
  {"id":"ch-9","name":"Egg Drop Soup","category":"Chinese","image":"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500","time":"15 min","ingredients":["Broth","Eggs","Green onions"],"instructions":["Boil broth","Stir in eggs","Garnish"],"addedBy":"system"},
  {"id":"ch-10","name":"Szechuan Beef","category":"Chinese","image":"https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500","time":"30 min","ingredients":["Beef","Spicy sauce","Garlic"],"instructions":["Slice beef","Stir-fry","Add sauce"],"addedBy":"system"},

  
  {"id":"mx-1","name":"Tacos al Pastor","category":"Mexican","image":"https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=500","time":"30 min","ingredients":["Pork","Tortilla","Pineapple"],"instructions":["Marinate pork","Grill","Assemble tacos"],"addedBy":"system"},
  {"id":"mx-3","name":"Guacamole","category":"Mexican","image":"https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500","time":"10 min","ingredients":["Avocado","Onion","Lime"],"instructions":["Mash avocados","Add chopped onion","Mix with lime juice"],"addedBy":"system"},
  {"id":"mx-4","name":"Churros","category":"Mexican","image":"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500","time":"35 min","ingredients":["Flour","Butter","Sugar"],"instructions":["Make dough","Pipe and fry","Coat in sugar"],"addedBy":"system"},
  {"id":"mx-5","name":"Quesadillas","category":"Mexican","image":"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500","time":"12 min","ingredients":["Tortilla","Cheese","Chicken"],"instructions":["Fill tortilla with cheese","Fold","Cook on pan"],"addedBy":"system"},
  {"id":"mx-6","name":"Nachos","category":"Mexican","image":"https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500","time":"15 min","ingredients":["Tortilla chips","Cheese","Salsa"],"instructions":["Arrange chips","Add toppings","Bake"],"addedBy":"system"},
  {"id":"mx-7","name":"Fajitas","category":"Mexican","image":"https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=500","time":"30 min","ingredients":["Chicken","Bell peppers","Onion"],"instructions":["Sauté veggies","Cook chicken","Serve with tortilla"],"addedBy":"system"},
  {"id":"mx-9","name":"Tostadas","category":"Mexican","image":"https://images.unsplash.com/photo-1518047601542-79f18c655718?w=500","time":"20 min","ingredients":["Tortilla","Beans","Topping"],"instructions":["Fry tortilla","Spread beans","Add toppings"],"addedBy":"system"},
  {"id":"mx-10","name":"Burrito","category":"Mexican","image":"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500","time":"16 min","ingredients":["Tortilla","Rice","Beans"],"instructions":["Fill tortilla","Roll tightly","Heat through"],"addedBy":"system"},

 

  {"id":"jp-1","name":"Sushi Rolls","category":"Japanese","image":"https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500","time":"40 min","ingredients":["Sushi rice","Nori","Fish"],"instructions":["Prepare rice","Roll with nori & fish","Slice"],"addedBy":"system"},
  {"id":"jp-2","name":"Tempura","category":"Japanese","image":"https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500","time":"30 min","ingredients":["Veggies","Shrimp","Tempura batter"],"instructions":["Dip in batter","Deep fry","Drain"],"addedBy":"system"},
  {"id":"jp-3","name":"Ramen","category":"Japanese","image":"https://images.unsplash.com/photo-1591814468924-caf88d1232e1?w=500","time":"60 min","ingredients":["Noodles","Broth","Pork"],"instructions":["Cook broth","Add noodles","Top with pork"],"addedBy":"system"},
  {"id":"jp-4","name":"Udon","category":"Japanese","image":"https://images.unsplash.com/photo-1553621042-f6e147245754?w=500","time":"25 min","ingredients":["Udon noodles","Soup base","Green onions"],"instructions":["Boil noodles","Make soup","Combine"],"addedBy":"system"},
  {"id":"jp-5","name":"Okonomiyaki","category":"Japanese","image":"https://images.unsplash.com/photo-1587740908075-9ea7e40034d5?w=500","time":"30 min","ingredients":["Cabbage","Batter","Pork belly"],"instructions":["Mix batter","Cook with pork","Add toppings"],"addedBy":"system"},
  {"id":"jp-6","name":"Onigiri","category":"Japanese","image":"https://images.unsplash.com/photo-1553621042-f6e147245754?w=500","time":"15 min","ingredients":["Rice","Seaweed","Filling"],"instructions":["Make rice ball","Add filling","Wrap in seaweed"],"addedBy":"system"},
  {"id":"jp-7","name":"Tonkatsu","category":"Japanese","image":"https://images.unsplash.com/photo-1587740908075-9ea7e40034d5?w=500","time":"20 min","ingredients":["Pork cutlet","Breadcrumbs","Eggs"],"instructions":["Coat","Fry","Slice"],"addedBy":"system"},
  {"id":"jp-8","name":"Miso Soup","category":"Japanese","image":"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500","time":"10 min","ingredients":["Miso","Dashi","Tofu"],"instructions":["Heat broth","Add miso","Add tofu"],"addedBy":"system"},
  {"id":"jp-9","name":"Yakitori","category":"Japanese","image":"https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=500","time":"18 min","ingredients":["Chicken","Skewers","Sauce"],"instructions":["Skewer pieces","Grill","Brush with sauce"],"addedBy":"system"},
  {"id":"jp-10","name":"Sashimi","category":"Japanese","image":"https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500","time":"15 min","ingredients":["Fish","Wasabi","Soy sauce"],"instructions":["Slice fish","Serve with sauce","Eat fresh"],"addedBy":"system"},

 
  {"id":"th-1","name":"Pad Thai","category":"Thai","image":"https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=500","time":"30 min","ingredients":["Rice noodles","Shrimp","Bean sprouts"],"instructions":["Soak noodles","Stir-fry","Add sauce"],"addedBy":"system"},
  {"id":"th-2","name":"Green Curry","category":"Thai","image":"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500","time":"25 min","ingredients":["Green curry paste","Chicken","Basil"],"instructions":["Fry paste","Add chicken","Add coconut milk"],"addedBy":"system"},
  {"id":"th-3","name":"Tom Yum Soup","category":"Thai","image":"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500","time":"25 min","ingredients":["Shrimp","Lemongrass","Chili"],"instructions":["Boil water","Add aromatics","Add shrimp"],"addedBy":"system"},
  {"id":"th-4","name":"Massaman Curry","category":"Thai","image":"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500","time":"45 min","ingredients":["Beef","Paste","Peanuts"],"instructions":["Fry paste","Add meat","Simmer"],"addedBy":"system"},
  {"id":"th-5","name":"Som Tam","category":"Thai","image":"https://images.unsplash.com/photo-1596714734901-ca7fb6cdff07?w=500","time":"15 min","ingredients":["Papaya","Tomatoes","Peanuts"],"instructions":["Shred papaya","Pound ingredients","Mix"],"addedBy":"system"},
  {"id":"th-6","name":"Red Curry","category":"Thai","image":"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500","time":"30 min","ingredients":["Red curry paste","Chicken","Coconut milk"],"instructions":["Fry paste","Add chicken","Simmer"],"addedBy":"system"},
  {"id":"th-7","name":"Pad See Ew","category":"Thai","image":"https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500","time":"20 min","ingredients":["Rice noodles","Soy sauce","Egg"],"instructions":["Cook noodles","Stir-fry","Add egg"],"addedBy":"system"},
  {"id":"th-8","name":"Khao Pad","category":"Thai","image":"https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500","time":"20 min","ingredients":["Rice","Chicken","Egg"],"instructions":["Cook rice","Stir-fry everything","Season"],"addedBy":"system"},
  {"id":"th-9","name":"Panang Curry","category":"Thai","image":"https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=500","time":"30 min","ingredients":["Paste","Beef","Coconut milk"],"instructions":["Make curry","Simmer beef","Add basil"],"addedBy":"system"},
  {"id":"th-10","name":"Mango Sticky Rice","category":"Thai","image":"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500","time":"25 min","ingredients":["Sticky rice","Mango","Coconut milk"],"instructions":["Soak rice","Steam","Top with mango"],"addedBy":"system"},

  
  {"id":"am-1","name":"Cheeseburger","category":"American","image":"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500","time":"20 min","ingredients":["Beef patty","Bun","Cheese"],"instructions":["Cook patty","Add cheese","Assemble"],"addedBy":"system"},
  {"id":"am-2","name":"Mac and Cheese","category":"American","image":"https://images.unsplash.com/photo-1544025162-d76694265947?w=500","time":"25 min","ingredients":["Macaroni","Cheese sauce","Milk"],"instructions":["Boil macaroni","Make sauce","Combine"],"addedBy":"system"},
  {"id":"am-3","name":"Fried Chicken","category":"American","image":"https://images.unsplash.com/photo-1562967914-608f82629710?w=500","time":"50 min","ingredients":["Chicken","Flour","Oil"],"instructions":["Coat chicken","Fry","Drain"],"addedBy":"system"},
  {"id":"am-4","name":"Pulled Pork","category":"American","image":"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500","time":"180 min","ingredients":["Pork","BBQ sauce","Bun"],"instructions":["Slow cook pork","Shred","Add BBQ sauce"],"addedBy":"system"},
  {"id":"am-5","name":"Pancakes","category":"American","image":"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500","time":"20 min","ingredients":["Flour","Egg","Butter"],"instructions":["Mix batter","Cook on griddle","Serve"],"addedBy":"system"},
  {"id":"am-6","name":"Coleslaw","category":"American","image":"https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500","time":"10 min","ingredients":["Cabbage","Carrot","Mayo"],"instructions":["Shred veggies","Mix dressing","Combine"],"addedBy":"system"},
  {"id":"am-7","name":"Buffalo Wings","category":"American","image":"https://images.unsplash.com/photo-1513267048331-5611cad62e41?w=500","time":"35 min","ingredients":["Chicken wings","Hot sauce","Butter"],"instructions":["Fry wings","Coat in sauce","Serve"],"addedBy":"system"},
  {"id":"am-8","name":"Meatloaf","category":"American","image":"https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500","time":"60 min","ingredients":["Ground beef","Breadcrumbs","Egg"],"instructions":["Mix ingredients","Shape loaf","Bake"],"addedBy":"system"},
  {"id":"am-9","name":"Eggs Benedict","category":"American","image":"https://images.unsplash.com/photo-1602030638412-bb8be8e5c0e5?w=500","time":"22 min","ingredients":["Eggs","English muffin","Ham"],"instructions":["Poach eggs","Toast muffin","Stack"],"addedBy":"system"},
  {"id":"am-10","name":"Apple Pie","category":"American","image":"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500","time":"90 min","ingredients":["Apples","Pastry","Cinnamon"],"instructions":["Prepare filling","Make crust","Bake"],"addedBy":"system"},

  {"id":"fr-1","name":"Quiche Lorraine","category":"French","image":"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500","time":"60 min","ingredients":["Pie crust","Eggs","Bacon"],"instructions":["Bake crust","Mix filling","Bake again"],"addedBy":"system"},
  {"id":"fr-2","name":"Ratatouille","category":"French","image":"https://images.unsplash.com/photo-1572695157849-1b8b4c2bf0b6?w=500","time":"45 min","ingredients":["Eggplant","Zucchini","Tomato"],"instructions":["Chop veggies","Layer","Bake"],"addedBy":"system"},
  {"id":"fr-3","name":"Coq au Vin","category":"French","image":"https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=500","time":"90 min","ingredients":["Chicken","Red wine","Mushrooms"],"instructions":["Brown chicken","Simmer in wine","Add veggies"],"addedBy":"system"},
  {"id":"fr-4","name":"Beef Bourguignon","category":"French","image":"https://images.unsplash.com/photo-1600289031464-74d374b64991?w=500","time":"120 min","ingredients":["Beef","Carrot","Red wine"],"instructions":["Brown beef","Simmer","Add wine"],"addedBy":"system"},
  {"id":"fr-5","name":"Cassoulet","category":"French","image":"https://images.unsplash.com/photo-1558030006-450675393462?w=500","time":"180 min","ingredients":["White beans","Sausage","Duck"],"instructions":["Cook beans","Add meats","Bake"],"addedBy":"system"},
  {"id":"fr-6","name":"Macarons","category":"French","image":"https://images.unsplash.com/photo-1518047601542-79f18c655718?w=500","time":"60 min","ingredients":["Egg whites","Sugar","Almond flour"],"instructions":["Make batter","Pipe and bake","Fill"],"addedBy":"system"},
  {"id":"fr-7","name":"French Onion Soup","category":"French","image":"https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500","time":"50 min","ingredients":["Onion","Broth","Cheese"],"instructions":["Caramelize onions","Add broth","Bake with cheese"],"addedBy":"system"},
  {"id":"fr-8","name":"Crepes","category":"French","image":"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500","time":"20 min","ingredients":["Flour","Milk","Eggs"],"instructions":["Mix batter","Fry thinly","Fill"],"addedBy":"system"},
  {"id":"fr-9","name":"Croissant","category":"French","image":"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500","time":"180 min","ingredients":["Flour","Butter","Milk"],"instructions":["Make dough","Laminate butter","Shape and bake"],"addedBy":"system"},
  {"id":"fr-10","name":"Tarte Tatin","category":"French","image":"https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=500","time":"60 min","ingredients":["Apples","Pastry","Sugar"],"instructions":["Make caramel","Add apples","Bake"],"addedBy":"system"},


  {"id":"gr-1","name":"Greek Salad","category":"Greek","image":"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500","time":"10 min","ingredients":["Tomato","Cucumber","Feta"],"instructions":["Chop veggies","Mix together","Serve"],"addedBy":"system"},
  {"id":"gr-2","name":"Moussaka","category":"Greek","image":"https://images.unsplash.com/photo-1601314002592-271f9f4e7e3f?w=500","time":"80 min","ingredients":["Eggplant","Ground lamb","Béchamel"],"instructions":["Layer eggplant","Add meat and sauce","Bake"],"addedBy":"system"},
  {"id":"gr-3","name":"Spanakopita","category":"Greek","image":"https://images.unsplash.com/photo-1601314164390-319671b1c0a2?w=500","time":"60 min","ingredients":["Spinach","Feta","Phyllo"],"instructions":["Prepare filling","Layer phyllo","Bake"],"addedBy":"system"},
  {"id":"gr-4","name":"Pastitsio","category":"Greek","image":"https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500","time":"80 min","ingredients":["Pasta","Meat","Cheese"],"instructions":["Layer pasta","Add meat","Bake"],"addedBy":"system"},
  {"id":"gr-6","name":"Tzatziki","category":"Greek","image":"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500","time":"15 min","ingredients":["Yogurt","Cucumber","Garlic"],"instructions":["Mix ingredients","Chill","Serve"],"addedBy":"system"},
  {"id":"gr-8","name":"Baklava","category":"Greek","image":"https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500","time":"90 min","ingredients":["Phyllo","Nuts","Honey"],"instructions":["Layer phyllo","Add nuts","Bake & drizzle honey"],"addedBy":"system"},
  {"id":"gr-10","name":"Horiatiki","category":"Greek","image":"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500","time":"10 min","ingredients":["Tomato","Cucumber","Oregano"],"instructions":["Chop veggies","Add feta","Serve"],"addedBy":"system"},

 
  {"id":"ko-1","name":"Bibimbap","category":"Korean","image":"https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=500","time":"35 min","ingredients":["Rice","Beef","Vegetables"],"instructions":["Cook toppings","Arrange on rice","Add egg"],"addedBy":"system"},
  {"id":"ko-2","name":"Kimchi","category":"Korean","image":"https://images.unsplash.com/photo-1553621042-f6e147245754?w=500","time":"120 min","ingredients":["Cabbage","Chili","Salt"],"instructions":["Salt cabbage","Add chili mix","Ferment"],"addedBy":"system"},
  {"id":"ko-3","name":"Korean BBQ","category":"Korean","image":"https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500","time":"45 min","ingredients":["Beef","Marinade","Lettuce"],"instructions":["Marinate meat","Grill","Wrap & eat"],"addedBy":"system"},
  {"id":"ko-4","name":"Japchae","category":"Korean","image":"https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=500","time":"40 min","ingredients":["Glass noodles","Veggies","Soy sauce"],"instructions":["Stir-fry veggies","Boil noodles","Mix together"],"addedBy":"system"},
  {"id":"ko-5","name":"Tteokbokki","category":"Korean","image":"https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500","time":"25 min","ingredients":["Rice cakes","Chili paste","Fish cake"],"instructions":["Cook in broth","Add fish cake","Simmer"],"addedBy":"system"},
  {"id":"ko-6","name":"Kimchi Stew","category":"Korean","image":"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500","time":"35 min","ingredients":["Kimchi","Pork","Tofu"],"instructions":["Boil all together","Add tofu","Simmer"],"addedBy":"system"},
  {"id":"ko-8","name":"Banchan","category":"Korean","image":"https://images.unsplash.com/photo-1535473895227-bdecb20fb157?w=500","time":"30 min","ingredients":["Veggies","Soy sauce","Sesame oil"],"instructions":["Make several sides","Arrange plates","Serve"],"addedBy":"system"},
  {"id":"ko-9","name":"Sundubu Jjigae","category":"Korean","image":"https://images.unsplash.com/photo-1585032226651-759b368d7246?w=500","time":"25 min","ingredients":["Tofu","Clams","Chili"],"instructions":["Boil broth","Add clams/tofu","Finish with egg"],"addedBy":"system"},
  {"id":"ko-10","name":"Hotteok","category":"Korean","image":"https://images.unsplash.com/photo-1553621042-f6e147245754?w=500","time":"20 min","ingredients":["Flour","Sugar","Cinnamon"],"instructions":["Make dough","Add filling","Pan-fry"],"addedBy":"system"},

  
  {"id":"ds-1","name":"Cheesecake","category":"Desserts","image":"https://images.unsplash.com/photo-1518047601542-79f18c655718?w=500","time":"60 min","ingredients":["Cream cheese","Sugar","Eggs"],"instructions":["Mix ingredients","Bake","Chill"],"addedBy":"system"},
  {"id":"ds-2","name":"Brownies","category":"Desserts","image":"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500","time":"40 min","ingredients":["Chocolate","Eggs","Butter"],"instructions":["Make batter","Bake","Cool"],"addedBy":"system"},
  {"id":"ds-3","name":"Ice Cream","category":"Desserts","image":"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500","time":"240 min","ingredients":["Milk","Cream","Sugar"],"instructions":["Mix base","Churn","Freeze"],"addedBy":"system"},
  {"id":"ds-4","name":"Cookies","category":"Desserts","image":"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500","time":"25 min","ingredients":["Flour","Butter","Sugar"],"instructions":["Mix dough","Scoop & bake","Cool"],"addedBy":"system"},
  {"id":"ds-5","name":"Cupcakes","category":"Desserts","image":"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500","time":"45 min","ingredients":["Flour","Eggs","Sugar"],"instructions":["Make batter","Pour into liners","Bake"],"addedBy":"system"},
  {"id":"ds-6","name":"Donuts","category":"Desserts","image":"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500","time":"30 min","ingredients":["Flour","Yeast","Sugar"],"instructions":["Make dough","Shape","Fry"],"addedBy":"system"},
  {"id":"ds-8","name":"Chocolate Mousse","category":"Desserts","image":"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500","time":"40 min","ingredients":["Chocolate","Eggs","Cream"],"instructions":["Melt chocolate","Fold eggs & cream","Chill"],"addedBy":"system"},
  {"id":"ds-9","name":"Pudding","category":"Desserts","image":"https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500","time":"25 min","ingredients":["Milk","Cornstarch","Sugar"],"instructions":["Heat milk","Add cornstarch/sugar","Chill"],"addedBy":"system"},
  {"id":"ds-10","name":"Fruit Tart","category":"Desserts","image":"https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500","time":"60 min","ingredients":["Pastry","Custard","Fruit"],"instructions":["Make pastry","Fill custard","Arrange fruit"],"addedBy":"system"},

  
  {"id":"hl-1","name":"Quinoa Bowl","category":"Healthy","image":"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500","time":"20 min","ingredients":["Quinoa","Veggies","Lemon"],"instructions":["Cook quinoa","Mix veggies","Season"],"addedBy":"system"},
  {"id":"hl-2","name":"Smoothie Bowl","category":"Healthy","image":"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500","time":"10 min","ingredients":["Banana","Berries","Yogurt"],"instructions":["Blend ingredients","Pour","Top with nuts"],"addedBy":"system"},
  {"id":"hl-3","name":"Kale Salad","category":"Healthy","image":"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500","time":"8 min","ingredients":["Kale","Lemon","Olive oil"],"instructions":["Chop kale","Dress","Serve"],"addedBy":"system"},
  {"id":"hl-4","name":"Buddha Bowl","category":"Healthy","image":"https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500","time":"15 min","ingredients":["Grains","Veggies","Tahini"],"instructions":["Arrange grains","Add veggies","Drizzle tahini"],"addedBy":"system"},
  {"id":"hl-5","name":"Avocado Toast","category":"Healthy","image":"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500","time":"6 min","ingredients":["Bread","Avocado","Salt"],"instructions":["Toast bread","Smash avocado","Spread"],"addedBy":"system"},
  {"id":"hl-6","name":"Grilled Salmon","category":"Healthy","image":"https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=500","time":"20 min","ingredients":["Salmon","Lemon","Herbs"],"instructions":["Season salmon","Grill","Serve"],"addedBy":"system"},
  {"id":"hl-7","name":"Veggie Wrap","category":"Healthy","image":"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500","time":"14 min","ingredients":["Wrap","Veggies","Spread"],"instructions":["Fill wrap","Roll","Cut"],"addedBy":"system"},
  {"id":"hl-8","name":"Chia Pudding","category":"Healthy","image":"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500","time":"60 min","ingredients":["Chia seeds","Milk","Fruit"],"instructions":["Mix chia/milk","Chill","Top with fruit"],"addedBy":"system"},
  {"id":"hl-9","name":"Green Smoothie","category":"Healthy","image":"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500","time":"6 min","ingredients":["Spinach","Banana","Water"],"instructions":["Blend all","Drink"],"addedBy":"system"},
  {"id":"hl-10","name":"Protein Bowl","category":"Healthy","image":"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500","time":"15 min","ingredients":["Beans","Rice","Veggies"],"instructions":["Layer ingredients","Serve","Garnish"],"addedBy":"system"},

  
  {"id":"bf-1","name":"French Toast","category":"Breakfast","image":"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500","time":"10 min","ingredients":["Bread","Eggs","Milk"],"instructions":["Soak bread","Pan-fry","Serve"],"addedBy":"system"},
  {"id":"bf-3","name":"Waffles","category":"Breakfast","image":"https://images.unsplash.com/photo-1518047601542-79f18c655718?w=500","time":"12 min","ingredients":["Waffle mix","Egg","Butter"],"instructions":["Mix batter","Bake in iron","Serve"],"addedBy":"system"},
  {"id":"bf-4","name":"Bagel","category":"Breakfast","image":"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500","time":"13 min","ingredients":["Bagels","Cream cheese"],"instructions":["Slice bagels","Spread cheese","Add toppings"],"addedBy":"system"},
  {"id":"bf-5","name":"Granola","category":"Breakfast","image":"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=500","time":"7 min","ingredients":["Oats","Honey","Nuts"],"instructions":["Mix oats/nuts","Bake with honey","Cool"],"addedBy":"system"},
  {"id":"bf-7","name":"Hash Browns","category":"Breakfast","image":"https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500","time":"15 min","ingredients":["Potato","Oil","Salt"],"instructions":["Grate potato","Pan-fry","Salt"],"addedBy":"system"},
  {"id":"bf-8","name":"Breakfast Burrito","category":"Breakfast","image":"https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=500","time":"20 min","ingredients":["Egg","Tortilla","Veggies"],"instructions":["Cook eggs","Fill tortilla","Roll"],"addedBy":"system"},
  {"id":"bf-9","name":"Acai Bowl","category":"Breakfast","image":"https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500","time":"7 min","ingredients":["Acai","Banana","Berries"],"instructions":["Blend fruit","Pour bowl","Top with granola"],"addedBy":"system"},
  {"id":"bf-10","name":"Porridge","category":"Breakfast","image":"https://images.unsplash.com/photo-1518047601542-79f18c655718?w=500","time":"12 min","ingredients":["Oats","Water","Salt"],"instructions":["Cook oats in water","Simmer","Add toppings"],"addedBy":"system"}


];




        const elements = {
            loginPage: document.getElementById('loginPage'),
            signupPage: document.getElementById('signupPage'),
            mainApp: document.getElementById('mainApp'),
            splashScreen: document.getElementById('splashScreen'),
            loginForm: document.getElementById('loginForm'),
            signupForm: document.getElementById('signupForm'),
            loginEmail: document.getElementById('loginEmail'),
            loginPassword: document.getElementById('loginPassword'),
            loginError: document.getElementById('loginError'),
            signupName: document.getElementById('signupName'),
            signupEmail: document.getElementById('signupEmail'),
            signupPassword: document.getElementById('signupPassword'),
            signupError: document.getElementById('signupError'),
            signupSuccess: document.getElementById('signupSuccess'),
            showSignupLink: document.getElementById('showSignupLink'),
            showLoginLink: document.getElementById('showLoginLink'),
            userAvatar: document.getElementById('userAvatar'),
            userName: document.getElementById('userName'),
            logoutBtn: document.getElementById('logoutBtn'),
            searchInput: document.getElementById('searchInput'),
            searchBtn: document.getElementById('searchBtn'),
            categoriesContainer: document.getElementById('categories'),
            searchHistory: document.getElementById('searchHistory'),
            historyItems: document.getElementById('historyItems'),
            recipesGrid: document.getElementById('recipesGrid'),
            noRecipes: document.getElementById('noRecipes'),
            addRecipeBtn: document.getElementById('addRecipeBtn'),
            recipeModal: document.getElementById('recipeModal'),
            closeRecipeModal: document.getElementById('closeRecipeModal'),
            modalImage: document.getElementById('modalImage'),
            modalTitle: document.getElementById('modalTitle'),
            modalCategory: document.getElementById('modalCategory'),
            modalTime: document.getElementById('modalTime'),
            modalIngredients: document.getElementById('modalIngredients'),
            modalInstructions: document.getElementById('modalInstructions'),
            addRecipeModal: document.getElementById('addRecipeModal'),
            closeAddModal: document.getElementById('closeAddModal'),
            addRecipeForm: document.getElementById('addRecipeForm'),
            newRecipeCategory: document.getElementById('newRecipeCategory')
        };

        function downloadJSON() {
            const dataBlob = new Blob([JSON.stringify(loadAllData(), null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(dataBlob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'recipe-master-data.json';
            a.click();
            URL.revokeObjectURL(url);
        }

        function loadAllData() {
            const users = JSON.parse(localStorage.getItem('recipeMasterUsers')) || {};
            const recipes = JSON.parse(localStorage.getItem('recipeMasterRecipes')) || [];
            return { users, recipes };
        }

        function saveData() {
            const data = loadAllData();
            data.users[currentUser.email] = currentUser;
            localStorage.setItem('recipeMasterUsers', JSON.stringify(data.users));
        }

        function saveRecipes() {
            const userRecipes = allRecipes.filter(r => r.addedBy === currentUser.email);
            const data = loadAllData();
            const otherRecipes = data.recipes.filter(r => r.addedBy !== currentUser.email);
            data.recipes = [...otherRecipes, ...userRecipes];
            localStorage.setItem('recipeMasterRecipes', JSON.stringify(data.recipes));
        }

        function loadUserData() {
            const data = loadAllData();
            const user = data.users[currentUser.email];
            if (user) {
                currentUser.searchHistory = user.searchHistory || [];
            }
        }

        function loadRecipes() {
            const data = loadAllData();
            const userRecipes = data.recipes.filter(r => r.addedBy === currentUser.email);
            const systemRecipes = sampleRecipes.filter(r => r.addedBy === 'system');
            allRecipes = [...userRecipes, ...systemRecipes];
        }

        function showLoginError(message) {
            elements.loginError.textContent = message;
            elements.loginError.style.display = 'block';
        }

        function showSignupError(message) {
            elements.signupError.textContent = message;
            elements.signupError.style.display = 'block';
        }

        function showSignupSuccess(message) {
            elements.signupSuccess.textContent = message;
            elements.signupSuccess.style.display = 'block';
        }

        function handleLogin(e) {
            e.preventDefault();
            const email = elements.loginEmail.value;
            const password = elements.loginPassword.value;
            const data = loadAllData();

            if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
                if (!data.users[email]) {
                    data.users[email] = { 
                        name: 'Admin', 
                        email: ADMIN_EMAIL, 
                        password: ADMIN_PASSWORD, 
                        searchHistory: [],
                        isAdmin: true 
                    };
                    localStorage.setItem('recipeMasterUsers', JSON.stringify(data.users));
                }
                currentUser = data.users[email];
                currentUser.isAdmin = true;
                initApp();
                return;
            }

            const user = data.users[email];
            if (user && user.password === password) {
                currentUser = user;
                initApp();
            } else {
                showLoginError('Invalid email or password.');
            }
        }

        function handleSignup(e) {
            e.preventDefault();
            const name = elements.signupName.value;
            const email = elements.signupEmail.value;
            const password = elements.signupPassword.value;

            elements.signupError.style.display = 'none';
            elements.signupSuccess.style.display = 'none';

            if (password.length < 6) {
                showSignupError('Password must be at least 6 characters.');
                return;
            }

            const data = loadAllData();
            if (data.users[email]) {
                showSignupError('An account with this email already exists.');
                return;
            }

            data.users[email] = { name, email, password, searchHistory: [] };
            localStorage.setItem('recipeMasterUsers', JSON.stringify(data.users));
            
            showSignupSuccess('Account created! Please log in.');
            elements.signupForm.reset();
        }

        function logout() {
            if (currentUser) {
                saveData();
                saveRecipes();
            }
            currentUser = null;
            elements.mainApp.style.display = 'none';
            elements.loginPage.style.display = 'flex';
        }

        function initApp() {
            elements.loginPage.style.display = 'none';
            elements.signupPage.style.display = 'none';
            elements.mainApp.style.display = 'block';

            elements.userName.textContent = currentUser.name;
            const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
            elements.userAvatar.textContent = initials;

            if (currentUser.isAdmin || currentUser.email === ADMIN_EMAIL) {
                document.getElementById('adminBadge').style.display = 'inline-block';
                document.getElementById('adminControls').style.display = 'flex';
            }

            loadUserData();
            loadRecipes();
            renderCategories();
            populateAddRecipeCategories();
            performSearch();
            renderSearchHistory();
            updateAdminStats();
        }

        function updateAdminStats() {
            if (currentUser.isAdmin || currentUser.email === ADMIN_EMAIL) {
                document.getElementById('totalRecipes').textContent = allRecipes.length;
                document.getElementById('userRecipes').textContent = allRecipes.filter(r => r.addedBy !== 'system').length;
                document.getElementById('systemRecipes').textContent = allRecipes.filter(r => r.addedBy === 'system').length;
            }
        }

        function renderCategories() {
            elements.categoriesContainer.innerHTML = '';
            const sidebarCategoriesEl = document.getElementById('sidebarCategories');
            sidebarCategoriesEl.innerHTML = '';
            
            categories.forEach(cat => {
                const btn = document.createElement('button');
                btn.className = 'category-btn';
                btn.innerHTML = `${cat.emoji} ${cat.label}`;
                btn.dataset.category = cat.name;
                if (cat.name === currentCategory) {
                    btn.classList.add('active');
                }
                btn.addEventListener('click', () => filterByCategory(cat.name));
                elements.categoriesContainer.appendChild(btn);

                const sidebarBtn = document.createElement('div');
                sidebarBtn.className = 'sidebar-category';
                sidebarBtn.innerHTML = `${cat.emoji} ${cat.label}`;
                sidebarBtn.dataset.category = cat.name;
                if (cat.name === currentCategory) {
                    sidebarBtn.classList.add('active');
                }
                sidebarBtn.addEventListener('click', () => {
                    filterByCategory(cat.name);
                    closeSidebar();
                });
                sidebarCategoriesEl.appendChild(sidebarBtn);
            });
        }

        function openSidebar() {
            document.getElementById('sidebarMenu').classList.add('active');
            document.getElementById('sidebarOverlay').classList.add('active');
        }

        function closeSidebar() {
            document.getElementById('sidebarMenu').classList.remove('active');
            document.getElementById('sidebarOverlay').classList.remove('active');
        }

        function populateAddRecipeCategories() {
            elements.newRecipeCategory.innerHTML = '<option value="">Select Category</option>';
            categories.forEach(cat => {
                if(cat.name !== 'all') {
                    const option = document.createElement('option');
                    option.value = cat.label;
                    option.textContent = cat.label;
                    elements.newRecipeCategory.appendChild(option);
                }
            });
        }

        function renderRecipes(recipes) {
            elements.recipesGrid.innerHTML = '';
            if (recipes.length === 0) {
                elements.noRecipes.style.display = 'block';
                elements.recipesGrid.style.display = 'none';
            } else {
                elements.noRecipes.style.display = 'none';
                elements.recipesGrid.style.display = 'grid';
                recipes.forEach(recipe => {
                    const card = document.createElement('div');
                    card.className = 'recipe-card';
                    card.dataset.id = recipe.id;
                    
                    const isAdmin = currentUser.isAdmin || currentUser.email === ADMIN_EMAIL;
                    const canDelete = recipe.addedBy === currentUser.email || isAdmin;
                    
                    card.innerHTML = `
                        ${canDelete ? '<button class="delete-btn" onclick="deleteRecipe(\'' + recipe.id + '\', event)">Delete</button>' : ''}
                        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image" onclick="showRecipeModal('${recipe.id}')">
                        <div class="recipe-info">
                            <h3 class="recipe-title" onclick="showRecipeModal('${recipe.id}')">${recipe.name}</h3>
                            <div class="recipe-meta">
                                <span class="recipe-category">${recipe.category}</span>
                                <span class="recipe-time">⏱️ ${recipe.time}</span>
                            </div>
                        </div>
                    `;
                    elements.recipesGrid.appendChild(card);
                });
            }
            updateAdminStats();
        }

        window.deleteRecipe = function(recipeId, event) {
            event.stopPropagation();
            if (confirm('Are you sure you want to delete this recipe?')) {
                allRecipes = allRecipes.filter(r => r.id !== recipeId);
                
                const data = loadAllData();
                data.recipes = data.recipes.filter(r => r.id !== recipeId);
                localStorage.setItem('recipeMasterRecipes', JSON.stringify(data.recipes));
                
                performSearch();
                updateAdminStats();
            }
        };

        window.showRecipeModal = function(recipeId) {
            const recipe = allRecipes.find(r => r.id === recipeId);
            if (!recipe) return;

            elements.modalImage.src = recipe.image;
            elements.modalTitle.textContent = recipe.name;
            elements.modalCategory.textContent = recipe.category;
            elements.modalTime.textContent = recipe.time;

            elements.modalIngredients.innerHTML = '';
            recipe.ingredients.forEach(ing => {
                const li = document.createElement('li');
                li.textContent = ing;
                elements.modalIngredients.appendChild(li);
            });

            elements.modalInstructions.innerHTML = '';
            recipe.instructions.forEach(step => {
                const li = document.createElement('li');
                li.textContent = step;
                elements.modalInstructions.appendChild(li);
            });

            elements.recipeModal.classList.add('active');
        };

        function closeAllModals() {
            elements.recipeModal.classList.remove('active');
            elements.addRecipeModal.classList.remove('active');
        }

        function showAddRecipeModal() {
            elements.addRecipeForm.reset();
            elements.addRecipeModal.classList.add('active');
        }

        function handleAddRecipe(e) {
            e.preventDefault();
            
            const newRecipe = {
                id: 'user-' + Date.now(),
                name: document.getElementById('newRecipeName').value,
                category: document.getElementById('newRecipeCategory').value,
                image: document.getElementById('newRecipeImage').value,
                time: document.getElementById('newRecipeTime').value,
                ingredients: document.getElementById('newRecipeIngredients').value.split('\n').filter(Boolean),
                instructions: document.getElementById('newRecipeInstructions').value.split('\n').filter(Boolean),
                addedBy: currentUser.email
            };

            allRecipes.unshift(newRecipe);
            saveRecipes();
            performSearch();
            closeAllModals();
        }

        function performSearch() {
            const searchTerm = elements.searchInput.value.toLowerCase();
            
            filteredRecipes = allRecipes.filter(recipe => {
                const nameMatch = recipe.name.toLowerCase().includes(searchTerm);
                const categoryMatch = recipe.category.toLowerCase().includes(searchTerm);
                const ingredientMatch = recipe.ingredients.some(ing => ing.toLowerCase().includes(searchTerm));
                
                const categoryFilterMatch = (currentCategory === 'all' || recipe.category === currentCategory);

                return (nameMatch || categoryMatch || ingredientMatch) && categoryFilterMatch;
            });

            renderRecipes(filteredRecipes);

            if (searchTerm) {
                updateSearchHistory(searchTerm);
            }
        }

        function updateSearchHistory(term) {
            if (!currentUser.searchHistory) {
                currentUser.searchHistory = [];
            }
            currentUser.searchHistory = currentUser.searchHistory.filter(item => item !== term);
            currentUser.searchHistory.unshift(term);
            if (currentUser.searchHistory.length > 5) {
                currentUser.searchHistory = currentUser.searchHistory.slice(0, 5);
            }
            saveData();
            renderSearchHistory();
        }

        function renderSearchHistory() {
            if (!currentUser.searchHistory || currentUser.searchHistory.length === 0) {
                elements.searchHistory.style.display = 'none';
            } else {
                elements.searchHistory.style.display = 'block';
                elements.historyItems.innerHTML = '';
                currentUser.searchHistory.forEach(term => {
                    const item = document.createElement('span');
                    item.className = 'history-item';
                    item.textContent = term;
                    item.addEventListener('click', () => {
                        elements.searchInput.value = term;
                        performSearch();
                    });
                    elements.historyItems.appendChild(item);
                });
            }
        }

        function filterByCategory(categoryName) {
            currentCategory = categoryName;
            
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.category === categoryName);
            });

            performSearch();
        }

        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                elements.splashScreen.style.display = 'none';
                
                const data = loadAllData();
                const savedEmail = localStorage.getItem('recipeMasterCurrentUser');
                
                if (savedEmail && data.users[savedEmail]) {
                    currentUser = data.users[savedEmail];
                    initApp();
                } else {
                    elements.loginPage.style.display = 'flex';
                }
            }, 4000);
            
            elements.loginForm.addEventListener('submit', handleLogin);
            elements.signupForm.addEventListener('submit', handleSignup);
            elements.logoutBtn.addEventListener('click', logout);
            elements.showSignupLink.addEventListener('click', () => {
                elements.loginPage.style.display = 'none';
                elements.signupPage.style.display = 'flex';
            });
            elements.showLoginLink.addEventListener('click', () => {
                elements.signupPage.style.display = 'none';
                elements.loginPage.style.display = 'flex';
            });

            elements.searchBtn.addEventListener('click', performSearch);
            elements.searchInput.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    performSearch();
                }
            });

            document.getElementById('hamburgerMenu').addEventListener('click', openSidebar);
            document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

            elements.addRecipeBtn.addEventListener('click', showAddRecipeModal);
            elements.addRecipeForm.addEventListener('submit', handleAddRecipe);
            
            elements.closeRecipeModal.addEventListener('click', closeAllModals);
            elements.closeAddModal.addEventListener('click', closeAllModals);

            window.addEventListener('click', (e) => {
                if (e.target === elements.recipeModal || e.target === elements.addRecipeModal) {
                    closeAllModals();
                }
            });
        });
   