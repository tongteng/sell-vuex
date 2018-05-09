<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        transitionName: 'slide-left'
      }
    },
    // 监听路由的路径，可以通过不同的路径去选择不同的切换效果
    watch: {
      '$route' (to, from) {
        if (to.path === '/') {
          this.transitionName = 'slide-right';
        } else {
          this.transitionName = 'slide-left';
        }
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  * {
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB",STHeiti,"Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;
    line-height: 1.7;
    font-size: 16px;
    color: #404040;
    overflow-x: hidden;
  }

  .view {
    position: relative;
    transition: all .5s cubic-bezier(.55, 0, .1, 1);
  }

  .slide-left-enter,
  .slide-right-leave-active,
  .slide-left-leave-active,
  .slide-right-enter {
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    transform: translate-3d(100%, 0, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    transform: translate-3d(-100%, 0, 0);
  }

  body {
    background-color: #f2f4f7;
  }

  /* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
