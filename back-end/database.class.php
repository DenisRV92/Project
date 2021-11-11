<?php
class database
{
    function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    function getData()
    {
        $p = $_POST['input'];
        $sql = "SELECT * FROM товары WHERE наименования LIKE '%$p%' ";
        $query = $this->pdo->prepare($sql);
        $query->execute();
        $result = $query->fetchAll();
        // return $query->fetchAll();
        $current = file_get_contents('log.txt');
        // Добавляем нового человека в файл
        // $current .= '222222222';
        // $current .= (string)count($result);
        // $count = strval(count($query->fetchAll()));
        $current .= 'поисковый запрос' . '-' . (string)$p . ';' . ' ';
        $current .= 'кол-во  найденных товаров' . '-' . (string)count($result) . ';' . ' ';
        $current .= 'дата выполнения запроса' . '-' . (string)date('l jS \of F Y h:i:s A');
        $current .= "\n";
        // Пишем содержимое обратно в файл
        file_put_contents('log.txt', $current);
        return $result;
        // return $current .= 'поисковый запрос' . ':' . (string)count($query->fetchAll());
    }
}
