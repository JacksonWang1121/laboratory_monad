/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : laboratory

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-02-28 15:46:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `laboratory`
-- ----------------------------
DROP TABLE IF EXISTS `laboratory`;
CREATE TABLE `laboratory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `_class` varchar(50) NOT NULL,
  `stu_name` varchar(20) NOT NULL,
  `_date` varchar(20) NOT NULL,
  `_time` varchar(30) NOT NULL,
  `equipment` varchar(100) NOT NULL,
  `note` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of laboratory
-- ----------------------------
INSERT INTO `laboratory` VALUES ('1', '二年级一班', '张三', '2019-02-28 15:36:27', '周一第三四节课', '石头,剪刀,布', '阿里山的合法');
