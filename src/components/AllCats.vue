<template>
  <body>
    <header class="header">
      <div class="container">
        <div class="header-block">
          <nav class="header-nav">
            <div class="link-wrapper">
              <router-link class="nav-link" to="/frontend-challenge/" exact
                >Все котики</router-link
              >
            </div>
            <div class="link-wrapper">
              <router-link class="nav-link" to="/frontend-challenge/like-cats"
                >Любимые котики</router-link
              >
            </div>
          </nav>
        </div>
      </div>
    </header>

    <main>
      <section class="main">
        <div class="container">
          <div class="main-block">
            <div class="love-cats">
              <div
                class="image-wrapper"
                v-for="url of data"
                :key="url.id + Date.now()"
              >
                <img class="cat-img" :src="url.url" alt="" @click="img" />
                <label class="wrapper-like">
                  <input
                    type="checkbox"
                    class="check-box"
                    @click="addLikeCats"
                  />
                  <div class="circle"></div>
                </label>
              </div>
            </div>

            <div @click="moreCats" class="more-cats">
              ... загружаем еще котиков ...
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
import axios from "axios";

export default {
  name: "AllCats",
  data() {
    return {
      data: [],
      url: "",
      page: 1,
    };
  },
  watch: {
    url(newUrl) {
      localStorage.url = newUrl;
    },
  },

  mounted() {
    this.loadNextImage();
    document.onscroll = () => {
      const heightNow = document
        .querySelector(".more-cats")
        .getBoundingClientRect();
      if (heightNow.y === 600) {
        this.page++;
        this.loadNextImage();
      }
    };
  },
  methods: {
    async loadNextImage() {
      try {
        axios.defaults.headers.common["x-api-key"] =
          "d8c07093-2298-45f3-9d95-d595ded37ef0";

        let response = await axios.get(
          "https://api.thecatapi.com/v1/images/search",
          { params: { limit: 15, page: this.page, order: "desc" } }
        );

        let arr = [];
        if (!this.data) {
          for (let item of this.data) {
            if (!response.data.find((elem) => elem.id === item.id)) {
              arr.push(item);
            }
          }
          this.data.push(...arr);
        } else {
          this.data.push(...response.data);
        }
      } catch (err) {
        console.log(err);
      }
    },
    moreCats() {
      this.page++;
      this.loadNextImage();
    },
    img() {
      console.log("wsr");
    },
    addLikeCats(e) {
      try {
        JSON.parse(localStorage.url);
      } catch (e) {
        localStorage.setItem("url", "[]");
      }

      if (e.target.checked) {
        const urlImage = e.target.parentNode.parentNode
          .querySelector("img")
          .getAttribute("src");

        if (localStorage.url && Array.isArray(JSON.parse(localStorage.url))) {
          localStorage.url = JSON.stringify([
            ...JSON.parse(localStorage.url),
            urlImage,
          ]); //
          this.url = localStorage.url;
        }
      } else {
        const urlImage = e.target.parentNode.parentNode
          .querySelector("img")
          .getAttribute("src");
        const parseUrl = JSON.parse(localStorage.url);
        const delUrl = parseUrl.splice(
          find((elem) => elem === urlImage),
          1
        ); //
        localStorage.url = JSON.stringify(parseUrl);
        console.log(delUrl);
        console.log(parseUrl);
      }
    },
  },
};
</script>

<style>
*,
*:after,
*:before {
  font-family: Montserrat, sans-serif;
  color: #ffffff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  margin: 0 auto;
  max-width: 1346px;
  height: 100%;
  padding: 0 15px;
}

.header {
  background-color: #2196f3;
}

.header-nav {
  display: flex;
}

.link-wrapper {
  display: flex;
}

.nav-link {
  text-decoration: none;
  padding: 23px 15px;
}

.love-cats {
  justify-content: center;
  margin: 48px 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 52px;
  column-gap: 47px;
}

.more-cats {
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.25px;
  color: #000000;
  padding-bottom: 31px;
  cursor: pointer;
}

.more-cats:hover {
  text-decoration: underline;
}

.cat-img {
  width: 225px;
  height: 225px;
  object-fit: cover;
}

.cat-img:hover {
  box-shadow: 0px 6px 5px rgba(0, 0, 0, 0.24), 0px 9px 18px rgba(0, 0, 0, 0.18);
  cursor: pointer;
}

.link-wrapper:hover {
  cursor: pointer;
  background-color: #1e88e5;
}

.image-wrapper {
  position: relative;
}

.wrapper-like {
  position: absolute;
  bottom: 65px;
  right: 60px;
}

.check-box {
  display: none;
}

.check-box:hover + .circle {
  background-image: url(../assets/favorite.svg);
}

.image-wrapper:hover .circle {
  display: flex;
}

.check-box:checked + .circle {
  display: flex;
}

a.router-link-active,
li.router-link-active > a {
  background-color: #1e88e5;
}

.circle {
  display: none;
  cursor: pointer;
  position: absolute;
  width: 48px;
  height: 48px;
  background-image: url(../assets/favorite_border.svg);
  background-repeat: no-repeat;
}

.check-box:checked + .circle {
  background-image: url(../assets/favorite-checked.svg);
}
</style>
