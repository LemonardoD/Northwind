<script>
	import SideBar from '../../components/sideBar.svelte';
	import NavBar from '../../components/navBar.svelte';
	import ContentMover from '../../components/contentMover.svelte';
    import Table from '../../components/tableWithIcons.svelte';
	import { page } from '$app/stores'
	import { getPagination } from '../../components/getPageNum';

    let pgNum = Number($page.url.searchParams.get('page'))

	let list = [
		{Name: "Nancy Davolio", Title: "Sales Representative", City: "Seattle", Phone: "(206) 555-9857", Country: "USA"},
		{Name: "Andrew Fuller", Title: "Vice President Sales", City: "Tacoma", Phone: "(206) 555-9482", Country: "USA"},
		{Name: "Janet Leverling", Title: "Sales Representative", City: "Kirkland", Phone: "(206) 555-3412", Country: "USA"},
		{Name: "Margaret Peacock", Title: "Sales Representative", City: "Redmond", Phone: "(206) 555-8122", Country: "USA"},
		{Name: "Steven Buchanan", Title: "Sales Manager", City: "London", Phone: "(71) 555-4848", Country: "UK"},
		{Name: "Michael Suyama", Title: "Sales Representative", City: "London", Phone: "(71) 555-7773", Country: "UK"},
		{Name: "Robert King", Title: "Sales Representative", City: "London", Phone: "(71) 555-5598", Country: "UK"},
		{Name: "Laura Callahan", Title: "Inside Sales Coordinator", City: "Seattle", Phone: "(206) 555-1189", Country: "USA"},
		{Name: "Anne Dodsworth", Title: "Sales Representative", City: "London", Phone: "(71) 555-4444", Country: "UK"},
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
        <Table dataList={list} pgNum={currPage} pageList={pagesList} tblName="Employees"/>
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