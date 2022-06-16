<template>
    <div class="col-12 md:col-4 lg:col-3 mb-4">
        <div
            class="card bg-base-100 shadow-xl hover:cursor-pointer border border-transparent hover:border-blue-500 transition-all"
        >
            <figure>
                <img
                    class="image-full"
                    src="https://api.lorem.space/image/fashion?w=400&h=225"
                    alt="Shoes"
                />
            </figure>
            <div class="card-body gap-0 p-4">
                <h1 class="card-title tracking-tight">Boxes of random stuff</h1>
                <p>Shaun's Store</p>
                <div class="card-actions mt-2">
                    <h3 class="card-title text-primary">$34.59</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            name: "Product",
        },
    };
</script>
