# Host: localhost  (Version: 5.5.53)
# Date: 2019-06-13 17:18:02
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "data"
#

DROP TABLE IF EXISTS `data`;
CREATE TABLE `data` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL COMMENT '说明文字',
  `url` varchar(255) NOT NULL DEFAULT '' COMMENT '图片url',
  `pwd` varchar(255) NOT NULL DEFAULT '' COMMENT '图片本地路径',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='数据表';

#
# Data for table "data"
#

/*!40000 ALTER TABLE `data` DISABLE KEYS */;
/*!40000 ALTER TABLE `data` ENABLE KEYS */;

#
# Structure for table "login"
#

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT '' COMMENT '用户名',
  `password` varchar(255) NOT NULL DEFAULT '' COMMENT '密码',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='登录表';

#
# Data for table "login"
#

/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,'hhdlq','hhdlq');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
