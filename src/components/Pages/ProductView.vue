<template>
    <h1>
        Product page
    </h1>
    <p>
        {{ $route.params.name}}
    </p>
    <p>
        {{ $route.params.id }}
    </p>
</template>

<script>
export default {
    components: {
        name: 'ProductView'
    }
}
</script>