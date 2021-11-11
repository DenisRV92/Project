<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require_once 'config.php';
require_once 'database.class.php';
$db = new database($pdo);
$rows = $db->getData();
echo json_encode($rows);
// echo json_encode($_POST);;
// $qqq = 'h';
// echo json_encode($qqq);
