<template>
	<div class="container" style="height: 60px; border-bottom: 1px solid #333;">
		Barrinha no topo :)
		<div style="flex: 1"></div>

		<div class="container avatarButtonContainer" @click="toggleUserMenu">
			<div class="container avatarButton">
				<span class="noselect" style="font-size: 22px;">
					{{isLogged ? '😀' : '😡'}}
				</span>

				<div v-show="showUserMenu" class="floatingMenu" @click.stop="(1==1)">

					<div>
						{{isLogged ? 'logged ❤️' : 'not logged 💢❗️'}}
					</div>

					<APIRequestHandler :loading="loadingUser" :errorMessage="errorMessageUser"></APIRequestHandler>

					<div v-show="!isLogged">
						<button @click="createUserAccount">Create Account</button>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import APIRequestHandler from '../components/APIRequestHandler.vue'
import { createUser } from '../scripts/APIs'

export default {
    props: {},
    data(){
        return {
			showUserMenu: false,

			loadingUser: false,
			errorMessageUser: "",
			user: null
        }
    },
    directives: {},
    components: { APIRequestHandler },
    computed: {
		isLogged() {
			return this.user && this.user.id
		}
	},
    watch: {},
    methods: {
		toggleUserMenu() {
			this.showUserMenu = !this.showUserMenu;
		},
		getUserFromStorage() {
			const user = localStorage.getItem('user');

			if(!user)
				return null;
			
			const parsedUser = JSON.parse(user);

			if(!parsedUser || !parsedUser.id)
				return null;
			
			return parsedUser;
		},
		async createUserAccount() {
			this.loadingUser = true;

			const response = await createUser();

			if(response.isError)
				this.errorMessageUser = response.errorMessage;
			else {
				this.user = response;
				localStorage.setItem('user', JSON.stringify(response));
			}

			this.loadingUser = false;
		}
	},
	created() {
		this.user = this.getUserFromStorage();
	}
}
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
}
.avatarButtonContainer {
	cursor: pointer;
	padding: 8px;
	border-left: 1px solid #333;
}
.avatarButton {
	width: 40px;
	height: 40px;
	border: 1px solid #333;
	border-radius: 20px;
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