<template>
    <div v-if="isVisible" class="kuc-spinner-outer">
        <div class="kuc-spinner">
            <div class="kuc-loader" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        isVisible: {
            type: Boolean,
            default: true,
        },
    },
});
</script>

<style scoped>
.kuc-spinner-outer {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
}
.kuc-spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.kuc-loader {
    margin: 100px auto;
    font-size: 12px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    text-indent: -9999em;
    -webkit-animation: kuc-load 1.1s infinite ease;
    animation: kuc-load 1.1s infinite ease;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
@-webkit-keyframes kuc-load {
    0%,
    100% {
        box-shadow: 0em -2.6em 0em 0em #a0dcfc,
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.2),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.2),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.2),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.5),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.7);
    }
    12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.7),
            1.8em -1.8em 0 0em #a0dcfc,
            2.5em 0em 0 0em rgba(160, 220, 252, 0.2),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.2),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.2),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.5);
    }
    25% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.5),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.7),
            2.5em 0em 0 0em #a0dcfc,
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.2),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.2),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2);
    }
    37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.2),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.5),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.7),
            1.75em 1.75em 0 0em #a0dcfc,
            0em 2.5em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.2),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2);
    }
    50% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.2),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.5),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.7),
            0em 2.5em 0 0em #a0dcfc,
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.2),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2);
    }
    62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.2),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.2),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.5),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.7),
            -1.8em 1.8em 0 0em #a0dcfc,
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2);
    }
    75% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.2),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.2),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.2),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.5),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.7),
            -2.6em 0em 0 0em #a0dcfc,
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2);
    }
    87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.2),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.2),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.2),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.5),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.7),
            -1.8em -1.8em 0 0em #a0dcfc;
    }
}
@keyframes kuc-load {
    0%,
    100% {
        box-shadow: 0em -2.6em 0em 0em #a0dcfc,
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.2),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.2),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.2),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.5),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.7);
    }
    12.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.7),
            1.8em -1.8em 0 0em #a0dcfc,
            2.5em 0em 0 0em rgba(160, 220, 252, 0.2),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.2),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.2),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.5);
    }
    25% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.5),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.7),
            2.5em 0em 0 0em #a0dcfc,
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.2),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.2),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2);
    }
    37.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.2),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.5),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.7),
            1.75em 1.75em 0 0em #a0dcfc,
            0em 2.5em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.2),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2);
    }
    50% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.2),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.5),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.7),
            0em 2.5em 0 0em #a0dcfc,
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.2),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2);
    }
    62.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.2),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.2),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.5),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.7),
            -1.8em 1.8em 0 0em #a0dcfc,
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2);
    }
    75% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.2),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.2),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.2),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.5),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.7),
            -2.6em 0em 0 0em #a0dcfc,
            -1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2);
    }
    87.5% {
        box-shadow: 0em -2.6em 0em 0em rgba(160, 220, 252, 0.2),
            1.8em -1.8em 0 0em rgba(160, 220, 252, 0.2),
            2.5em 0em 0 0em rgba(160, 220, 252, 0.2),
            1.75em 1.75em 0 0em rgba(160, 220, 252, 0.2),
            0em 2.5em 0 0em rgba(160, 220, 252, 0.2),
            -1.8em 1.8em 0 0em rgba(160, 220, 252, 0.5),
            -2.6em 0em 0 0em rgba(160, 220, 252, 0.7),
            -1.8em -1.8em 0 0em #a0dcfc;
    }
}
</style>
