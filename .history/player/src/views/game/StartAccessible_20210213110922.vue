<template>
    <div>
        <div class="grid grid-cols-2 gap-4 place-content-center h-screen">
            <!-- WELCOME INSIDE THE GRID LAYOUT-->
            <div class="flex flex-wrap content-end justify-center pb-2 h-screen">
                <img :src="character" alt="character" style="height: 70vh" />
            </div>
            <div class="flex content-center justify-center flex-wrap space-y-8">
                <div class="bg-white rounded-md text-center md:mr-4">
                    <p class="text-black font-extrabold md:text-4xl md:m-10 sm:m-2">
                        {{ text }}
                    </p>
                </div>

                <button
                    @click="Continue()"
                    class="bg-black hover:bg-gray-700 focus:outline-none rounded-lg font-extrabold text-center text-white md:text-6xl sm:text-2xl md:ml-40 sm:ml-10 p-3"
                >
                    {{ option }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>