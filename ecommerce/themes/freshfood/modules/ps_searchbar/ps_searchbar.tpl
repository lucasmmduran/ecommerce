{*
* 2007-2022 ETS-Soft
*
* NOTICE OF LICENSE
*
* This file is not open source! Each license that you purchased is only available for 1 wesite only.
* If you want to use this file on more websites (or projects), you need to purchase additional licenses. 
* You are not allowed to redistribute, resell, lease, license, sub-license or offer our resources to any third party.
* 
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs, please contact us for extra customization service at an affordable price
*
*  @author ETS-Soft <etssoft.jsc@gmail.com>
*  @copyright  2007-2022 ETS-Soft
*  @license    Valid for 1 website (or project) for each purchase of license
*  International Registered Trademark & Property of ETS-Soft
*}
<!-- Block search module TOP -->
<div id="search_widget" class="search-widget col-lg-4 col-md-5 col-sm-12{if isset($tc_config.YBC_TC_LAYOUT) && $tc_config.YBC_TC_LAYOUT == 'LayoutHome2' || $tc_config.YBC_TC_LAYOUT == 'LayoutHome5'} seach_bar_type2{/if}" data-search-controller-url="{$search_controller_url|escape:'html':'UTF-8'}">
	<span class="search_icon_toogle"><i class="material-icons-search"></i></span>
    <form class="search_form ybc_hide" method="get" action="{$search_controller_url|escape:'html':'UTF-8'}">
		<span class="search_close"><i class="fa fa-times"></i></span>
        <input type="hidden" name="controller" value="search">
		<input type="text" name="s" value="{$search_string|escape:'html':'UTF-8'}" placeholder="{l s='Search...' d='Shop.Theme.Catalog'}">
		<button type="submit">
			<i class="material-icons">search</i>
		</button>
	</form>
</div>
<!-- /Block search module TOP -->