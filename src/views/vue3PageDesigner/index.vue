<template>
    <div class="box">
        <div class="header"> Header </div>
        <div class="content">
            <splitpanes class="default-theme" style="height: 100%">
                <pane :size="25"> <span>1</span> </pane>
                <pane :size="50"> <span>2</span> </pane>
                <pane :size="25"> <span>3</span> </pane>
            </splitpanes>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

    .header {
        height: 50px;
        overflow: hidden;
    }

    .content {
        flex: 1;
    }
}
</style>
  