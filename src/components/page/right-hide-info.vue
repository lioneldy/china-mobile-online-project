<template>
    <div class="layout">
        <div class="layout-content">
            <div class="layout-title">
                <h1>来电客户基本信息</h1>
            </div>
            <ul id="example-1">
                <li v-for="item in baseInfo">
                    <label>{{item.label}}</label>
                    <Tag type="border" class="layout-tag">{{item.message}}</Tag>
                </li>
            </ul>
        </div>
        <div class="layout-content">
            <div class="layout-title">
                <h1>历史服务信息</h1>
            </div>
            <Table width="290" :columns="columns1" :data="data1"></Table>
        </div>
        <div class="layout-content">
            <div class="layout-title">
                <h1>来电历史信息</h1>
            </div>
            <Table width="290" :columns="columns1" :data="data2"></Table>
        </div>
        <div class="layout-content">
            <div class="layout-title">
                <h1>来电 IVR 历史信息</h1>
            </div>
            <Table width="290" :columns="columns2" :data="data3"></Table>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                baseInfo:[
                    {
                        label: '工单标题',
                        message: '山西省榆次市'
                    },
                    {
                        label: '来电号码',
                        message: '185 0354 6776'
                    },
                    {
                        label: '来电时间',
                        message: '2017-08-05 13:19:07'
                    },
                    {
                        label: '服务类型',
                        message: '业务资讯'
                    },
                    {
                        label: '客户类型',
                        message: '业务咨询'
                    }
                ],
                columns1: [
                    {
                        title: '联络时间',
                        key: 'time',
                        align: 'center'
                    },
                    {
                        title: '服务类型',
                        key: 'type',
                        align: 'center'
                    },
                    {
                        title: '服务座席',
                        key: 'service',
                        align: 'center'
                    }
                ],
                columns2: [
                    {
                        title: '联络时间',
                        key: 'time',
                        align: 'center'
                    },
                    {
                        title: '服务类型',
                        key: 'type',
                        align: 'center'
                    }
                ],
                data1: [],
                data2: [],
                data3: []
            }
        }
    }
</script>

<style scoped>
    .layout {
        text-align: center;
    }
    h1 {
        text-align: center;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        font-size: 13px;
    }
    .layout-title {
        height: 36px;
        background-color: #ADADAD;
    }
    label {
        font-size: 14px;
        font-weight: bold;
    }
    .layout-tag {
        width: 190px;
        font-size: 14px;
        text-align: left;
    }
</style>