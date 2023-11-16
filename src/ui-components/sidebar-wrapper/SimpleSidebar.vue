<template>
    <div>
        <div class="simple-sidebar-flex-wrapper">
            <div class="simple-sidebar-grid-wrapper">

                <div class="sidebar-part hide-sidebar">
                    <slot name="sidebar"/>
                </div>

                <div class="content-part">
                    <slot name="content"/>
                </div>

                <div style="width: 240px;"></div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.simple-sidebar-flex-wrapper {
    display: flex;
    justify-content: center;
    width: calc(100vw - 8px);
}

.simple-sidebar-grid-wrapper {
    display: flex;
    flex-wrap: wrap;

}

@media (min-width: 900px) {
    .sidebar-part {
        width: 240px;
        align-self: start;
        position: sticky;
        top: 0;
    }

    .content-part {
        width: 936px;
    }
}

@media (max-width: 899px) {
    .sidebar-part {
        width: 240px;
    }

    .content-part {
        max-width: 100vw;
    }
}


</style>