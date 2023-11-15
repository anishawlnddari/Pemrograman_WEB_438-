<?php
include "Controller/ProductController.php";

use Controller\ProductController;

//deklarasikan objek class
$productController = new ProductController;

//tampilkan hasil kembalian dari method getAllproduct menggunakan echo
echo $productController->getAllproduct();
