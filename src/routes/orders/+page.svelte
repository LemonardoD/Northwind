<script lang="ts">
	import SideBar from '../../components/sideBar.svelte';
	import NavBar from '../../components/navBar.svelte';
	import ContentMover from '../../components/contentMover.svelte';
    import Table from '../../components/table.svelte';
	import { page } from '$app/stores'
	import { getCurrPageValues, getPageCount, getPagination } from '../../components/pagination';
	import type { OrdersResAPI } from '../../DTOs';
	import { updateMetric } from '../../components/metric';
    
    export let data: OrdersResAPI
    let {response, ...metric} = data.orders
    const countedMtr = Object.assign({}, metric, { resCount: 1 });
    updateMetric(countedMtr)

    const icons = false
    const pgNum = Number($page.url.searchParams.get('page'))
    const allPages = getPageCount(response)
    const {currPage, pagesList} = getPagination(pgNum , allPages)
    const currPageOrders = getCurrPageValues(response, currPage)
    
</script>

{#if currPage > allPages}
    <NavBar/>
    <aside><SideBar/></aside>
    <ContentMover>
        <p>Loading orders...</p>
    </ContentMover>
{:else}
    <ContentMover>
        <Table dataList={currPageOrders} pgNum={currPage} pageList={pagesList} tblName="Orders" icons={icons}/>
    </ContentMover>
    <NavBar/>
    <aside><SideBar/></aside>
{/if}

<style>
    p{
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        padding: 41px 40px;
        margin: 0;
    }
</style>