<template>
	<!-- TOP BAR -->
	<div>
		<Topbar />
	</div>
	
	<div>
		<h5 class="text-2xl font-bold">HOME </h5>
		<ul>
			<li class="flex flex-col">
				<NuxtLink to="/about" class=" cursor-pointer">About</NuxtLink>
				<NuxtLink to="/contact" class=" cursor-pointer">Contact</NuxtLink>
			</li>
		</ul>
	</div>

	<section class="relative overflow-hidden">
		<div class="container relative w-full">
			<div id="SS-Widget" class="SS-Widget md:h-[750px] lg:h-80">
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>

</script>

<style scoped>

@media screen and (max-width: 600px) {
	.SS-Widget {
		width: 380px;
		height: 780px;
	}
}

@media screen and (max-width: 412px) {
	.SS-Widget {
		width: 365px;
		height: 780px;
	}
}

@media screen and (max-width: 375px) {
	.SS-Widget {
		width: 330px;
		height: 780px;
	}
}

</style>