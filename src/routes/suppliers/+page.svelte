<script lang="ts">
	import SideBar from '../../components/sideBar.svelte';
    import NavBar from '../../components/navBar.svelte';
	import ContentMover from '../../components/contentMover.svelte';
    import Table from '../../components/tableWithIcons.svelte';
    import { page } from '$app/stores'
	import { getPagination } from '../../components/getPageNum';

    let pgNum = Number($page.url.searchParams.get('page'))
    let list = [
        {  "supplierId": 1,Company: "Exotic Liquids", Contact: "Charlotte Cooper", Title: "Purchasing Manager",	City: "London", Country: "UK"},
        {  "supplierId": 2,Company:"New Orleans Cajun Delights", Contact: "Shelley Burke", Title: "Order Administrator", City: "New Orleans", Country: "USA"},
        {  "supplierId": 3,Company:"Grandma Kelly's Homestead", Contact: "Regina Murphy", Title: "Sales Representative", City: "Ann Arbor", Country: "USA"},
        {  "supplierId": 4,Company:"Tokyo Traders", Contact: "Yoshi Nagase", Title: "Marketing Manager", City: "Tokyo", Country: "Japan"},
        {  "supplierId": 5,Company:"Cooperativa de Quesos 'Las Cabras'", Contact:" Antonio del Valle Saavedra", Title: "Export Administrator", City: "Oviedo",	Country: "Spain"},
        {  "supplierId": 6,Company:"Mayumi's", Contact: "Mayumi Ohno", Title: "Marketing Representative", City: "Osaka", Country: "Japan"},
        {  "supplierId": 7,Company: "Pavlova, Ltd.", Contact: "Ian Devling", Title: "Marketing Manager", City: "Melbourne", Country: "Australia"},
        {  "supplierId": 8,Company: "Exotic Liquids", Contact: "Charlotte Cooper", Title: "Purchasing Manager",	City: "London", Country: "UK"},
        {  "supplierId": 9,Company:"New Orleans Cajun Delights", Contact: "Shelley Burke", Title: "Order Administrator", City: "New Orleans", Country: "USA"},
        {  "supplierId": 10,Company:"Grandma Kelly's Homestead", Contact: "Regina Murphy", Title: "Sales Representative", City: "Ann Arbor", Country: "USA"},
        {  "supplierId": 11,Company:"Tokyo Traders", Contact: "Yoshi Nagase", Title: "Marketing Manager", City: "Tokyo", Country: "Japan"},
        {  "supplierId": 12,Company:"Cooperativa de Quesos 'Las Cabras'", Contact:" Antonio del Valle Saavedra", Title: "Export Administrator", City: "Oviedo",	Country: "Spain"},
        {  "supplierId": 13,Company:"Mayumi's", Contact: "Mayumi Ohno", Title: "Marketing Representative", City: "Osaka", Country: "Japan"},
       
    ]
    let allPages = Math.ceil(list.length / 20)
    const {currPage, pagesList} = getPagination(pgNum , allPages)
    list = currPage === 1 ? list.slice(0, 20) : list.slice((currPage -1) *20, (currPage * 20))
    
</script>

{#if currPage > allPages}
    <NavBar/>
    <aside><SideBar/></aside>
    <ContentMover>
        <p>Loading suppliers...</p>
    </ContentMover>
{:else}
    <ContentMover>
        <Table dataList={list} pgNum={currPage} pageList={pagesList} tblName="Suppliers"/>
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