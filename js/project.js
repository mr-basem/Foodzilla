const recipes = {
  protein: [
    {
      name: "grilled chicken salad",
      icon: "images/download (40).jpg",
      price: 315,
      ingredients: ["chicken breast", "romaine lettuce", "cherry tomatoes", "cucumbers", "olive oil", "lemon juice"],
      calories: 420,
      youtubeUrl: "https://www.youtube.com/embed/1rJeF1i6oqE",
      steps: [
        "Season chicken breast with salt, pepper, and garlic powder.",
        "Grill or pan-sear the chicken over medium-high heat for 6-7 minutes per side until fully cooked.",
        "Let the chicken rest for a few minutes, then slice it into strips.",
        "Chop romaine lettuce, cherry tomatoes, and cucumbers, then place them in a large bowl.",
        "Top the greens with the grilled chicken strips, drizzle with olive oil and lemon juice, and toss gently."
      ]
    },
    {
      name: "baked salmon bowl",
      icon: "images/download (41).jpg",
      price: 160,
      ingredients: ["salmon fillet", "quinoa", "avocado", "edamame", "soy sauce", "sesame seeds"],
      calories: 540,
      youtubeUrl: "https://www.youtube.com/embed/F-43RBEqHoE",
      steps: [
        "Preheat your oven to 400°F (200°C) and line a baking sheet with parchment paper.",
        "Place the salmon fillet on the tray, drizzle with soy sauce, and bake for 12-15 minutes.",
        "Cook quinoa in boiling water according to package directions, then fluff with a fork.",
        "Slice a fresh avocado and steam the edamame until bright green.",
        "Assemble the bowl with a base of quinoa, topped with the flaked salmon, avocado slices, and edamame.",
        "Garnish with a sprinkle of sesame seeds before serving."
      ]
    },
    {
      name: "steak burrito bowl",
      icon: "images/download (42).jpg",
      price: 310,
      ingredients: ["sirloin steak", "black beans", "brown rice", "corn", "salsa", "cilantro"],
      calories: 610,
      youtubeUrl: "https://www.youtube.com/embed/3zr-Iqbuvrs",
      steps: [
        "Cut sirloin steak into bite-sized cubes and season with cumin, chili powder, and salt.",
        "Sear the steak in a hot skillet with a splash of oil for 3-5 minutes until beautifully browned.",
        "Warm up the cooked brown rice, black beans, and sweet corn kernels.",
        "Layer brown rice into the bottom of a serving bowl.",
        "Arrange the seared steak cubes, black beans, and corn side-by-side over the rice.",
        "Finish with a generous spoonful of salsa and a sprinkle of chopped cilantro leaves."
      ]
    },
    {
      name: "tofu stir fry",
      icon: "images/download (43).jpg",
      price: 120,
      ingredients: ["firm tofu", "broccoli", "bell peppers", "carrots", "ginger", "garlic", "soy sauce"],
      calories: 480,
      youtubeUrl: "https://www.youtube.com/embed/RvMLpkcwM3Q",
      steps: [
        "Press firm tofu with a paper towel to remove excess water, then cut into neat cubes.",
        "Pan-fry the tofu cubes in a skillet with oil until all sides are golden brown and crispy.",
        "Remove tofu, then toss minced ginger, minced garlic, broccoli florets, sliced bell peppers, and carrots into the same pan.",
        "Stir-fry the vegetables over high heat for 4-5 minutes until tender-crisp.",
        "Return the crispy tofu to the skillet, pour soy sauce over everything, and toss for 1 minute before serving."
      ]
    }
  ],

  dairy: [
    {
      name: "mac and cheese",
      icon: "images/download (44).jpg",
      price: 250,
      ingredients: ["macaroni noodles", "cheddar cheese", "milk", "butter", "flour"],
      calories: 560,
      youtubeUrl: "https://www.youtube.com/embed/Wg_0I27OyGk",
      steps: [
        "Boil macaroni noodles until tender, then drain.",
        "Melt butter in a pan and whisk in flour to make a roux.",
        "Slowly pour in milk while whisking constantly until the mixture thickens.",
        "Stir in shredded cheddar cheese until completely melted into a smooth sauce.",
        "Pour cheese sauce over macaroni noodles, stir thoroughly, and serve warm."
      ]
    },
    {
      name: "greek yogurt parfait",
      icon: "images/download (45).jpg",
      price: 75,
      ingredients: ["greek yogurt", "honey", "granola", "mixed berries"],
      calories: 320,
      youtubeUrl: "https://www.youtube.com/embed/Bn9dA1no51M",
      steps: [
        "Spoon a thick layer of plain greek yogurt into the bottom of a clean glass.",
        "Drizzle a teaspoon of sweet honey directly over the yogurt layer.",
        "Add a crunchy layer of granola followed by a handful of fresh mixed berries.",
        "Repeat the layers once more until the glass is full, then serve cold."
      ]
    },
    {
      name: "cheese fondue",
      icon: "images/download (33).jpg",
      price: 400,
      ingredients: ["swiss cheese", "gruyere cheese", "garlic", "cornstarch", "bread cubes"],
      calories: 470,
      youtubeUrl: "https://www.youtube.com/embed/a5yBHv0nVBg",
      steps: [
        "Rub the inside of a heavy pot or cooking skillet with a halved garlic clove.",
        "Toss your shredded Swiss and Gruyere cheeses with cornstarch in a mixing bowl.",
        "Warm a splash of cooking liquid or water in the pot over medium-low heat.",
        "Add the cheese mixture slowly, stirring constantly in a figure-eight pattern.",
        "Once fully melted and velvety, dip fresh bread cubes into the warm pot."
      ]
    },
    {
      name: "mozzarella sticks",
      icon: "images/download (32).jpg",
      price: 50,
      ingredients: ["mozzarella cheese blocks", "flour", "eggs", "breadcrumbs", "italian seasoning", "oil"],
      calories: 390,
      youtubeUrl: "https://www.youtube.com/embed/hebfBW2PLaY",
      steps: [
        "Cut mozzarella cheese into thick logs or stick shapes.",
        "Coat each cheese stick in flour, dip into beaten eggs, and roll in seasoned breadcrumbs.",
        "Dip back into the eggs and coat a second time with breadcrumbs for a thick shell.",
        "Freeze the coated sticks for at least 1 hour to prevent them from bursting while cooking.",
        "Fry in hot oil at 350°F (175°C) for 1-2 minutes until crispy and golden brown."
      ]
    },
    {
      name: "creamy alfredo sauce",
      icon: "images/download (38).jpg",
      price: 65,
      ingredients: ["heavy cream", "butter", "garlic", "parmesan cheese", "black pepper"],
      calories: 430,
      youtubeUrl: "https://www.youtube.com/embed/Yd_dTvRpXys",
      steps: [
        "Melt butter in a saucepan over medium heat and sauté minced garlic for 1 minute.",
        "Pour in the heavy cream and simmer gently for about 5 minutes.",
        "Lower the heat completely and stir in freshly grated parmesan cheese until fully melted.",
        "Season with cracked black pepper and serve hot over your favorite noodles."
      ]
    }
  ],

  carbs: [
    {
      name: "beshamel pasta",
      icon: "images/download (10).png",
      price: 270,
      ingredients: ["pasta", "milk", "flour", "butter", "cheese"],
      calories: 620,
      youtubeUrl: "https://www.youtube.com/embed/acEBiKdxxfs",
      steps: [
        "Cook pasta according to package instructions.",
        "Prepare beshamel sauce by melting butter, adding flour to make a roux, then gradually whisking in milk until thickened. Add cheese and stir until melted.",
        "Combine cooked pasta with beshamel sauce and mix well.",
        "Serve hot, optionally garnished with extra cheese or herbs."
      ]
    },
    {
      name: "spagetti",
      icon: "images/download (11).jpg",
      price: 200,
      ingredients: ["spagetti", "tomato sauce", "garlic", "olive oil", "parmesan"],
      calories: 540,
      youtubeUrl: "https://www.youtube.com/embed/2D6OBaAzniA",
      steps: [
        "Cook spagetti according to package instructions.",
        "Prepare tomato sauce by sautéing garlic in olive oil, then adding tomato sauce and simmering.",
        "Combine cooked spagetti with tomato sauce and top with grated parmesan.",
        "Serve hot, optionally garnished with fresh herbs."
      ]
    },
    {
      name: "donut",
      icon: "images/download (14).jpg",
      price: 60,
      ingredients: ["doughnut dough", "oil for frying", "sugar", "cinnamon"],
      calories: 310,
      youtubeUrl: "https://www.youtube.com/embed/vJRuI0t99RM",
      steps: [
        "Prepare doughnut dough according to recipe or package instructions.",
        "Heat oil in a deep fryer or large pot to 350°F (175°C).",
        "Carefully drop doughnut dough into hot oil and fry until golden brown on both sides.",
        "Remove doughnuts from oil and drain on paper towels.",
        "Roll warm doughnuts in a mixture of sugar and cinnamon.",
        "Serve fresh and enjoy!"
      ]
    },
    {
      name: "Spongebob burger",
      icon: "images/download (12).jpg",
      price: 155,
      ingredients: ["burger buns", "ground beef", "lettuce", "tomato", "cheese", "condiments"],
      calories: 680,
      youtubeUrl: "https://www.youtube.com/embed/BIG1h2vG-Qg",
      steps: [
        "Form ground beef into patties and season with salt and pepper.",
        "Cook patties on a grill or skillet to desired doneness.",
        "Assemble burgers by placing cooked patties on buns and adding lettuce, tomato, cheese, and condiments of choice.",
        "Serve hot with sides like fries or salad."
      ]
    },
    {
      name: "pizza",
      icon: "images/download (13).jpg",
      price: 275,
      ingredients: ["pizza dough", "tomato sauce", "mozzarella cheese", "pepperoni", "mushrooms"],
      calories: 720,
      youtubeUrl: "https://www.youtube.com/embed/sv3TXMSv6Lw",
      steps: [
        "Prepare pizza dough according to package instructions.",
        "Spread tomato sauce over the dough.",
        "Top with mozzarella cheese, pepperoni, and mushrooms.",
        "Bake in the oven until crust is golden and cheese is bubbly.",
        "Serve hot, optionally garnished with fresh herbs."
      ]
    },
    {
      name: "fried chicken",
      icon: "images/download (39).jpg",
      price: 300,
      ingredients: ["chicken pieces", "buttermilk", "flour", "spices", "oil for frying"],
      calories: 530,
      youtubeUrl: "https://www.youtube.com/embed/AJbJYwEduso",
      steps: [
        "Marinate chicken pieces in buttermilk for at least 1 hour.",
        "Mix flour with spices in a shallow dish.",
        "Coat marinated chicken pieces in the flour mixture.",
        "Heat oil in a deep fryer or large pot to 350°F (175°C).",
        "Fry coated chicken pieces in hot oil until golden brown and cooked through.",
        "Remove from oil and drain on paper towels.",
        "Serve hot with your favorite sides."
      ]
    },
    {
      name: "garlic bread",
      icon: "images/download (29).jpg",
      price: 55,
      ingredients: ["baguette", "butter", "garlic cloves", "parsley", "parmesan cheese"],
      calories: 350,
      youtubeUrl: "https://www.youtube.com/embed/FkV_fU5GoXM",
      steps: [
        "Preheat your oven to 400°F (200°C).",
        "Mix softened butter with minced garlic and finely chopped fresh parsley.",
        "Slice the baguette into thick pieces and spread garlic butter generously over each.",
        "Arrange slices on a baking sheet and dust lightly with parmesan cheese.",
        "Bake for 10 minutes until edges are crisp and golden brown."
      ]
    }
  ],

  sweets: [
    {
      name: "chocolate cake",
      icon: "images/download (17).jpg",
      price: 70,
      ingredients: ["flour", "sugar", "cocoa powder", "eggs", "butter", "baking powder"],
      calories: 420,
      youtubeUrl: "https://www.youtube.com/embed/EaljSnLrJW8",
      steps: [
        "Preheat oven to 350°F (175°C).",
        "Mix all dry ingredients in a bowl.",
        "Cream butter and sugar until fluffy.",
        "Add eggs one at a time, then mix in dry ingredients.",
        "Pour batter into a greased cake pan.",
        "Bake for 30-35 minutes or until a toothpick comes out clean.",
        "Cool completely before serving."
      ]
    },
    {
      name: "pancake",
      icon: "images/download (18).jpg",
      price: 65,
      ingredients: ["flour", "milk", "eggs", "sugar", "baking powder", "butter"],
      calories: 280,
      youtubeUrl: "https://www.youtube.com/embed/9zCVCL4V8JQ",
      steps: [
        "In a bowl, mix flour, sugar, and baking powder.",
        "In another bowl, whisk milk and eggs together.",
        "Combine wet and dry ingredients, then stir in melted butter.",
        "Heat a griddle or frying pan over medium heat and grease it lightly.",
        "Pour batter onto the griddle to form pancakes.",
        "Cook until bubbles form on the surface, then flip and cook until golden brown.",
        "Serve warm with syrup or toppings of choice."
      ]
    },
    {
      name: "sweet crepes",
      icon: "images/download (19).jpg",
      price: 125,
      ingredients: ["flour", "milk", "eggs", "sugar", "butter"],
      calories: 260,
      youtubeUrl: "https://www.youtube.com/embed/6BtkJMGYj8E",
      steps: [
        "Whisk together flour, sugar, milk, and eggs until a completely smooth batter forms.",
        "Stir melted butter into the crepe batter and let it sit for five minutes.",
        "Heat a flat non-stick frying pan over medium heat and coat lightly with butter.",
        "Pour a thin layer of batter, tilting the pan rapidly to spread it evenly.",
        "Cook for 2 minutes until golden underneath, flip over, and cook 1 more minute."
      ]
    },
    {
      name: "golden balls fried sweets",
      icon: "images/download (20).jpg",
      price: 50,
      ingredients: ["flour", "sugar", "yeast", "water", "oil for frying"],
      calories: 300,
      youtubeUrl: "https://www.youtube.com/embed/vhQz8Hkh5Z0",
      steps: [
        "Dissolve yeast in warm water and let it sit for a few minutes.",
        "In a bowl, mix flour and sugar, then add the yeast mixture to form a dough.",
        "Let the dough rise in a warm place until it doubles in size.",
        "Heat oil in a deep fryer or large pot to 350°F (175°C).",
        "Shape the dough into small balls and fry them in hot oil until golden brown.",
        "Remove from oil and drain on paper towels.",
        "Serve warm, optionally dusted with powdered sugar."
      ]
    },
    {
      name: "cookie",
      icon: "images/download (21).jpg",
      price: 20,
      ingredients: ["flour", "sugar", "butter", "eggs", "baking soda", "chocolate chips"],
      calories: 220,
      youtubeUrl: "https://www.youtube.com/embed/FvN2oZQ1OJQ",
      steps: [
        "Preheat oven to 375°F (190°C).",
        "In a bowl, cream together butter and sugar until light and fluffy.",
        "Add eggs one at a time, then mix in dry ingredients.",
        "Fold in chocolate chips.",
        "Drop spoonfuls of dough onto a baking sheet.",
        "Bake for 10-12 minutes or until golden brown.",
        "Cool completely before serving."
      ]
    },
    {
      name: "fudge brownies",
      icon: "images/download (30).jpg",
      price: 65,
      ingredients: ["melted butter", "sugar", "cocoa powder", "eggs", "flour", "chocolate chunks"],
      calories: 350,
      youtubeUrl: "https://www.youtube.com/embed/2Hw2pkJvdY0",
      steps: [
        "Preheat your oven to 350°F (175°C) and grease a square baking pan.",
        "Whisk melted butter and sugar together, then beat in the eggs one by one.",
        "Sift cocoa powder and flour into the wet mixture, folding gently with a spatula.",
        "Toss in the chocolate chunks right before transferring batter to the pan.",
        "Bake for 20-22 minutes keeping the center soft and fudgy."
      ]
    },
    {
      name: "cinnamon rolls",
      icon: "images/images (4).jpg",
      price: 55,
      ingredients: ["yeast dough", "butter", "brown sugar", "cinnamon", "powdered sugar cream"],
      calories: 370,
      youtubeUrl: "https://www.youtube.com/embed/am6_6KGnhpc",
      steps: [
        "Roll yeast dough out into a flat, wide rectangular shape.",
        "Spread softened butter all over the surface, followed by brown sugar and ground cinnamon.",
        "Roll the dough up tightly into a log, slice into rounds, and place in a baking dish.",
        "Let them rise for 20 minutes, then bake at 350°F (175°C) for 25 minutes until golden.",
        "Drizzle sweet powdered sugar frosting across the tops while still warm."
      ]
    },
    {
      name: "apple pie",
      icon: "images/jpg.jpg",
      price: 75,
      ingredients: ["pie crust", "apples sliced", "sugar", "cinnamon", "butter pieces"],
      calories: 420,
      youtubeUrl: "https://www.youtube.com/embed/KbyahTnzbKA",
      steps: [
        "Toss thin apple slices with white sugar, brown sugar, and ground cinnamon.",
        "Press one layer of rolled pie crust flat into the bottom of a circular pie dish.",
        "Fill the crust with your seasoned apple mixture and scatter butter pieces across.",
        "Cover with a second sheet of pie crust, crimp edges tight, and cut steam slots.",
        "Bake at 425°F (220°C) for 45 minutes until the pastry is crisp and bubbling."
      ]
    }
  ],

  fruits: [
    {
      name: "fruit salad",
      icon: "images/download (22).jpg",
      price: 110,
      ingredients: ["apples", "bananas", "strawberries", "blueberries", "grapes"],
      calories: 220,
      youtubeUrl: "https://www.youtube.com/embed/Zp-F68Fa-ps",
      steps: [
        "Wash all fruits thoroughly.",
        "Cut fruits into bite-sized pieces.",
        "Combine all fruits in a large bowl.",
        "Toss gently to mix ingredients.",
        "Serve immediately or chill before serving."
      ]
    },
    {
      name: "cocktail",
      icon: "images/download (23).jpg",
      price: 70,
      ingredients: ["orange juice", "pineapple juice", "grenadine", "ice", "fruit slices"],
      calories: 260,
      youtubeUrl: "https://www.youtube.com/embed/46XR18sUK6Q",
      steps: [
        "Fill a glass with ice.",
        "Pour orange juice and pineapple juice into the glass.",
        "Add grenadine and stir gently.",
        "Garnish with fruit slices and serve immediately."
      ]
    },
    {
      name: "smoothie",
      icon: "images/download (24).jpg",
      price: 55,
      ingredients: ["bananas", "strawberries", "yogurt", "honey", "ice"],
      calories: 290,
      youtubeUrl: "https://www.youtube.com/embed/k2x3o-qDVw0",
      steps: [
        "Combine bananas, strawberries, yogurt, honey, and ice in a blender.",
        "Blend until smooth and creamy.",
        "Pour into a glass and serve immediately."
      ]
    },
    {
      name: "banana bread",
      icon: "images/download (25).jpg",
      price: 65,
      ingredients: ["ripe bananas", "flour", "sugar", "eggs", "butter", "baking soda"],
      calories: 290,
      youtubeUrl: "https://www.youtube.com/embed/qUmDpPfY_h0",
      steps: [
        "Preheat oven to 350°F (175°C).",
        "Mash ripe bananas in a large bowl.",
        "In another bowl, mix flour, sugar, eggs, and butter.",
        "Combine wet and dry ingredients.",
        "Pour batter into a greased loaf pan.",
        "Bake for 50-60 minutes or until golden brown.",
        "Cool completely before serving."
      ]
    },
    {
      name: "fruit curry",
      icon: "images/download (26).jpg",
      price: 20,
      ingredients: ["mixed fruits (apple, pineapple, mango)", "coconut milk", "curry powder", "onion", "garlic"],
      calories: 270,
      youtubeUrl: "https://www.youtube.com/embed/E0Lo-NJx4yA",
      steps: [
        "Sauté finely chopped onion and minced garlic in a pan until translucent.",
        "Stir in curry powder and toast lightly for 30 seconds to release aromatics.",
        "Pour in rich coconut milk and bring the base liquid to a gentle simmer.",
        "Add firm diced fruits like apple and pineapple, simmering for 5 minutes.",
        "Fold in soft mango chunks last, cook 2 minutes, then remove from heat."
      ]
    },
    {
      name: "mango chia pudding",
      icon: "images/images (3).png",
      price: 120,
      ingredients: ["chia seeds", "almond milk", "maple syrup", "fresh mango puree"],
      calories: 240,
      youtubeUrl: "https://www.youtube.com/embed/O94Ex6dL6jo",
      steps: [
        "Whisk chia seeds, almond milk, and sweetener together in a container.",
        "Refrigerate for at least 4 hours (or overnight) until swollen into a thick gel pudding.",
        "Layer the thick chia pudding into serving glasses alternately with fresh mango puree."
      ]
    },
    {
      name: "strawberry sorbet",
      icon: "images/images (4).png",
      price: 30,
      ingredients: ["frozen strawberries", "honey", "lemon juice", "warm water"],
      calories: 170,
      youtubeUrl: "https://www.youtube.com/embed/zQOvOIYirjE",
      steps: [
        "Add frozen strawberries, honey, and a splash of fresh lemon juice into a food processor.",
        "Blend on high power, pouring in small drops of warm water if needed to smooth out chunks.",
        "Once a thick, uniform frozen texture forms, serve immediately or freeze for later."
      ]
    }
  ]
};

Object.values(recipes).forEach(categoryRecipes => {
  categoryRecipes.forEach(recipe => {
    recipe.youtubeUrl = recipe.youtubeUrl || "";
  });
});
