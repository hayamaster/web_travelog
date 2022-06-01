import { useEffect, useState } from "react";
import Travel from "../components/Travel";
import styles from "./Home.module.css";
import Japan from '../images/2_3.jpg';
import Thailand from '../images/2_4.jpeg';
import Bolivia from '../images/bolivia3.jpg';
import Egypt from '../images/2_2.jpeg';

const images = [{
  src: Bolivia, title: 'Bolivia', 
  summary: "다른 곳에선 느낄 수 없는 광활한 자연과 세상에서 가장 큰 거울을 가지고 있는 나라"
}, {
  src: Egypt, title: 'Egypt', 
  summary: "아름다고 신비로운 홍해 탐험과 고대 이집트의 위대한 역사를 느껴보자!"
}, {
  src: Japan, title: 'Japan',
  summary: "도시의 화려함과 옛 풍경을 한번에 경험하는 여행"
}, {
  src: Thailand, title: 'Thailand',
  summary: "뜨거운 햇볕과 시원한 바다, 여유로운 휴가."
}
]

function International(){
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
  const json = await (await fetch(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8$sort_by=year`
  )).json();
  setMovies(json.data.movies);
  setLoading(false);
  };
  useEffect(() => {
      getMovies();
  }, []);
  return (
      <div className={styles.container}>
          {loading ? (
              <div className={styles.loader}>
                  <span className={styles.span1}>Loading...</span>
              </div>
          ) : (                  
                <div className={styles.movies}>   
                  {images.map((item,index) => (
                      <Travel
                          key={index}
                          id = {index + 1000}
                          image = {item.src}
                          title = {item.title}
                          summary = {item.summary}
                      />
                  ))}                
                </div>
          )}
      </div>
  );
}

export default International;