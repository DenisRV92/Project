<?php

class database
{
    // private $logi = array();
    function __construct($pdo)
    {
        $this->pdo = $pdo;
    }

    function getData()
    {
        // global $newVar;
        $p = $_POST['input'];
        $sql = "SELECT id,наименования,Цена FROM товары WHERE наименования LIKE '%$p%' AND `Доступное количество` > 0 ";
        $query = $this->pdo->prepare($sql);
        $query->execute();
        $result = $query->fetchAll();
        // return $query->fetchAll();
        $current = file_get_contents('log.txt');
        // $logi = array();
        // $logi = array();
        // Добавляем нового человека в файл
        // $current .= '222222222';
        $array = array();
//        $array = array(['поисковый запрос' => (string)$p,
//            'кол-во найденных товаров' => (string)count($result),
//            'дата выполнения запроса' => (string)date('l jS \of F Y h:i:s A')]);
        // $current .= (string)count($result);
        // $count = strval(count($query->fetchAll()));
        // array_push($logi, ['поисковый запрос' => (string)$p]);
//        array_push($array, ['поисковый запрос' => (string)$p,
//            'кол-во найденных товаров' => (string)count($result),
//            'дата выполнения запроса' => (string)date('l jS \of F Y h:i:s A')]);
//         clearLogi($this->logi);
        if ((string)$p !== "") {
            $current .= 'поисковый запрос' . '-' . (string)$p . ';' . ' ';
            // $current = ['поисковый запрос' => (string)$p];
            // $current = array('поисковый запрос' => (string)$p, 'кол-во  найденных товаров' => (string)count($result), 'дата выполнения запроса' => (string)date('l jS \of F Y h:i:s A'));
            $current .= 'кол-во  найденных товаров' . '-' . (string)count($result) . ';' . ' ';
//            // $current = ['кол-во  найденных товаров' => (string)count($result)];
            $current .= 'дата выполнения запроса' . '-' . (string)date('l jS \of F Y h:i:s A') . ';';
            // $current = ['дата выполнения запроса' => (string)date('l jS \of F Y h:i:s A')];
//        $current = serialize(array('поисковый запрос' => (string)$p,
//            'кол-во найденных товаров' => (string)count($result),
//            'дата выполнения запроса' => (string)date('l jS \of F Y h:i:s A')));
            $current .= "\n";
//             $current = serialize($array);
            // // Пишем содержимое обратно в файл
            // $results = print_r($current, true);

            file_put_contents('log.txt', $current);
//            return $current;
        }
        return $result;
//        return $current;
        // return $this->logi;
        // return $current .= 'поисковый запрос' . ':' . (string)count($query->fetchAll());
    }

    public function clearLogi()
    {

        $current = file_get_contents('log.txt');
//        // file_put_contents('log.txt', '');
//        $file = unserialize($current);
//        $a = file($current);
//        $a = array();
//        $lines = file('http://www.example.com/');
//        foreach ($lines as $line_num => $line) {
//            echo "Строка #<b>{$line_num}</b> : " . htmlspecialchars($line) . "<br />\n";
//        }
//        $file = $_SERVER['DOCUMENT_ROOT'] . '/log.txt';
//        $a = file($current);
//        $a = file( $current);
//        return json_encode(gettype($a));
        // file($current);
//        (^поисковый запрос-(.*?);|(?:^\d{1,8}[a-z]{2,4}$)|(?:^\d{5},\d{5}$)|(?:^\d{3}:[a-z]{2}>\d{7}$)
//        preg_match_all('/(^поисковый запрос-(.*?);|(кол-во  найденных товаров))/', $current, $name);
//
        preg_match_all('/поисковый запрос-(.*?);/', $current, $name);
//return json_encode($name[1]);
        preg_match_all('/кол-во  найденных товаров-(.*?);/', $current, $count);
        preg_match_all('/дата выполнения запроса-(.*?);/', $current, $data);
//
//        $name[1]=$count[1];
//        return json_encode($count[1]);
//        array_map(function ($v,$i) {
//            global $count,$i;
//
//            array_map(function ($v) {
//                $sql = "INSERT INTO  логи (`поисковый запрос`) VALUES ('$v')";
//            $query = $this->pdo->prepare($sql);
//            $query->execute();
//        }, $name[1]);


//        for ($v = 0; $v < $count($name[1]); $v++) {
//            $sql = "INSERT INTO  логи (`поисковый запрос`) VALUES ('$v')";
//            $query = $this->pdo->prepare($sql);
//            $result = $query->execute();
//            return $result;
//////            for ($val = 0; $val < $count($count[1]); $val++) {
////////                for ($value = 0; $v < $count($name[1]); $value++) {
//////                    global $v ;
//            $sql = "INSERT INTO  логи (`поисковый запрос`) VALUES ('$v')";
//            $query = $this->pdo->prepare($sql);
//            $result = $query->execute();
//            return json_encode($result);
////                }
//        }
//        }
        array_map(function ($i, $v) {
            $sql = "INSERT INTO  логи (`id`,`поисковой запрос`)  VALUES ('$i','$v')";
            $query = $this->pdo->prepare($sql);
            $query->execute();
//            return $result;
//           $query->execute();
        }, array_keys($name[1]), array_values($name[1]));
        array_map(function ($i, $v) {
            $sql = "UPDATE  логи SET `кол-во найденных товаров`='$v' WHERE `id`='$i'";
            $query = $this->pdo->prepare($sql);
            $query->execute();
//            return $result;
//           $query->execute();
        }, array_keys($count[1]), array_values($count[1]));
        array_map(function ($i, $v) {
            $sql = "UPDATE  логи SET `дата выполнения запроса`='$v' WHERE `id`='$i'";
            $query = $this->pdo->prepare($sql);
            $query->execute();
            file_put_contents('log.txt', '');
//            return $result;
//           $query->execute();
        }, array_keys($data[1]), array_values($data[1]));
//        return json_encode($name);
        // return json_encode($this->logi);
        // return json_encode(gettype($lines));
    }
}
