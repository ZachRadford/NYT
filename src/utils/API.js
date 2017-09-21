import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomArticle: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  getArticle: function(search) {
    return axios.get("http://api.nytimes.com/svc/search/v1/article?format=json&query=" + search + "&api-key=7fe02de0cac742d6b70e3ff9960cbf0f");
  }
};

