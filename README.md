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