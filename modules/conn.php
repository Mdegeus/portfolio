<?php


try {
    /* Connect to a MySQL database using driver invocation */
    $dsn = 'mysql:dbname=portfolio_v4;host=127.0.0.1';
    $user = 'root';
    $password = '';

    $conn = new PDO($dsn, $user, $password);
} catch (Exception $e) {
    die("Oh no! Error: " . $e);
}
