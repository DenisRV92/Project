-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Ноя 15 2021 г., 14:04
-- Версия сервера: 10.3.22-MariaDB
-- Версия PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `base`
--

-- --------------------------------------------------------

--
-- Структура таблицы `логи`
--

CREATE TABLE `логи` (
  `id` int(11) DEFAULT NULL,
  `поисковой запрос` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `кол-во найденных товаров` int(11) DEFAULT NULL,
  `дата выполнения запроса` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `товары`
--

CREATE TABLE `товары` (
  `id` int(11) NOT NULL,
  `Наименования` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `Цена` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `Доступное количество` int(11) DEFAULT NULL,
  `Картинка` varchar(250) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `товары`
--

INSERT INTO `товары` (`id`, `Наименования`, `Цена`, `Доступное количество`, `Картинка`) VALUES
(1, 'Фасадная плитка', '500 р/м2', 590, 'https://c.radikal.ru/c36/2111/26/011480c4c24d.png\r\n'),
(2, 'Тратуарная плитка', '960 р/м2', 84, 'https://d.radikal.ru/d37/2111/0d/fb4231afb8a7.jpg\r\n'),
(3, 'Рядовая плитка', '1660 р/м2', 200, 'https://b.radikal.ru/b28/2111/91/0c85e9604bec.jpg\r\n'),
(4, 'Металлочерепица', '430 р/м2', 328, 'https://c.radikal.ru/c13/2111/dc/146dc9706131.jpg\r\n'),
(5, 'Гибкая черепица', '680 р/м2', 152, 'https://d.radikal.ru/d00/2111/4c/8451f7c3f3f9.jpg\r\n'),
(6, 'Цемент', '160 р/шт', 60, 'https://d.radikal.ru/d34/2111/2c/7ba453654b43.jpg\r\n'),
(7, 'Штакетник', '100 р/шт', 32, 'https://c.radikal.ru/c15/2111/d1/e32c72f4fe54.jpg\r\n'),
(8, 'Набор инструментов', '1980 р', 12, 'https://a.radikal.ru/a21/2111/07/0b445beaf6a9.jpg\r\n'),
(9, 'Набор инструментов', '6000 р', 9, 'https://c.radikal.ru/c12/2111/af/48abb996a2c0.jpg\r\n'),
(10, 'Стремянка', '2390 р', 16, 'https://b.radikal.ru/b05/2111/51/3a6542d73c9a.jpg\r\n'),
(11, 'Чердачная лестница', '20000 р', 4, 'https://b.radikal.ru/b06/2111/7b/58ffda80e37d.png\r\n'),
(12, 'Ножовка по металлу', '230 р', 22, 'https://a.radikal.ru/a09/2111/b2/42184a7216df.jpg\r\n');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `товары`
--
ALTER TABLE `товары`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `товары`
--
ALTER TABLE `товары`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
