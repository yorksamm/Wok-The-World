// Curated Recipe Collection - Wok the World
const recipes = [
  // Chinese Recipes
  {
    id: 1,
    recipeName: "Char Siu Fan",
    recipeCuisine: "Chinese",
    recipeDesc: "Roasted pork over rice with gravy, a beloved comfort food from Cantonese cuisine.",
    recipeIngredients: "Pork shoulder, soy sauce, honey, oyster sauce, five-spice powder, rice, chicken broth, cornstarch",
    recipeDirections: "Marinate pork in soy sauce and spices, roast until caramelized, slice and serve over rice with gravy"
  },
  {
    id: 2,
    recipeName: "Xiao Long Bao",
    recipeCuisine: "Chinese",
    recipeDesc: "Delicate soup dumplings filled with pork and a savory broth, a Shanghai specialty.",
    recipeIngredients: "Wonton wrappers, ground pork, soy sauce, ginger, green onions, chicken broth, gelatin, sesame oil",
    recipeDirections: "Fill wrappers with pork mixture and chilled gelatin, wrap carefully, steam for 5-7 minutes until translucent"
  },
  {
    id: 3,
    recipeName: "Mapo Tofu",
    recipeCuisine: "Chinese",
    recipeDesc: "Silky tofu in a spicy, numbing sauce with minced pork, a classic Sichuan dish.",
    recipeIngredients: "Soft tofu, ground pork, Sichuan peppercorns, chili oil, garlic, ginger, soy sauce, cornstarch",
    recipeDirections: "Stir-fry pork with aromatics, add sauce, gently add tofu, simmer until flavors meld"
  },
  {
    id: 4,
    recipeName: "Chow Fun",
    recipeCuisine: "Chinese",
    recipeDesc: "Wide rice noodles stir-fried with soy sauce and protein, perfect for a quick weeknight meal.",
    recipeIngredients: "Wide rice noodles, soy sauce, protein (shrimp/chicken), bean sprouts, green onions, garlic, oil",
    recipeDirections: "Heat wok, stir-fry protein, add noodles and sauce, toss until well combined"
  },
  {
    id: 5,
    recipeName: "Peking Duck",
    recipeCuisine: "Chinese",
    recipeDesc: "Crispy roasted duck with thin pancakes and sweet bean sauce, an elegant dinner choice.",
    recipeIngredients: "Whole duck, soy sauce, vinegar, honey, salt, Peking duck pancakes, sweet bean sauce, cucumber, green onions",
    recipeDirections: "Roast duck until skin is crispy and deep brown, slice thinly, serve with pancakes and sauce"
  },
  {
    id: 6,
    recipeName: "Jook",
    recipeCuisine: "Chinese",
    recipeDesc: "Comforting rice porridge perfect for breakfast or when you're not feeling well.",
    recipeIngredients: "Rice, chicken broth, water, ginger, century egg, pork, soy sauce, green onions, salt",
    recipeDirections: "Simmer rice and broth for 45 minutes until creamy, add toppings and serve hot"
  },
  {
    id: 7,
    recipeName: "Honey Walnut Shrimp",
    recipeCuisine: "Chinese",
    recipeDesc: "Crispy shrimp with candied walnuts in a sweet and savory sauce.",
    recipeIngredients: "Shrimp, walnuts, honey, mayonnaise, condensed milk, salt, cornstarch, egg, oil",
    recipeDirections: "Fry shrimp until crispy, candied walnuts separately, toss together with honey mayo sauce"
  },
  {
    id: 8,
    recipeName: "Fish Maw Soup",
    recipeCuisine: "Chinese",
    recipeDesc: "A luxurious soup with crispy fish bladder and ginseng, served at special occasions.",
    recipeIngredients: "Fish maw, dried ginseng, goji berries, chicken, mushrooms, chicken broth, ginger, salt",
    recipeDirections: "Simmer broth with ingredients for 2-3 hours until flavors develop, serve in bowls"
  },
  {
    id: 9,
    recipeName: "Crispy Garlic Chicken",
    recipeCuisine: "Chinese",
    recipeDesc: "Tender chicken coated in crispy garlic and fried onions, incredibly flavorful.",
    recipeIngredients: "Chicken thighs, garlic, soy sauce, oyster sauce, cornstarch, egg, oil, fried onions",
    recipeDirections: "Marinate chicken, coat in cornstarch and egg, fry until golden, toss with garlic mixture"
  },
  {
    id: 10,
    recipeName: "Soy Chicken Rice Bowl",
    recipeCuisine: "Chinese",
    recipeDesc: "Tender poached chicken glazed with soy sauce, served over fluffy rice.",
    recipeIngredients: "Chicken breast, soy sauce, ginger, green onions, sesame oil, rice, garlic, water",
    recipeDirections: "Poach chicken gently, slice, drizzle with soy glaze, serve over rice with pan sauce"
  },
  {
    id: 11,
    recipeName: "Beef Enoki Rolls",
    recipeCuisine: "Chinese",
    recipeDesc: "Tender beef wrapped around delicate enoki mushrooms, a delightful appetizer.",
    recipeIngredients: "Beef slices, enoki mushrooms, soy sauce, mirin, garlic, ginger, green onions",
    recipeDirections: "Wrap mushrooms in beef, secure with toothpick, pan-fry until cooked, glaze with sauce"
  },
  {
    id: 12,
    recipeName: "Fried Rice",
    recipeCuisine: "Chinese",
    recipeDesc: "A quick and versatile dish, perfect for using up leftover rice and proteins.",
    recipeIngredients: "Cooked rice, eggs, peas, carrots, soy sauce, oyster sauce, garlic, oil, protein",
    recipeDirections: "Fry eggs first, add rice and vegetables, season with sauce, mix until heated through"
  },

  // Japanese Recipes
  {
    id: 13,
    recipeName: "Ramen",
    recipeCuisine: "Japanese",
    recipeDesc: "Noodles in a rich, flavorful broth with toppings, a beloved comfort food.",
    recipeIngredients: "Ramen noodles, chicken or pork broth, soy sauce, mirin, soft-boiled eggs, pork belly, nori, green onions",
    recipeDirections: "Prepare broth, cook noodles separately, assemble in bowl with broth and toppings"
  },
  {
    id: 14,
    recipeName: "Onigiri",
    recipeCuisine: "Japanese",
    recipeDesc: "Hand-formed rice balls with a filling, perfect for lunch boxes.",
    recipeIngredients: "Cooked rice, salt, fillings (umeboshi, salmon, or tuna), nori seaweed",
    recipeDirections: "Form rice into triangles or balls with filling in center, wrap with nori if desired"
  },
  {
    id: 15,
    recipeName: "Katsu",
    recipeCuisine: "Japanese",
    recipeDesc: "Breaded and fried cutlet served with tonkatsu sauce, crispy and satisfying.",
    recipeIngredients: "Pork or chicken cutlet, panko breadcrumbs, egg, flour, tonkatsu sauce, oil, cabbage",
    recipeDirections: "Bread cutlet, fry until golden, slice, serve with sauce and shredded cabbage"
  },
  {
    id: 16,
    recipeName: "Takoyaki",
    recipeCuisine: "Japanese",
    recipeDesc: "Crispy battered balls with octopus inside, a popular street food.",
    recipeIngredients: "Takoyaki batter mix, octopus, green onions, takoyaki sauce, mayo, bonito flakes, nori",
    recipeDirections: "Pour batter into takoyaki mold, add octopus and green onion, cook until golden"
  },
  {
    id: 17,
    recipeName: "Udon",
    recipeCuisine: "Japanese",
    recipeDesc: "Thick chewy noodles in a warm broth, simple yet deeply satisfying.",
    recipeIngredients: "Udon noodles, dashi broth, soy sauce, mirin, salt, green onions, tempura",
    recipeDirections: "Heat broth, cook noodles, serve in bowls with hot broth and toppings"
  },

  // Korean Recipes
  {
    id: 18,
    recipeName: "Bibimbap",
    recipeCuisine: "Korean",
    recipeDesc: "Rice bowl topped with vegetables, egg, and protein that you mix together.",
    recipeIngredients: "Rice, beef, spinach, carrots, zucchini, bean sprouts, egg, gochujang, sesame oil, soy sauce",
    recipeDirections: "Arrange vegetables and protein over rice, top with egg, drizzle with gochujang sauce, mix before eating"
  },
  {
    id: 19,
    recipeName: "Tteokbokki",
    recipeCuisine: "Korean",
    recipeDesc: "Chewy rice cakes in a spicy gochujang sauce, an addictive street snack.",
    recipeIngredients: "Rice cakes, gochujang, sugar, garlic, fish cake, green onions, sesame oil, water",
    recipeDirections: "Simmer sauce, add rice cakes and fish cake, cook until tender and sauce thickens"
  },
  {
    id: 20,
    recipeName: "Kimchi Fried Rice",
    recipeCuisine: "Korean",
    recipeDesc: "Spicy kimchi mixed with rice, protein, and topped with an egg, quick and flavorful.",
    recipeIngredients: "Cooked rice, kimchi, pork or spam, egg, gochujang, green onions, sesame oil, garlic",
    recipeDirections: "Stir-fry protein, add rice and kimchi, season with gochujang, top with fried egg"
  },
  {
    id: 21,
    recipeName: "Japchae",
    recipeCuisine: "Korean",
    recipeDesc: "Sweet and savory glass noodles with vegetables and protein, elegant and light.",
    recipeIngredients: "Sweet potato glass noodles, beef, spinach, carrots, mushrooms, soy sauce, sesame oil, garlic",
    recipeDirections: "Stir-fry ingredients separately, combine with cooked noodles and sauce"
  },
  {
    id: 22,
    recipeName: "Sundubu",
    recipeCuisine: "Korean",
    recipeDesc: "Soft tofu in a spicy broth that's warming and comforting, often served for breakfast.",
    recipeIngredients: "Soft tofu, gochugaru, garlic, onion, seafood or meat, egg, green onions, dashi broth",
    recipeDirections: "Simmer broth with aromatics, add tofu carefully, top with raw egg to cook in residual heat"
  },

  // Thai Recipes
  {
    id: 23,
    recipeName: "Pad Thai",
    recipeCuisine: "Thai",
    recipeDesc: "Stir-fried rice noodles with tamarind, lime, and protein, Thailand's national dish.",
    recipeIngredients: "Rice noodles, tamarind paste, lime juice, fish sauce, palm sugar, shrimp, peanuts, bean sprouts, egg",
    recipeDirections: "Stir-fry noodles with sauce, add protein, garnish with peanuts and bean sprouts"
  },
  {
    id: 24,
    recipeName: "Thai Basil Chicken",
    recipeCuisine: "Thai",
    recipeDesc: "Minced chicken with fresh Thai basil and chilies, a fragrant and spicy dish.",
    recipeIngredients: "Ground chicken, Thai basil, red chilies, garlic, fish sauce, soy sauce, oyster sauce, oil",
    recipeDirections: "Stir-fry garlic and chilies, add chicken, cook until done, add fresh basil at the end"
  },
  {
    id: 25,
    recipeName: "Green Curry",
    recipeCuisine: "Thai",
    recipeDesc: "Creamy coconut curry with green chilies and vegetables, rich and aromatic.",
    recipeIngredients: "Coconut milk, green curry paste, chicken or shrimp, Thai eggplant, basil, fish sauce, lime",
    recipeDirections: "Simmer curry paste in coconut milk, add protein and vegetables, season with fish sauce and lime"
  },
  {
    id: 26,
    recipeName: "Pad See Ew",
    recipeCuisine: "Thai",
    recipeDesc: "Wide rice noodles stir-fried with dark soy sauce, savory and slightly sweet.",
    recipeIngredients: "Wide rice noodles, dark soy sauce, protein, Chinese broccoli, garlic, chilies, oil",
    recipeDirections: "Stir-fry aromatics and protein, add noodles and soy sauce, toss until well coated"
  },
  {
    id: 27,
    recipeName: "Tom Yum Soup",
    recipeCuisine: "Thai",
    recipeDesc: "Hot and sour soup with shrimp and lemongrass, refreshing and complex.",
    recipeIngredients: "Shrimp broth, lemongrass, galangal, lime leaves, lime juice, fish sauce, chilies, mushrooms",
    recipeDirections: "Simmer broth with aromatics, add shrimp and mushrooms, finish with lime juice and fish sauce"
  },

  // Vietnamese Recipes
  {
    id: 28,
    recipeName: "Summer Rolls",
    recipeCuisine: "Vietnamese",
    recipeDesc: "Fresh rice paper rolls filled with shrimp, vegetables, and herbs, light and healthy.",
    recipeIngredients: "Rice paper, cooked shrimp, lettuce, herbs (mint, cilantro, basil), carrots, cucumber, vermicelli",
    recipeDirections: "Soften rice paper, fill with ingredients, roll tightly, serve with peanut dipping sauce"
  },
  {
    id: 29,
    recipeName: "Pho",
    recipeCuisine: "Vietnamese",
    recipeDesc: "Fragrant rice noodle soup with beef broth, Vietnam's iconic dish.",
    recipeIngredients: "Rice noodles, beef broth, star anise, cinnamon, ginger, onion, beef slices, fresh herbs, lime",
    recipeDirections: "Simmer broth with spices for hours, serve over noodles and thinly sliced beef with fresh herbs"
  },
  {
    id: 30,
    recipeName: "Banh Mi",
    recipeCuisine: "Vietnamese",
    recipeDesc: "Crispy baguette sandwich with pâté, meats, and pickled vegetables, a perfect fusion.",
    recipeIngredients: "Baguette, pâté, Vietnamese cold cuts, pickled daikon and carrot, cilantro, jalapeño, mayo",
    recipeDirections: "Toast baguette, spread with pâté and mayo, layer meats and vegetables, serve with hot sauce"
  }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = recipes;
}
