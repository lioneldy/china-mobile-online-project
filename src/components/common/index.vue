<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-tab{
        padding: 10px 45px 0;
    }
    .layout-content{
        min-height: 600px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #464c5b;
    }
    .layout-header{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
        font-size: 18px;
        color: white;
        text-align: center;
        vertical-align: middle;
        overflow: hidden;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    .layout-hide-text .layout-text{
        display: none;
    }
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .demo-affix {
        display: inline-block;
        color: #fff;
        padding: 10px 30px;
        text-align: center;
        background: rgba(0, 153, 229, .9);
    }
    .btn-item {
        width: 36px;
        height: 36px;
        margin-top: 10px;
        margin-right: 20px; 
        margin-bottom: 10px; 
        text-align: center;
    }
    .layout-right-content {
        position: absolute;
        width: 390px;
        height: 100%;
        top: 60px;
        right: 0;
        border: 1px;
        overflow: hidden;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 4}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <Menu :active-name="'' + setActive" theme="dark" width="auto" @on-select="routeTo">
                    <div class="layout-logo-left">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">中移云联</span>
                    </div>
                    <Menu-group>
                        <Menu-item name="0">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            <span class="layout-text">首页</span>
                        </Menu-item>
                        <Menu-item name="1">
                            <Icon type="ios-keypad" :size="iconSize"></Icon>
                            <span class="layout-text">基础功能</span>
                        </Menu-item>
                        <Menu-item name="2">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            <span class="layout-text">基础信息管理</span>
                        </Menu-item>
                    </Menu-group>
                    <Menu-group>
                        <Menu-item name="3">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            <span class="layout-text">工单</span>
                        </Menu-item>
                        <Menu-item name="4">
                            <Icon type="ios-keypad" :size="iconSize"></Icon>
                            <span class="layout-text">知识库</span>
                        </Menu-item>
                        <Menu-item name="5">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            <span class="layout-text">客户管理</span>
                        </Menu-item>
                        <Menu-item name="6">
                            <Icon type="ios-navigate" :size="iconSize"></Icon>
                            <span class="layout-text">监控报表</span>
                        </Menu-item>
                    </Menu-group>
                    <Menu-group>
                        <Menu-item name="7">
                            <Icon type="ios-keypad" :size="iconSize"></Icon>
                            <span class="layout-text">设置</span>
                        </Menu-item>
                        <Menu-item name="8">
                            <Icon type="ios-analytics" :size="iconSize"></Icon>
                            <span class="layout-text">帮助中心</span>
                        </Menu-item>
                    </Menu-group>
                </Menu>
            </i-col>
            <i-col :span="spanRight">
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon v-if="spanLeft === 1" type="chevron-right" size="28"></Icon>
                        <Icon v-else type="chevron-left" size="28"></Icon>
                    </i-button>
                    <button type="primary" class="btn-item">签出</button>
                    <button type="primary" class="btn-item">签入</button>
                    <button type="primary" class="btn-item">小休</button>
                    <button type="primary" class="btn-item">IM</button>
                    <button type="primary" class="btn-item">保持</button>
                    <button type="primary" class="btn-item">呼转</button>
                    <button type="primary" class="btn-item">呼出</button>
                    <button type="primary" class="btn-item">应答</button>
                    <label style="margin-left:60px">{{user.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{user.id}}&nbsp;&nbsp;&nbsp;&nbsp;当前权限：</label>
                    <label style="font-weight:bold">{{user.auth}}</label>
                    <button type="primary" class="btn-item" style="float:right" @click="logout">退出登录</button>
                </div>
                <div class="layout-tab">
                    <Tabs v-model="tabActive" :animated="false" type="card" @on-tab-remove="handleTabRemove" @on-click="tabClick">
                        <Tab-pane name="0" label="首页">
                            <div class="layout-content">
                                <div class="layout-content-main">
                                    <router-view></router-view>
                                </div>
                            </div>
                        </Tab-pane>
                        <Tab-pane v-for="tab in tabs" closable :key="tab.id" :name="tab.id" :label="tab.name" v-if="tab.show">
                            <div class="layout-content">
                                <div class="layout-content-main">
                                    <router-view></router-view>
                                </div>
                            </div>
                        </Tab-pane>
                    </Tabs>
                    <div class="layout-right-content">
                        <Row>
                            <i-col :span="span1">
                                <i-button type="text" @click="toggleClick2" style="float: right;">
                                    <Icon v-if="showRight" type="chevron-left" size="28"></Icon>
                                    <Icon v-else type="chevron-right" size="28"></Icon>
                                </i-button>
                            </i-col>
                            <i-col :span="span2">
                                <div v-show="!showRight">
                                    <RightInfo></RightInfo>
                                </div>
                            </i-col>
                        </Row>
                    </div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div>
            </i-col>
        </Row>
    </div>
</template>
<script>
import RightInfo from "../page/right-hide-info.vue"
    export default {
        data () {
            return {
                spanLeft: 4,
                spanRight: 20,
                span1: 23,
                span2: 1,
                showRight: true,
                setActive: '0',
                tabActive: '0',
                user: {
                    id: '9527',
                    name: '杨小贝',
                    auth: '座席'
                },
                tabs: [
                    {
                        id: '0',
                        name: '首页',
                        url: '/home',
                        show: false
                    },
                    {
                        id: '1',
                        name: '基础功能',
                        url: '/function',
                        show: false
                    },
                    {
                        id: '2',
                        name: '基础信息管理',
                        url: '/information-management',
                        show: false
                    },
                    {
                        id: '3',
                        name: '工单',
                        url: '/order',
                        show: false
                    },
                    {
                        id: '4',
                        name: '知识库',
                        url: '/repository',
                        show: false
                    },
                    {
                        id: '5',
                        name: '客户管理',
                        url: '/customer-management',
                        show: false
                    },
                    {
                        id: '6',
                        name: '监控报表',
                        url: '/monitor-report',
                        show: false
                    },
                    {
                        id: '7',
                        name: '设置',
                        url: '/settings',
                        show: false
                    },
                    {
                        id: '8',
                        name: '帮助中心',
                        url: '/help',
                        show: false
                    }
                ]
            }
        },
        components: {
            RightInfo
        },
        computed: {
            iconSize () {
                return this.spanLeft === 4 ? 14 : 24;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 4) {
                    this.spanLeft = 1;
                    this.spanRight = 23;
                } else {
                    this.spanLeft = 4;
                    this.spanRight = 20;
                }
            },
            toggleClick2 () {
                this.showRight = !this.showRight;
                if (this.span1 === 6) {
                    this.span1 = 23;
                    this.span2 = 1;
                } else {
                    this.span1 = 6;
                    this.span2 = 18;
                }
            },
            handleTabRemove (name) {
                this.tabs[name].show = false;
                let url = this.tabs[this.tabActive].url;
                this.setActive = this.tabActive;
                this.$router.push(url);
            },
            tabClick (name) {
                let url = this.tabs[name].url;
                this.setActive = '' + name;
                this.$router.push(url);
            },
            routeTo (e) {
                let url = this.tabs[e].url;
                if (e != '0') {
                    this.tabs[e].show = true;
                }
                this.tabActive = '' + e;
                this.$router.push(url);
            },
            logout () {
                this.$router.push('/login');
            }
        }
    }
</script>