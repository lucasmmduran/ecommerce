<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7 lt-ie6"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8 ie7"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9 ie8"> <![endif]-->
<!--[if gt IE 8]> <html class="no-js ie9"> <![endif]-->
<html lang="{$iso}">
	<head>
		<meta charset="utf-8">

		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
		<meta name="apple-mobile-web-app-capable" content="yes">
		<link rel="icon" type="image/x-icon" href="{$img_dir}favicon.ico" />
		<link rel="apple-touch-icon" href="{$img_dir}app_icon.png" />

		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<meta name="robots" content="NOFOLLOW, NOINDEX">
		<title>
			{$shop_name} {if $meta_title != ''}{if isset($navigationPipe)}{$navigationPipe|escape:'html':'UTF-8'}{else}&gt;{/if} {$meta_title}{/if} (PrestaShop&trade;)
		</title>
		{foreach from=$css_files key=css_uri item=media}
			<link href="{$css_uri}" rel="stylesheet" type="text/css" media="{$media}" />
		{/foreach}
        <link href="https://github.com/argob/poncho/blob/master/dist/css/poncho.css" rel="stylesheet" type="text/css"/>
		{if (isset($js_def) && count($js_def) || isset($js_files) && count($js_files))}
			{include file=$smarty.const._PS_ALL_THEMES_DIR_|cat:"javascript.tpl"}
		{/if}
    <script type="text/javascript" src="../js/admin/login.js?v={$smarty.const._PS_VERSION_|escape:'html':'UTF-8'}"></script>
	</head>
	<body class="ps_back-office bootstrap">
		<div id="login">
			<div id="content">
