<?php

require_once('modules/chat/Chat.php');
require_once('modules/db/DB.php');
require_once('modules/game/Game.php');
require_once('modules/user/User.php');

class Application {
    function __construct() {
        $db = new DB();
        $this->user = new User($db);
        $this->chat = new Chat($db);
        $this->game = new Game($db);
    }

    function login($params) {
        $login = $params['login'];
        $hash = $params['hash'];
        $rnd = $params['rnd'];

        if($login && $hash && $rnd) {
            return $this->user->login($login, $hash, $rnd);
        }
        return array(false, 2001);
    }

    function signup($params) {
        $login = $params['login'];
        $hash = $params['hash'];
        $rnd = $params['rnd'];
        $name = $params['name'];
        $surname = $params['surname'];

        if($login && $hash && $rnd && $name && $surname) {
            //put name n surname in db n do login()
            return $this->user->signup($login, $hash, $rnd, $name, $surname);
        }
        return array(false, 2003);
    }

    function logout() {
        return $this->user->logout();
    }
}