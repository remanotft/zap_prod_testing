<template>
    <!-- Loader End -->
    <section class="relative table w-full items-center bg-top bg-no-repeat bg-cover" style="background-image: url('https://zap-travel-website.s3.af-south-1.amazonaws.com/assets/zap_hero_8.jpg');">
        <div class="absolute inset-0 bg-slate-900/40"></div>
        <div class="container-fluid relative">
            <div class="grid grid-cols-1">
                <div class="flex flex-col min-h-screen justify-center md:px-10 py-16 px-4">
                    <div class="text-center">
                        <NuxtLink to="/"><img src="" class="mx-auto" alt=""></NuxtLink>
                    </div>
                    <div class="title-heading text-center my-auto">
                        <img src="" class="mx-auto w-96" alt="">
                        <h1 class="my-6 md:text-4xl text-3xl font-bold text-white">404 Page Not Found!</h1>
                        <div class="mt-4">
                            <NuxtLink to="/"
                                class="py-2 px-5 inline-block tracking-wide align-middle duration-500 text-base text-center bg-orange-zap text-white rounded-md">Back
                                to Home</NuxtLink>
                        </div>
                    </div>
                    <div class="text-center">
                        <p class="mb-0 text-slate-400">© {{ date }} ZAP Travel & Tours. <i
                                class="mdi mdi-heart text-red-600"></i> Developed by <a href="https://tailorfittech.com/"
                                target="_blank" class="text-reset">Tailor Fit Technologies</a>.</p>
                    </div>
                </div>
            </div><!--end grid-->
        </div><!--end container-->
    </section>	
</template>

<script>
export default {
    data() {
        return {
            date: new Date().getFullYear(),
        }
    },
}
</script>

<style lang="scss" scoped></style>