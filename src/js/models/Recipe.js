import axios from 'axios';
import {key} from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios (`https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.image = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
         this.ingredients = res.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
            alert('An error happened :(')
        }
    }

    calcTime() {
        // 15 minutes for every 3 ingredients
        const numIngredients = this.ingredients.length;
        this.time = Math.ceil(numIngredients / 3) * 15
    }

    calcServings() {
        this.servings = 4;
    }
}
