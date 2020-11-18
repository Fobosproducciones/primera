import React, { useEffect, useState } from "react";
import "./News.css";
import { Link } from "wouter";
import logo from "../../assets/img/logo.svg";
import Footer from "../../components/footer/Footer";

const apiURL =
  "https://api.jornalia.net/api/v1/articles?apiKey=9a5a357f82c64470a850ec978eb00172&search=bitcoin";

export default function News() {
  const [news, setNews] = useState([]);
  useEffect(function () {
    console.log("noticias");
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        const { articles } = response;
        const news = articles.map((noticia) => noticia);
        console.log(news);
        setNews(news);
      });
  }, []);

  return (
    <>
      <div className="news">
        <img src={logo} className="news--logo" alt="logo"></img>
        <div className="news--title">
          <h3>Conoce las últimas noticias en el mundo de las cryptomonedas.</h3>
        </div>
        <div className="news--container">
          {news.map((news) => (
            <div key={news._id} className="news--container-singlenew">
              <img
                src={news.provider.logo}
                className="logo"
                alt="newlogo"
              ></img>
              <p>{news.title}</p>
              <img
                src={news.imageUrl}
                className="newimage"
                alt="newimage"
              ></img>
            </div>
          ))}
        </div>
        <Link to="/">Volver al Home</Link>
      </div>
      <Footer />
    </>
  );
}
