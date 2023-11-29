<?php

namespace app\Traits;

trait ApiResponseFormatter{
    public function get_api($code=200, $msg="success", $data=[]) {
        return json_encode([
            "code" => $code,
            "message" => $msg,
            "data" => $data
        ]); 
    }
}