<template>
	<div class="message">
		<p>{{ message }}</p>
	</div>
</template>
<script>
export default{
	props:{
		message:{
			type: String,
			required: true,
			//default: 'default message'
		}
	}
}
</script>
<style lang="scss" scoped>
p{
	color: #f00;
	text-align: center;
}
	</style>