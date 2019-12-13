<template>
    <div class="home-box">
        打开控制台查看protobuf解消息
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import $root from "@/protobuf/bundles/bundle";
console.log($root)
@Component
export default class Home extends Vue {
    public mounted() {
        const msg: any = $root.test_msg.TEST_LIST.encode(
            $root.test_msg.TEST_LIST.fromObject({
                list: [{
                    itemId:11
                }]
            })
        ).finish();
        const res: any = $root.test_msg.TEST_LIST.decode(msg);
        console.log(res);
    }
}
</script>
<style lang="scss" scoped>
</style>
