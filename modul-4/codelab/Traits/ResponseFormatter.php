<?php

namespace Traits;

//disimulasikan ini trait untuk formatter json response 
trait ResponseFormatter
{
    public function responseFormatter($code, $message, $data = null)
    {
        return json_encode([
            "code" => $code,
            "message" => $message,
            "data" => $data
        ]);
    }
}