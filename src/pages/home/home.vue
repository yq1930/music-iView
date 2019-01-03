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
        <div class="c-bg">
          <Tabs value="name1">
            <TabPane label="推荐" name="name1">
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
                <CarouselItem v-for="(banner, index1) in banners" :key="index1">
                  <div class="c-banner">
                    <img :src="banner.imageUrl" alt>
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
                        <li v-for="(song, index2) in songs" :key="index2" v-if="index2 < 8">
                          <div class="list-play">
                            <div class="play-bg">
                              <div class="play-number">
                                <Icon type="ios-headset"/>
                                <span>{{song.trackCount}}</span>万
                              </div>
                              <Icon type="ios-play"/>
                            </div>
                          </div>
                          <img :src="song.picUrl" alt>
                          <p>{{song.name}}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <!-- 新碟上架 -->
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
                        <li v-for="(song, index2) in songs" :key="index2" v-if="index2 < 8">
                          <div class="list-play">
                            <div class="play-bg">
                              <div class="play-number">
                                <Icon type="ios-headset"/>
                                <span>{{song.trackCount}}</span>万
                              </div>
                              <Icon type="ios-play"/>
                            </div>
                          </div>
                          <img :src="song.picUrl" alt>
                          <p>{{song.name}}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="c-right">rightrightrightrightrightright</div>
              </div>
              <!-- 热门推荐 -->
            </TabPane>
            <TabPane label="排行榜" name="name2">标签二的内容</TabPane>
            <TabPane label="歌单" name="name3">标签三的内容</TabPane>
            <TabPane label="主播电台" name="name4">标签一的内容</TabPane>
            <TabPane label="歌手" name="name5">标签二的内容</TabPane>
            <TabPane label="新歌上架" name="name6">标签三的内容</TabPane>
          </Tabs>
        </div>
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
</template>
<script>
import { getBanner, getPersonalized } from '../../service/getData'

export default {
  data() {
    return {
      value3: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 8000,
        dots: 'inside',
        radiusDot: true,
        trigger: 'hover',
        arrow: 'hover'
      },
      banners: [],
      songs: [],
    }
  },
  mounted() {
    getBanner().then(res => {
      this.banners = res.banners;
    });
    getPersonalized().then(res => {
      this.songs = res.result;
    });
  },
  methods: {

  },
}
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
  .c-bg {
    width: 1100px;
    margin-left: auto;
    margin-right: auto;
    .ivu-tabs {
      .ivu-tabs-bar {
        border-bottom: 0;
      }
      .ivu-tabs-ink-bar {
        background: none;
      }
      .ivu-tabs-nav {
        margin-left: 200px;
      }
      .ivu-tabs-nav .ivu-tabs-tab-active {
        color: #c20c0c;
        font-weight: bold;
        font-size: 18px;
      }
      .ivu-tabs-tab:hover {
        color: #c20c0c;
        font-weight: bold;
        font-size: 18px;
      }
    }
    .c-banner {
      img {
        width: 100%;
      }
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .c-left {
        width: 730px;
        padding: 20px;
        border: 1px solid #ccc;
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
      }
      .c-right {
        width: 20%;
      }
    }
  }
}
</style>
