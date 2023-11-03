<script lang="ts">

    import infoIcon from "../assets/icons/info.png";
    import {sorter} from "../components/columnSorter"

    function goTo(pageName: string) {
        location.replace(`/${pageName.toLowerCase()}s`)
    }
    export let pageName: string
    export let displayedObj: Record<string, string | number>
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
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label>{key}</label>
                    <p>{value}</p>
                {/each}
            </div>
            <div class="column">
                {#each Object.entries(secondObj) as [key, value]}
                    <!-- svelte-ignore a11y-label-has-associated-control -->
                    <label>{key}</label>
                    <p>{value}</p>
                {/each}
            </div>
        </div>
        <hr>
        <button type=reset class="redBtn" on:click= {() =>{goTo(pageName)}}>
            Go back
        </button>
    </div>
</div>

<style>
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
    hr {
        margin: 11px -24px 23px;
        border-top: 1px solid #f3f4f6;
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
        padding:  24px;
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
        margin: 16px;
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
</style>