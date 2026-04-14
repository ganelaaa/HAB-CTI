-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2026 at 03:36 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hab_cti`
--

-- --------------------------------------------------------

--
-- Table structure for table `publications`
--

CREATE TABLE `publications` (
  `id` int(11) NOT NULL,
  `resource_type` varchar(50) NOT NULL,
  `title` varchar(255) NOT NULL,
  `authors` varchar(255) DEFAULT NULL,
  `publication_year` int(11) DEFAULT NULL,
  `publisher_info` varchar(255) DEFAULT NULL,
  `abstract` text DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `publications`
--

INSERT INTO `publications` (`id`, `resource_type`, `title`, `authors`, `publication_year`, `publisher_info`, `abstract`, `link`) VALUES
(1, 'Journal', 'Mitigation of Karenia brevis Cells and Brevetoxins Using Curcumin, a Natural Supplement', 'Hammond, May;Clarkson', 2014, 'Florida : University of Florida Press', 'A series of laboratory bench-top studies were conducted with additions of 0.1, 1, 2, 3, 5, 10, 20, 30, and 40 mg/L curcumin to K. brevis at an average of 1.0 × 10^6 cells/L... 100% reduction in cell abundance was observed by 6 h, with reduction in total brevetoxins by at least 64% in 48 h... suggesting that curcumin, used alone or potentially in combination with other technologies, is a promising K. brevis bloom mitigation option.', 'http://example.com/curcumin_mitigation_karenia_brevis'),
(2, 'Journal', 'Effectiveness of ozone nanobubble treatments on high biomass cyanobacterial blooms: A mesocosm experiment and field trial', 'Dr. Emily Waters', 2021, 'Florida : National Oceanic Institute', 'Nanobubble ozone technology (NBOT) is an emerging water treatment option with potentially fewer negative impacts. We assessed the effectiveness of NBOT on Grand Lake St Marys, Ohio, using a natural cyanobacteria population. Mesocosms were initially subjected to either no algaecide or a specified maximum label rate... a natural cyanobacteria population. This study found that nanobubble ozone technology (NBOT) used in combination with other technologies shows potential as a sustainable bloom control technique.', 'http://example.com/ozone_nanobubbles_mesocosm_study'),
(3, 'Journal', 'Mesocosm study of PAC-modified clay effects on Karenia brevis cells and toxins, chemical dynamics, and benthic invertebrate physiology', 'Prof. Michael Reynolds', 2022, 'Texas : Journal of Aquatic Sciences', 'Modified clay compounds are used globally as a method of controlling harmful algal blooms... PAC-modified clay. In a mesocosm (2,000 L) experiment and high (2.04 +/- 0.07 G3:DOC) and low (0.68 +/- 0.05 G3:DOC) doses decreased both chlorophyll a and phycocyanin by 98-99% and microcystins by 62% and 92% respectively... a significant reduction... and there was a 57% reduction after 8 hours and 95% reduction after 48 hours...', 'http://example.com/pac_modified_clay_hab_control'),
(4, 'Video', 'Evaluation of a Peroxide-Based Algaecide for Cyanobacteria Control: A Mesocosm Trial in Lake Okeechobee, FL, USA', 'OceanWatch Documentary Series', 2023, 'National Science Channel (YouTube)', 'A 72-h small-scale trial was conducted in enclosed mesocosms in Lake Okeechobee to evaluate the effectiveness of a Peroxide-Based Algaecide (formulated as sodium carbonate peroxyhydrate) for controlling a natural cyanobacteria population. This video report provides a first-hand look at the evaluation, detailing the experimental setup, results, and expert interviews.', 'https://www.youtube.com/watch?v=example_lake_okeechobee');

-- --------------------------------------------------------

--
-- Table structure for table `publication_tags`
--

CREATE TABLE `publication_tags` (
  `publication_id` int(11) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `publication_tags`
--

INSERT INTO `publication_tags` (`publication_id`, `tag_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 6),
(2, 7),
(2, 3),
(2, 4),
(3, 8),
(3, 5),
(4, 3),
(4, 1),
(4, 6);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `category` varchar(50) DEFAULT NULL,
  `tag_name` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tags`
--

INSERT INTO `tags` (`id`, `category`, `tag_name`) VALUES
(1, 'Class of product', 'Chemical'),
(2, 'Mitigation product', 'biochemical algicide'),
(3, 'Species Tested On', 'Dinoflagellate genus: Karenia'),
(4, 'Scale of Experiment', 'Lab'),
(5, 'Waterbody', 'Marine'),
(6, 'Scale of Experiment', 'Mesocosms'),
(7, 'Mitigation product', 'biochemical'),
(8, 'Waterbody', 'Sea');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `publications`
--
ALTER TABLE `publications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `publication_tags`
--
ALTER TABLE `publication_tags`
  ADD KEY `publication_id` (`publication_id`),
  ADD KEY `tag_id` (`tag_id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `publication_tags`
--
ALTER TABLE `publication_tags`
  ADD CONSTRAINT `publication_tags_ibfk_1` FOREIGN KEY (`publication_id`) REFERENCES `publications` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `publication_tags_ibfk_2` FOREIGN KEY (`tag_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
