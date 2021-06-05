const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },

  set appetizers(appetizerMenu) {
    this._courses.appetizers = appetizerMenu;
  },
   set mains(mainMenu) {
     this._courses.mains = mainMenu;
  },
  set desserts(dessertMenu) {
    this._courses.desserts = dessertMenu;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },

   addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

/* You can use:
generateRandomMeal() {

}
OR
generateRandomMeal: function() {

} */
  generateRandomMeal: function() {
    const appetizers = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizers.price + mains.price + desserts.price;

    return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice}. `;
  },
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Chicken Wings', 6.25);
menu.addDishToCourse('appetizers', 'Fries', 5.15);

menu.addDishToCourse('mains', 'Fried Rice', 7.55);
menu.addDishToCourse('mains', 'Pounded Yam & Egusi Soup', 15.00);
menu.addDishToCourse('mains', 'Yam & Egg Sauce', 10.15);

menu.addDishToCourse('desserts', 'Cake', 3.15);
menu.addDishToCourse('desserts', 'Ice Cream', 4.10);
menu.addDishToCourse('desserts', 'Fruit Salad', 6.45);

let meal = menu.generateRandomMeal();
console.log(meal);
