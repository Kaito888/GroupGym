<?php

class User {
    function __construct($db) {
        $this->db = $db;
    }

    function login($login, $hash, $rnd) {
        $hashS = md5(md5($login . '1234') . $rnd);
        if ($hash === $hashS) {
            $token = md5($hash . rand());
            return array(
                //take those from db
                'name' => 'Vasya',
                'surname' => 'Vasin',
                'token' => $token
            );
        }
        return array(false, 2002);
    }

    //change when theres db (check application signup first)
    function signup($login, $hash, $rnd, $name, $surname) {
        $token = md5($hash . rand());
        return array(
            'name' => $name,
            'surname' => $surname,
            'token' => $token
        );
    }

    function logout() {
        return array();
    }
}