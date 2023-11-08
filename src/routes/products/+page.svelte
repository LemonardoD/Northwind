<script lang="ts">
	import SideBar from '../../components/sideBar.svelte';
	import NavBar from '../../components/navBar.svelte';
	import ContentMover from '../../components/contentMover.svelte';
    import Table from '../../components/table.svelte';
	import { page } from '$app/stores'
    import { getCurrPageValues, getPageCount, getPagination } from '../../components/pagination';
    import { updateMetric } from '../../components/metric';
	import type { PrResAPI } from '../../DTOs';
    export let data: PrResAPI

    let {response, ...metric} = data.products
    const countedMtr = Object.assign({}, metric, { resCount: response.length });
    updateMetric(countedMtr)
    const icons = false

    const pgNum = Number($page.url.searchParams.get('page'))
    const allPages = getPageCount(response)
    const {currPage, pagesList} = getPagination(pgNum , allPages)
    const currPageProd = getCurrPageValues(response, currPage)
</script>

{#if currPage > allPages}
    <NavBar/>
    <aside><SideBar/></aside>
    <ContentMover>
        <p>No results</p>
    </ContentMover>
{:else}
    <ContentMover>
        <Table dataList={currPageProd} pgNum={currPage} pageList={pagesList} tblName="Products" icons={icons}/>
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