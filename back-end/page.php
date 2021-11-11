<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
// header('Content-Type: application/json');
// define('SERVERNAME', 'localhost');
// define('USERNAME', 'root');
// define('PASSWORD', 'root');
// define('DBNAME', 'base');
$data = [
    "title" => $_POST['name']
];
// $connection = new PDO('mysql:host=localhost:dbname=base', 'root', 'root');
// var_dump($connection);
$dsn = 'mysql:host=localhost;dbname=base;charset=utf8';
$username = 'root';
$password = 'root';
// $options = array(
//     PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
// );
$connection = new PDO($dsn, $username, $password);
// $sql = "INSERT INTO  `товары` (наименования) VALUES (:title)";
$sql = 'SELECT * FROM товары';
$sth = $connection->prepare($sql);
$sth->execute();
$result = $sth->fetchAll();
// json_encode($result);
// $result=json_encode($result);
// echo $result;
// return json_encode($result);

echo json_encode($result);
// echo 'ssss';
// $conn = mysqli_connect(SERVERNAME, USERNAME, PASSWORD, DBNAME);
// var_dump($statement);
// header("Content-Type": "application/json");
// $_POST = json_decode(file_get_contents('php://input'), true);
// echo $_POST;
// print_r($_POST);
// echo '2222';
// $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : '';
// print_r(file_get_contents('php://input'));
// if( is_empty($_POST) ){ 
// $_POST = json_decode(file_get_contents('php://input', true));
// $_SERVER["REQUEST_METHOD"]
// print_r($_SERVER["REQUEST_METHOD"]);
// print_r($_SERVER['REQUEST_METHOD']);
//  } ;
// print_r($HTTP_RAW_POST_DATA);
// print_r($_POST);
// return print_r($_POST);
// if ($contentType === "application/json") {
//     //Receive the RAW post data.
//     $content = trim(file_get_contents("php://input"));

//     $decoded = json_decode($content, true);
//     print_r($_POST);
//     //If json_decode failed, the JSON is invalid.
//     if (!is_array($decoded)) {
//         print_r($_POST);
//     } else {
//         print_r($_POST);
//         // Send error back to user.
//     }
//     print_r($_POST);
// }
// print_r($_POST);
// header("content-type: application/json");
// $obj = json_decode($_POST["title"]);
// $out[] = file_get_contents('php://input');
// $out[] = 100;
// $out[] = $_POST;
// echo json_encode($out);
// print_r($_SERVER['HTTP_REFERER']);
// print_r($_POST);
// print_r($_SERVER['REQUEST_METHOD']); -->