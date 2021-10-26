<template>
    <div class="service">
        <div class="container">
            <ul>
                <li><span class="icon-setting"></span>预约维修服务</li>
                <li><span class="icon-7day"></span>7天无理由退货</li>
                <li><span class="icon-15day"></span>15天免费换货</li>
                <li class="lis"><span class="icon-post"></span>满150元包邮</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'service-bar'
    }
</script>
<style lang="scss">
    .service{
        padding: 33px 0;
        color: #666;
        font-size: 16px;
        .container{
            .lis{
                border-right: 0;
            }
            li{
                display: inline-block;
                width: 24.9%;
                text-align: center;
                border-right: 1px solid #ccc;
                span{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    vertical-align: middle;
                    margin-right: 8px;
                    margin-bottom: 3px;
                }
                .icon-setting{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background:url('/imgs/icon-setting.png') no-repeat center;
                    background-size:contain;
                }
                .icon-7day{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background:url('/imgs/icon-7day.png') no-repeat center;
                    background-size:contain;
                }
                .icon-15day{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background:url('/imgs/icon-15day.png') no-repeat center;
                    background-size:contain;
                }
                .icon-post{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background:url('/imgs/icon-post.png') no-repeat center;
                    background-size:contain;
                }
            }
        }
    }
</style>