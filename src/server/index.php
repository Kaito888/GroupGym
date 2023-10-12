<?php

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

require_once('Answer.php');
require_once('Application.php');

function result($params) {
    $method = $params['method'];
    if ($method) {
        $app = new Application();
        switch ($method) {
            case 'login': return $app->login($params);
            case 'signup' : return $app->signup($params);
            case 'logout' : return $app->logout();
            default : return array(false, 1002);
        }
    }
    return array(false, 1001);
}

echo json_encode(Answer::response(result($_GET)));