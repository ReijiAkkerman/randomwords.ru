<?php
    (function() {
        $mysql = new \mysqli('localhost', 'root', 'KisaragiEki4', 'AUTH');
        $mysql->query('DELETE FROM users');
    })();