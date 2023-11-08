<script lang="ts">
	import SideBar from '../../components/sideBar.svelte';
    import NavBar from '../../components/navBar.svelte';
	import ContentMover from '../../components/contentMover.svelte';
	import { countMetric, sqlMetric } from '../../components/metric';
	import { onMount } from 'svelte';
    
    let country = '';
    let airPort = '';
    async function getClientIP() {
        try {
            const responseIp = await fetch('https://ipinfo.io/json?token=fbcbaed02c0c73');
            const dataIp = await responseIp.json();
            const location = dataIp.loc.split(',')
            const responseAirPort = await fetch(`https://airlabs.co/api/v9/nearby?lat=${location[0]}&lng=${location[1]}&distance=20&api_key=81322007-a88e-429c-a239-3aec2ba2cb11`);
            const dataAirPort = await responseAirPort.json();
            airPort = dataAirPort.response.airports[0].icao_code
            country = dataIp.country;
        } catch (error) {
            console.error('Error fetching client IP:', error);
        }
    }

    onMount(()=>{
        getClientIP();
    })

    const storedMetric = $sqlMetric;
    const {selectCount, whereCount, joinCount, resCount} = countMetric(storedMetric)
    
</script>

<NavBar/>
<aside><SideBar/></aside>
<ContentMover>
    <div class="dashBoard">
        <div class="content">
            <div class="gridColumns">
                <div class="column">
                    <p class="titleWord">Worker</p>
                    <p class="text">Colo: {airPort}</p>
                    <p class="text">Country: {country}</p>
                </div>
                <div class="column">
                    <p class="titleWord">SQL Metrics</p>
                    <p class="text">Query count: {storedMetric.length}</p>
                    <p class="text">Results count: {resCount}</p>
                    <p class="text"># SELECT: {selectCount}</p>
                    <p class="text"># SELECT WHERE: {whereCount}</p>
                    <p class="text"># SELECT LEFT JOIN: {joinCount}</p>
                </div>
            </div>
            <p class="titleWord pd24">Activity log</p>
            <p class="text12">Explore the app and see metrics here</p>
            {#each storedMetric as metricEl}
                <div class="metric">
                    <p class="textXs">{metricEl.dt},{metricEl.productVersion},{metricEl.queryTime}ms</p>
                    <p class="mtrText">{metricEl.sqlQuery}</p>
                </div>
            {/each}
        </div>
    </div>
</ContentMover>



<style>
    .mtrText{
        font-size: 14px;
        line-height: 20px;
        word-break: break-all;
    }
    .metric{
        padding-top: 8px;
    }
    .textXs{
        font-size: 12px;
        line-height: 16px;
        color: #9ca3af;
    }
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
        padding: 24px;
    }
    .dashBoard{
        padding: 24px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>