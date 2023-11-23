<template>
    <div>
        <div class="create-order">
            <div>
                <label>Price</label>
                <input class="order-input" type="number"/>
            </div>

            <div>
                <label>Quantity</label>
                <input class="order-input" type="number">
            </div>

            <button style="background: var(--ui-main-color-green)">Buy</button>
            <button style="background: var(--ui-main-color-red)">Sell</button>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.create-order {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--ui-main-color-primary);
    width: 600px;
    border-radius: 6px;
    padding: 12px;
}

input {
    width: 150px;
    height: 36px;
    border-radius: 18px;
    border: none;
}

input:focus{
    border: none;
}

button {
    width: 120px;
    height: 36px;
    border-radius: 18px;
    border: none;
    margin-top: 24px;
}

label {
    display: block;
    color: white;
}

:active, :hover, :focus {
    outline: 0;
    outline-offset: 0;
}
</style>