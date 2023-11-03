<script>
	import SideBar from '../../components/sideBar.svelte';
	import NavBar from '../../components/navBar.svelte';
	import ContentMover from '../../components/contentMover.svelte';
    import Table from '../../components/tableWithIcons.svelte';
	import { page } from '$app/stores'
	import { getPagination } from '../../components/getPageNum';

    let pgNum = Number($page.url.searchParams.get('page'))

	let list = [
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Antonio Moreno", Contact: "Taquería Antonio Moreno", Title: "Owner", City: "México D.F.", Country: "Mexico"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Comércio Mineiro", Contact: "Pedro Afonso", Title: "Sales Associate", City: "Sao Paulo", Country: "Brazil"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Antonio Moreno", Contact: "Taquería Antonio Moreno", Title: "Owner", City: "México D.F.", Country: "Mexico"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Comércio Mineiro", Contact: "Pedro Afonso", Title: "Sales Associate", City: "Sao Paulo", Country: "Brazil"},	
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Antonio Moreno", Contact: "Taquería Antonio Moreno", Title: "Owner", City: "México D.F.", Country: "Mexico"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Comércio Mineiro", Contact: "Pedro Afonso", Title: "Sales Associate", City: "Sao Paulo", Country: "Brazil"},	
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Antonio Moreno", Contact: "Taquería Antonio Moreno", Title: "Owner", City: "México D.F.", Country: "Mexico"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Alfreds Futterkiste", Contact: "Maria Anders", Title: "Sales Representative", City: "Berlin", Country: "Germany"},
		{Company: "Comércio Mineiro", Contact: "Pedro Afonso", Title: "Sales Associate", City: "Sao Paulo", Country: "Brazil"},	
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
        <Table dataList={list} pgNum={currPage} pageList={pagesList} tblName="Customers"/>
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