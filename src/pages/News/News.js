import React, { useEffect, useState } from "react";
import "./News.css";
import { Link } from "wouter";
import logo from "../../assets/img/logo.svg";
import Footer from "../../components/footer/Footer";
import Loader from "../../components/loader/Loader";

const apiURL =
  "https://api.jornalia.net/api/v1/articles?apiKey=9a5a357f82c64470a850ec978eb00172&search=bitcoin";

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(function () {
    setLoading(true);
    fetch(apiURL)
      .then((res) => res.json())
      .then((response) => {
        const { articles } = response;
        const news = articles.map((noticia) => noticia);
        console.log(news);
        setNews(news);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="loader--container">
        <Loader />
      </div>
    );

  return (
    <>
      <div className="news">
        <img src={logo} className="news--logo" alt="logo"></img>
        <div className="news--title">
          <h3>Conoce las últimas noticias en el mundo de las criptomonedas.</h3>
        </div>
        <div className="news--container">
          {news.map((news) => (
            <div key={news._id} className="news--container-singlenew">
              <div className="news--container-singlenew-text">
                <img
                  src={news.provider.logo}
                  className="logo"
                  alt="newlogo"
                ></img>
                <p>{news.title}</p>
              </div>
              <div className="news--container-singlenew-image">
                <img
                  src={news.imageUrl}
                  className="newimage"
                  alt="newimage"
                ></img>
              </div>
            </div>
          ))}
        </div>
        <Link to="/">Volver al Home</Link>
      </div>
      <Footer />
    </>
  );
}
