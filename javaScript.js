const getNews = async function () {

const API_KEY ="4e3c3bad27f143c6bc90f43c0d7d8a9d";
const url ="https://newsapi.org/v2/top-headlines?country=tr&apiKey=" + API_KEY;

try {
    const res = await fetch(url);
    if(!res.ok) {
        throw new Eroor(`Something went wrong: ${res.status}`)
    }
    const data = await res.json();
    console.log(data.articles);
} 
catch (error) {
    console.log(error);
}   
}
getNews();
