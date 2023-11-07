<script lang="ts">
    import reloadIcon from '../assets/icons/goback.png';
    import userIcon from '../assets/icons/user.png'
    import bigUserIcon from '../assets/icons/userBig.png';
	import { getDate, getPriceFormat, getTitles, goToPage, goToUnit, handleReloadClick, hrefNamingList, namingList } from './tablesHelpers';

    export let dataList: object[]
    export let pgNum: number
    export let pageList: number[]
    export let tblName: string
    export let icons: boolean

    const headTitles = getTitles(dataList)

</script>

<div class="Page">
    <div class="content">
        <header class="cardHeader">
            <p class="cardHeaderTitle">{tblName}</p>
            <button class ="reload" on:click={handleReloadClick}>
                <img class="reloadIcon"src={reloadIcon} alt="Reload">
            </button>
        </header>
        <div class="cardContent">
            <table>
                <thead>
                    <tr>
                        {#if icons}
                            <th></th>
                        {/if}
                        {#each headTitles as title}
                            {#if !namingList.includes(title)}
                                <th>{title}</th>
                            {/if}
                        {/each}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {#each dataList as item}
                        <tr>
                            {#if icons}
                                <td class="imageBig"><img class="bigUserIcon"src={bigUserIcon} alt={tblName}/></td>
                                <td class="imageSmall"><img class="userIcon"src={userIcon} alt={tblName}/></td>
                            {/if}
                            {#each Object.entries(item) as [key, value]}
                                {#if !namingList.includes(key)}
                                    {#if hrefNamingList.includes(key)}<!-- svelte-ignore a11y-click-events-have-key-events --><!-- svelte-ignore a11y-missing-attribute --><!-- svelte-ignore a11y-no-static-element-interactions -->
                                        <td data-label={key}><a on:click = {() =>{goToUnit("/"+tblName.toLowerCase().slice(0, -1)+"/"+Object.values(item)[0])}}>{value}</a></td>
                                    {:else if key === "Total Price"}
                                        <td data-label={key}>{getPriceFormat(value)}</td>
                                    {:else if key === "Price"}
                                        <td data-label={key}>{`$${value}`}</td>
                                    {:else if key === "Shipped"}
                                        <td data-label={key}>{getDate(value)}</td>
                                    {:else}
                                        <td data-label={key}>{value}</td>
                                    {/if}
                                {/if}
                            {/each}
                        </tr>
                    {/each}
                </tbody>
            </table>
            {#if pageList.length === 1}
                <div class="tablePagination">
                    <small style="float left">Page 1 of 1</small>
                </div>
            {:else}
                <div class="tablePagination">
                    {#each pageList as page}
                        <button on:click = {() =>{goToPage(page, tblName)}} class="pages {page === pgNum ? 'active' : ''}">
                            {page} 
                        </button>
                    {/each}
                    <small class="pageLabel">Page {pgNum} of {pageList[pageList.length-1]}</small>
                </div>
            {/if}
            
        </div>
    </div>
</div>


<style>
    a{  
        cursor: pointer;
        color: #2563EB;
        text-decoration: inherit;
    }
    .Page{
        border: 1px solid #e5e7eb;
        padding: 24px;
        font-family: ui-sans-serif, system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    button.pages.active {
        border: 1px solid #d1d5db
    }

    button.pages:hover{
        border: 1px solid #5b5b5b;
    }

    button.pages{
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
        border-radius: 4px;
        border: 1px solid #f9fafb;
        padding: 8px 16px;
        text-align: center;
        margin: 0px 4px;
        background: none;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    .pageLabel{
        padding-top: 10px;
        font-size: 80%;
        float: right;
    }

    .tablePagination{
        border-top: 1px solid #f3f4f6;
        padding: 13px 24px;
    }

    td{ 
        display: flex;
        justify-content: space-between;
        padding: 9.4px 12px;
        text-align: right;
        vertical-align: top;
        border-bottom: 1px solid #f3f4f6;
    }

    button.reload{
        width: 48px;
        right: 24px;
        border: none;
        background: none;
        cursor: pointer;
        padding: 0;
        -webkit-tap-highlight-color: transparent;
    }

    img.reloadIcon{
        position: flex;
        height: 24px;
        width: 24px;
        padding: 11px 15px;
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
        border-bottom: 4px solid #f3f4f6;
    }
    table {
        margin: 0;
        width: 100%;
        border-collapse: collapse;
    }

    .cardContent{
        padding:0;
    }

    .cardHeaderTitle{
        margin: 0;
        flex-grow: 1;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        align-items: center;
        padding: 10px 16px 12px;
    }

    .cardHeader{
        height: 48px;
        display: flex;
        align-items: stretch;
        border-bottom: 1px solid #f3f4f6;
    }

    .content{
        background-color:#ffffff;
    }

    @media (max-width: 1023px) {
        thead {
            display: none;
        }
        img.userIcon{
           display: none;
           padding: 0;
        }
        img.bigUserIcon {
            width: 128px;
            height: 128px;
            display: block;
            margin: 0 auto;
            padding: 8px 12px;
            border-bottom-width: 0px;
        }
        td.imageSmall {
            display: none;
        }
        
    }

    @media (min-width: 1023px) {

        td.imageBig {
            display: none;
        }
        td.imageSmall {
            width: 24px;
        }
        img.userIcon{
            padding: 0;
            width: 24px;
            height: 24px;
            display: table-cell;
            vertical-align: middle;
        }
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
        }

        tr:nth-child(odd) td{
            background-color: #f9fafb;
        }

        tr:hover td{
            background-color: #f3f4f6;
        }
    }
</style>