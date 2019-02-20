<template>
	<div v-if="single_question">
		<edit-single v-if="editing" :data="single_question"></edit-single>
		<div v-else>
			<single :data="single_question" ></single>

			<replies :question="single_question"></replies>
		</div>
	</div>
</template>

<script>
import Single from './Child/Single';
import EditSingle from './Child/EditSingle'
import Replies from './Child/Replies'

export default {
	data() {
		return {
			single_question: null,
			editing: false
		}
	},
	components: {
		Single,
		EditSingle,
		Replies,
	},
	created() {
		this.getQuestion()
		this.listen()
	},
	methods: {
		getQuestion() {
			axios.get(`/api/question/${this.$route.params.slug}`)
			.then(res => this.single_question = res.data.data)
		},
		listen() {
			EventBus.$on('startEditing', () => {
				this.editing = true
			})

			EventBus.$on('cancelEditing', () => {
				this.editing = false
			})
		}
	}
}
</script>