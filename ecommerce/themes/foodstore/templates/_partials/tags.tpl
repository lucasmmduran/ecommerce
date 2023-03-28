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
{if $page.page_name == 'product'}
    <ul class="producttags container">
        {foreach from=Tag::getProductTags(Tools::getValue('id_product')) key=k item=v}
            {if !empty($k)}
                {foreach from=$v item=value}
                    <li><a href="{$link->getPageLink('search', true, NULL, "tag={$value|urlencode}")}">{$value|escape:html:'UTF-8'}</a></li>
                {/foreach}
            {/if}
        {/foreach}
    </ul>
{/if}