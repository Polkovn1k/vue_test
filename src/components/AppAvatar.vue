<template>
  <div class="avatar">
    <img :src="url">
  </div>
  <span class="err" v-if="showDefaultAvatar">{{ bad_avatar_message }}</span>
</template>

<script>
export default {
  props: {
    avatar_url: String,
  },
  data() {
    return {
      url: '',
      bad_avatar_message: 'К сожалению изображения по указанному URL не существует',
      no_avatar: './no_avatar.jpg',
      showDefaultAvatar: false,
    }
  },
  computed: {},
  methods: {
    setImg(url) {
      let testImg = new Image();
      testImg.src = url;
      testImg.decode()
              .then(() => {
                this.url = url;
                this.showDefaultAvatar = false;
                testImg = null;
              })
              .catch(() => {
                this.url = this.no_avatar;
                this.showDefaultAvatar = true;
                testImg = null;
                setTimeout(() => {
                  this.showDefaultAvatar = false
                }, 2000);
              })
    },
  },
  watch: {
    avatar_url(url) {
      if (url) {
        this.setImg(url);
      }
    },
  },
  mounted() {
    this.setImg(this.avatar_url);
  },
}
</script>

<style lang="scss" scoped>
  .avatar {
    display: flex;
    justify-content: center;
  }

  .avatar img {
    width: 150px;
    height: auto;
    border-radius: 50%;
  }

  .err {
    text-align: center;
    display: block;
    padding: 5px;
  }
</style>
