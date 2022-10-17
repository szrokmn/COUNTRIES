let isError = false;
const getNews = async function () {
    const apiKey = "8a4c426f938a4ee38266f2378b9247e7";
    const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${apiKey}`;   
    try {
      const res = await fetch(url);
      if (!res.ok) {
        isError = true;
        throw new Error(`something went wrong ${res.status}`);
      }
      const data = await res.json();
      // console.log(data.articles);
      renderNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };  
  const renderNews = (news) => {  
    const newsList = document.getElementById("news-list");
    if(isError){
        newsList.innerHTML +=`
        <h2>News can not be fetched</h2>
        <img src="./images/404.png" alt=""/>`;
        return;
    }
    news.forEach((item) => {
      console.log(item);
      const { title, description, urlToImage, url } = item;
      newsList.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3">
        <div class="card" style="width: 18rem;">
            <img src="${urlToImage}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="${url}" target="_blank" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>`;
    });
  };
  
  window.addEventListener("load", getNews);