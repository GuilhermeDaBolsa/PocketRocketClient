<template>
	<div class="centerContainer topBarContainer">
		
		<div class="centerContainer topBarButton" @click="back">
			{{showBackBtn ? '⬅️' : ''}}
		</div>
		

		<div class="centerContainer" style="flex: 1"></div>

		<div class="centerContainer topBarButton" style="border-left: 1px solid #fff;" @click="toggleUserMenu">
			<div class="centerContainer avatar">
				<span class="noselect">
					{{isLogged ? '😀' : '😡'}}
				</span>

				<div v-show="showUserMenu" class="floatingMenu" @click.stop="(1==1)">

					<div style="color: black">
						{{isLogged ? '❤️logged❗️❤️' : '💢not logged❗️'}}
					</div>

					<APIRequestHandler :loading="userState.loadingUser" :errorMessage="userState.errorMessageUser"></APIRequestHandler>

					<div v-if="isLogged">
						<button @click="logout">Logout</button>
					</div>

					<div v-else>
						<button @click="createUserAccount">Create Account</button>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import APIRequestHandler from '../components/APIRequestHandler.vue'

export default {
    props: {
		//title: 			{ type: String, default: "titulo :)" },
		showBackBtn: 	{ type: Boolean, default: false },
	},
    data(){
        return {
			showUserMenu: false,
        }
    },
    directives: {},
    components: { APIRequestHandler },
    computed: {
		userState: {
			get() {
				return this.$store.state.user;
			}
		},
		isLogged() {
			return this.userState.userData && this.userState.userData.id
		},
	},
    watch: {},
    methods: {
		back() {
			this.$router.go(-1);
		},
		toggleUserMenu() {
			this.showUserMenu = !this.showUserMenu;
		},
		createUserAccount() {
			this.$store.dispatch("user/createUserAccount");
		},
		logout() {
			this.$store.dispatch("user/logoutUser");
		}
	}
}
</script>

<style scoped>
.centerContainer {
	display: flex;
	justify-content: center;
	align-items: center;
}

.topBarContainer {
	height: 60px;
	border-bottom: 1px solid #fff;
	font-size: 22px;
}

.topBarButton {
	width: 60px;
	height: 60px;
	padding: 6px;
	cursor: pointer;
	box-sizing: border-box;
}

.avatar {
	width: 100%;
	height: 100%;
	border: 1px solid #fff;
	border-radius: 50%;
	box-sizing: border-box;
}

.floatingMenu {
	position: absolute;
	background-color: #fff;
	top: 60px;
	right: 0;
	padding: 8px;
	border: 1px solid #333;
	cursor: auto;
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}
</style>