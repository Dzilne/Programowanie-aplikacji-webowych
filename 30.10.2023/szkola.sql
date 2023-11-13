-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 12 Lis 2023, 15:37
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `szkola`
--

-- --------------------------------------------------------

--
-- Tabela `forms`
--

CREATE TABLE `forms` (
  `id` int(11) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `email` varchar(150) NOT NULL,
  `topic` varchar(15) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Tabela `students`
--

CREATE TABLE `students` (
  `id` int(11) NOT NULL,
  `name` text NOT NULL,
  `surname` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Insert do tabeli `students`
--

INSERT INTO `students` (`id`, `name`, `surname`, `email`) VALUES
(1, 'Wojciech', 'Weiss', 'malarz@email.com'),
(2, 'Krzysztof', 'Krawczyk', 'lubieKoke@email.com'),
(3, 'Filip', 'Szcześniak', 'mixsalat@email.com'),
(4, 'Jakub', 'Grabowski', 'lubiemochi@email.com'),
(5, 'Donald', 'Trump', 'buildingwall@email.com'),
(6, 'Joseph', 'Dżugashwili', 'redpapa@email.com'),
(7, 'Jan', 'Kochanowski', 'zabilemurszulke@email.com'),
(8, 'Lech', 'Kaczynski', 'smolenskincident@email.com'),
(9, 'Andrew', 'Tate', 'whatcolourisyourbugatti@email.com'),
(10, 'Marek', 'Nowak', 'gigachad@email.com');

-- --------------------------------------------------------

--
-- Tabela `subjects`
--

CREATE TABLE `subjects` (
  `id` int(11) NOT NULL,
  `subject` varchar(25) NOT NULL,
  `hoursAWeek` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Insert do tabeli `subjects`
--

INSERT INTO `subjects` (`id`, `subject`, `hoursAWeek`) VALUES
(1, 'Język polski', 3),
(2, 'Matematyka', 5),
(3, 'ENGLISH MOTHERFUCKER DO YOU SPEAK IT', 3),
(4, 'Aplikacje mobilne', 2),
(5, 'Mockownia', 1),
(6, 'Mista White Cooking Class', 1),
(7, 'Rabendix wixa', 69),
(8, 'Daty i trupy', 1),
(9, 'Deutschland Deutschland über alles', 1939),
(10, 'Giżownia', 420);

--
-- Indeksy dla tabel
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`id`);

--
-- 
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`id`);

--
-- 
--
ALTER TABLE `subjects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT-y dla tabel
--
ALTER TABLE `forms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 
--
ALTER TABLE `students`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 
--
ALTER TABLE `subjects`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;