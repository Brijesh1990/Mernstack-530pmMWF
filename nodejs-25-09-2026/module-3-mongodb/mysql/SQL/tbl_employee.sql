-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2026 at 02:21 PM
-- Server version: 8.0.40
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amazon_db_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_employee`
--

CREATE TABLE `tbl_employee` (
  `empid` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `address` text,
  `salary` decimal(10,2) DEFAULT NULL,
  `department` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `age` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbl_employee`
--

INSERT INTO `tbl_employee` (`empid`, `name`, `email`, `password`, `mobile`, `address`, `salary`, `department`, `country`, `age`) VALUES
(2, 'twinkle', 'twinkle@gmail.com', 'tw123', 9998003899, '150 feet ring road rajkot', 145000.00, 'IT', 'india', 22),
(3, 'mahiraj', 'mahiraj@gmail.com', 'mahi123', 9998003889, '150 feet ring road ahemdabad', 155000.00, 'CSE', 'india', 26),
(4, 'brijesh', 'brijesh@gmail.com', 'brij123', 9998008899, '150 feet ring road rajkot', 145000.00, 'EC', 'india', 36),
(5, 'rakesh', 'rakesh@gmail.com', 'rakesh123', 81362200, 'CA b/USA', 850000.00, 'DA', 'USA', 30),
(6, 'ankit', 'ankit007@gmail.com', 'ankit@123456', 635428789, 'rajkot', 585624.00, 'IT', 'india', 26),
(7, 'lokesh', 'l@gmail.com', 'l566565', 91212215454, 'ahmd', 158500.00, 'DA', 'india', 24),
(8, 'prince', 'prince@gmail.com', 'p545565', 85232323211, '150 feet ring road', 20500.00, 'DA', 'usa', 23);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_employee`
--
ALTER TABLE `tbl_employee`
  ADD PRIMARY KEY (`empid`),
  ADD KEY `index_employee1` (`empid`),
  ADD KEY `index_employee2` (`empid`,`name`,`email`,`mobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_employee`
--
ALTER TABLE `tbl_employee`
  MODIFY `empid` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
