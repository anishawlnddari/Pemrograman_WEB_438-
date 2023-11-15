<?php

namespace Controller;

include "Traits/ResponseFormatter.php";
include "Controller/Controller.php";

use Traits\ResponseFormatter;

//disimulasikan ini adalah class controller product
class ProductController extends Controller
{
    //gunakan trait yang sudah dibuat 
    use ResponseFormatter;

    //magic method, method ini akan diakses pada saat pembuatan object.
    public function __construct()
    {
        //set atribut controllerName pada parent class controller
        $this->controllerName = "Get All Product";
        //set atribut controllerMethod pada parent class controller
        $this->controllerMethod = "Get";

    }
    
    //disimulasikan ini method untuk get data product
    public function getAllproduct()
    {
        $dummyData = [
            "Air Mineral",
            "Kebab",
            "Spaghetti",
            "Jus Jambu"
        ];

        $response = [
            "controller_attribute" => $this->getControllerAttribute(), //ambil method getControllerAttrbute dari parent class 
            "product" => $dummyData
        ];
        //gunakan method dari trait yang sudah dibuat
        return $this->responseFormatter(200, "Success", $response);
    }
}