/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : laboratory

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2019-02-22 23:05:38
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `laboratory`
-- ----------------------------
DROP TABLE IF EXISTS `laboratory`;
CREATE TABLE `laboratory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `monad_num` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `note` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of laboratory
-- ----------------------------
INSERT INTO `laboratory` VALUES ('1', '111', '合法肯定是', '啊士大夫看见哈');
INSERT INTO `laboratory` VALUES ('2', '222', '发的哈时间', '的撒谎付款');
INSERT INTO `laboratory` VALUES ('3', '333', '是大连分行', null);
