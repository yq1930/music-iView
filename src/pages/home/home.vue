<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="header">
          <div class="h-logo">
            <img src="../../assets/icon/icon-163log.png" alt>
            <p>网易云音乐</p>
          </div>
          <div class="h-nav">
            <Menu mode="horizontal" active-name="1">
              <MenuItem name="1">发现音乐</MenuItem>
              <MenuItem name="2">我的音乐</MenuItem>
              <MenuItem name="3">朋友</MenuItem>
              <MenuItem name="4">商城</MenuItem>
              <MenuItem name="5">音乐人</MenuItem>
              <MenuItem name="6">下载客户端</MenuItem>
            </Menu>
          </div>
          <div class="h-search">
            <Input prefix="ios-search-outline" placeholder="音乐/用户/视频/电台"/>
          </div>
          <div class="h-creator">
            <Button shape="circle">创作者中心</Button>
          </div>
          <div class="h-login">
            <Dropdown>
              <a href="javascript:void(0)">登录
                <Icon type="md-arrow-dropdown"/>
              </a>
              <DropdownMenu slot="list">
                <DropdownItem>
                  <Icon custom="i-icon icon-mobile" size="18"/>手机号登录
                </DropdownItem>
                <DropdownItem>
                  <Icon custom="i-icon icon-weixin0" size="18"/>微信登录
                </DropdownItem>
                <DropdownItem>
                  <Icon custom="i-icon icon-qq0" size="18"/>QQ登录
                </DropdownItem>
                <DropdownItem>
                  <Icon custom="i-icon icon-sina" size="18"/>新浪微博登录
                </DropdownItem>
                <DropdownItem>
                  <Icon custom="i-icon icon-wangyi0" size="18"/>网易邮箱账号登录
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </Header>
      <Content>
        <Tabs v-model="value">
          <TabPane label="推荐" name="name1"></TabPane>
          <TabPane label="排行榜" name="name2"></TabPane>
          <TabPane label="歌单" name="name3"></TabPane>
          <TabPane label="主播电台" name="name4"></TabPane>
          <TabPane label="歌手" name="name5"></TabPane>
          <TabPane label="新歌上架" name="name6"></TabPane>
        </Tabs>
        <div class="c-bg">
          <!-- 推荐页 -->
          <div v-show="value === 'name1'">
            <Carousel
              v-model="value3"
              loop
              :autoplay="setting.autoplay"
              :autoplay-speed="setting.autoplaySpeed"
              :dots="setting.dots"
              :radius-dot="setting.radiusDot"
              :trigger="setting.trigger"
              :arrow="setting.arrow"
            >
              <CarouselItem v-for="(banner, index1) in banners" :key="index1" v-show="banners">
                <div class="c-banner">
                  <img v-lazy="banner.imageUrl" alt>
                </div>
              </CarouselItem>
            </Carousel>
            <div class="content">
              <div class="c-left">
                <div class="c-hot">
                  <div class="hot-title">
                    <h3>
                      <Icon type="md-disc"/>热门推荐
                      <span>华语</span>
                      <span>|</span>
                      <span>流行</span>
                      <span>|</span>
                      <span>摇滚</span>
                      <span>|</span>
                      <span>民谣</span>
                      <span>|</span>
                      <span>电子</span>
                    </h3>
                    <p>更多
                      <Icon type="ios-arrow-round-forward"/>
                    </p>
                  </div>
                  <div class="hot-lists">
                    <ul class="list-song">
                      <li
                        v-for="(song, index2) in songs"
                        :key="index2"
                        v-show="index2 < 8 && songs"
                      >
                        <div class="list-play">
                          <div class="play-bg">
                            <div class="play-number">
                              <Icon type="ios-headset"/>
                              <span>{{song.trackCount}}</span>万
                            </div>
                            <Icon type="ios-play"/>
                          </div>
                        </div>
                        <img v-lazy="song.picUrl" alt>
                        <p>{{song.name}}</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- 新碟上架 -->
                <div class="c-hot new-dish">
                  <div class="hot-title">
                    <h3>
                      <Icon type="md-disc"/>新碟上架
                    </h3>
                    <p>更多
                      <Icon type="ios-arrow-round-forward"/>
                    </p>
                  </div>
                  <div class="dh-box">
                    <swiper :options="swiperOption">
                      <swiper-slide
                        v-for="(album, index3) in albums"
                        :key="index3"
                        v-show="index3 < 10 && albums"
                      >
                        <div class="dh-img">
                          <img v-lazy="album.picUrl" alt>
                          <p>{{album.name}}</p>
                          <p>{{album.artist.name}}</p>
                        </div>
                      </swiper-slide>
                    </swiper>
                  </div>
                </div>
                <!-- 榜单 -->
                <div class="c-hot new-dish list">
                  <div class="hot-title">
                    <h3>
                      <Icon type="md-disc"/>榜单
                    </h3>
                    <p>更多
                      <Icon type="ios-arrow-round-forward"/>
                    </p>
                  </div>
                  <div class="lt-box">
                    <div class="lt-content">
                      <div class="lt-left">
                        <div class="soaring">
                          <img src="../../assets/image/img-soaring.jpg" alt>
                          <h3>云音乐飙升榜
                            <p>
                              <Icon type="ios-play"/>
                              <span>
                                <Icon type="ios-folder"/>
                              </span>
                            </p>
                          </h3>
                        </div>
                        <ul class="soaring-lists">
                          <li
                            v-for="(soaring, index4) in soaringLists"
                            :key="index4"
                            v-show="index4 < 10 && soaringLists"
                          >
                            {{index4+1}}
                            <span>{{soaring.name}}</span>
                          </li>
                          <li class="all">查看全部 ></li>
                        </ul>
                      </div>
                      <div class="lt-center">
                        <div class="soaring">
                          <img src="../../assets/image/img-new.jpg" alt>
                          <h3>云音乐新歌榜
                            <p>
                              <Icon type="ios-play"/>
                              <span>
                                <Icon type="ios-folder"/>
                              </span>
                            </p>
                          </h3>
                        </div>
                        <ul class="soaring-lists">
                          <li
                            v-for="(newSong, index5) in newSongs"
                            :key="index5"
                            v-show="index5 < 10 && newSongs"
                          >
                            {{index5+1}}
                            <span>{{newSong.name}}</span>
                          </li>
                          <li class="all">查看全部 ></li>
                        </ul>
                      </div>
                      <div class="lt-right">
                        <div class="soaring">
                          <img src="../../assets/image/img-original.jpg" alt>
                          <h3>云音乐原创榜
                            <p>
                              <Icon type="ios-play"/>
                              <span>
                                <Icon type="ios-folder"/>
                              </span>
                            </p>
                          </h3>
                        </div>
                        <ul class="soaring-lists">
                          <li
                            v-for="(original, index6) in originals"
                            :key="index6"
                            v-show="index6 < 10 && originals"
                          >
                            {{index6+1}}
                            <span>{{original.name}}</span>
                          </li>
                          <li class="all">查看全部 ></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="c-right">
                <div class="r-login">
                  <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                  <Button>用户登录</Button>
                </div>
                <div class="r-singer">
                  <ul>
                    <li>
                      <h3>入驻歌手</h3>
                      <p>查看全部 ></p>
                    </li>
                    <li></li>
                    <li
                      v-for="(singer, index7) in enterSingers"
                      :key="index7"
                      v-show="index7 < 5 && enterSingers"
                    >
                      <img v-lazy="singer.img1v1Url" alt>
                      <div class="singer">
                        <p>{{singer.name}}</p>
                      </div>
                    </li>
                    <div class="musician">
                      <Button>申请成为网易音乐人</Button>
                    </div>
                  </ul>
                </div>
                <div class="r-anchor">
                  <ul>
                    <li>
                      <h3>热门主播</h3>
                    </li>
                    <li></li>
                    <li
                      v-for="(artist, index8) in artists"
                      :key="index8"
                      v-show="index8 < 5 && artists"
                    >
                      <div class="anchor">
                        <img v-lazy="artist.img1v1Url" alt>
                        <div class="anchor-name">
                          <h3>
                            {{artist.name}}
                            <i>V</i>
                          </h3>
                          <p v-for="(item, index9) in artist.alias" :key="index9">{{item}}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- 排行榜 -->
          <div class="tab-name--2" v-show="value === 'name2'">
            <div class="leaderboard">
              <div class="ld-left">
                <div class="ld-lists--1">
                  <h3>云音乐特色榜</h3>
                  <ul class="ld-lists">
                    <li
                      v-for="(list, index10) in toplistDetail"
                      :key="index10"
                      v-show="index10 < 4 && toplistDetail"
                      @click="listName(index10)"
                    >
                      <div class="ld-list_soaring">
                        <img v-lazy="list.coverImgUrl" alt>
                        <div class="soaring-name">
                          <p>{{list.name}}</p>
                          <p>{{list.updateFrequency}}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <!--  -->
                <div class="ld-lists--1">
                  <h3>全球媒体榜</h3>
                  <ul class="ld-lists">
                    <li
                      v-for="(list, index10) in toplistDetail"
                      :key="index10"
                      v-show="index10 > 3 && toplistDetail"
                      @click="listName(index10)"
                    >
                      <div class="ld-list_soaring">
                        <img v-lazy="list.coverImgUrl" alt>
                        <div class="soaring-name">
                          <p>{{list.name}}</p>
                          <p>{{list.updateFrequency}}</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="ld-right">
                <div
                  class="ld-rt-pdding"
                  v-for="(listDetail, index11) in toplistDetail"
                  :key="index11"
                  v-show="index11===step && toplistDetail"
                >
                  <div class="ld-rt-flex">
                    <div class="ld-rt-img">
                      <img v-lazy="listDetail.coverImgUrl" alt>
                    </div>
                    <div class="ld-rt-name">
                      <h3>{{listDetail.name}}</h3>
                      <p>
                        <Icon type="ios-time-outline"/>最近更新:
                        <span
                          v-for="(item, index12) in updateTime"
                          :key="index12"
                          v-show="index12 === step"
                        >{{item}}</span>
                        ({{listDetail.updateFrequency}})
                      </p>
                      <ul>
                        <li>
                          <Button type="primary" icon="md-arrow-dropright">播放</Button>
                          <Button type="primary" icon="ios-add"></Button>
                        </li>
                        <li>
                          <Button icon="ios-folder">({{listDetail.subscribedCount}})</Button>
                        </li>
                        <li>
                          <Button icon="ios-redo">({{listDetail.subscribedCount}})</Button>
                        </li>
                        <li>
                          <Button icon="md-download">下载</Button>
                        </li>
                        <li>
                          <Button icon="md-text">({{listDetail.subscribedCount}})</Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!--歌曲列表-->
                  <div class="ld-rt-songs">
                    <div class="songs-title">
                      <h3>
                        歌曲列表
                        <span>{{listDetail.trackCount}}首歌</span>
                      </h3>
                      <p>播放:{{listDetail.playCount}}次</p>
                    </div>
                    <div class="songs-box">
                      <Table
                        :columns="columns1"
                        :data="data1"
                        v-show="step === 0"
                        stripe
                        :loading="loading"
                      ></Table>
                      <Table
                        :columns="columns1"
                        :data="data1"
                        v-show="step"
                        stripe
                        :loading="loading"
                      ></Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 歌单 -->
          <div v-show="value === 'name3'"></div>
          <!-- 主播电台 -->
          <div v-show="value === 'name4'"></div>
          <!-- 歌手 -->
          <div v-show="value === 'name5'"></div>
          <!-- 新碟上架 -->
          <div v-show="value === 'name6'"></div>
        </div>
      </Content>
      <Footer>
        <div class="footer">
          <div class="f-box">
            <div class="f-left">
              <ul>
                <li>关于网易 | 客户服务 | 服务条款 | 网站导航 | 意见反馈</li>
                <li>
                  网易公司版权所有©1997-2019
                  <span>杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
                </li>
                <li>
                  违法和不良信息举报电话：0571-89853516
                  <span>举报邮箱：ncm5990@163.com</span>
                </li>
              </ul>
            </div>
            <div class="f-right">
              <ul>
                <li>
                  <img src="../../assets/icon/icon-user.png" alt>
                  <p>用户认证</p>
                </li>
                <li>
                  <img src="../../assets/icon/icon-music.png" alt>
                  <p>独立音乐人</p>
                </li>
                <li>
                  <img src="../../assets/icon/icon-appreciate.png" alt>
                  <p>赞赏</p>
                </li>
                <li>
                  <img src="../../assets/icon/icon-video.png" alt>
                  <p>视频奖励</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import {
  getBanner,
  getPersonalized,
  getAlbum,
  getSoaring,
  getNewSongs,
  getOriginal,
  getEnterSinger,
  getArtists,
  getToplistDetail,
  getList
} from "../../service/getData";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import { resolve } from "path";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      value: "name1",
      value3: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 8000,
        dots: "inside",
        radiusDot: true,
        trigger: "hover",
        arrow: "hover"
      },
      banners: [],
      songs: [],
      albums: [],
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      soaringLists: [],
      newSongs: [],
      originals: [],
      enterSingers: [],
      artists: [],
      toplistDetail: [],
      updateTime: [],
      step: 0,
      loading: false,
      columns1: [
        {
          type: "index",
          width: 60,
          align: "left",
          title: " "
        },
        {
          title: "标题",
          key: "name",
          width: 300
        },
        {
          title: "时长",
          key: "time"
        },
        {
          title: "歌手",
          key: "singer"
        }
      ],
      data1: [
        {
          name: "",
          time: "",
          singer: ""
        }
      ],
      idx: 3,
      lists: []
    };
  },
  mounted() {
    // this.swiper.slideTo(3, 1000, false);
    getBanner().then(res => {
      this.banners = res.banners;
    });
    getPersonalized().then(res => {
      this.songs = res.result;
    });
    getAlbum().then(res => {
      this.albums = res.albums;
    });
    // 飙升榜
    getSoaring().then(res => {
      this.soaringLists = res.playlist.tracks;
    });
    // 新歌榜
    getNewSongs().then(res => {
      this.newSongs = res.playlist.tracks;
    });
    // 原创榜
    getOriginal().then(res => {
      this.originals = res.playlist.tracks;
    });
    getEnterSinger().then(res => {
      this.enterSingers = res.artists;
    });
    getArtists().then(res => {
      this.artists = res.artists;
    });
    getToplistDetail().then(res => {
      this.toplistDetail = res.list;
      this.getTime();
    });
    // 排行榜
    getList(this.idx).then(res => {
      this.lists = res.playlist.tracks;
      this.getData();
    });
  },
  methods: {
    listName(index10) {
      this.step = index10;
      this.loading = true;
      switch (this.step) {
        case 0:
          this.idx = 3;
          getList(this.idx).then(res => {
            if (res) {
              this.lists = res.playlist.tracks;
              this.getData();
              this.loading = false;
            } else {
              this.$Message.error("网络连接错误");
            }
          });
          break;
        case 1:
          this.idx = 0;
          getList(this.idx).then(res => {
            this.lists = res.playlist.tracks;
            this.getData();
            this.loading = false;
          });
          break;
        case 2:
          this.idx = 2;
          getList(this.idx).then(res => {
            this.lists = res.playlist.tracks;
            this.getData();
            this.loading = false;
          });
          break;
        case 3:
          this.idx = 1;
          getList(this.idx).then(res => {
            this.lists = res.playlist.tracks;
            this.getData();
            this.loading = false;
          });
          break;
      }
    },
    getTime() {
      this.toplistDetail.forEach((value, index) => {
        let date = new Date(value.updateTime);
        let M =
          date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1;
        let D = date.getDate();
        let time = M + "月" + D + "日";
        this.updateTime.push(time);
      });
    },
    getData() {
      let data = [];
      let dataObj = {};
      for (const value of this.lists) {
        for (const item of value.ar) {
          let M = parseInt((value.dt % (1000 * 60 * 60)) / (1000 * 60));
          let S = parseInt((value.dt % (1000 * 60)) / 1000);
          if (M < 10) {
            M = "0" + M;
          }
          if (S < 10) {
            S = "0" + S;
          }
          let time = M + ":" + S;
          dataObj = {
            name: value.name,
            time: time,
            singer: item.name
          };
          data.push(dataObj);
        }
      }
      this.getObjArray(data);
    },
    getObjArray(data) {
      var result = []; //去重后返回的结果数组
      var temp = {}; //临时对象
      //将对象数组中每一项的name值作为属性，若temp不拥有此属性时则为temp添加此属性且将其值赋为true，并将这一项push到结果数组中
      for (var i = 0; i < data.length; i++) {
        var myname = data[i].name;
        if (temp[myname]) {
          //如果temp中已经存在此属性名，则说明遇到重复项
          continue; //不继续执行接下来的代码，跳转至循环开头
        }
        temp[myname] = true; //为temp添加此属性（myname）且将其值赋为true
        result.push(data[i]); //将这一项复制到结果数组result中去
      }
      this.data1 = result;
      this.data1.splice(100);
    }
  },
  computed: {
    // swiper() {
    //   return this.$refs.mySwiper.swiper;
    // }
  },
  watch: {}
};
</script>
<style lang="scss" >
.ivu-layout-header {
  background: #242424;
  .header {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .h-logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
      }
      p {
        color: #fff;
        font-size: 24px;
        margin-left: 4px;
      }
    }
    .h-nav {
      .ivu-menu-light {
        background: none;
        .ivu-menu-item,
        .ivu-menu-item-active,
        .ivu-menu-item-selected {
          color: #ccc;
        }
        li:hover {
          background: #000;
          color: #fff;
          border-bottom: 0;
        }
        li:nth-of-type(1) {
          background: #000;
          color: #fff;
        }
      }
      .ivu-menu-horizontal.ivu-menu-light:after {
        background: none;
      }
    }
    .h-search {
      .ivu-input {
        border-radius: 32px;
      }
    }
    .h-creator {
      button {
        background: none;
        color: #fff;
        border: 1px solid #ccc;
      }
    }
    .h-login {
      a {
        color: #787878;
      }
    }
  }
}
.ivu-layout-content {
  background: #f2f2f2;
  .ivu-tabs {
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
    .ivu-tabs-bar {
      border-bottom: 0;
      margin-bottom: 0;
      .ivu-tabs-nav-scroll {
        background: #c20c0c;
        color: #fff;
        height: 40px;
      }
    }
    .ivu-tabs-ink-bar {
      background: none;
    }
    .ivu-tabs-nav {
      padding-left: 600px;
    }
    .ivu-tabs-nav .ivu-tabs-tab-active {
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      background: #9b0909;
      border-radius: 20px;
    }
    .ivu-tabs-tab:hover {
      color: #fff;
      font-weight: bold;
      font-size: 12px;
      background: #9b0909;
      border-radius: 40px;
    }
  }
  .c-bg {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
    background: #fff;
    .ivu-carousel {
      height: 405px;
    }
    .c-banner {
      img {
        width: 100%;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      height: 100%;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      .c-left {
        width: 740px;
        padding: 20px;

        // 热门推荐
        .c-hot {
          .hot-title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #c20c0c;
            border-bottom-width: 2px;
            h3 {
              font-size: 20px;
              .ivu-icon {
                color: #c20c0c;
                font-size: 18px;
                padding-right: 4px;
              }
              span {
                font-size: 12px;
                margin-left: 8px;
              }
            }
            p {
              font-size: 12px;
              .ivu-icon {
                color: #c20c0c;
                font-weight: bold;
              }
            }
          }
          .hot-lists {
            .list-song {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              li {
                list-style: none;
                margin-top: 10px;
                padding-left: 10px;
                img {
                  width: 140px;
                  height: 140px;
                }
                p {
                  width: 140px;
                  word-wrap: break-word;
                  word-break: normal;
                }
                .list-play {
                  background: rgba(0, 0, 0, 0.4);
                  width: 100%;
                  height: 26px;
                  position: relative;
                  top: 140px;
                  line-height: 26px;
                  .play-bg {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 10px;
                    color: #ccc;
                  }
                }
              }
            }
          }
        }
        // 新碟推荐
        .new-dish {
          margin-top: 10px;
          .dh-box {
            width: 100%;
            height: 186px;
            border: 1px solid #ccc;
            margin-top: 20px;
            background: #f5f5f5;
            padding: 24px 20px 24px 20px;
            .dh-img {
              img {
                width: 118px;
                height: 100px;
              }
              p {
                width: 118px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }
            .ivu-carousel-item {
              text-align: center;
            }
          }
        }
        // 榜单
        .list {
          .lt-box {
            width: 100%;
            border: 1px solid #ccc;
            margin-top: 20px;
            margin-bottom: 20px;
            .lt-content {
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: #f5f5f5;
              .lt-left,
              .lt-center,
              .lt-right {
                width: 220px;
                height: auto;
                border-right: 1px solid #ccc;
                padding: 10px;
                .soaring {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  h3 {
                    margin-left: 10px;
                    color: #000;
                    font-size: 14px;
                    p {
                      color: #ccc;
                      font-size: 22px;
                    }
                  }
                }
                .soaring-lists {
                  list-style: none;
                  margin-top: 10px;
                  li {
                    width: 100%;
                    height: 32px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 16px;
                    span {
                      color: #000;
                      margin-left: 10px;
                    }
                  }
                  li:nth-of-type(1),
                  li:nth-of-type(2),
                  li:nth-of-type(3) {
                    color: #c10d0c;
                  }
                  .all {
                    text-align: right;
                  }
                }
              }
              .lt-right {
                border-right: 0;
              }
            }
          }
        }
      }
      .c-right {
        width: 360px;
        border-left: 1px solid #ccc;
        .r-login {
          padding: 20px;
          text-align: center;
          background: #f5f5f5;
          box-shadow: #000;
          p {
            text-align: left;
            color: #666;
          }
          .ivu-btn {
            width: 100px;
            height: 30px;
            color: #fff;
            background: #c20c0c;
          }
        }
        .r-singer {
          padding: 20px;
          ul {
            list-style: none;
            li:nth-of-type(1) {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            li:nth-of-type(2) {
              border-bottom: 1px solid #ccc;
              margin-top: 4px;
            }
            li:nth-of-type(n + 3) {
              margin-top: 10px;
              background: #fafafa;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              border: 1px solid #ccc;
              img {
                width: 62px;
                height: 62px;
              }
              .singer {
                p {
                  margin-left: 10px;
                  font-size: 14px;
                }
                p:first-child {
                  font-weight: 600;
                  color: #000;
                }
              }
            }
          }
          .musician {
            margin-top: 10px;
            .ivu-btn {
              width: 100%;
              height: 40px;
              color: #333;
              background: #fafafa;
            }
          }
        }
        .r-anchor {
          padding: 20px;
          ul {
            list-style: none;
            li:nth-of-type(2) {
              border-bottom: 1px solid #ccc;
              margin-top: 4px;
            }
            li:nth-of-type(n + 3) {
              .anchor {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                margin-top: 20px;
                img {
                  width: 40px;
                  height: 40px;
                }
                .anchor-name {
                  margin-left: 20px;
                  h3 {
                    i {
                      font-weight: 600;
                      color: #c20c0c;
                    }
                  }
                  p {
                    color: #666;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-wrap: normal;
                  }
                }
              }
            }
          }
        }
      }
    }
    // 排行榜
    .tab-name--2 {
      .leaderboard {
        display: flex;
        justify-content: flex-start;
        .ld-left {
          width: 240px;
          .ld-lists--1 {
            padding-top: 40px;
            h3 {
              padding: 0 10px 12px 15px;
              font-size: 14px;
              color: #000;
            }
            .ld-lists {
              list-style: none;
              li {
                //  background: #e6e6e6;
                .ld-list_soaring {
                  display: flex;
                  justify-content: flex-start;
                  padding: 20px;
                  img {
                    width: 40px;
                    height: 40px;
                  }
                  .soaring-name {
                    margin-left: 10px;
                    p:nth-of-type(1) {
                      padding-bottom: 4px;
                    }
                  }
                }
              }
              li:hover {
                background: #fafafa;
              }
            }
          }
        }
        .ld-right {
          border-left: 1px solid #ccc;
          .ld-rt-pdding {
            padding: 40px;
            .ld-rt-flex {
              display: flex;
              justify-content: flex-start;
              align-items: center;
              .ld-rt-img {
                border: 1px solid #ccc;
                padding: 10px;
                img {
                  width: 150px;
                  height: 150px;
                }
              }
              .ld-rt-name {
                margin-left: 20px;
                h3 {
                  font-size: 20px;
                }
                p {
                  font-size: 12px;
                  margin: 20px 0;
                }
                ul {
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  list-style: none;
                  li {
                  }
                  li:nth-of-type(n + 2) {
                    margin-left: 10px;
                  }
                }
              }
            }
            // 歌曲列表
            .ld-rt-songs {
              margin-top: 40px;
              .songs-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                h3 {
                  font-size: 20px;
                  span {
                    font-size: 12px;
                  }
                }
                p {
                  font-size: 12px;
                  color: #666;
                }
              }
              .songs-box {
                border-top: 2px solid #c20c0c;
                width: 100%;
                height: 100%;
                margin-top: 10px;
              }
            }
          }
        }
      }
    }
  }
}
.ivu-layout-footer {
  background: #f2f2f2;
  height: 100%;
  border-top: 1px solid #d3d3d3;
  .footer {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
    .f-box {
      display: flex;
      justify-content: space-between;
      ul {
        list-style: none;
      }
      .f-left {
        ul {
          li:nth-of-type(1) {
            color: #999;
            font-size: 12px;
          }
          li:nth-of-type(n + 2) {
            color: #666;
            font-size: 12px;
            margin-top: 6px;
            span {
              margin-left: 10px;
            }
          }
        }
      }
      .f-right {
        ul {
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            margin-left: 40px;
            text-align: center;
            img {
              width: 40px;
              height: 40px;
            }
            p {
              font-size: 12px;
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>
