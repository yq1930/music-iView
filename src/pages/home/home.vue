<template>
  <div class="layout">
    <Layout>
      <Header>
        <Row>
          <Col span="6" class="col-8">
            <img src="../../assets/icon/icon-163log.png" alt>
            <span>网易云音乐</span>
          </Col>
          <Col span="12" class="col-12">
            <Menu mode="horizontal" active-name="1" @on-select="route">
              <MenuItem name="1">发现音乐</MenuItem>
              <MenuItem name="2">我的音乐</MenuItem>
              <MenuItem name="3">朋友</MenuItem>
              <MenuItem name="4">商城</MenuItem>
              <MenuItem name="5">音乐人</MenuItem>
              <MenuItem name="6">
                下载客户端
                <span>HOT</span>
              </MenuItem>
            </Menu>
          </Col>
          <Col span="6" class="col-6">
            <Input prefix="ios-search" placeholder="音乐/视频/电台/用户" class="search"/>
            <Button shape="circle">创作者中心</Button>
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
                  <Icon custom="i-icon icon-sina" size="18"/>微博账号登录
                </DropdownItem>
                <DropdownItem>
                  <Icon custom="i-icon icon-wangyi0" size="18"/>网易邮箱登录
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
      </Header>
      <Content>
        <Row type="flex" justify="center">
          <Col span="12">
            <Tabs value="name1">
              <TabPane label="推荐" name="name1">标签一的内容</TabPane>
              <TabPane label="排行榜" name="name2">标签二的内容</TabPane>
              <TabPane label="歌单" name="name3">标签三的内容</TabPane>
              <TabPane label="主播电台" name="name4">标签三的内容</TabPane>
              <TabPane label="歌手" name="name5">标签三的内容</TabPane>
              <TabPane label="新碟上架" name="name6">标签三的内容</TabPane>
            </Tabs>
          </Col>
        </Row>
      </Content>
      <Footer></Footer>
    </Layout>
  </div>
</template>
<script>
export default {
  name: 'home',
  data() {
    return {

    }
  },
  methods: {
    route() {

    }
  },
}
</script>
<style lang="scss" scoped>
.layout {
  .ivu-layout-header {
    background: #242424;
    .col-8 {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 32px;
        height: 32px;
      }
      span {
        color: #fff;
        font-size: 24px;
      }
    }
    .col-12 {
      .ivu-menu-horizontal.ivu-menu-light:after {
        content: none;
      }
      .ivu-menu-light {
        background: none;
        .ivu-menu-item,
        .ivu-menu-item-active,
        .ivu-menu-item-selected {
          border: none;
          color: #ccc;
        }
        li {
          font-size: 14px;
        }
        li:hover {
          background: #000;
          color: #fff;
        }
        .ivu-menu-item {
          span {
            font-size: 14px;
            padding: 2px;
            bottom: 6px;
            text-align: center;
            position: relative;
            background: #c20c0c;
            border-radius: 10px;
          }
        }
      }
    }
    .col-6 {
      .search {
        padding-right: 10px;
        width: auto;
        border-radius: 32px;
      }
      .ivu-dropdown {
        .ivu-dropdown-rel {
          a {
            color: #787878;
            padding-left: 10px;
          }
        }
      }
    }
  }
  .ivu-layout-content {
  }
  .ivu-layout-footer {
  }
}
</style>
