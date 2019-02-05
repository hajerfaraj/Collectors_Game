-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 26, 2019 at 01:20 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `collectors_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `top50`
--

CREATE TABLE IF NOT EXISTS `top50` (
  `uid` int(11) NOT NULL,
  `score` time NOT NULL,
  KEY `constraint_2` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `top50`
--

INSERT INTO `top50` (`uid`, `score`) VALUES
(1, '01:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `uid` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(25) NOT NULL,
  KEY `constraint_1` (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`uid`, `email`, `password`) VALUES
(1, 'hiba@yahoo.com', '123456');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE IF NOT EXISTS `userinfo` (
  `uid` int(11) NOT NULL,
  `fname` varchar(80) NOT NULL,
  `uname` varchar(50) NOT NULL,
  `gender` varchar(50) NOT NULL,
  `country` varchar(50) NOT NULL,
  `lastlogin` date NOT NULL,
  `img` char(80) NOT NULL,
  `topscore` time NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`uid`, `fname`, `uname`, `gender`, `country`, `lastlogin`, `img`, `topscore`) VALUES
(1, 'hiba', 'ali', 'gggg', 'tripoli', '0000-00-00', 'gfhgh', '01:00:00'),
(2, 'ali', 'hiba', 'fggghh', 'tripoli', '0000-00-00', 'gggg', '01:05:00');

--
-- Constraints for dumped tables
--

--
-- Constraints for table `top50`
--
ALTER TABLE `top50`
  ADD CONSTRAINT `constraint_2` FOREIGN KEY (`uid`) REFERENCES `user` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `constraint_1` FOREIGN KEY (`uid`) REFERENCES `userinfo` (`uid`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
