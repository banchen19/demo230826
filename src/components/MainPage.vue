<template>
  <v-layout class="rounded rounded-md">
    <v-navigation-drawer rail permanent>
      <v-layout>

        <v-list-item nav prepend-avatar="https://randomuser.me/api/portraits/women/75.jpg"></v-list-item>

      </v-layout>
      <v-divider></v-divider>
      <!-- 上下分割线 -->
      <v-list density="compact" nav>
        <v-list-item density="comfortable" prepend-avatar="src/assets/chat_icon.svg" value="dashboard"></v-list-item>
        <!-- 订阅管理 -->
        <v-list-item density="comfortable" prepend-avatar="src/assets/fd_icon.svg" value="messages"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- ----------------------------------------------------- -->
    <v-navigation-drawer permanent rail :expand-on-hover="expand_on_hove">
      <!-- 聊天消息蓝 -->
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-avatar="src/assets/vue.svg" value="dashboard" @click="Click_expand_on_hove"></v-list-item>
        <!-- 信息 -->
        <v-list-item prepend-avatar="src/assets/vue.svg" value="messages" @click="Click_expand_on_hove"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main style="margin-left: 100px;margin-bottom: 80px;">

      <v-virtual-scroll :items="items">
        <template v-slot:default="{ item }">
          <v-list-item>
            <v-card variant="outlined">
              <!-- 顶部 -->
              <v-toolbar
          >


            <template v-slot:prepend>
              <v-btn icon="mdi-emoticon-excited-outline"></v-btn>  
            </template>

            <v-toolbar-title class="text-h6">
              你的名字
            </v-toolbar-title>

            <template v-slot:append>
              <v-btn icon="mdi-reply"></v-btn>
              <v-btn icon="mdi-share-variant"></v-btn>
              <v-btn icon="mdi-alert-octagon"></v-btn>
            </template>

            
          </v-toolbar>
              <!-- ____________________________________________________________________________________________ -->
              <!-- 消息组件 -->
              <md-card>
                <div style="margin: 20px">


                  <div v-if="item.type === 'video'">
                    <!-- 显示 video-player -->
                    <video-player class="vjs-custom-skin" ref="videoPlayer" :options="playerOptions" :playsinline="true"
                      controls @ready="playerReadied">
                    </video-player>
                  </div>
                  <div v-else-if="item.type === 'img'">
                    <!-- 显示 v-img -->
                    <v-img :width="400" aspect-ratio="16/9" cover
                      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-img>
                  </div>
                  <div v-else>
                    <!-- 显示 v-img -->
                    {{ item.msg }}
                  </div>


                </div>
              </md-card>
            </v-card>

          </v-list-item>
        </template>
      </v-virtual-scroll>

    </v-main>
    <!-- 输入框 -->

    <v-app-bar color="grey-lighten-5" height="auto" location="bottom">

      <textarea v-model="name" name="chat_msg" style="resize: none;" height="auto"></textarea>
      <v-col cols="auto">
        <v-btn icon="mdi-emoticon-excited-outline" size="x-small"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="mdi-paperclip" size="x-small"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="mdi-dots-vertical-circle" size="x-small"></v-btn>
      </v-col>

      <v-col cols="auto">
        <v-btn icon="mdi-send"></v-btn>
      </v-col>
    </v-app-bar>

  </v-layout>
</template>

<script >
import '../../src/custom-theme.css'

export default {
  data() {
    return {

      items: [
        {
          type: "video",
          msg: "text",
        },
        {
          type: "chat",
          msg: "text",
        },
        {
          type: "img",
          msg: "text",
        }
      ],
      expand_on_hove: false,
      //
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: true, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "", //这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
            src: "oceans.mp4", //url地址
          },
        ],
        poster: "https://wotyu.999.cn/video/MediaPlay/4.png", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
    }
  },

  mounted() {
    // console.log('this is current player instance object', this.player)
    setTimeout(() => {
      console.log('dynamic change options', this.player)

      // change src
      // this.playerOptions.sources[0].src = 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm';

      // change item
      // this.$set(this.playerOptions.sources, 0, {
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // })

      // change array
      // this.playerOptions.sources = [{
      //   type: "video/mp4",
      //   src: 'https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm',
      // }]
      this.player.muted(false)
    }, 5000)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    Click_expand_on_hove() {
      this.expand_on_hove = true;
      setTimeout(() => {
        this.expand_on_hove = false;
      }, 500);
    },
    // 监听事件
    onPlayerPlay(player) {
      // console.log('播放器播放！', player)
    },
    onPlayerPause(player) {
      // console.log('播放器暂停！', player)
    },
    onPlayerEnded(player) {
      // console.log('播放器结束！', player)
    },
    onPlayerLoadeddata(player) {
      // console.log('播放器已加载数据！', player)
    },
    onPlayerWaiting(player) {
      // console.log('播放器等待中！', player)
    },
    onPlayerPlaying(player) {
      // console.log('播放器正在播放！', player)
    },
    onPlayerTimeupdate(player) {
      // console.log('播放器时间更新！', player.currentTime())
    },
    onPlayerCanplay(player) {
      // console.log('播放器可以播放！', player)
    },
    onPlayerCanplaythrough(player) {
      // console.log('播放器可以连续播放！', player)
    },

    // 或者监听状态事件
    playerStateChanged(playerCurrentState) {
      // console.log('播放器当前更新状态', playerCurrentState)
    },

    // 播放器已准备就绪
    playerReadied(player) {
      // 跳转到第10秒
      console.log('示例播放器1已就绪', player)
      player.currentTime(10)
      // console.log('示例01：播放器已准备就绪', player)
    }
  }
};

</script>

<style>
.my_video_img_list_item {
  margin-top: 20px;
  height: 100%;
  width: 30%;
  margin-left: 20px;
  margin-bottom: 20px;

  ::v-deep {
    .video-player {
      height: 100%;
      width: 100%;

      .video-js {
        video {
          object-fit: contain;
        }

        &.vjs-fluid {
          height: 100% !important;

        }
      }
    }

    .hide_video {
      video {
        display: none;
      }
    }
  }
}


textarea {
  width: 100%;
  background: #ecf0f3;
  padding: 10px;
  padding-left: 20px;
  font-size: 14px;
  height: auto;
  white-space: normal;
  box-shadow: inset 6px 6px 6px #E0E0E0, inset -6px -6px 6px white;
}

textarea::placeholder {
  color: gray;
}
</style>