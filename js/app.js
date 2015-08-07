(function () {
  var app = angular.module('recipeBookApp', []);

  app.controller("RecipeController", function($scope) {
    $scope.recipes = recipes;
    $scope.selectedRecipe = recipes[-1];
    $scope.selectRecipe = function(recipe) {
      $scope.selectedRecipe = recipe;
    }
  });
// ItemController to allow array of ingredients
  app.controller('ItemController', ['$scope', function ($scope) {
      $scope.selectItem = function (ingredient) {
          $scope.selectedIngredient = ingredient;
      };
  }]);

  recipes = [
  {
    title: "Lemony Butter Beans",
    ingredients: [
      {ingredient: "400g giant butter beans - drained and washed"},
      {ingredient: "1 clove of garlic"},
      {ingredient: "1 onion"}, 
      {ingredient: "1 lemon (grated peel and juice of half)"}, 
      {ingredient: "handful of spinach"}, 
      {ingredient: "a slosh of Noilly Prat"}, 
      {ingredient: "1 tbsp chopped parsley"}, 
      {ingredient: "olive oil"}
    ],
    method: "Add a little olive oil to a saucepan and set over a medium heat. Finely slice the onion and chop the garlic and add to the pan. Slowly cook the onions and garlic until beginning to soften, add the Noilly Prat and turn the heat up a little (the onion should just soften rather than colour). Add the butter beans and stir , they're fragile so be gentle. Heat through then add the spinach to wilt. Take off the heat and stir in the lemon juice, peel and parsley. Serve with a turn of black pepper."
  },
    {
      title: "Easy Pickled Cucumber",
      ingredients: [
      {ingredient: "1/2 cucumber"},
      {ingredient: "3 tbsp white wine vinegar"},
      {ingredient: "dash of Agave syrup"}, 
      {ingredient: "1 tsp chopped dill"}, 
      {ingredient: "pinch sea salt & pepper"},
    ],
      method: "Cut the cucumber in half length ways and finely slice into half-moons. Add to a bowl along with the vinegar, Agave and salt and pepper. Refrigerate for 30 minutes (or until soft) and stir in the chopped dill to serve. Perfect served as a burger garnish."
    },  
    {
      title: "Coriander Sweet Potatoes",
      ingredients: [
      {ingredient: "2 medium sized sweet potatoes - skin on cut into 2cm chunks"},
      {ingredient: "pinch of sea salt & pepper"},
      {ingredient: "1 tsp coriander seeds"}, 
      {ingredient: "1 tsp chopped dill"}, 
      {ingredient: "1 tsp olive oil"},
    ],
      method: "Place the potato chunks onto an oven proof in a single layer and drizzle with the olive oil. Crush the seeds in a pestle and mortar and scatter over the potatoes with the salt and pepper. Fab served on top of a veg curry."
    },
    {
      title: "Sweet Corn Fritters",
      ingredients: [
      {ingredient: "Small can of sweet corn, drained"},
      {ingredient: "1 finely sliced spring onion"},
      {ingredient: "1 tsp flour"},
      {ingredient: "1 egg, white and yolk seperated"},
      {ingredient: "pinch of sea salt & pepper"},
      {ingredient: "pinch of smoked paprika"},       
      {ingredient: "butter or olive oil to fry"},
    ],
      method: "Place all ingredients except the oil/butter and egg white into a bowl and mix. In a seperate bowl, whisk the egg whites into soft peaks. Take a spoonful of the corn mixture and stir into the egg white, once combined, gently fold in the remaining corn mixture. Heat the oil or butter in a large frying pan on a medium heat, use a dessert spoon to make heaped piles of the mixture. Allow to cook for 5-7 minutes then carefully flip over, they should be golden brown. Serve as a snack with garlic mayo and chunky guacamole."
    }
  ]

})();