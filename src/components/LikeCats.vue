<template>
  <body>
    <header class="header">
      <div class="container">
        <div class="header-block">
          <nav class="header-nav">
            <div class="link-wrapper">
              <router-link class="nav-link" to="/frontend-challenge/" exact>Все котики</router-link>
            </div>
            <div class="link-wrapper">
              <router-link class="nav-link" to="/frontend-challenge/like-cats" >Любимые котики</router-link>
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
              <div :key="componentKey">
                <div class="image-wrapper" v-for="url of addedUrl" :key="url">
                  <img class="cat-img" :src="url" alt="" />
                  <label class="wrapper-like">
                    <input
                      type="checkbox"
                      class="check-box"
                      @click="removeLikeCats"
                      checked
                    />
                    <div class="circle"></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </body>
</template>

<script>
export default {
  name: "LikeCats",
  data() {
    return {
      addedUrl: JSON.parse(localStorage.url),
      componentKey: 0,
    };
  },
  methods: {
    removeLikeCats(e) {
      console.log(e.target);

      if (!e.target.checked) {
        const urlImage = e.target.parentNode.parentNode
          .querySelector("img")
          .getAttribute("src");

        const parseUrl = JSON.parse(localStorage.url);
        const delUrl = parseUrl.splice(parseUrl.indexOf(urlImage), 1); //
        localStorage.url = JSON.stringify(parseUrl);
        this.addedUrl = parseUrl;
        this.componentKey++;
        console.log(delUrl);
        console.log(parseUrl);
      }
    },
  },
};
</script>

<style scoped>
.love-cats > div {
  display: flex;
  flex-wrap: wrap;
  row-gap: 52px;
  column-gap: 47px;
}
</style>