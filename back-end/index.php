<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
require_once 'config.php';
require_once 'database.class.php';
$db = new database($pdo);
$rows = $db->getData();

if ($_POST['logi']) {
    $logi = $db->clearLogi();
    echo $logi;
} else {
    echo json_encode($rows);
}
