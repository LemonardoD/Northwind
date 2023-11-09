<script lang="ts">
    import infoIcon from "../assets/icons/info.png";
    import {sorter} from "../components/columnSorter"
	import { getPriceFormat, namingList } from "./tablesHelpers";
    import { goto } from '$app/navigation';

    export let pageName: string
    export let displayedObj: Record<string, string | number>
    export let tblInfo: {
        productId: number;
        Product: string;
        Quantity: number;
        "Order Price": number;
        "Total Price": number;
        Discount: number;
    }[]
    const [firstObj, secondObj] = sorter(displayedObj)
</script>

<div class="card">
    <header class="cardHeader">
        <img src={infoIcon} alt="Info"/>
        <span class="headerTitle">{pageName} information</span>
    </header>
    <div class="cardContent">
        <div class="gridColumns">
            <div class="column">
                {#each Object.entries(firstObj) as [key, value]}
                    {#if key === "Supplier"}
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>{key}</label><!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
                        <p><a href={`/supplier/${firstObj.supplierId}`}>{value}</a></p>
                    {:else if key === "Customer Id"}
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>{key}</label><!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
                        <p><a href={`/customer/${value}`}>{value}</a></p>
                    {:else if !namingList.includes(key)}
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>{key}</label>
                        <p>{value}</p>
                    {/if}
                {/each}
            </div>
            <div class="column">
                {#each Object.entries(secondObj) as [key, value]}
                    {#if key === "Reports To"}
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>{key}</label><!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
                        <p><a href={`/employee/${secondObj.reportsId}`}>{value}</a></p>
                    {:else if !namingList.includes(key)}
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label>{key}</label>
                        <p>{value}</p>
                    {/if}
                {/each}
            </div>
        </div>
    </div>
    {#if tblInfo.length}
        <div class="cardTable">
            <header class="cardHeader"><p class="headerTable">Products in Order</p></header>
            <div class="table">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Order Price</th>
                            <th>Total Price</th>
                            <th>Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each tblInfo as item}
                            <tr>
                                {#each Object.entries(item) as [key, value]}
                                    {#if key === "Product"}<!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
                                        <td data-label={key}><a href={`/product/${item.productId}`}>{value}</a></td>
                                    {:else if key === "Order Price" ||  key === "Total Price"}
                                        <td data-label={key}>{getPriceFormat(Number(value))}</td>
                                    {:else if  key === "Discount"}
                                        <td data-label={key}>{value+"%"}</td>
                                    {:else if  key === "Quantity"}
                                        <td data-label={key}>{value}</td>
                                    {/if}
                                {/each}
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    {/if}
    <div class="backButton">
        <button class="redBtn" on:click= {() =>{goto(`/${pageName.toLowerCase()}s`)}}>
            Go back
        </button>
    </div>
</div>

<style>
    .headerTable{
        padding: 12px 16px;
        margin: 0;
        flex-grow: 1;
        font-weight: 700;
    }
    table {
        width: 100%;
        border-collapse: collapse;
    }
    
    .backButton{
        padding: 24px;
        border-top: 1px solid #e5e7eb;
    }
    .cardTable{
        border-radius: 4px;
        border: 1px solid #f3f4f6;
    }
    a{  
        cursor: pointer;
        color: #2563EB;
        text-decoration: inherit;
    }
    .redBtn:hover{
        background-color: #dc2626;
    }
    .redBtn{
        padding: 9.5px 16px;
        font-size: inherit;
        font-family: inherit;
        position: relative;
        display: inline-flex;
        cursor: pointer;
        justify-content: center;
        text-align: center;
        border: 1px solid #ef4444;
        background-color: #ef4444;
        color: #ffffff;
        border-radius: 4px;
    }
    p{  
        margin-top: 0px;
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 12px;
        word-wrap: break-word;
    }
    img{
        height: 24px;
        width: 24px;
        padding: 12px 8px 12px 16px;
    }
    label {
        line-height: 24px;
        margin-bottom: 8px;
        font-size: 16px;
        display: block;
        font-weight: 700;
    }
    .cardContent{
        padding:  24px 24px 12px;
    }
    .gridColumns{
        grid-template-columns: repeat(2,minmax(0,65%));
        display: grid;
        gap: 16px;
    }
    .card{
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border: 1px solid #f3f4f6;
        background-color: #ffffff;
        margin: 24px;
    }
    .headerTitle{
        padding-top: 13px;
        padding-bottom: 12px;
        margin: 0;
        flex-grow: 1;
        font-weight: 700;
    }
    .cardHeader {
        display: flex;
        align-items: stretch;
        border-bottom: 1px solid #f3f4f6;
    }

    @media (max-width: 1023px) {
        thead {
            display: none;
        }
        
        td::before {
            content: attr(data-label);
            text-align: left;
            font-weight: 600;
        }

        tr {
            position: relative;
            display: block;
            max-width: 100%;
            border-bottom: 2px solid #f3f4f6;
        }

        td{ 
            display: flex;
            justify-content: space-between;
            padding: 9.4px 12px;
            text-align: right;
            vertical-align: top;
            border-bottom: 1px solid #f3f4f6;
        }
    }
    @media (min-width: 1023px) {

        td::before {
            display: none;
        }

        th{
            padding: 8px 12px;
            text-align: left;
            font-size: 16px;
            line-height: 24px;
        }

        tr {
            display: table-row;
            border-bottom-width: 0px;
        }

        td{
            display: table-cell;
            border-bottom-width: 0px;
            text-align: left;
            vertical-align: middle;
            padding: 9.4px 12px;
        }

        tr:nth-child(odd) td{
            background-color: #f9fafb;
        }

        tr:hover td{
            background-color: #f3f4f6;
        }
    }
</style>