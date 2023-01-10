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
<article class="product-miniature js-product-miniature{if isset($page.page_name) && $page.page_name == 'index'}{if isset($tc_config.YBC_TC_FLOAT_CSS3) && $tc_config.YBC_TC_FLOAT_CSS3 == 1} wow zoomIn{/if}{/if}" data-id-product="{$product.id_product|escape:'html':'UTF-8'}" data-id-product-attribute="{$product.id_product_attribute|escape:'html':'UTF-8'}" itemscope itemtype="http://schema.org/Product">
  <div class="thumbnail-container">
    <div class="image_item_product">
        {block name='product_thumbnail'}
          <a href="{$product.url|escape:'html':'UTF-8'}" class="thumbnail product-thumbnail">
            <img src = "{$product.cover.bySize.home_default.url|escape:'html':'UTF-8'}" alt = "{$product.cover.legend|escape:'html':'UTF-8'}" data-full-size-image-url = "{$product.cover.large.url|escape:'html':'UTF-8'}" />
          </a>
        {/block}
        {*block name='product_variants'}
            {if $product.main_variants}
              {include file='catalog/_partials/variant-links.tpl' variants=$product.main_variants}
            {/if}
        {/block*}
        {block name='product_flags'}
          <ul class="product-flags">
            {foreach from=$product.flags item=flag}
                {if $flag.type != 'discount'}
                  <li class="{$flag.type|escape:'html':'UTF-8'}">
                    <span> {$flag.label|escape:'html':'UTF-8'}</span>
                  </li>
                {/if}
            {/foreach}
          </ul>
        {/block}
        
         <div>
             <div class="add_to_cart_button atc_div">
                   <input name="qty" type="hidden" class="form-control atc_qty" value="1" onfocus="if(this.value == '1') this.value = '';" onblur="if(this.value == '') this.value = '1';"/>
                    <button class="add_to_cart btn btn-primary" onclick="mypresta_productListCart.add({literal}$(this){/literal});">
                        <i class="fa fa-shopping-cart"></i>
                        {if isset($tc_config.YBC_TC_LABEL_CART) && $tc_config.YBC_TC_LABEL_CART}
                             {$tc_config.YBC_TC_LABEL_CART|escape:'html':'UTF-8'}
                        {else}
                            {l s='Add to cart' d='Shop.Theme'}
                        {/if}
                    </button>
             </div>
        </div>
         <div class="button-container-product highlighted-informations">
             {hook h='displayProductListFunctionalButtons' product=$product}
              <a href="#" class="quick-view table-cell" data-link-action="quickview">
                <i class="fa fa-search-plus"></i>
              </a>
              <a class="table-cell" href="{$product.url|escape:'html':'UTF-8'}">
                <i class="fa fa-eye"></i>
              </a>
          </div>
    </div>
    <div class="product-description">
      {block name='product_name'}
        <h4 class="h3 product-title" itemprop="name"><a href="{$product.url|escape:'html':'UTF-8'}">{$product.name|truncate:30:'...'}</a></h4>
      {/block}
      <div class="hook-reviews">
	      {hook h='displayProductListReviews' product=$product}
	  </div>
      {if isset($product.description_short) && $product.description_short !=''}
        <div class="short_description">{$product.description_short|truncate:100:'...' nofilter}</div>
      {/if}
      {block name='product_price_and_shipping'}
        {if $product.show_price}
          <div class="product-price-and-shipping">
            {hook h='displayProductPriceBlock' product=$product type="before_price"}
            <span itemprop="price" class="price"> {$product.price|escape:'html':'UTF-8'}</span>
            {if $product.has_discount}
              {hook h='displayProductPriceBlock' product=$product type="old_price"}

              <span class="regular-price"> {$product.regular_price|escape:'html':'UTF-8'}</span>
              {*if $product.discount_type === 'percentage'}
                <span class="discount-percentage"> {$product.discount_percentage|escape:'html':'UTF-8'}</span>
              {/if*}
            {/if}
                        
            {hook h='displayProductPriceBlock' product=$product type='unit_price'}
            {hook h='displayProductPriceBlock' product=$product type='weight'}
          </div>
        {/if}
      {/block}
      <div class="button-container-product highlighted-informations">
         {hook h='displayProductListFunctionalButtons' product=$product}
          <a class="table-cell quick-view" href="#" data-link-action="quickview">
            <i class="fa fa-search-plus"></i>
          </a>
          <a class="table-cell" href="{$product.url|escape:'html':'UTF-8'}">
            <i class="fa fa-eye"></i>
          </a>
      </div>
    </div>
  </div>
</article>
