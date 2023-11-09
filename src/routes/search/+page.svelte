<script lang="ts">

	import SideBar from '../../components/sideBar.svelte';
    import NavBar from '../../components/navBar.svelte';
    import searchIcon from "../../assets/icons/searchbl.png"
	import ContentMover from '../../components/contentMover.svelte';
	import { updateMetric } from '../../components/metric';
	import type { SearchResultApi, searchResult } from '../../DTOs';
	import { goto } from '$app/navigation';

    
    let table = 'Products';
    let searchResult: searchResult[] = []
    let searchQuery = ''

	function handleRadioChange(event: { currentTarget: { value: string; }; }) {
		table = event.currentTarget.value;
        searchResult = [];
	}

    function handleInputKeyPress(event: { key: string; }) {
        if (event.key === 'Enter') {
            handleInputChange({ currentTarget: { value: searchQuery } });
        }
    }

    async function handleInputChange(event: { currentTarget: { value: string; }; }) {
        searchQuery = event.currentTarget.value
        const apiResponse = await fetch(`https://northwindtraders-production.up.railway.app/search?tblName=${table}&SearchText=${searchQuery}`);
        const data: SearchResultApi = await apiResponse.json();
        let {response, ...metric} = data
        searchResult = response
        const countedMtr = Object.assign({}, metric, { resCount: response.length });
        updateMetric(countedMtr)
    }

    
</script>


<ContentMover>
    <div class="search">
        <div class="content">
            <div class="searchField">
                <p class="label">Search Database</p>
                <div class="searchSection">
                    <input class="search" placeholder="Enter keyword..." bind:value={searchQuery}  on:keydown={handleInputKeyPress}>
                    <img src={searchIcon} alt="searchIcon" class="searchIcon"/>  
                </div>
            </div>
            <p class="label">Tables</p>
            <div  class="selectTbl">
                <label>
                    <input class="radio"checked={table==="Products"} on:change={handleRadioChange} type="radio" name="table" value="Products"/>
                    <span class="check"></span>
                    <span class="radioLabel">Products</span>
                  </label>
                <label>
                    <input class="radio"checked={table==="Customers"} on:change={handleRadioChange} type="radio" name="table" value="Customers"  />
                    <span class="check"></span>
                    <span class="radioLabel">Customers</span>
                </label>
            </div>
            <p class="resultLabel">Search results</p>
            {#if !searchResult.length}
                <p class="noResult">No results</p>
            {:else if table === "Customers"}
                <!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-no-static-element-interactions -->
                {#each searchResult as el, index}
                    <p class="srchName"><a on:click = {() =>{goto(`/customers/${el.productId}`)}}>{el.companyName}</a></p>
                    <p class="srchInfo">#{index +1 }, Contact: {el.contactName}, Title: {el.contactTitle}, Phone: {el.phone}</p>
                {/each}
            {:else if table === "Products"}
                <!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-no-static-element-interactions -->
                {#each searchResult as el, index}
                    <p class="srchName"><a on:click = {() =>{goto(`/product/${el.productId}`)}}>{el.productName}</a></p>
                    <p class="srchInfo">#{index +1 }, Quantity Per Unit: {el.quantityPerUnit}, Price: {Number(el.unitPrice)}, Stock: {el.unitsInStock}</p>
                {/each}
            {/if}
        </div>
    </div>
</ContentMover>
<NavBar/>
<aside><SideBar/></aside>


<style>
    a{
        cursor: pointer;
    }
    .srchName{
        color: #2563EB;
        font-size: 16px;
        font-family: inherit;
        margin-bottom:  0px;
        margin-top: 8px;
    }
    .srchInfo{
        color: #9ca3af;
        font-size: 14px;
        font-family: inherit;
        margin: 0;
        padding-top: 2px;
        padding-bottom: 2px;
    }
    .noResult{
        font-size: 16px;
        margin-top: 25px;
    }
    .selectTbl{
        display: flex;
        justify-content: flex-start;
        margin-top: 11px;
    }
    label{

        cursor: pointer;
        margin-right: 12px;
        display: inline-flex;
        position: relative;
    }
    .searchSection{
        padding-top: 1px;
        padding-left: 1px;
        position: relative;
    }
    input[type='radio'] {
        position: absolute;
        left: 0;
        margin-top: 1px;
        border-radius: 60%;
        opacity: 0;
        &:checked  ~ .check {
            display: block;
            height: 10px;
            width: 10px;
            border: 5.5px solid #3b82f6;
        } 
    }
    .check {
        float: left;
        border: 1px solid #d1d5db;
        margin-top: 1px;
        height: 18px;
        width: 18px;
        border-radius: 60%;
    }
    .radioLabel{
        align-items: center;
        font-size: 16px;
        padding-left: 8px; 
    }
    .searchIcon{
        position:absolute; 
        left: 8px; 
        top: 8px; 
    }
    ::placeholder {
        opacity: 0.75
    }
    .resultLabel{
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;
        margin-bottom: 0px;
        margin-top: 18px;
    }
    .searchField{
        margin-bottom: 14px;
        width: 46.6%;
    }
    input.search{
        border: 0;
        border-radius: 4px;
        outline: 1px solid #9ca3af;
        font-family: inherit;
        font-size: 100%;
        font-weight: inherit;
        padding: 8px 12px 8px 40px;
        width: 100%;
        height: 22px;
    }
    input.search:focus {
        border-radius: 4px;
        outline: 3px solid #9dc1fa;
        border: 0;
    }
    .label {
        font-size: 16px;
        margin-bottom: 10px;
        display: block;
        font-weight: 700;
        margin-top: 0;
    }
    .search{
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 24px;
        height: 88vh;
		overflow-y: scroll;
    }
    .content{
        border-radius: 1px;
        border: 1px solid #f3f4f6;
        background-color:#ffffff;
        padding-top: 25px;
        padding-bottom: 24px;
        padding-left: 24px;
        padding-right: 24px;
    }
</style>