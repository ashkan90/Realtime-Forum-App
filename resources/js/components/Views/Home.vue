<template>
	<div>
		<toolbar></toolbar>
		<router-view></router-view>
		<v-footer></v-footer>
	</div>
</template>

<script>
import Toolbar from "../Toolbar";
import VFooter from "../Footer";

export default {
	components: {
		Toolbar,
		VFooter,
	}
}
</script>