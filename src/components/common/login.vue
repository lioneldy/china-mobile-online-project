<style scoped>
.layout {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #bebebe;
}
.layout-row {
    margin-top: 100px;
}
.layout .picture {
    width: 100%;
    height: 360px;
    background-color: #eee;
}
.layout .login {
    width: 100%;
    height: 100%;
    background-color: #eee;
}
.login {
    width: 400px auto;
    margin: 0 auto;
    margin-bottom: 0px;
    padding: 50px;
    -webkit-border-radius: 7px;
    -moz-border-radius: 7px;
    -ms-border-radius: 7px;
    -o-border-radius: 7px;
    border-radius: 7px;
}
</style>

<template>
    <div class="layout">
        <Row class="layout-row" type="flex" align="bottom">
            <Col span="10" offset="2">
                <div class="picture">picture</div>
            </Col>
            <Col span="9" offset="1">
                <div>
                    <h1>登录</h1>
                </div>
                <div class="login">
                    <Form ref="formInline" :model="formInline" :rules="ruleInline" label-position="left" :label-width="80">
                        <Form-item label="用户名" prop="user">
                            <Input type="text" v-model="formInline.user" placeholder="请输入用户名称"></Input>
                        </Form-item>
                        <Form-item label="密码" prop="password">
                            <Input type="password" v-model="formInline.password" placeholder="请输入密码"></Input>
                        </Form-item>
                        <Form-item label="电话号码" prop="tel">
                            <Input type="text" v-model="formInline.tel" placeholder="请输入电话号码"></Input>
                        </Form-item>
                        <Form-item>
                            <Button type="primary" long @click="handleSubmit('formInline')">登录</Button>
                        </Form-item>
                    </Form>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data() {
            return {
                formInline: {
                    user: '',
                    password: '',
                    tel: ''
                },
                ruleInline: {
                    user: [{
                        required: true,
                        message: '请输入用户名称',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }],
                    tel: [{
                        required: true,
                        message: '请输入电话号码',
                        trigger: 'blur'
                    }]
                }
            }
        },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('提交成功!');
                    this.$router.push('/home');
                } else {
                    this.$Message.error('表单验证失败!');
                }
            });
        }
    }
}
</script>
