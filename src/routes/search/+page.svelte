<script lang="ts">

	import SideBar from '../../components/sideBar.svelte';
    import NavBar from '../../components/navBar.svelte';
    import searchIcon from "../../assets/icons/searchbl.png"
	import ContentMover from '../../components/contentMover.svelte';
    let table = 'Products';
	
	function onChange(event: { currentTarget: { value: string; }; }) {
		table = event.currentTarget.value;
	}
</script>

<NavBar/>
<aside><SideBar/></aside>
<ContentMover>
    <div class="search">
        <div class="content">
            <div class="searchField">
                <p class="label">Search Database</p>
                <div class="searchSection">
                    <input class="search"placeholder="Enter keyword..." value="">
                    <img src={searchIcon} alt="searchIcon" class="searchIcon"/>  
                </div>
            </div>
            <p class="label">Tables</p>
            <div  class="selectTbl">
                <label>
                    <input class="radio"checked={table==="Products"} on:change={onChange} type="radio" name="table" value="Products"/>
                    <span class="check"></span>
                    <span class="radioLabel">Products</span>
                  </label>
                <label>
                    <input class="radio"checked={table==="Customers"} on:change={onChange} type="radio" name="table" value="Customers"  />
                    <span class="check"></span>
                    <span class="radioLabel">Customers</span>
                </label>
            </div>
            <p class="resultLabel">Search results</p>
            <p class="noResult">No results</p>
        </div>
    </div>
</ContentMover>



<style>
    .noResult{
        font-size: 16px;
        margin-top: 25px;
    }
    .selectTbl{
        margin-top: 11px;
    }
    label{
        cursor: pointer;
        margin-right: 7.5px;
    }
    .searchSection{
        padding-top: 1px;
        padding-left: 1px;
        position: relative;
    }
    input[type='radio'] {
        margin-top: 1px;
        position: absolute;
        height: 18px;
        width: 18px;
        background: #ffffff;
        border-radius: 60%;
        opacity: 0;
        &:checked  ~ .check {
            height: 10px;
            width: 10px;
            border: 5.5px solid #3b82f6;
        } 
    }
    .check {
        border: 1px solid #d1d5db;
        margin-top: 1px;
        position: absolute;
        height: 18px;
        width: 18px;
        background: #ffffff;
        border-radius: 60%;
    }
    .radioLabel{
        align-items: center;
        font-size: 16px;
        padding-left: 28px; 
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
        padding: 16px;
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