import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/Coolie/launch/WP/1500x600_Hero-Tall_WP._CB412534930_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="1"
            title="The Kite Runner"
            price={20}
            image="data:image/jpeg;base64,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"
            rating={5}
          />
          <Product
            id="2"
            title="Kenwood kMix Stand Mixer"
            price={250}
            rating={4}
            image="https://m.media-amazon.com/images/I/51ae8jtSakL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Logitech G102 Light Sync Gaming Mouse with Customizable RGB Lighting, 6 Programmable Buttons"
            price={20}
            rating={3}
            image="https://m.media-amazon.com/images/I/61UxfXTUyvL._AC_UY218_.jpg"
          />
          <Product
            id="4"
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            price={50}
            rating={5}
            image="https://m.media-amazon.com/images/I/51DZUkYtWfL._AC_UY218_.jpg"
          />
          <Product
            id="5"
            title="Apple iPad Pro (11-inch, Wi-Fi, 512GB) - Space Grey (2nd Generation)"
            price={1000}
            rating={4}
            image="https://m.media-amazon.com/images/I/81p1L85KinL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Samsung 27-inch (68.4 cm) Curved Gaming Monitor- Full HD, AMD Free Sync - LC27G55TQWWXXL"
            price="199.99"
            rating={3}
            image="https://m.media-amazon.com/images/I/81vlA84pg6L._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
