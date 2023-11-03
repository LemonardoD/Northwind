<script lang="ts">
	import SideBar from '../../components/sideBar.svelte';
    import NavBar from '../../components/navBar.svelte';
	import ContentMover from '../../components/contentMover.svelte';
</script>

<NavBar/>
<aside><SideBar/></aside>
<ContentMover>
    <div class="dashBoard">
        <div class="content">
            <div class="gridColumns">
                <div class="column">
                    <p class="titleWord">Worker</p>
                    <p class="text">Colo: AMS</p>
                    <p class="text">Country: UA</p>
                </div>
                <div class="column">
                    <p class="titleWord">SQL Metrics</p>
                    <p class="text">Query count: 0</p>
                    <p class="text">Results count: 0</p>
                    <p class="text"># SELECT: 0</p>
                    <p class="text"># SELECT WHERE: 0</p>
                    <p class="text"># SELECT LEFT JOIN: 0</p>
                </div>
            </div>
            <p class="titleWord pd24">Activity log</p>
            <p class="text12">Explore the app and see metrics here</p>
        </div>
    </div>
</ContentMover>



<style>
    .text12{
        font-size: 12px;
        color: #1F2937;
        line-height: 16px
    }
    .pd24{
        padding-top: 24px;
    }
    .text{
        font-size: 14px;
        color: #1F2937;
        line-height: 20px
    }
    .titleWord{
        line-height: 28px;
        font-size: 20px;
    }
    .gridColumns{
        grid-template-columns: repeat(2,minmax(0,65%));
        display: grid;
        gap: 16px;
    }
    p{
        margin: 0;
    }
    .content{
        padding: 20px;
    }
    .dashBoard{
        padding: 20px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>