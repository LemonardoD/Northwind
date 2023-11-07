<script lang="ts">
	import SideBar from '../../components/sideBar.svelte';
    import NavBar from '../../components/navBar.svelte';
	import ContentMover from '../../components/contentMover.svelte';
    import Table from '../../components/table.svelte';
    import { page } from '$app/stores'
    import { getCurrPageValues, getPageCount, getPagination } from '../../components/pagination';
    export let data: {suppliers: object[]}

    let {suppliers} = data
    const icons = true

    const pgNum = Number($page.url.searchParams.get('page'))
    const allPages = getPageCount(suppliers)
    const {currPage, pagesList} = getPagination(pgNum , allPages)
    const currPageSupp = getCurrPageValues(suppliers, currPage)
</script>

{#if currPage > allPages}
    <NavBar/>
    <aside><SideBar/></aside>
    <ContentMover>
        <p>Loading suppliers...</p>
    </ContentMover>
{:else}
    <ContentMover>
        <Table dataList={currPageSupp} pgNum={currPage} pageList={pagesList} tblName="Suppliers" icons={icons}/>
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