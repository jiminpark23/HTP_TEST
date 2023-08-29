<template>
    <div class="page">
        <header>
            <h3>
                로그인
            </h3>
        </header>
        <img src="../assets/htpLogo.png">
        <div class="loginpage">
            <!-- <div>
                <p>아이디</p>
                <input type="text" v-model="username" placeholder=""/>
                <br>
                <p>비밀번호</p>
                <input type="password" v-model="password" placeholder=""/>
                <br>
            </div> -->
            <div class="loginIDPW">
                <p>아이디</p>
            </div>
            <input type="text" v-model="username" placeholder=""/>
            <br>
            <div class="loginIDPW">
                <p>비밀번호</p>
            </div>
            <input type="password" v-model="password" placeholder=""/>
            <div class="findIDPW">
                <router-link to="/findID">아이디 찾기 </router-link>
                <router-link to="/findPW"> 비밀번호 찾기</router-link>
            </div>
            <div>
                <button type="button" class="btn btn-primary" @click="login()">로그인</button>
            </div>
            <div class="signup">
                <p>계정이 없으신가요?<router-link to="/signup" font-color="red">회원가입</router-link></p>
            </div>
        </div>

        <b-modal  v-model="failModal" hide-footer>
            <div v-if="showModalfail" style="text-align: center;">
                <h1 class="modal-title fs-5" id="exampleModalToggleLabel3">로그인 실패</h1>
            </div>
        </b-modal>
    </div>
</template>

<script>

</script>

<style scoped>
    header{
        background-color: #F6B590;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    h3 {
        height: 200px;
        font-size: 36px;
        text-align: senter;
        color: black;
        margin: 0;
        display: flex;
        align-items: center; /*수직 가운데 정렬*/
        justify-content: center; /*수평 가운데 정렬*/
    }
    .page header i {
        margin-right: 20px;
    }
    .loginpage {
        /* text-align: center;
        height: calc(100vh - 132px); */
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .loginIDPW{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 8px;
    }
    .loginIDPW p {
        margin: 0;
    }
    .findIDPW {
        text-align: center;
        margin: 0px 0px 20px;
    }
    .signup {
        color: black;
        font-size: 15px;;
        display: flex;
        align-items: center;
    }
    .signup a{
        color: red;
        font-size: 15px;
        margin-left: 10px;
    }
    .btn {
        margin-top: 10px;
        /* position: absolute; */
        width: 349px;
        height: 39px;
        /* left: 31px;
        top: 416px; */
        background-color: #F6B590;
        border-radius: 8px;
        border-color: #F6B590;
        color: black;
        font-weight: bold;
        text-align: center;
        font-size: 15px;
    }
    .main-text {
        font-size: 20px;
        font-weight: bold;
        text-align: left;
        color: black;
    }
    .sub-text {
        font-size: 15px;
        text-align: left;
        color: black;
    }

    input {
        border-color: black;
        border-radius: 8px;
        outline: none;
        font-size: 16px;
        padding: 10px 0;
        width: 349px;
        height: 20px;
    }

    footer {
        z-index: 100;
    }

    a {
        color: black;
        text-decoration: none;
        font-weight: bold;
        font-size: 12px;
    }
</style>
