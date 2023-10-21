import React from 'react'
import { useEffect, useState } from 'react'

const NewsList = (props) => {
    const {category, searchTerm} = props;

    const [news, setNews] = useState([]);
  
  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://gnews.io/api/v4/top-headlines?lang=en`;
//&apiKey=45e29cfdd8a44c5e8e37c68a804fe490
//e21bfba3da767725996839ef50accfb7
      if (category) {
        url += `&q=${category}`;
      }
      if (searchTerm) {
        url += `&q=${searchTerm}`;
      }
      url += `&apikey=e21bfba3da767725996839ef50accfb7`;
      
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setNews(data.articles)
    };
    fetchNews();
  }, [searchTerm, category]);
  
    return (
   
        <div className="ml-10 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl-grid-cols-3 gap-5" >
    {
        news?.map((article) => (
          
            
            <div key={article.url}>
                
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={article.image == null ? "https://ipfs.io/ipfs/QmayP4HgSKhjvdbTuRzbAYU3kSn4kfLXUj9imn9S8G7Brf?filename=REY.jpg" : article.image} alt="Cardano" />
                <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{article.title}</div>
                <p className="text-gray-700 text-base">
                {article.description}
                </p>
                <a href={article.url}>Read More...</a>
               </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{article.source.name}</span>               
                </div>
                </div>
            </div>
            )

              
            
        )}
</div>

  )
}

export default NewsList
