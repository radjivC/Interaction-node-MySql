-- phpMyAdmin SQL Dump
-- version 4.0.6
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 01, 2014 at 04:47 PM
-- Server version: 5.5.33
-- PHP Version: 5.5.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `node_js_sample`
--

-- --------------------------------------------------------

--
-- Table structure for table `unicorn`
--

CREATE TABLE `unicorn` (
  `ID` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Auto incrementing primary key',
  `name` text NOT NULL,
  `birthday` NOT NULL,
  `status`
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- Dumping data for table `sample_content`
--


INSERT INTO `unicorn` (`ID`, `name`, `birthday`,`status` ) VALUES
(1, 'charlie', '02/10/2010', 'sleepy'),
(2, 'sam', '02/10/2012', 'exited');
