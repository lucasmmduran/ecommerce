# Ecommerce

## Para empezar

https://devdocs.prestashop-project.org/1.7/basics/installation/localhost/
https://github.com/PrestaShop/PrestaShop/tree/1.7.8.x

1) ```composer install ```
3) ```./tools/assets/build.sh```
4) ```chmod -R +w admin-dev/autoupgrade app/config app/logs app/Resources/translations cache config download img log mails modules themes translations upload var```

Release package: http://127.0.0.1/prestashop/install
Development version: http://127.0.0.1/prestashop/install-dev


hay un punto que hace validaciones contra los archivos de symfony y devuelve 'This value should not be blank.' esto se debe cambiar en el archivo de la siguiente ruta

ecommerce/vendor/symfony/symfony/src/Symfony/Component/Validator/Constraints/NotBlank.php

enlace para ver el listado de iconos

https://codepen.io/btn-ninja/pen/YrXmax

UPDATE prod.ps_shop_url SET domain = 'ec2-3-141-192-139.us-east-2.compute.amazonaws.com',
domain_ssl = 'ec2-3-141-192-139.us-east-2.compute.amazonaws.com' 
WHERE id_shop_url = 1;

UPDATE prod.ps_configuration SET `value` = 'ec2-3-141-192-139.us-east-2.compute.amazonaws.com' 
WHERE `name` = 'PS_SHOP_DOMAIN';

UPDATE `prod`.`ps_configuration` SET `value` = 'ec2-3-141-192-139.us-east-2.compute.amazonaws.com' 
WHERE `name` = 'PS_SHOP_DOMAIN_SSL';

-- para acivar si es ssl o no
-- value=0 no usa https
-- value=1 usa https
UPDATE prod.ps_configuration SET `value` = '0' WHERE `name` = 'PS_SSL_ENABLED';
UPDATE `prod`.`ps_configuration` SET `value` = '0' WHERE `name` = 'PS_SSL_ENABLED_EVERYWHERE';