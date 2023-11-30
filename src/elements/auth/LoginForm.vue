<template>
    <div>
        <div class="ui-card">
            <div class="ui-card-title">
                Sign in
            </div>
            <div class="ui-card-body">
                <div class="flex-container">
                    <div style="width: 100%">
                        <label class="input-label">Email:</label>
                        <input class="ui-input ui-input-bulk" v-model="data.email"/>
                    </div>
                    <div style="width: 100%">
                        <label class="input-label">Password:</label>
                        <input class="ui-input ui-input-bulk" v-model="data.password"/>
                    </div>
                    <button
                        class="ui-btn ui-btn-bulk"
                        style="margin-top: 6px"
                        @click="login"
                    >
                        Sign in
                    </button>
                    <div class="footer-flex-container">
                        <div>
                            Forget password?
                        </div>
                        <div>
                            Sign in
                        </div>
                    </div>
                </div>

            </div>


        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {UserGateway} from "./gateway";
import {Token} from "./domain";

const data = ref({
    email: "barmatey@gmail.com",
    password: "145190hfp",
})

async function login() {
    const gateway = new UserGateway()
    const token: Token = await gateway.login(data.value)
}
</script>

<style scoped>
@import "/src/ui-components/css/main/buttons.css";
@import "/src/ui-components/css/main/inputs.css";
@import "/src/ui-components/css/main/cards.css";

.input-label {
    display: block;
    margin-bottom: 6px;
}


.flex-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.footer-flex-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}
</style>