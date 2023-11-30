<template>
    <div>
        <div class="register-card">
            <div class="register-title">
                Sign in
            </div>
            <div class="register-body">
                <div>
                    <label style="display: block">Email:</label>
                    <input/>
                </div>
                <div>
                    <label style="display: block">Password:</label>
                    <input/>
                </div>
                <div>
                    <label style="display: block">Repeat:</label>
                    <input/>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
@import "src/ui-components/css/main/buttons.css";
@import "src/ui-components/css/main/inputs.css";


.register-card {
    width: 400px;
    height: 300px;
    border-radius: 12px;
    border: 1px solid black;
}

.register-title {

}

.register-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}
</style>