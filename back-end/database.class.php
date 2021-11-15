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
        $sql = "SELECT id,Наименования,Цена,`Доступное количество`,Картинка
                FROM товары 
                WHERE наименования 
                LIKE '%$p%' AND `Доступное количество` > 0 ";
        $query = $this->pdo->prepare($sql);
        $query->execute();
        $result = $query->fetchAll();
        $current = file_get_contents('log.txt');


        if ((string)$p !== "") {
            $current .= 'поисковый запрос' . '-' . (string)$p . ';' . ' ';

            $current .= 'кол-во  найденных товаров' . '-' . (string)count($result) . ';' . ' ';

            $current .= 'дата выполнения запроса' . '-' . (string)date('l jS \of F Y h:i:s A') . ';';

            $current .= "\n";

            file_put_contents('log.txt', $current);

        }
        return $result;

    }

    public function clearLogi()
    {

        $current = file_get_contents('log.txt');

        preg_match_all('/поисковый запрос-(.*?);/', $current, $name);
        preg_match_all('/кол-во  найденных товаров-(.*?);/', $current, $count);
        preg_match_all('/дата выполнения запроса-(.*?);/', $current, $data);

        array_map(function ($i, $v) {
            $sql = "INSERT INTO  логи (`id`,`поисковой запрос`)  VALUES ('$i','$v')";
            $query = $this->pdo->prepare($sql);
            $query->execute();

        }, array_keys($name[1]), array_values($name[1]));
        array_map(function ($i, $v) {
            $sql = "UPDATE  логи SET `кол-во найденных товаров`='$v' WHERE `id`='$i'";
            $query = $this->pdo->prepare($sql);
            $query->execute();

        }, array_keys($count[1]), array_values($count[1]));
        array_map(function ($i, $v) {
            $sql = "UPDATE  логи SET `дата выполнения запроса`='$v' WHERE `id`='$i'";
            $query = $this->pdo->prepare($sql);
            $query->execute();
            file_put_contents('log.txt', '');

        }, array_keys($data[1]), array_values($data[1]));

    }
}
