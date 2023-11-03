<script>
	import SideBar from '../../components/sideBar.svelte';
	import NavBar from '../../components/navBar.svelte';
	import ContentMover from '../../components/contentMover.svelte';
    import Table from '../../components/tableWithOutIcons.svelte';
	import { page } from '$app/stores'
	import { getPagination } from '../../components/getPageNum';

    let pgNum = Number($page.url.searchParams.get('page'))

	let list = [
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 11111, "Total Price": "$11.11", Products: 1, Quantity: 11, Shipped: "1111-11-11",  "Ship Name": "Vins", City: "Bagdad" , Country: "Iraq"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 22222, "Total Price": "$222.22", Products: 2, Quantity: 22, Shipped: "2222-22-02",  "Ship Name": "Chevalier", City: "Hanoi" , Country: "Vietnam"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 11111, "Total Price": "$11.11", Products: 1, Quantity: 11, Shipped: "1111-11-11",  "Ship Name": "Vins", City: "Bagdad" , Country: "Iraq"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 10248, "Total Price": "$440.00", Products: 3, Quantity: 27, Shipped: "2012-07-04",  "Ship Name": "Vins et alcools Chevalier", City: "Reims" , Country: "France"},
		{Id: 22222, "Total Price": "$222.22", Products: 2, Quantity: 22, Shipped: "2222-22-02",  "Ship Name": "Chevalier", City: "Hanoi" , Country: "Vietnam"},
	]
    let allPages = Math.ceil(list.length / 20)
    const {currPage, pagesList} = getPagination(pgNum , allPages)
    list = currPage === 1 ? list.slice(0, 20) : list.slice((currPage -1) *20, (currPage * 20))
    
</script>

{#if currPage > allPages}
    <NavBar/>
    <aside><SideBar/></aside>
    <ContentMover>
        <p>Loading orders...</p>
    </ContentMover>
{:else}
    <ContentMover>
        <Table dataList={list} pgNum={currPage} pageList={pagesList} tblName="Orders"/>
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