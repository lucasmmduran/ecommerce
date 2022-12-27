(()=>{"use strict";var e={9567:e=>{e.exports=window.jQuery}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{o.r(n);
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
const e={modalButtons:"a.product-shops-action",modalId:"modal-product-shops",form:'form[name="product_shops"]',modalSizeContainer:".product-shops-form",cancelButton:"#product_shops_buttons_cancel",editProductClass:"multi-shop-edit-product",selectorItem:".shop-selector-item",shopItemClass:"shop-selector-shop-item",groupShopItemClass:"shop-selector-group-item",shopListCell:".column-associated_shops .product-shop-list",contextWarning:".multi-shop-context-warning"},t={categoriesContainer:"#product_description_categories",categoriesModalTemplate:"#categories-modal-template",modalContentContainer:"#categories-modal-content",categoriesModalId:"categories-modal",applyCategoriesBtn:".js-apply-categories-btn",cancelCategoriesBtn:".js-cancel-categories-btn",categoryTree:".js-category-tree-list",treeElement:".category-tree-element",treeElementInputs:".category-tree-inputs",treeCheckboxInput:".tree-checkbox-input",checkboxInput:"[type=checkbox]",checkedCheckboxInputs:"[type=checkbox]:checked",checkboxName:e=>`product[description][categories][product_categories][${e}][is_associated]`,inputByValue:e=>`input[value="${e}"]`,defaultCategorySelectInput:"#product_description_categories_default_category_id",materialCheckbox:".md-checkbox",radioInput:"[type=radio]",defaultRadioInput:"[type=radio]:checked",radioName:e=>`product[description][categories][product_categories][${e}][is_default]`,tagsContainer:".pstaggerTagsWrapper",tagRemoveBtn:".pstaggerClosingCross",tagCategoryIdInput:".category-id-input",tagItem:".tag-item",categoryNamePreview:".category-name-preview",namePreviewInput:".category-name-preview-input",categoryNameInput:".category-name-input",searchInput:"#ps-select-product-category",fieldset:".tree-fieldset",loader:".categories-tree-loader",childrenList:".children-list",addCategoriesBtn:".add-categories-btn",categoryFilter:{container:".product_list_category_filter",categoryRadio:".category-label input:radio",filterForm:"#product_filter_form",positionInput:'input[name="product[position]"]',expandedClass:"less",collapsedClass:"more",categoryChildren:".category-children",categoryLabel:".category-label",categoryLabelClass:"category-label",categoryNode:".category-node",expandAll:".category_tree_filter_expand",collapseAll:".category_tree_filter_collapse",resetFilter:".category_tree_filter_reset"}},{$:i}=window,r=t.categoryFilter;class s{constructor(){this.$categoryTree=i(r.container),this.$filterForm=this.$categoryTree.parent("form"),this.init()}init(){this.$categoryTree.on("click",r.categoryLabel,(e=>{e.target instanceof HTMLInputElement?this.$filterForm.submit():e.target.classList.contains(r.categoryLabelClass)&&this.toggleCategory(i(e.currentTarget).parent(r.categoryNode))})),this.$categoryTree.on("click",r.expandAll,(()=>{this.expandAll()})),this.$categoryTree.on("click",r.collapseAll,(()=>{this.collapseAll()})),i(r.resetFilter).on("click",(()=>{this.resetFilter()})),this.collapseAll()}toggleCategory(e){const t=e.find(r.categoryChildren).first();if(!t.length)return;const o=e.hasClass(r.expandedClass);t.toggleClass("d-none",o),e.toggleClass(r.expandedClass,!o),e.toggleClass(r.collapsedClass,o)}resetFilter(){this.$categoryTree.find(r.categoryRadio).prop("checked",!1),this.$filterForm.submit()}expandAll(){this.$categoryTree.find(r.categoryChildren).removeClass("d-none"),this.$categoryTree.find(r.categoryChildren).parent(r.categoryNode).removeClass(r.collapsedClass).addClass(r.expandedClass)}collapseAll(){this.$categoryTree.find(r.categoryChildren).addClass("d-none"),this.$categoryTree.find(r.categoryChildren).parent(r.categoryNode).removeClass(r.expandedClass).addClass(r.collapsedClass)}}var a=o(9567),c=Object.defineProperty,d=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))l.call(t,o)&&p(e,o,t[o]);if(d)for(var o of d(t))h.call(t,o)&&p(e,o,t[o]);return e};
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
class m{constructor(e){const t=u({id:"confirm-modal",closable:!1},e);this.buildModalContainer(t)}buildModalContainer(e){this.container=document.createElement("div"),this.container.classList.add("modal","fade"),this.container.id=e.id,this.dialog=document.createElement("div"),this.dialog.classList.add("modal-dialog"),e.dialogStyle&&Object.keys(e.dialogStyle).forEach((t=>{this.dialog.style[t]=e.dialogStyle[t]})),this.content=document.createElement("div"),this.content.classList.add("modal-content"),this.message=document.createElement("p"),this.message.classList.add("modal-message"),this.header=document.createElement("div"),this.header.classList.add("modal-header"),e.modalTitle&&(this.title=document.createElement("h4"),this.title.classList.add("modal-title"),this.title.innerHTML=e.modalTitle),this.closeIcon=document.createElement("button"),this.closeIcon.classList.add("close"),this.closeIcon.setAttribute("type","button"),this.closeIcon.dataset.dismiss="modal",this.closeIcon.innerHTML="×",this.body=document.createElement("div"),this.body.classList.add("modal-body","text-left","font-weight-normal"),this.title&&this.header.appendChild(this.title),this.header.appendChild(this.closeIcon),this.content.append(this.header,this.body),this.body.appendChild(this.message),this.dialog.appendChild(this.content),this.container.appendChild(this.dialog)}}class f{constructor(e){const t=u({id:"confirm-modal",closable:!1,dialogStyle:{}},e);this.initContainer(t)}initContainer(e){this.modal||(this.modal=new m(e)),this.$modal=a(this.modal.container);const{id:t,closable:o}=e;this.$modal.modal({backdrop:!!o||"static",keyboard:void 0===o||o,show:!1}),this.$modal.on("hidden.bs.modal",(()=>{const o=document.querySelector(`#${t}`);o&&o.remove(),e.closeCallback&&e.closeCallback()})),document.body.appendChild(this.modal.container)}setTitle(e){return this.modal.title||(this.modal.title=document.createElement("h4"),this.modal.title.classList.add("modal-title"),this.modal.closeIcon?this.modal.header.insertBefore(this.modal.title,this.modal.closeIcon):this.modal.header.appendChild(this.modal.title)),this.modal.title.innerHTML=e,this}render(e){return this.modal.message.innerHTML=e,this}show(){return this.$modal.modal("show"),this}hide(){return this.$modal.modal("hide"),this.$modal.on("shown.bs.modal",(()=>{this.$modal.modal("hide"),this.$modal.off("shown.bs.modal")})),this}}Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var g=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var o=-1;return e.some((function(e,n){return e[0]===t&&(o=n,!0)})),o}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var o=e(this.__entries__,t),n=this.__entries__[o];return n&&n[1]},t.prototype.set=function(t,o){var n=e(this.__entries__,t);~n?this.__entries__[n][1]=o:this.__entries__.push([t,o])},t.prototype.delete=function(t){var o=this.__entries__,n=e(o,t);~n&&o.splice(n,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var o=0,n=this.__entries__;o<n.length;o++){var i=n[o];e.call(t,i[1],i[0])}},t}()}(),y="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,b=void 0!==o.g&&o.g.Math===Math?o.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),v="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(b):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var _=["top","right","bottom","left","width","height","size","weight"],w="undefined"!=typeof MutationObserver,E=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var o=!1,n=!1,i=0;function r(){o&&(o=!1,e()),n&&a()}function s(){v(r)}function a(){var e=Date.now();if(o){if(e-i<2)return;n=!0}else o=!0,n=!1,setTimeout(s,t);i=e}return a}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,o=t.indexOf(e);~o&&t.splice(o,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){y&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),w?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){y&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,o=void 0===t?"":t;_.some((function(e){return!!~o.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),x=function(e,t){for(var o=0,n=Object.keys(t);o<n.length;o++){var i=n[o];Object.defineProperty(e,i,{value:t[i],enumerable:!1,writable:!1,configurable:!0})}return e},C=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||b},O=k(0,0,0,0);function T(e){return parseFloat(e)||0}function I(e){for(var t=[],o=1;o<arguments.length;o++)t[o-1]=arguments[o];return t.reduce((function(t,o){return t+T(e["border-"+o+"-width"])}),0)}function A(e){var t=e.clientWidth,o=e.clientHeight;if(!t&&!o)return O;var n=C(e).getComputedStyle(e),i=function(e){for(var t={},o=0,n=["top","right","bottom","left"];o<n.length;o++){var i=n[o],r=e["padding-"+i];t[i]=T(r)}return t}(n),r=i.left+i.right,s=i.top+i.bottom,a=T(n.width),c=T(n.height);if("border-box"===n.boxSizing&&(Math.round(a+r)!==t&&(a-=I(n,"left","right")+r),Math.round(c+s)!==o&&(c-=I(n,"top","bottom")+s)),!function(e){return e===C(e).document.documentElement}(e)){var d=Math.round(a+r)-t,l=Math.round(c+s)-o;1!==Math.abs(d)&&(a-=d),1!==Math.abs(l)&&(c-=l)}return k(i.left,i.top,a,c)}var L="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof C(e).SVGGraphicsElement}:function(e){return e instanceof C(e).SVGElement&&"function"==typeof e.getBBox};function S(e){return y?L(e)?function(e){var t=e.getBBox();return k(0,0,t.width,t.height)}(e):A(e):O}function k(e,t,o,n){return{x:e,y:t,width:o,height:n}}var M=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=k(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=S(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),j=function(e,t){var o,n,i,r,s,a,c,d=(n=(o=t).x,i=o.y,r=o.width,s=o.height,a="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(a.prototype),x(c,{x:n,y:i,width:r,height:s,top:i,right:n+r,bottom:s+i,left:n}),c);x(this,{target:e,contentRect:d})},$=function(){function e(e,t,o){if(this.activeObservations_=[],this.observations_=new g,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=o}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof C(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new M(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof C(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new j(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),P="undefined"!=typeof WeakMap?new WeakMap:new g,R=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var o=E.getInstance(),n=new $(t,o,this);P.set(this,n)};["observe","unobserve","disconnect"].forEach((function(e){R.prototype[e]=function(){var t;return(t=P.get(this))[e].apply(t,arguments)}}));void 0!==b.ResizeObserver&&b.ResizeObserver;const G=class extends Event{constructor(e,t={}){super(G.parentWindowEvent),this.eventName=e,this.eventParameters=t}get name(){return this.eventName}get parameters(){return this.eventParameters}};G.parentWindowEvent="IframeClientEvent";Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
function F(e){return void 0===e}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
function B(t,o){if(F(t.dataset.modalTitle)||F(t.dataset.shopSelector))return;const n=new f({id:"select-shop-for-edition-modal",modalTitle:t.dataset.modalTitle,closable:!0});n.render(t.dataset.shopSelector),n.modal.container.querySelectorAll(`.${e.shopItemClass}`).forEach((e=>{F(e.dataset.shopId)||(-1===o.indexOf(e.dataset.shopId)?e.classList.add("d-none"):e.addEventListener("click",(()=>{document.location.href=`${t.getAttribute("href")}&setShopContext=s-${e.dataset.shopId}`})))}));let i=null,r=!0;const s=n.modal.container.querySelectorAll(e.selectorItem);s.forEach(((t,o)=>{t.classList.contains(e.groupShopItemClass)?(i&&r&&i.classList.add("d-none"),r=!0,i=t):t.classList.contains(e.shopItemClass)&&!t.classList.contains("d-none")&&(r=!1),o===s.length-1&&i&&r&&i.classList.add("d-none")})),n.show()}
/**
 * Copyright since 2007 PrestaShop SA and Contributors
 * PrestaShop is an International Registered Trademark & Property of PrestaShop SA
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.md.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/OSL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://devdocs.prestashop.com/ for more information.
 *
 * @author    PrestaShop SA and Contributors <contact@prestashop.com>
 * @copyright Since 2007 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/OSL-3.0 Open Software License (OSL 3.0)
 */
const{$:q}=window;q((()=>{const t=new window.prestashop.component.Grid("product");t.addExtension(new window.prestashop.component.GridExtensions.ExportToSqlManagerExtension),t.addExtension(new window.prestashop.component.GridExtensions.ReloadListExtension),t.addExtension(new window.prestashop.component.GridExtensions.SortingExtension),t.addExtension(new window.prestashop.component.GridExtensions.FiltersResetExtension),t.addExtension(new window.prestashop.component.GridExtensions.SubmitRowActionExtension),t.addExtension(new window.prestashop.component.GridExtensions.SubmitBulkActionExtension),t.addExtension(new window.prestashop.component.GridExtensions.AjaxBulkActionExtension),t.addExtension(new window.prestashop.component.GridExtensions.BulkActionCheckboxExtension),t.addExtension(new window.prestashop.component.GridExtensions.FiltersSubmitButtonEnablerExtension),t.addExtension(new window.prestashop.component.GridExtensions.AsyncToggleColumnExtension),t.addExtension(new window.prestashop.component.GridExtensions.PositionExtension(t)),t.addExtension(new window.prestashop.component.GridExtensions.LinkRowActionExtension((t=>{var o,n,i,r,s;if(t.classList.contains(e.editProductClass)){const a=null!=(s=null==(r=null==(i=null==(n=null==(o=t.closest("tr"))?void 0:o.querySelector(e.shopListCell))?void 0:n.dataset)?void 0:i.shopIds)?void 0:r.split(","))?s:[];B(t,a)}else document.location.href=t.getAttribute("href")}))),document.querySelectorAll(`.${e.editProductClass}`).forEach((t=>{t.addEventListener("click",(o=>{var n,i,r,s,a;if(o.preventDefault(),t.classList.contains(e.editProductClass)){const o=null!=(a=null==(s=null==(r=null==(i=null==(n=t.closest("tr"))?void 0:n.querySelector(e.shopListCell))?void 0:i.dataset)?void 0:r.shopIds)?void 0:s.split(","))?a:[];B(t,o)}else document.location.href=t.getAttribute("href")}))})),new s}))})(),window.product_index=n})();