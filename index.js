// variables
const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
// harsh
const stockBtn = document.getElementById("stock");
const healthBtn = document.getElementById("health");
const lifestyleBtn = document.getElementById("lifestyle");
const shoppingBtn = document.getElementById("shopping");
const BitcoinBtn = document.getElementById("Bitcoin");
// const searchBtn = document.getElementById("searchBtn");

// const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// apis
const API_KEY = "9411efe63ff6427ca1ca36cc6a6adfdc";
const HEADLINES_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
const GENERAL_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=";
const BUSINESS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=";
const SPORTS_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=";
const ENTERTAINMENT_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=";
const TECHNOLOGY_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=8&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

const BITCOIN_NEWS = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=";

// This api is need to change for search it is not working************
// const STOCK_NEWS =
//   "https://newsapi.org/v2/everything?domains=wsj.com&pageSize=8&apiKey=";
const HEALTH_NEWS =
  "https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=8&apiKey=";
// const LIFESTYLE_NEWS =
//   "https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=8&apiKey=";
// const SHOPPING_NEWS = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";

window.onload = function () {
  newsType.innerHTML = "<h4>Latest News</h4>";
  fetchHeadlines();
};

generalBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>General News</h4>";
  fetchGeneralNews();
});

businessBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Business News</h4>";
  fetchBusinessNews();
});

sportsBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Sports News</h4>";
  fetchSportsNews();
});

entertainmentBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Entertainment News</h4>";
  fetchEntertainmentNews();
});

technologyBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Technology News</h4>";
  fetchTechnologyNews();
});

stockBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Stocks News</h4>";
  fetchStockNews();
});

healthBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Health News</h4>";
  fetchHealthNews();
});

lifestyleBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>LifeStyle News</h4>";
  fetchLifeStyleNews();
});

shoppingBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Shopping News</h4>";
  fetchShoppingNews();
});

BitcoinBtn.addEventListener("click", function () {
  newsType.innerHTML = "<h4>Bitcoin News</h4>";
  fetchBitcoinNews();
});

// searchBtn.addEventListener("click", function () {
//   newsType.innerHTML = "<h4>Search : " + newsQuery.value + "</h4>";
//   fetchQueryNews();
// });

const fetchHeadlines = async () => {
  const response = await fetch(HEADLINES_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchGeneralNews = async () => {
  const response = await fetch(GENERAL_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchBusinessNews = async () => {
  const response = await fetch(BUSINESS_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchEntertainmentNews = async () => {
  const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    console.log(myJson);
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchSportsNews = async () => {
  const response = await fetch(SPORTS_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchTechnologyNews = async () => {
  const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchStockNews = async () => {
  const response = await fetch(STOCK_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchHealthNews = async () => {
  const response = await fetch(HEALTH_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchLifeStyleNews = async () => {
  const response = await fetch(LIFESTYLE_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchShoppingNews = async () => {
  const response = await fetch(SHOPPING_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

const fetchBitcoinNews = async () => {
  const response = await fetch(BITCOIN_NEWS + API_KEY);
  newsDataArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newsDataArr = myJson.articles;
  } else {
    // handle errors
    console.log(response.status, response.statusText);
    newsdetails.innerHTML = "<h5>No data found.</h5>";
    return;
  }

  displayNews();
};

// const fetchQueryNews = async () => {
//   if (newsQuery.value == null) return;

//   const response = await fetch(
//     SEARCH_NEWS + encodeURIComponent(newsQuery.value) + "&apiKey=" + API_KEY
//   );
//   newsDataArr = [];
//   if (response.status >= 200 && response.status < 300) {
//     const myJson = await response.json();
//     newsDataArr = myJson.articles;
//   } else {
//     //error handle
//     console.log(response.status, response.statusText);
//     newsdetails.innerHTML = "<h5>No data found.</h5>";
//     return;
//   }

//   displayNews();
// };

function displayNews() {
  newsdetails.innerHTML = "";

  // if(newsDataArr.length == 0) {
  //     newsdetails.innerHTML = "<h5>No data found.</h5>"
  //     return;
  // }

  newsDataArr.forEach((news) => {
    var date = news.publishedAt.split("T");

    var col = document.createElement("div");
    col.className = "col-sm-12 col-md-4 col-lg-3 m-2 p-2 card card-body";

    var card = document.createElement("div");
    card.className = "p-2";

    var image = document.createElement("img");
    image.setAttribute("height", "matchparent");
    image.setAttribute("width", "100%");
    image.src =
      news.urlToImage ||
      "https://i-invdn-com.investing.com/news/world_news_2_69x52._800x533_L_1419494365.jpg";

    var cardBody = document.createElement("div");

    var newsHeading = document.createElement("h5");
    newsHeading.className = "card-title";
    newsHeading.innerHTML = news.title;

    var dateHeading = document.createElement("h6");
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    var discription = document.createElement("p");
    discription.className = "text-muted";
    discription.innerHTML = news.description;

    var link = document.createElement("a");
    link.className = "btn btn-dark";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    cardBody.appendChild(newsHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(discription);
    cardBody.appendChild(link);

    card.appendChild(image);
    card.appendChild(cardBody);

    col.appendChild(card);

    newsdetails.appendChild(col);
  });
}
