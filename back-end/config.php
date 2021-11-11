<?php
$dsn = 'mysql:host=localhost;dbname=base;charset=utf8';
$username = 'root';
$password = 'root';
try
{
    $pdo = new PDO($dsn, $username, $password);
}
catch (PDOException $e)
{
    exit('Error Connecting To DataBase');
}
