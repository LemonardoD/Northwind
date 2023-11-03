<script>
	import SideBar from '../../components/sideBar.svelte';
	import NavBar from '../../components/navBar.svelte';
	import ContentMover from '../../components/contentMover.svelte';
    import Table from '../../components/tableWithOutIcons.svelte';
	import { page } from '$app/stores'
	import { getPagination } from '../../components/getPageNum';

    let pgNum = Number($page.url.searchParams.get('page'))

	let list = [
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chef Anton's Gumbo Mix", "Qt per unit": "36 boxes", Price: "$21.35", Stock: 0, Orders: 110},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Chai", "Qt per unit": "10 boxes x 20 bags", Price: "$18", Stock: 40, Orders: 0},
		{Name: "Tofu", "Qt per unit": "40 - 100 g pkgs.", Price: "$23.25", Stock: 35, Orders: 1},
	]
    let allPages = Math.ceil(list.length / 20)
    const {currPage, pagesList} = getPagination(pgNum , allPages)
    list = currPage === 1 ? list.slice(0, 20) : list.slice((currPage -1) *20, (currPage * 20))
    
</script>

{#if currPage > allPages}
    <NavBar/>
    <aside><SideBar/></aside>
    <ContentMover>
        <p>No results</p>
    </ContentMover>
{:else}
    <ContentMover>
        <Table dataList={list} pgNum={currPage} pageList={pagesList} tblName="Products"/>
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