-- MySQL dump 10.14  Distrib 5.5.47-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: cb_chanthel
-- ------------------------------------------------------
-- Server version	5.5.47-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `action_log`
--

DROP TABLE IF EXISTS `action_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_log` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `object_id` bigint(20) unsigned NOT NULL,
  `object_pid` bigint(20) unsigned DEFAULT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `action_type` enum('create','update','delete','complete','completion_decline','completion_on_behalf','close','rename','reopen','status_change','overdue','comment','comment_update','move','password_change','permissions','user_delete','user_create','login','login_fail','file_upload','file_update') NOT NULL,
  `action_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data` mediumtext,
  `activity_data_db` mediumtext,
  `activity_data_solr` mediumtext,
  PRIMARY KEY (`id`),
  KEY `FK_action_log__object_id` (`object_id`),
  KEY `FK_action_log__object_pid` (`object_pid`),
  KEY `FK_action_log__user_id` (`user_id`),
  KEY `IDX_action_time` (`action_time`),
  CONSTRAINT `FK_action_log__object_id` FOREIGN KEY (`object_id`) REFERENCES `tree` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_action_log__object_pid` FOREIGN KEY (`object_pid`) REFERENCES `tree` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_action_log__user_id` FOREIGN KEY (`user_id`) REFERENCES `users_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `action_log`
--

LOCK TABLES `action_log` WRITE;
/*!40000 ALTER TABLE `action_log` DISABLE KEYS */;
INSERT INTO `action_log` VALUES (1,5,88,1,'move','2016-06-29 03:07:29','{\"id\":\"5\",\"template_id\":\"11\",\"name\":\"folder\",\"cid\":\"1\",\"cdate\":\"2014-01-17 06:50:48\",\"uid\":\"1\",\"udate\":\"2016-03-23 03:18:23\",\"oid\":\"1\",\"pids\":[1,2,3,5],\"path\":\"\\/System\\/Templates\\/\",\"iconCls\":\"icon-folder\",\"old\":[],\"new\":[]}','{\"fu\":[]}',NULL),(2,6,88,1,'move','2016-06-29 03:07:29','{\"id\":\"6\",\"template_id\":\"11\",\"name\":\"file\",\"cid\":\"1\",\"cdate\":\"2014-01-17 06:50:48\",\"uid\":\"1\",\"udate\":\"2014-01-17 07:09:12\",\"oid\":\"1\",\"pids\":[1,2,3,6],\"path\":\"\\/System\\/Templates\\/\",\"iconCls\":\"file-\",\"old\":[],\"new\":[]}','{\"fu\":[]}',NULL),(3,7,88,1,'move','2016-06-29 03:07:29','{\"id\":\"7\",\"template_id\":\"11\",\"name\":\"task\",\"cid\":\"1\",\"cdate\":\"2014-01-17 06:50:48\",\"uid\":\"1\",\"udate\":\"2015-05-20 23:58:35\",\"oid\":\"1\",\"pids\":[1,2,3,7],\"path\":\"\\/System\\/Templates\\/\",\"iconCls\":\"icon-task\",\"old\":[],\"new\":[]}','{\"fu\":[]}',NULL),(4,8,88,1,'move','2016-06-29 03:07:29','{\"id\":\"8\",\"template_id\":\"11\",\"name\":\"Thesauri Item\",\"cid\":\"1\",\"cdate\":\"2014-01-17 07:09:11\",\"uid\":\"240\",\"udate\":\"2014-02-28 07:12:11\",\"oid\":\"1\",\"pids\":[1,2,3,8],\"path\":\"\\/System\\/Templates\\/\",\"iconCls\":\"icon-blue-document-small\",\"old\":[],\"new\":[]}','{\"fu\":[]}',NULL),(5,9,88,1,'move','2016-06-29 03:07:29','{\"id\":\"9\",\"template_id\":\"11\",\"name\":\"Comment\",\"cid\":\"1\",\"cdate\":\"2014-02-12 14:14:04\",\"oid\":\"1\",\"pids\":[1,2,3,9],\"path\":\"\\/System\\/Templates\\/\",\"iconCls\":\"icon-balloon\",\"old\":[],\"new\":[]}','{\"fu\":[]}',NULL),(6,10,88,1,'move','2016-06-29 03:07:29','{\"id\":\"10\",\"template_id\":\"11\",\"name\":\"User\",\"cid\":\"1\",\"cdate\":\"2014-01-17 06:50:48\",\"uid\":\"1\",\"udate\":\"2014-01-17 07:09:12\",\"oid\":\"1\",\"pids\":[1,2,3,10],\"path\":\"\\/System\\/Templates\\/\",\"iconCls\":\"icon-object4\",\"old\":[],\"new\":[]}','{\"fu\":[]}',NULL),(7,58,88,1,'move','2016-06-29 03:07:29','{\"id\":\"58\",\"template_id\":\"11\",\"name\":\"shortcut\",\"cid\":\"1\",\"cdate\":\"2015-06-06 14:50:18\",\"oid\":\"1\",\"pids\":[1,2,3,58],\"iconCls\":\"i-shortcut\",\"path\":\"\",\"old\":[],\"new\":[]}','{\"fu\":[]}',NULL),(8,59,3,1,'move','2016-06-29 03:07:29','{\"id\":\"59\",\"template_id\":\"5\",\"name\":\"Menu\",\"cid\":\"1\",\"cdate\":\"2015-07-24 00:45:11\",\"oid\":\"1\",\"pids\":[1,2,3,59],\"iconCls\":\"icon-folder\",\"path\":\"\",\"old\":[],\"new\":[]}','{\"fu\":[]}',NULL),(9,83,88,1,'move','2016-06-29 03:07:29','{\"id\":\"83\",\"template_id\":\"11\",\"name\":\"link\",\"cid\":\"1\",\"cdate\":\"2015-09-01 00:23:21\",\"oid\":\"1\",\"pids\":[1,2,3,83],\"iconCls\":\"icon-shortcut\",\"path\":\"\",\"old\":[],\"new\":[]}','{\"fu\":[]}',NULL),(10,68,60,1,'update','2016-06-29 03:09:05','{\"id\":\"68\",\"template_id\":\"62\",\"name\":\"Global Menu\",\"pids\":[],\"cid\":\"1\",\"uid\":\"1\",\"cdate\":\"2015-07-24T00:45:11Z\",\"udate\":\"2015-09-01T00:28:13Z\",\"path\":\"\\/Tree\\/System\\/Menus\\/\",\"oid\":\"1\",\"iconCls\":\"icon-none\",\"old\":{\"menu\":[{\"idx\":0,\"value\":\"7,83,61,5\"}]},\"new\":{\"menu\":[{\"idx\":0,\"value\":\"7,83,61,5,9\"}]}}','{\"fu\":[]}',NULL),(11,68,60,1,'update','2016-06-29 03:10:03','{\"id\":\"68\",\"template_id\":\"62\",\"name\":\"Global Menu\",\"pids\":[],\"cid\":\"1\",\"uid\":\"1\",\"cdate\":\"2015-07-24T00:45:11Z\",\"udate\":\"2016-06-29T03:09:05Z\",\"path\":\"\\/Tree\\/System\\/Menus\\/\",\"oid\":\"1\",\"iconCls\":\"icon-none\",\"old\":{\"menu\":[{\"idx\":0,\"value\":\"7,83,61,5,9\"}]},\"new\":{\"menu\":[{\"idx\":0,\"value\":\"7,83,61,5\"}]}}','{\"fu\":[]}',NULL),(12,118,4,1,'create','2016-06-29 03:15:02','{\"id\":\"118\",\"template_id\":\"5\",\"name\":\"case\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:15:01\",\"oid\":\"1\",\"pids\":[1,2,4,118],\"iconCls\":\"icon-folder\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"case\"}]}}','{\"fu\":[]}',NULL),(13,119,118,1,'create','2016-06-29 03:16:34','{\"id\":\"119\",\"template_id\":\"5\",\"name\":\"contact role\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:16:34\",\"oid\":\"1\",\"pids\":[1,2,4,118,119],\"iconCls\":\"icon-folder\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"contact role\"}]}}','{\"fu\":[]}',NULL),(14,120,119,1,'create','2016-06-29 03:17:00','{\"id\":\"120\",\"template_id\":\"8\",\"name\":\"ad\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:17:00\",\"oid\":\"1\",\"pids\":[1,2,4,118,119,120],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"ad\"}]}}','{\"fu\":[]}',NULL),(15,120,119,1,'update','2016-06-29 03:17:41','{\"id\":\"120\",\"template_id\":\"8\",\"name\":\"Defendant\",\"pids\":[],\"cid\":\"1\",\"cdate\":\"2016-06-29T03:17:00Z\",\"path\":\"\\/Tree\\/System\\/Thesauri\\/case\\/contact role\\/\",\"oid\":\"1\",\"iconCls\":\"icon-blue-document-small\",\"old\":{\"en\":[{\"idx\":0,\"value\":\"ad\"}]},\"new\":{\"en\":[{\"idx\":0,\"value\":\"Defendant\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":1}]}}','{\"fu\":[]}',NULL),(16,121,119,1,'create','2016-06-29 03:19:21','{\"id\":\"121\",\"template_id\":\"8\",\"name\":\"Government Official\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:19:21\",\"oid\":\"1\",\"pids\":[1,2,4,118,119,121],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Government Official\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-small-tag\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":2}]}}','{\"fu\":[]}',NULL),(17,122,119,1,'create','2016-06-29 03:20:14','{\"id\":\"122\",\"template_id\":\"8\",\"name\":\"Lawyer\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:20:14\",\"oid\":\"1\",\"pids\":[1,2,4,118,119,122],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Lawyer\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":3}]}}','{\"fu\":[]}',NULL),(18,123,118,1,'create','2016-06-29 03:20:34','{\"id\":\"123\",\"template_id\":\"5\",\"name\":\"status\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:20:34\",\"oid\":\"1\",\"pids\":[1,2,4,118,123],\"iconCls\":\"icon-folder\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"status\"}]}}','{\"fu\":[]}',NULL),(19,124,123,1,'create','2016-06-29 03:21:08','{\"id\":\"124\",\"template_id\":\"8\",\"name\":\"New\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:21:08\",\"oid\":\"1\",\"pids\":[1,2,4,118,123,124],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"New\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":1}]}}','{\"fu\":[]}',NULL),(20,125,123,1,'create','2016-06-29 03:21:46','{\"id\":\"125\",\"template_id\":\"8\",\"name\":\"Ongoing\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:21:46\",\"oid\":\"1\",\"pids\":[1,2,4,118,123,125],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Ongoing\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":2}]}}','{\"fu\":[]}',NULL),(21,126,123,1,'create','2016-06-29 03:26:21','{\"id\":\"126\",\"template_id\":\"8\",\"name\":\"On Hold\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:26:21\",\"oid\":\"1\",\"pids\":[1,2,4,118,123,126],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"On Hold\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":3}]}}','{\"fu\":[]}',NULL),(22,127,123,1,'create','2016-06-29 03:27:01','{\"id\":\"127\",\"template_id\":\"8\",\"name\":\"Archived\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:27:01\",\"oid\":\"1\",\"pids\":[1,2,4,118,123,127],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Archived\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":4}]}}','{\"fu\":[]}',NULL),(23,128,123,1,'create','2016-06-29 03:27:34','{\"id\":\"128\",\"template_id\":\"8\",\"name\":\"Closed\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:27:34\",\"oid\":\"1\",\"pids\":[1,2,4,118,123,128],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Closed\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":5}]}}','{\"fu\":[]}',NULL),(24,129,118,1,'create','2016-06-29 03:28:02','{\"id\":\"129\",\"template_id\":\"5\",\"name\":\"tags\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:28:02\",\"oid\":\"1\",\"pids\":[1,2,4,118,129],\"iconCls\":\"icon-folder\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"tags\"}]}}','{\"fu\":[]}',NULL),(25,130,129,1,'create','2016-06-29 03:28:36','{\"id\":\"130\",\"template_id\":\"8\",\"name\":\"Torture\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:28:36\",\"oid\":\"1\",\"pids\":[1,2,4,118,129,130],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Torture\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":1}]}}','{\"fu\":[]}',NULL),(26,131,129,1,'create','2016-06-29 03:29:06','{\"id\":\"131\",\"template_id\":\"8\",\"name\":\"Assault\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:29:06\",\"oid\":\"1\",\"pids\":[1,2,4,118,129,131],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Assault\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":2}]}}','{\"fu\":[]}',NULL),(27,132,129,1,'create','2016-06-29 03:29:44','{\"id\":\"132\",\"template_id\":\"8\",\"name\":\"Murder\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:29:44\",\"oid\":\"1\",\"pids\":[1,2,4,118,129,132],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Murder\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":3}]}}','{\"fu\":[]}',NULL),(28,133,129,1,'create','2016-06-29 03:30:13','{\"id\":\"133\",\"template_id\":\"8\",\"name\":\"Housing\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:30:13\",\"oid\":\"1\",\"pids\":[1,2,4,118,129,133],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Housing\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":4}]}}','{\"fu\":[]}',NULL),(29,134,129,1,'create','2016-06-29 03:42:16','{\"id\":\"134\",\"template_id\":\"8\",\"name\":\"Child\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:42:16\",\"oid\":\"1\",\"pids\":[1,2,4,118,129,134],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Child\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":5}]}}','{\"fu\":[]}',NULL),(30,135,129,1,'create','2016-06-29 03:42:42','{\"id\":\"135\",\"template_id\":\"8\",\"name\":\"Arrest\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:42:42\",\"oid\":\"1\",\"pids\":[1,2,4,118,129,135],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Arrest\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":6}]}}','{\"fu\":[]}',NULL),(31,136,129,1,'create','2016-06-29 03:43:16','{\"id\":\"136\",\"template_id\":\"8\",\"name\":\"Health\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:43:16\",\"oid\":\"1\",\"pids\":[1,2,4,118,129,136],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Health\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":7}]}}','{\"fu\":[]}',NULL),(32,137,118,1,'create','2016-06-29 03:43:38','{\"id\":\"137\",\"template_id\":\"5\",\"name\":\"type\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:43:38\",\"oid\":\"1\",\"pids\":[1,2,4,118,137],\"iconCls\":\"icon-folder\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"type\"}]}}','{\"fu\":[]}',NULL),(33,138,137,1,'create','2016-06-29 03:44:16','{\"id\":\"138\",\"template_id\":\"8\",\"name\":\"Civil\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:44:16\",\"oid\":\"1\",\"pids\":[1,2,4,118,137,138],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Civil\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":1}]}}','{\"fu\":[]}',NULL),(34,139,137,1,'create','2016-06-29 03:45:00','{\"id\":\"139\",\"template_id\":\"8\",\"name\":\"Constitutional\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:45:00\",\"oid\":\"1\",\"pids\":[1,2,4,118,137,139],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Constitutional\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":2}]}}','{\"fu\":[]}',NULL),(35,140,137,1,'create','2016-06-29 03:45:31','{\"id\":\"140\",\"template_id\":\"8\",\"name\":\"Human Rights\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:45:31\",\"oid\":\"1\",\"pids\":[1,2,4,118,137,140],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Human Rights\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":3}]}}','{\"fu\":[]}',NULL),(36,141,137,1,'create','2016-06-29 03:46:03','{\"id\":\"141\",\"template_id\":\"8\",\"name\":\"Criminal\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:46:03\",\"oid\":\"1\",\"pids\":[1,2,4,118,137,141],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Criminal\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":4}]}}','{\"fu\":[]}',NULL),(37,142,137,1,'create','2016-06-29 03:46:40','{\"id\":\"142\",\"template_id\":\"8\",\"name\":\"Military\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:46:40\",\"oid\":\"1\",\"pids\":[1,2,4,118,137,142],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Military\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":5}]}}','{\"fu\":[]}',NULL),(38,143,3,1,'create','2016-06-29 03:49:29','{\"id\":\"143\",\"template_id\":\"11\",\"name\":\"Case\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:49:29\",\"oid\":\"1\",\"pids\":[1,2,3,143],\"iconCls\":\"icon-briefcase\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"Case\"}],\"en\":[{\"idx\":0,\"value\":\"Case\"}],\"type\":[{\"idx\":0,\"value\":\"case\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-briefcase\"}],\"title_template\":[{\"idx\":0,\"value\":\"{name}\\n\"}]}}','{\"fu\":[]}',NULL),(39,144,143,1,'create','2016-06-29 03:50:39','{\"id\":\"144\",\"template_id\":\"12\",\"name\":\"contacts\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:50:39\",\"oid\":\"1\",\"pids\":[1,2,3,143,144],\"iconCls\":\"icon-snippet\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"contacts\"}],\"en\":[{\"idx\":0,\"value\":\"Case contacts\"}],\"type\":[{\"idx\":0,\"value\":\"_objects\"}],\"order\":[{\"idx\":0,\"value\":8}],\"cfg\":[{\"idx\":0,\"value\":\"{\\\"source\\\":\\\"users\\\",\\\"multiValued\\\":true}\\n\"}]}}','{\"fu\":[]}',NULL),(40,145,4,1,'create','2016-06-29 03:51:24','{\"id\":\"145\",\"template_id\":\"5\",\"name\":\"Country\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:51:24\",\"oid\":\"1\",\"pids\":[1,2,4,145],\"iconCls\":\"icon-folder\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"Country\"}]}}','{\"fu\":[]}',NULL),(41,146,145,1,'create','2016-06-29 03:52:00','{\"id\":\"146\",\"template_id\":\"8\",\"name\":\"Indonesia\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:52:00\",\"oid\":\"1\",\"pids\":[1,2,4,145,146],\"iconCls\":\"icon-blue-document-small\",\"path\":\"\",\"new\":{\"en\":[{\"idx\":0,\"value\":\"Indonesia\"}],\"iconCls\":[{\"idx\":0,\"value\":\"icon-tag-small\"}],\"visible\":[{\"idx\":0,\"value\":1}],\"order\":[{\"idx\":0,\"value\":1}]}}','{\"fu\":[]}',NULL),(42,147,143,1,'create','2016-06-29 03:53:27','{\"id\":\"147\",\"template_id\":\"12\",\"name\":\"country\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:53:27\",\"oid\":\"1\",\"pids\":[1,2,3,143,147],\"iconCls\":\"icon-snippet\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"country\"}],\"en\":[{\"idx\":0,\"value\":\"Country\"}],\"type\":[{\"idx\":0,\"value\":\"_objects\"}],\"order\":[{\"idx\":0,\"value\":7}],\"cfg\":[{\"idx\":0,\"value\":\"{\\\"source\\\":\\\"tree\\\",\\\"scope\\\":145, \\\"faceting\\\":true}\\n\"}]}}','{\"fu\":[]}',NULL),(43,148,143,1,'create','2016-06-29 03:54:10','{\"id\":\"148\",\"template_id\":\"12\",\"name\":\"date\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:54:10\",\"oid\":\"1\",\"pids\":[1,2,3,143,148],\"iconCls\":\"icon-snippet\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"date\"}],\"en\":[{\"idx\":0,\"value\":\"Date\"}],\"type\":[{\"idx\":0,\"value\":\"date\"}],\"order\":[{\"idx\":0,\"value\":5}]}}','{\"fu\":[]}',NULL),(44,149,143,1,'create','2016-06-29 03:54:50','{\"id\":\"149\",\"template_id\":\"12\",\"name\":\"description\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:54:50\",\"oid\":\"1\",\"pids\":[1,2,3,143,149],\"iconCls\":\"icon-snippet\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"description\"}],\"en\":[{\"idx\":0,\"value\":\"Description\"}],\"type\":[{\"idx\":0,\"value\":\"text\"}],\"order\":[{\"idx\":0,\"value\":6}]}}','{\"fu\":[]}',NULL),(45,150,143,1,'create','2016-06-29 03:55:28','{\"id\":\"150\",\"template_id\":\"12\",\"name\":\"name\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:55:28\",\"oid\":\"1\",\"pids\":[1,2,3,143,150],\"iconCls\":\"icon-snippet\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"name\"}],\"en\":[{\"idx\":0,\"value\":\"Name\"}],\"type\":[{\"idx\":0,\"value\":\"varchar\"}],\"order\":[{\"idx\":0,\"value\":1}]}}','{\"fu\":[]}',NULL),(46,151,143,1,'create','2016-06-29 03:57:50','{\"id\":\"151\",\"template_id\":\"12\",\"name\":\"status\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:57:50\",\"oid\":\"1\",\"pids\":[1,2,3,143,151],\"iconCls\":\"icon-snippet\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"status\"}],\"en\":[{\"idx\":0,\"value\":\"Case status\"}],\"type\":[{\"idx\":0,\"value\":\"_objects\"}],\"order\":[{\"idx\":0,\"value\":2}],\"cfg\":[{\"idx\":0,\"value\":\"{\\n\\\"source\\\":\\\"tree\\\",\\n\\\"scope\\\":123,\\n\\\"faceting\\\":true\\n}\"}]}}','{\"fu\":[]}',NULL),(47,152,143,1,'create','2016-06-29 03:59:11','{\"id\":\"152\",\"template_id\":\"12\",\"name\":\"tags\",\"cid\":\"1\",\"cdate\":\"2016-06-29 03:59:11\",\"oid\":\"1\",\"pids\":[1,2,3,143,152],\"iconCls\":\"icon-snippet\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"tags\"}],\"en\":[{\"idx\":0,\"value\":\"Tags\"}],\"type\":[{\"idx\":0,\"value\":\"_objects\"}],\"order\":[{\"idx\":0,\"value\":3}],\"cfg\":[{\"idx\":0,\"value\":\"{\\\"source\\\":\\\"tree\\\",\\\"multiValued\\\":true,\\\"scope\\\":129, \\\"faceting\\\":true}\\n\"}]}}','{\"fu\":[]}',NULL),(48,153,143,1,'create','2016-06-29 04:00:20','{\"id\":\"153\",\"template_id\":\"12\",\"name\":\"type\",\"cid\":\"1\",\"cdate\":\"2016-06-29 04:00:20\",\"oid\":\"1\",\"pids\":[1,2,3,143,153],\"iconCls\":\"icon-snippet\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"type\"}],\"en\":[{\"idx\":0,\"value\":\"Type\"}],\"type\":[{\"idx\":0,\"value\":\"_objects\"}],\"order\":[{\"idx\":0,\"value\":4}],\"cfg\":[{\"idx\":0,\"value\":\"{\\\"source\\\":\\\"tree\\\",\\\"scope\\\":137, \\\"faceting\\\":true}\\n\"}],\"solr_column_name\":[{\"idx\":0,\"value\":\"case_type_i\"}]}}','{\"fu\":[]}',NULL),(49,152,143,1,'update','2016-06-29 04:00:51','{\"id\":\"152\",\"template_id\":\"12\",\"name\":\"tags\",\"pids\":[],\"cid\":\"1\",\"cdate\":\"2016-06-29T03:59:11Z\",\"path\":\"\\/Tree\\/System\\/Templates\\/Case\\/\",\"oid\":\"1\",\"iconCls\":\"icon-snippet\",\"old\":[],\"new\":{\"solr_column_name\":[{\"idx\":0,\"value\":\"case_tags_i\"}]}}','{\"fu\":[]}',NULL),(50,151,143,1,'update','2016-06-29 04:01:22','{\"id\":\"151\",\"template_id\":\"12\",\"name\":\"status\",\"pids\":[],\"cid\":\"1\",\"cdate\":\"2016-06-29T03:57:50Z\",\"path\":\"\\/Tree\\/System\\/Templates\\/Case\\/\",\"oid\":\"1\",\"iconCls\":\"icon-snippet\",\"old\":[],\"new\":{\"solr_column_name\":[{\"idx\":0,\"value\":\"case_status_i\"}]}}','{\"fu\":[]}',NULL),(51,68,60,1,'update','2016-06-29 04:03:06','{\"id\":\"68\",\"template_id\":\"62\",\"name\":\"Global Menu\",\"pids\":[],\"cid\":\"1\",\"uid\":\"1\",\"cdate\":\"2015-07-24T00:45:11Z\",\"udate\":\"2016-06-29T03:10:03Z\",\"path\":\"\\/Tree\\/System\\/Menus\\/\",\"oid\":\"1\",\"iconCls\":\"icon-none\",\"old\":{\"menu\":[{\"idx\":0,\"value\":\"7,83,61,5\"}]},\"new\":{\"menu\":[{\"idx\":0,\"value\":\"143,7,83,61,5\"}]}}','{\"fu\":[]}',NULL),(52,154,113,1,'create','2016-06-29 04:04:53','{\"id\":\"154\",\"template_id\":\"100\",\"name\":\"CaseBy\",\"cid\":\"1\",\"cdate\":\"2016-06-29 04:04:53\",\"oid\":\"1\",\"pids\":[1,2,90,113,154],\"iconCls\":\"icon-element\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"CaseBy\"}],\"value\":[{\"idx\":0,\"value\":\"{\\n\\\"class\\\": \\\"CB\\\\\\\\TreeNode\\\\\\\\FacetNav\\\",\\n\\\"pid\\\": 1,\\n\\\"iconCls\\\": \\\"icon-case\\\",\\n\\\"title_en\\\": \\\"Cases By Status\\\",\\n\\\"fq\\\": [\\n\\\"template_id: 122\\\"\\n],\\n\\\"level_fields\\\": \\\"case_status, case_type, case_tags\\\",\\n\\\"facets\\\": [\\n\\\"case_status\\\",\\n\\\"case_type\\\",\\n\\\"case_tags\\\",\\n\\\"case_country\\\"\\n],\\n\\\"sort\\\": {\\n\\\"property\\\": \\\"name\\\",\\n\\\"direction\\\": \\\"DESC\\\"\\n},\\n\\\"view\\\": \\\"grid\\\",\\n\\\"show_count\\\": true,\\n\\\"show_in_tree\\\": true\\n}\"}]}}','{\"fu\":[]}',NULL),(53,154,113,1,'update','2016-06-29 04:05:30','{\"id\":\"154\",\"template_id\":\"100\",\"name\":\"CaseBy\",\"pids\":[],\"cid\":\"1\",\"cdate\":\"2016-06-29T04:04:53Z\",\"path\":\"\\/Tree\\/System\\/Config\\/treeNodes\\/\",\"oid\":\"1\",\"iconCls\":\"icon-element\",\"old\":{\"value\":[{\"idx\":0,\"value\":\"{\\n\\\"class\\\": \\\"CB\\\\\\\\TreeNode\\\\\\\\FacetNav\\\",\\n\\\"pid\\\": 1,\\n\\\"iconCls\\\": \\\"icon-case\\\",\\n\\\"title_en\\\": \\\"Cases By Status\\\",\\n\\\"fq\\\": [\\n\\\"template_id: 122\\\"\\n],\\n\\\"level_fields\\\": \\\"case_status, case_type, case_tags\\\",\\n\\\"facets\\\": [\\n\\\"case_status\\\",\\n\\\"case_type\\\",\\n\\\"case_tags\\\",\\n\\\"case_country\\\"\\n],\\n\\\"sort\\\": {\\n\\\"property\\\": \\\"name\\\",\\n\\\"direction\\\": \\\"DESC\\\"\\n},\\n\\\"view\\\": \\\"grid\\\",\\n\\\"show_count\\\": true,\\n\\\"show_in_tree\\\": true\\n}\"}]},\"new\":{\"value\":[{\"idx\":0,\"value\":\"{\\n\\\"class\\\": \\\"CB\\\\\\\\TreeNode\\\\\\\\FacetNav\\\",\\n\\\"pid\\\": 1,\\n\\\"iconCls\\\": \\\"icon-case\\\",\\n\\\"title_en\\\": \\\"Cases By Status\\\",\\n\\\"fq\\\": [\\n\\\"template_id: 143\\\"\\n],\\n\\\"level_fields\\\": \\\"case_status, case_type, case_tags\\\",\\n\\\"facets\\\": [\\n\\\"case_status\\\",\\n\\\"case_type\\\",\\n\\\"case_tags\\\",\\n\\\"case_country\\\"\\n],\\n\\\"sort\\\": {\\n\\\"property\\\": \\\"name\\\",\\n\\\"direction\\\": \\\"DESC\\\"\\n},\\n\\\"view\\\": \\\"grid\\\",\\n\\\"show_count\\\": true,\\n\\\"show_in_tree\\\": true\\n}\"}]}}','{\"fu\":[]}',NULL),(54,155,1,1,'create','2016-06-29 04:06:38','{\"id\":\"155\",\"template_id\":\"5\",\"name\":\"Danang Kastowo\",\"cid\":\"1\",\"cdate\":\"2016-06-29 04:06:38\",\"oid\":\"1\",\"pids\":[1,155],\"iconCls\":\"icon-folder\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"Danang Kastowo\"}]}}','{\"fu\":[]}',NULL),(55,156,155,1,'create','2016-06-29 04:09:53','{\"id\":\"156\",\"template_id\":\"143\",\"name\":\"Vaksin Palsu\\n\",\"cid\":\"1\",\"cdate\":\"2016-06-29 04:09:53\",\"oid\":\"1\",\"pids\":[1,155,156],\"case_id\":\"156\",\"iconCls\":\"icon-briefcase\",\"path\":\"\",\"new\":{\"name\":[{\"idx\":0,\"value\":\"Vaksin Palsu\"}],\"status\":[{\"idx\":0,\"value\":124}],\"tags\":[{\"idx\":0,\"value\":\"136\"}],\"type\":[{\"idx\":0,\"value\":138}],\"date\":[{\"idx\":0,\"value\":\"2016-06-29T00:00:00Z\"}],\"description\":[{\"idx\":0,\"value\":\"Permasalahan vaksin palsu perlu menjadi perhatian pemerintah.\"}],\"country\":[{\"idx\":0,\"value\":146}],\"contacts\":[{\"idx\":0,\"value\":\"1\"}]}}','{\"fu\":[]}',NULL),(56,157,156,1,'file_upload','2016-06-29 04:14:18','{\"id\":\"157\",\"template_id\":\"6\",\"name\":\"vaksin_palsu.doc\",\"date\":\"2016-06-29 04:14:18\",\"size\":\"13312\",\"cid\":\"1\",\"cdate\":\"2016-06-29 04:14:18\",\"uid\":\"1\",\"oid\":\"1\",\"pids\":[1,155,156,157],\"case_id\":\"156\",\"iconCls\":\"file-\",\"path\":\"\",\"file\":{\"id\":\"157\",\"name\":\"vaksin_palsu.doc\"}}','{\"fu\":[]}',NULL),(57,158,156,1,'file_upload','2016-06-29 04:14:20','{\"id\":\"158\",\"template_id\":\"6\",\"name\":\"vaksin_palsu2.docx\",\"date\":\"2016-06-29 04:14:20\",\"size\":\"4339\",\"cid\":\"1\",\"cdate\":\"2016-06-29 04:14:20\",\"uid\":\"1\",\"oid\":\"1\",\"pids\":[1,155,156,158],\"case_id\":\"156\",\"iconCls\":\"file-\",\"path\":\"\",\"file\":{\"id\":\"158\",\"name\":\"vaksin_palsu2.docx\"}}','{\"fu\":[]}',NULL),(58,159,90,1,'create','2016-06-29 04:24:38','{\"id\":\"159\",\"template_id\":\"100\",\"name\":\"facet_configs\",\"cid\":\"1\",\"cdate\":\"2016-06-29 04:24:38\",\"oid\":\"1\",\"pids\":[1,2,90,159],\"iconCls\":\"icon-element\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"facet_configs\"}],\"value\":[{\"idx\":0,\"value\":\"{\\n\\\"case_status\\\": {\\n\\\"field\\\": \\\"case_status_i\\\"\\n,\\\"title\\\": \\\"Case Status\\\"\\n,\\\"type\\\": \\\"objects\\\"\\n},\\n\\n\\\"case_type\\\": {\\n\\\"field\\\": \\\"case_type_i\\\"\\n,\\\"title\\\": \\\"Case Type\\\"\\n,\\\"type\\\": \\\"objects\\\"\\n},\\n\\n\\\"case_country\\\": {\\n\\\"field\\\": \\\"case_country_i\\\"\\n,\\\"title\\\": \\\"Case Country\\\"\\n,\\\"type\\\": \\\"objects\\\"\\n},\\n\\n\\\"case_tags\\\": {\\n\\\"field\\\": \\\"case_tags_i\\\"\\n,\\\"title\\\": \\\"Tags\\\"\\n,\\\"type\\\": \\\"objects\\\"\\n}\\n}\"}]}}','{\"fu\":[]}',NULL),(59,160,90,1,'create','2016-06-29 04:26:08','{\"id\":\"160\",\"template_id\":\"100\",\"name\":\"object_type_plugins\",\"cid\":\"1\",\"cdate\":\"2016-06-29 04:26:08\",\"oid\":\"1\",\"pids\":[1,2,90,160],\"iconCls\":\"icon-element\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"object_type_plugins\"}],\"value\":[{\"idx\":0,\"value\":\"{\\n\\\"object\\\": [\\\"objectProperties\\\", \\\"files\\\", \\\"tasks\\\", \\\"contentItems\\\", \\\"comments\\\", \\\"systemProperties\\\"]\\n,\\\"case\\\": [\\\"objectProperties\\\", \\\"files\\\", \\\"tasks\\\", \\\"contentItems\\\", \\\"comments\\\", \\\"systemProperties\\\"]\\n,\\\"task\\\": [\\\"objectProperties\\\", \\\"files\\\", \\\"contentItems\\\", \\\"comments\\\", \\\"systemProperties\\\"]\\n,\\\"file\\\": [\\\"thumb\\\", \\\"meta\\\", \\\"versions\\\", \\\"tasks\\\", \\\"comments\\\", \\\"systemProperties\\\"]\\n}\"}]}}','{\"fu\":[]}',NULL),(60,157,156,1,'file_update','2016-06-29 04:29:10','{\"name\":\"vaksin_palsu.doc\",\"size\":14336,\"template_id\":\"6\",\"oid\":\"1\",\"cid\":\"1\",\"id\":\"157\",\"iconCls\":\"file-\",\"pids\":[1,155,156],\"path\":\"\",\"file\":{\"id\":\"157\",\"name\":\"vaksin_palsu.doc\"}}','{\"fu\":[]}',NULL),(61,161,156,1,'file_upload','2016-06-29 04:43:19','{\"id\":\"161\",\"template_id\":\"6\",\"name\":\"vaksin_palsu.pdf\",\"date\":\"2016-06-29 04:43:19\",\"size\":\"160608\",\"cid\":\"1\",\"cdate\":\"2016-06-29 04:43:19\",\"uid\":\"1\",\"oid\":\"1\",\"pids\":[1,155,156,161],\"case_id\":\"156\",\"iconCls\":\"file-\",\"path\":\"\",\"file\":{\"id\":\"161\",\"name\":\"vaksin_palsu.pdf\"}}','{\"fu\":[]}',NULL),(62,157,156,3,'file_update','2016-06-29 05:11:24','{\"name\":\"vaksin_palsu.doc\",\"size\":14848,\"template_id\":\"6\",\"oid\":\"3\",\"cid\":\"3\",\"id\":\"157\",\"iconCls\":\"file-\",\"pids\":[1,155,156],\"path\":\"\",\"file\":{\"id\":\"157\",\"name\":\"vaksin_palsu.doc\"}}','{\"fu\":[]}',NULL),(63,156,155,1,'update','2016-06-30 01:20:28','{\"id\":\"156\",\"template_id\":\"143\",\"name\":\"Vaksin Palsu\\n\",\"pids\":[],\"cid\":\"1\",\"cdate\":\"2016-06-29T04:09:53Z\",\"case_id\":\"156\",\"path\":\"\\/Tree\\/Danang Kastowo\\/\",\"oid\":\"1\",\"iconCls\":\"icon-briefcase\",\"old\":{\"status\":[{\"idx\":0,\"value\":124}]},\"new\":{\"status\":[{\"idx\":0,\"value\":125}]}}','{\"fu\":[],\"wu\":[]}',NULL),(64,161,156,1,'comment','2016-07-13 03:31:09','{\"id\":\"161\",\"template_id\":\"6\",\"name\":\"vaksin_palsu.pdf\",\"date\":\"2016-06-29 04:43:19\",\"size\":\"160608\",\"cid\":\"1\",\"cdate\":\"2016-06-29 04:43:19\",\"uid\":\"1\",\"udate\":\"2016-06-29 04:43:19\",\"oid\":\"1\",\"pids\":[1,155,156,161],\"case_id\":\"156\",\"iconCls\":\"file-\",\"path\":\"\",\"comment\":\"wah mengerikan sekali\"}','{\"fu\":[],\"wu\":[]}',NULL),(65,163,1,1,'create','2016-07-20 02:56:06','{\"id\":\"163\",\"template_id\":\"5\",\"name\":\"Chanthel User Guide\",\"cid\":\"1\",\"cdate\":\"2016-07-20 02:56:05\",\"oid\":\"1\",\"pids\":[1,163],\"iconCls\":\"icon-folder\",\"path\":\"\",\"new\":{\"_title\":[{\"idx\":0,\"value\":\"Chanthel User Guide\"}]}}','{\"fu\":[]}',NULL),(66,164,163,1,'file_upload','2016-07-20 02:57:39','{\"id\":\"164\",\"template_id\":\"6\",\"name\":\"User Guide Chanthel.pdf\",\"date\":\"2016-07-20 02:57:37\",\"size\":\"8932059\",\"cid\":\"1\",\"cdate\":\"2016-07-20 02:57:37\",\"uid\":\"1\",\"oid\":\"1\",\"pids\":[1,163,164],\"iconCls\":\"file-\",\"path\":\"\",\"file\":{\"id\":\"164\",\"name\":\"User Guide Chanthel.pdf\"}}','{\"fu\":[]}',NULL);
/*!40000 ALTER TABLE `action_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `config`
--

DROP TABLE IF EXISTS `config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `config` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(10) unsigned DEFAULT NULL,
  `param` varchar(50) NOT NULL,
  `value` text NOT NULL,
  `order` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `config`
--

LOCK TABLES `config` WRITE;
/*!40000 ALTER TABLE `config` DISABLE KEYS */;
INSERT INTO `config` VALUES (104,NULL,'project_name_en','Chanthel - DMS',NULL),(105,NULL,'templateIcons','\r\nicon-arrow-left-medium\r\nicon-arrow-left-medium-green\r\nicon-arrow-left\r\nicon-arrow-right-medium\r\nicon-arrow-right\r\nicon-case_card\r\nicon-complaint\r\nicon-complaint-subjects\r\nicon-info-action\r\nicon-decision\r\nicon-echr_complaint\r\nicon-echr_decision\r\nicon-petition\r\nicon-balloon\r\nicon-bell\r\nicon-blog-blue\r\nicon-blog-magenta\r\nicon-blue-document-small\r\nicon-committee-phase\r\nicon-document-medium\r\nicon-document-stamp\r\nicon-document-text\r\nicon-mail\r\nicon-object1\r\nicon-object2\r\nicon-object3\r\nicon-object4\r\nicon-object5\r\nicon-object6\r\nicon-object7\r\nicon-object8\r\nicon-zone\r\nicon-applicant\r\nicon-suspect\r\nicon-milestone',NULL),(106,NULL,'folder_templates','5,11,100',NULL),(107,NULL,'default_folder_template','5',NULL),(108,NULL,'default_file_template','6',NULL),(109,NULL,'default_task_template','7',NULL),(110,NULL,'default_language','en',NULL),(111,NULL,'languages','en',NULL),(113,NULL,'treeNodes','',NULL),(114,113,'Tasks','{\n    \"pid\": 1\n}',1),(115,113,'Dbnode','[]',2),(116,113,'RecycleBin','{\r\n    \"pid\": \"1\",\r\n    \"facets\": [\r\n        \"did\"\r\n    ],\r\n    \"DC\": {\r\n        \"nid\": {}\r\n        ,\"name\": {}\r\n        ,\"cid\": {}\r\n        ,\"ddate\": {\r\n            \"solr_column_name\": \"ddate\"\r\n        }\r\n    }\r\n}',3),(154,113,'CaseBy','{\n\"class\": \"CB\\\\TreeNode\\\\FacetNav\",\n\"pid\": 1,\n\"iconCls\": \"icon-case\",\n\"title_en\": \"Cases By Status\",\n\"fq\": [\n\"template_id: 143\"\n],\n\"level_fields\": \"case_status, case_type, case_tags\",\n\"facets\": [\n\"case_status\",\n\"case_type\",\n\"case_tags\",\n\"case_country\"\n],\n\"sort\": {\n\"property\": \"name\",\n\"direction\": \"DESC\"\n},\n\"view\": \"grid\",\n\"show_count\": true,\n\"show_in_tree\": true\n}',NULL),(159,NULL,'facet_configs','{\n\"case_status\": {\n\"field\": \"case_status_i\"\n,\"title\": \"Case Status\"\n,\"type\": \"objects\"\n},\n\n\"case_type\": {\n\"field\": \"case_type_i\"\n,\"title\": \"Case Type\"\n,\"type\": \"objects\"\n},\n\n\"case_country\": {\n\"field\": \"case_country_i\"\n,\"title\": \"Case Country\"\n,\"type\": \"objects\"\n},\n\n\"case_tags\": {\n\"field\": \"case_tags_i\"\n,\"title\": \"Tags\"\n,\"type\": \"objects\"\n}\n}',NULL),(160,NULL,'object_type_plugins','{\n\"object\": [\"objectProperties\", \"files\", \"tasks\", \"contentItems\", \"comments\", \"systemProperties\"]\n,\"case\": [\"objectProperties\", \"files\", \"tasks\", \"contentItems\", \"comments\", \"systemProperties\"]\n,\"task\": [\"objectProperties\", \"files\", \"contentItems\", \"comments\", \"systemProperties\"]\n,\"file\": [\"thumb\", \"meta\", \"versions\", \"tasks\", \"comments\", \"systemProperties\"]\n}',NULL);
/*!40000 ALTER TABLE `config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `crons`
--

DROP TABLE IF EXISTS `crons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `crons` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `cron_id` varchar(30) DEFAULT NULL,
  `cron_file` varchar(500) DEFAULT NULL,
  `last_start_time` timestamp NULL DEFAULT NULL,
  `last_end_time` timestamp NULL DEFAULT NULL,
  `execution_info` longtext,
  `last_action` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `crons`
--

LOCK TABLES `crons` WRITE;
/*!40000 ALTER TABLE `crons` DISABLE KEYS */;
INSERT INTO `crons` VALUES (1,'solr_update_tree',NULL,'2016-07-21 07:12:01','2016-07-21 07:12:01','ok','2016-07-21 07:12:01'),(2,'send_notifications','/var/www/chanthel/sys/crons/cron_send_notifications.php','2016-07-21 07:12:01','2016-07-21 07:12:01','ok','2016-07-21 07:12:01'),(3,'extract_files_content','/var/www/chanthel/sys/crons/cron_extract_files_content.php','2016-07-21 07:10:01','2016-07-21 07:10:01','ok','2016-07-21 07:10:01');
/*!40000 ALTER TABLE `crons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorites`
--

DROP TABLE IF EXISTS `favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorites` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned NOT NULL,
  `node_id` varchar(20) DEFAULT NULL,
  `data` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorites`
--

LOCK TABLES `favorites` WRITE;
/*!40000 ALTER TABLE `favorites` DISABLE KEYS */;
/*!40000 ALTER TABLE `favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file_previews`
--

DROP TABLE IF EXISTS `file_previews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `file_previews` (
  `id` bigint(20) unsigned NOT NULL,
  `group` varchar(20) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0' COMMENT '0 - ok, 1 - on queue, 2 - processing, 3 - processed',
  `filename` varchar(100) DEFAULT NULL,
  `size` int(10) unsigned NOT NULL DEFAULT '0',
  `cdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ladate` timestamp NULL DEFAULT NULL COMMENT 'last access date',
  PRIMARY KEY (`id`),
  KEY `tree_previews__status_group` (`group`,`status`),
  CONSTRAINT `FK_file_previews_content_id` FOREIGN KEY (`id`) REFERENCES `files_content` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file_previews`
--

LOCK TABLES `file_previews` WRITE;
/*!40000 ALTER TABLE `file_previews` DISABLE KEYS */;
INSERT INTO `file_previews` VALUES (1,'office',0,'1_.html',3933,'2016-06-29 04:14:36',NULL),(2,'office',0,'2_.html',1757,'2016-06-29 04:14:45',NULL),(3,'office',0,'3_.html',4224,'2016-06-29 04:29:20',NULL),(5,'office',0,'5_.html',4299,'2016-06-29 05:11:35',NULL);
/*!40000 ALTER TABLE `file_previews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `files`
--

DROP TABLE IF EXISTS `files`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `content_id` bigint(20) unsigned DEFAULT NULL,
  `date` date DEFAULT NULL,
  `name` varchar(250) NOT NULL,
  `title` varchar(200) DEFAULT NULL,
  `cid` int(10) unsigned NOT NULL DEFAULT '1',
  `uid` int(10) unsigned NOT NULL DEFAULT '1',
  `cdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `udate` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_name` (`name`),
  KEY `FK_files__content_id` (`content_id`),
  CONSTRAINT `FK_files__content_id` FOREIGN KEY (`content_id`) REFERENCES `files_content` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_files__id` FOREIGN KEY (`id`) REFERENCES `tree` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files`
--

LOCK TABLES `files` WRITE;
/*!40000 ALTER TABLE `files` DISABLE KEYS */;
INSERT INTO `files` VALUES (157,5,NULL,'vaksin_palsu.doc','vaksin_palsu.doc',3,3,'2016-06-29 04:14:18','2016-06-29 05:11:24'),(158,2,NULL,'vaksin_palsu2.docx','',1,1,'2016-06-29 04:14:20','2016-06-29 04:14:20'),(161,4,NULL,'vaksin_palsu.pdf','',1,1,'2016-06-29 04:43:19','2016-06-29 04:43:19'),(164,6,NULL,'User Guide Chanthel.pdf','',1,1,'2016-07-20 02:57:37','2016-07-20 02:57:39');
/*!40000 ALTER TABLE `files` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `files_ai` AFTER INSERT ON `files` FOR EACH ROW BEGIN
	UPDATE tree SET
		`name` = new.name
		, `date` = COALESCE(new.date, new.cdate)
		, cid = new.cid
		, cdate = new.cdate
		, uid = new.uid
		, udate = new.udate
		, size = (SELECT size FROM files_content WHERE id = new.content_id)
	WHERE id = new.id;
	if(new.content_id is not null) THEN
		update files_content set ref_count = ref_count + 1 where id = new.content_id;
	end if;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `files_au` AFTER UPDATE ON `files` FOR EACH ROW BEGIN
	UPDATE tree SET
		`name` = new.name
		, `date` = coalesce(new.date, new.cdate)
		, date_end = COALESCE(new.date, new.cdate)
		, cid = new.cid
		, cdate = new.cdate
		, uid = new.uid
		, udate = new.udate
		, updated = (updated | 1)
		, size = (select size from files_content where id = new.content_id)
	WHERE id = new.id;
	if(coalesce(old.content_id, 0) <> coalesce(new.content_id, 0) ) then
		IF(old.content_id IS NOT NULL) THEN
			UPDATE files_content SET ref_count = ref_count - 1 WHERE id = old.content_id;
		END IF;
		IF(new.content_id IS NOT NULL) THEN
			UPDATE files_content SET ref_count = ref_count + 1 WHERE id = new.content_id;
		END IF;
	end if;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `files_ad` AFTER DELETE ON `files` FOR EACH ROW BEGIN
	IF(old.content_id IS NOT NULL) THEN
		UPDATE files_content SET ref_count = ref_count - 1 WHERE id = old.content_id;
	END IF;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `files_content`
--

DROP TABLE IF EXISTS `files_content`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files_content` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `size` bigint(20) unsigned DEFAULT NULL,
  `pages` int(11) unsigned DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `path` varchar(250) DEFAULT NULL,
  `ref_count` int(11) NOT NULL DEFAULT '0',
  `parse_status` tinyint(1) unsigned DEFAULT NULL,
  `skip_parsing` tinyint(1) NOT NULL DEFAULT '0',
  `md5` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_md5` (`md5`),
  KEY `idx_size` (`size`),
  KEY `idx_parse_status` (`parse_status`),
  KEY `idx_skip_parsing` (`skip_parsing`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files_content`
--

LOCK TABLES `files_content` WRITE;
/*!40000 ALTER TABLE `files_content` DISABLE KEYS */;
INSERT INTO `files_content` VALUES (1,13312,NULL,'application/msword','2016/06/29',1,1,0,'f92bfdaa6a7097d6e9a14a5c039f8b06s13312'),(2,4339,NULL,'application/vnd.openxmlformats-officedocument.wordprocessingml.document','2016/06/29',1,1,0,'8eedbb5d7e80be0d409f9db9e8a2e64es4339'),(3,14336,NULL,'application/msword','2016/06/29',1,1,0,'b64dfd13ecb79d421b3a762f5f7c855fs14336'),(4,160608,1,'application/pdf','2016/06/29',1,1,0,'bf953d73a984667076b80268aa5c1f82s160608'),(5,14848,NULL,'application/msword','2016/06/29',1,1,0,'2936db302442e0aef86fd4e375f020efs14848'),(6,8932059,109,'application/pdf','2016/07/20',2,1,0,'e5bb6a00a30afc3fb2d3a9d6264f9bb6s8932059');
/*!40000 ALTER TABLE `files_content` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `files_content_bi` BEFORE INSERT ON `files_content` FOR EACH ROW BEGIN
	if( (coalesce(new.size, 0) = 0) or (new.type like 'image%') ) THEN
		set new.skip_parsing = 1;
	END IF;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `files_content_au` AFTER UPDATE ON `files_content` FOR EACH ROW BEGIN
	update tree, files set tree.updated = (tree.updated | 1) where files.content_id = NEW.id and files.id = tree.id;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `files_versions`
--

DROP TABLE IF EXISTS `files_versions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `files_versions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `file_id` bigint(20) unsigned NOT NULL,
  `content_id` bigint(20) unsigned DEFAULT NULL,
  `date` date DEFAULT NULL,
  `name` varchar(250) DEFAULT NULL,
  `cid` int(10) unsigned NOT NULL,
  `uid` int(10) unsigned NOT NULL,
  `cdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `udate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`),
  KEY `FK_file_id` (`file_id`),
  KEY `FK_content_id` (`content_id`),
  CONSTRAINT `FK_content_id` FOREIGN KEY (`content_id`) REFERENCES `files_content` (`id`),
  CONSTRAINT `FK_file_id` FOREIGN KEY (`file_id`) REFERENCES `files` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `files_versions`
--

LOCK TABLES `files_versions` WRITE;
/*!40000 ALTER TABLE `files_versions` DISABLE KEYS */;
INSERT INTO `files_versions` VALUES (1,157,1,NULL,'vaksin_palsu.doc',1,1,'2016-06-29 04:14:18','2016-06-29 04:14:18'),(2,157,3,NULL,'vaksin_palsu.doc',1,1,'2016-06-29 04:14:18','2016-06-29 04:29:10'),(3,164,6,NULL,'User Guide Chanthel.pdf',1,1,'2016-07-20 02:57:37','2016-07-20 02:57:39');
/*!40000 ALTER TABLE `files_versions` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `files_versions_ai` AFTER INSERT ON `files_versions` FOR EACH ROW BEGIN
	if(new.content_id is not null) THEN
		update files_content set ref_count = ref_count + 1 where id = new.content_id;
	end if;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `files_versions_au` AFTER UPDATE ON `files_versions` FOR EACH ROW BEGIN
	if(coalesce(old.content_id, 0) <> coalesce(new.content_id, 0) ) then
		IF(old.content_id IS NOT NULL) THEN
			UPDATE files_content SET ref_count = ref_count - 1 WHERE id = old.content_id;
		END IF;
		IF(new.content_id IS NOT NULL) THEN
			UPDATE files_content SET ref_count = ref_count + 1 WHERE id = new.content_id;
		END IF;
	end if;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `files_versions_ad` AFTER DELETE ON `files_versions` FOR EACH ROW BEGIN
	IF(old.content_id IS NOT NULL) THEN
		UPDATE files_content SET ref_count = ref_count - 1 WHERE id = old.content_id;
	END IF;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `guids`
--

DROP TABLE IF EXISTS `guids`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `guids` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `guids_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `guids`
--

LOCK TABLES `guids` WRITE;
/*!40000 ALTER TABLE `guids` DISABLE KEYS */;
INSERT INTO `guids` VALUES (4,'CaseBy'),(2,'Dbnode'),(3,'RecycleBin'),(1,'Tasks');
/*!40000 ALTER TABLE `guids` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notifications` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `object_id` bigint(20) unsigned DEFAULT NULL COMMENT 'think to remove it (doubles field from action_log)',
  `action_id` bigint(20) unsigned NOT NULL,
  `action_ids` mediumtext COMMENT 'list of last action ids for same grouped action',
  `action_type` enum('create','update','delete','complete','completion_decline','completion_on_behalf','close','rename','reopen','status_change','overdue','comment','comment_update','move','password_change','permissions','user_delete','user_create','login','login_fail','file_upload','file_update') NOT NULL,
  `action_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'think to remove it (doubles field from action_log)',
  `prev_action_ids` text COMMENT 'previous action ids(for same obj, action type, user) that have not yet been read',
  `from_user_id` int(11) DEFAULT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `seen` tinyint(1) NOT NULL DEFAULT '0',
  `read` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'notification has been read in CB',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNQ_notifications` (`object_id`,`action_type`,`from_user_id`,`user_id`),
  KEY `FK_notifications__action_id` (`action_id`),
  KEY `FK_notifications_user_id` (`user_id`),
  KEY `IDX_notifications_seen` (`seen`),
  CONSTRAINT `FK_notifications_user_id` FOREIGN KEY (`user_id`) REFERENCES `users_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_notifications__action_id` FOREIGN KEY (`action_id`) REFERENCES `action_log` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `objects`
--

DROP TABLE IF EXISTS `objects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `objects` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `data` mediumtext,
  `sys_data` mediumtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objects`
--

LOCK TABLES `objects` WRITE;
/*!40000 ALTER TABLE `objects` DISABLE KEYS */;
INSERT INTO `objects` VALUES (1,'{\"_title\":\"Tree\",\"en\":\"Tree\"}',NULL),(2,'{\"_title\":\"System\",\"en\":\"System\"}',NULL),(3,'{\"_title\":\"Templates\",\"en\":\"Templates\"}',NULL),(4,'{\"_title\":\"Thesauri\",\"en\":\"Thesauri\"}',NULL),(5,'{\"_title\":\"folder\",\"en\":\"Folder\",\"type\":\"object\",\"visible\":1,\"iconCls\":\"icon-folder\",\"cfg\":\"{\\n\\\"createMethod\\\":\\\"inline\\\"\\n}\",\"title_template\":\"{name}\"}','{\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":1},\"time\":\"2016-06-29T03:07:29Z\"},\"solr\":[],\"wu\":[]}'),(6,'{\"_title\":\"file_template\",\"en\":\"File\",\"ru\":\"File\",\"type\":\"file\",\"visible\":1,\"iconCls\":\"file-\",\"title_template\":\"{name}\"}','{\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":2},\"time\":\"2016-06-29T03:07:29Z\"},\"solr\":[]}'),(7,'{\"_title\":\"task\",\"en\":\"Task\",\"ru\":\"Task\",\"type\":\"task\",\"visible\":1,\"iconCls\":\"icon-task\",\"title_template\":\"{name}\"}','{\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":3},\"time\":\"2016-06-29T03:07:29Z\"},\"solr\":[]}'),(8,'{\"_title\":\"Thesauri Item\",\"en\":\"Thesauri Item\",\"ru\":\"Thesauri Item\",\"type\":\"object\",\"visible\":1,\"iconCls\":\"icon-blue-document-small\",\"title_template\":\"{en}\"}','{\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":4},\"time\":\"2016-06-29T03:07:29Z\"},\"solr\":[]}'),(9,'{\"_title\":\"Comment\",\"en\":\"Comment\",\"ru\":\"Коментарий\",\"type\":\"comment\",\"visible\":1,\"iconCls\":\"icon-balloon\",\"cfg\":\"{\\n  \\\"systemType\\\": 2\\n}\"}','{\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":5},\"time\":\"2016-06-29T03:07:29Z\"},\"solr\":[]}'),(10,'{\"_title\":\"User\",\"en\":\"User\",\"type\":\"user\",\"visible\":1,\"iconCls\":\"icon-object4\",\"cfg\":\"{\\\"files\\\":\\\"1\\\",\\\"main_file\\\":\\\"1\\\"}\"}','{\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":6},\"time\":\"2016-06-29T03:07:29Z\"},\"solr\":[]}'),(11,'{\"_title\":\"Template\",\"en\":\"Template\",\"ru\":\"Template\",\"type\":\"template\",\"visible\":1,\"iconCls\":\"icon-template\",\"cfg\":\"[]\"}','{\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":18},\"time\":\"2015-09-02T13:46:13Z\"},\"solr\":[]}'),(12,'{\"_title\":\"Field\",\"en\":\"Field\",\"ru\":\"Field\",\"type\":\"field\",\"visible\":1,\"iconCls\":\"icon-snippet\",\"cfg\":\"[]\"}','{\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":19},\"time\":\"2015-09-02T13:46:13Z\"},\"solr\":[]}'),(13,'{\"_title\":\"en\",\"en\":\"Full name (en)\",\"type\":\"varchar\",\"order\":\"1\"}','[]'),(14,'{\"en\":\"Initials\",\"ru\":\"Initiales\",\"_title\":\"initials\",\"type\":\"varchar\",\"order\":\"4\"}','[]'),(15,'{\"en\":\"Sex\",\"ru\":\"Sexe\",\"_title\":\"sex\",\"type\":\"_sex\",\"order\":\"5\",\"cfg\":\"{\\\"thesauriId\\\":\\\"90\\\"}\"}','[]'),(16,'{\"en\":\"Position\",\"ru\":\"Titre\",\"_title\":\"position\",\"type\":\"combo\",\"order\":\"7\",\"cfg\":\"{\\\"thesauriId\\\":\\\"362\\\"}\"}','[]'),(17,'{\"en\":\"E-mail\",\"ru\":\"E-mail\",\"_title\":\"email\",\"type\":\"varchar\",\"order\":\"9\",\"cfg\":\"{\\\"maxInstances\\\":\\\"3\\\"}\"}','[]'),(18,'{\"en\":\"Language\",\"ru\":\"Langue\",\"_title\":\"language_id\",\"type\":\"_language\",\"order\":\"11\"}','[]'),(19,'{\"en\":\"Date format\",\"ru\":\"Format de date\",\"_title\":\"short_date_format\",\"type\":\"_short_date_format\",\"order\":\"12\"}','[]'),(20,'{\"en\":\"Description\",\"ru\":\"Description\",\"_title\":\"description\",\"type\":\"varchar\",\"order\":\"13\"}','[]'),(21,'{\"en\":\"Room\",\"ru\":\"Salle\",\"_title\":\"room\",\"type\":\"varchar\",\"order\":\"8\"}','[]'),(22,'{\"en\":\"Phone\",\"ru\":\"Téléphone\",\"_title\":\"phone\",\"type\":\"varchar\",\"order\":\"10\",\"cfg\":\"{\\\"maxInstances\\\":\\\"10\\\"}\"}','[]'),(23,'{\"en\":\"Location\",\"ru\":\"Emplacement\",\"_title\":\"location\",\"type\":\"combo\",\"order\":\"6\",\"cfg\":\"{\\\"thesauriId\\\":\\\"394\\\"}\"}','[]'),(24,'{\"en\":\"Program\",\"ru\":\"Program\",\"_title\":\"program\",\"type\":\"_objects\",\"order\":\"1\",\"cfg\":\"{\\r\\n\\\"source\\\":\\\"thesauri\\\"\\r\\n,\\\"thesauriId\\\": \\\"715\\\"\\r\\n,\\\"multiValued\\\": true\\r\\n,\\\"autoLoad\\\": true\\r\\n,\\\"editor\\\":\\\"form\\\"\\r\\n,\\\"renderer\\\": \\\"listGreenIcons\\\"\\r\\n,\\\"faceting\\\": true\\r\\n}\",\"solr_column_name\":\"category_id\"}','[]'),(25,'{\"_title\":\"_title\",\"en\":\"Name\",\"ru\":\"Name\",\"type\":\"varchar\",\"cfg\":\"{\\\"showIn\\\":\\\"top\\\"}\"}','[]'),(26,'{\"en\":\"Type\",\"ru\":\"Type\",\"_title\":\"type\",\"type\":\"_fieldTypesCombo\",\"order\":\"5\",\"cfg\":\"[]\"}','[]'),(27,'{\"en\":\"Order\",\"ru\":\"Order\",\"_title\":\"order\",\"type\":\"int\",\"order\":\"6\",\"cfg\":\"[]\"}','[]'),(28,'{\"_title\":\"cfg\",\"en\":\"Config\",\"ru\":\"Config\",\"type\":\"memo\",\"order\":\"7\",\"cfg\":\"{\\\"height\\\":100}\"}','[]'),(29,'{\"en\":\"Solr column name\",\"ru\":\"Solr column name\",\"_title\":\"solr_column_name\",\"type\":\"varchar\",\"order\":\"8\",\"cfg\":\"[]\"}','[]'),(30,'{\"en\":\"Title (en)\",\"ru\":\"Title (en)\",\"_title\":\"en\",\"type\":\"varchar\",\"order\":\"1\",\"cfg\":\"[]\"}','[]'),(31,'{\"_title\":\"_title\",\"en\":\"Name\",\"ru\":\"Name\",\"type\":\"varchar\",\"cfg\":\"{\\\"showIn\\\":\\\"top\\\",\\\"rea-dOnly\\\":true}\"}','[]'),(32,'{\"en\":\"Type\",\"ru\":\"Type\",\"_title\":\"type\",\"type\":\"_templateTypesCombo\",\"order\":\"5\",\"cfg\":\"[]\"}','[]'),(33,'{\"en\":\"Active\",\"ru\":\"Active\",\"_title\":\"visible\",\"type\":\"checkbox\",\"order\":\"6\",\"cfg\":\"{\\\"showIn\\\":\\\"top\\\"}\"}','[]'),(34,'{\"en\":\"Icon class\",\"ru\":\"Icon class\",\"_title\":\"iconCls\",\"type\":\"iconcombo\",\"order\":\"7\",\"cfg\":\"[]\"}','[]'),(35,'{\"en\":\"Config\",\"ru\":\"Config\",\"_title\":\"cfg\",\"type\":\"text\",\"order\":\"8\",\"cfg\":\"{\\\"height\\\":100}\"}','[]'),(36,'{\"en\":\"Title template\",\"ru\":\"Title template\",\"_title\":\"title_template\",\"type\":\"text\",\"order\":\"9\",\"cfg\":\"{\\\"height\\\":50}\"}','[]'),(37,'{\"en\":\"Info template\",\"ru\":\"Info template\",\"_title\":\"info_template\",\"type\":\"text\",\"order\":\"10\",\"cfg\":\"{\\\"height\\\":50}\"}','[]'),(38,'{\"en\":\"Title (en)\",\"ru\":\"Title (en)\",\"_title\":\"en\",\"type\":\"varchar\",\"order\":\"1\",\"cfg\":\"[]\"}','[]'),(39,'{\"_title\":\"iconCls\",\"en\":\"Icon class\",\"type\":\"iconcombo\",\"order\":5}','{\"solr\":[]}'),(40,'{\"_title\":\"visible\",\"en\":\"Visible\",\"type\":\"checkbox\",\"order\":6}','{\"solr\":[]}'),(41,'{\"_title\":\"order\",\"en\":\"Order\",\"type\":\"int\",\"order\":7,\"cfg\":\"{\\n\\\"indexed\\\": true\\n}\",\"solr_column_name\":\"order\"}','{\"solr\":[]}'),(42,'{\"_title\":\"en\",\"en\":\"Title\",\"type\":\"varchar\",\"order\":0,\"cfg\":\"{\\\"showIn\\\":\\\"top\\\"}\"}','{\"solr\":[]}'),(43,'{\"_title\":\"ru\",\"type\":\"varchar\",\"order\":1,\"cfg\":{\"showIn\":\"top\"}}','[]'),(44,'{\"_title\":\"_title\",\"en\":\"Title\",\"type\":\"varchar\",\"order\":1,\"cfg\":\"{\\n\\\"required\\\": true\\n,\\\"hidePreview\\\": true\\n}\"}','[]'),(45,'{\"_title\":\"assigned\",\"en\":\"Assigned\",\"type\":\"_objects\",\"order\":7,\"cfg\":\"{\\n  \\\"editor\\\": \\\"form\\\"\\n  ,\\\"source\\\": \\\"users\\\"\\n  ,\\\"renderer\\\": \\\"listObjIcons\\\"\\n  ,\\\"autoLoad\\\": true\\n  ,\\\"multiValued\\\": true\\n  ,\\\"hidePreview\\\": true\\n}\"}','[]'),(46,'{\"_title\":\"importance\",\"en\":\"Importance\",\"type\":\"_objects\",\"order\":8,\"cfg\":\"{\\n  \\\"scope\\\": 53,\\n  \\\"value\\\": 54,\\n  \\\"faceting\\\": true\\n}\"}','[]'),(47,'{\"_title\":\"description\",\"en\":\"Description\",\"type\":\"memo\",\"order\":10,\"cfg\":\"{\\n  \\\"height\\\": 100\\n  ,\\\"noHeader\\\": true\\n  ,\\\"hidePreview\\\": true\\n  ,\\\"linkRenderer\\\": \\\"user,object,url\\\"\\n}\"}','[]'),(48,'{\"_title\":\"_title\",\"en\":\"Name\",\"ru\":\"Название\",\"type\":\"varchar\",\"order\":1}','[]'),(49,'{\"_title\":\"_title\",\"en\":\"Text\",\"ru\":\"Текст\",\"type\":\"memo\",\"order\":0,\"cfg\":\"{\\n\\\"height\\\": 100\\n}\",\"solr_column_name\":\"content\"}','[]'),(50,'{\"_title\":\"due_date\",\"en\":\"Due date\",\"type\":\"date\",\"order\":5,\"cfg\":\"{\\n\\\"hidePreview\\\": true\\n}\"}','[]'),(51,'{\"_title\":\"due_time\",\"en\":\"Due time\",\"type\":\"time\",\"order\":6,\"cfg\":\"{\\n\\\"hidePreview\\\": true\\n}\"}','[]'),(52,'{\"_title\":\"task\"}','[]'),(53,'{\"_title\":\"Importance\"}','[]'),(54,'{\"en\":\"Low\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":1}','[]'),(55,'{\"en\":\"Medium\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":2}','[]'),(56,'{\"en\":\"High\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":3}','[]'),(57,'{\"en\":\"CRITICAL\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":4}','[]'),(58,'{\"_title\":\"shortcut\",\"en\":\"Shortcut\",\"type\":\"shortcut\",\"visible\":1,\"iconCls\":\"i-shortcut\"}','{\"fu\":[1],\"solr\":[],\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":7},\"time\":\"2016-06-29T03:07:29Z\"}}'),(59,'{\"_title\":\"Menu\"}','{\"fu\":[],\"solr\":[],\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":8},\"time\":\"2016-06-29T03:07:29Z\"}}'),(60,'{\"_title\":\"Menus\"}','{\"fu\":[],\"solr\":[]}'),(61,'{\"_title\":\"- Menu separator -\",\"en\":\"- Menu separator -\",\"type\":\"object\",\"visible\":1}','{\"fu\":[1],\"solr\":[]}'),(62,'{\"_title\":\"Menu rule\",\"en\":\"Menu rule\",\"type\":\"menu\",\"visible\":1}','{\"fu\":[1],\"solr\":[]}'),(63,'{\"name\":\"_title\",\"en\":\"Title\",\"type\":\"varchar\",\"order\":1}','{\"fu\":[1],\"solr\":[]}'),(64,'{\"name\":\"node_ids\",\"en\":\"Nodes\",\"type\":\"_objects\",\"order\":2,\"cfg\":\"{\\\"multiValued\\\":true,\\\"editor\\\":\\\"form\\\",\\\"renderer\\\":\\\"listObjIcons\\\"}\"}','{\"fu\":[1],\"solr\":[]}'),(65,'{\"name\":\"template_ids\",\"en\":\"Templates\",\"type\":\"_objects\",\"order\":3,\"cfg\":\"{\\\"templates\\\":\\\"11\\\",\\\"editor\\\":\\\"form\\\",\\\"multiValued\\\":true,\\\"renderer\\\":\\\"listObjIcons\\\"}\"}','{\"fu\":[1],\"solr\":[]}'),(66,'{\"name\":\"user_group_ids\",\"en\":\"Users\\/Groups\",\"type\":\"_objects\",\"order\":4,\"cfg\":\"{\\\"source\\\":\\\"usersgroups\\\",\\\"multiValued\\\":true}\"}','{\"fu\":[1],\"solr\":[]}'),(67,'{\"name\":\"menu\",\"en\":\"Menu\",\"type\":\"_objects\",\"order\":5,\"cfg\":\"{\\\"templates\\\":\\\"11\\\",\\\"multiValued\\\":true,\\\"editor\\\":\\\"form\\\",\\\"allowValueSort\\\":true,\\\"renderer\\\":\\\"listObjIcons\\\"}\"}','{\"fu\":[1],\"solr\":[]}'),(68,'{\"_title\":\"Global Menu\",\"menu\":\"143,7,83,61,5\"}','{\"fu\":[1],\"solr\":[],\"lastAction\":{\"type\":\"update\",\"users\":{\"1\":51},\"time\":\"2016-06-29T04:03:06Z\"},\"wu\":[]}'),(69,'{\"_title\":\"System Templates\",\"node_ids\":\"3\",\"template_ids\":null,\"user_group_ids\":null,\"menu\":\"11,5\"}','{\"fu\":[1],\"solr\":[]}'),(70,'{\"_title\":\"System Templates SubMenu\",\"node_ids\":null,\"template_ids\":\"11\",\"user_group_ids\":null,\"menu\":\"12\"}','{\"fu\":[1],\"solr\":[]}'),(71,'{\"_title\":\"System Fields\",\"node_ids\":null,\"template_ids\":\"12\",\"user_group_ids\":null,\"menu\":\"12\"}','{\"fu\":[1],\"solr\":[]}'),(72,'{\"_title\":\"System Thesauri\",\"node_ids\":\"4\",\"template_ids\":\"5\",\"user_group_ids\":null,\"menu\":\"8,61,5\"}','{\"fu\":[1],\"solr\":[]}'),(73,'{\"_title\":\"Create menu rules in this folder\",\"node_ids\":60,\"menu\":62}','{\"fu\":[1],\"solr\":[]}'),(74,'{\"_title\":\"link\"}','{\"fu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:15:55Z\",\"users\":{\"1\":1}}}'),(75,'{\"_title\":\"Type\"}','{\"fu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:16:08Z\",\"users\":{\"1\":2}}}'),(76,'{\"en\":\"Article\",\"iconCls\":\"icon-element\",\"visible\":1,\"order\":1}','{\"fu\":[1],\"solr\":{\"order\":1},\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:17:46Z\",\"users\":{\"1\":3}}}'),(77,'{\"en\":\"Document\",\"iconCls\":\"icon-element\",\"visible\":1,\"order\":2}','{\"fu\":[1],\"solr\":{\"order\":2},\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:18:06Z\",\"users\":{\"1\":4}}}'),(78,'{\"en\":\"Image\",\"iconCls\":\"icon-element\",\"visible\":1,\"order\":3}','{\"fu\":[1],\"solr\":{\"order\":3},\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:18:24Z\",\"users\":{\"1\":5}}}'),(79,'{\"en\":\"Sound\",\"iconCls\":\"icon-element\",\"visible\":1,\"order\":4}','{\"fu\":[1],\"solr\":{\"order\":4},\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:18:42Z\",\"users\":{\"1\":6}}}'),(80,'{\"en\":\"Video\",\"iconCls\":\"icon-element\",\"visible\":1,\"order\":5}','{\"fu\":[1],\"solr\":{\"order\":5},\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:19:03Z\",\"users\":{\"1\":7}}}'),(81,'{\"en\":\"Website\",\"iconCls\":\"icon-element\",\"visible\":1,\"order\":6}','{\"fu\":[1],\"solr\":{\"order\":6},\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:19:25Z\",\"users\":{\"1\":8}}}'),(82,'{\"_title\":\"Tags\"}','{\"fu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:19:43Z\",\"users\":{\"1\":9}}}'),(83,'{\"_title\":\"link\",\"en\":\"Link\",\"type\":\"object\",\"visible\":1,\"iconCls\":\"icon-shortcut\",\"title_template\":\"{url}\"}','{\"fu\":[1],\"solr\":[],\"lastAction\":{\"type\":\"move\",\"users\":{\"1\":9},\"time\":\"2016-06-29T03:07:29Z\"}}'),(84,'{\"_title\":\"type\",\"en\":\"Type\",\"type\":\"_objects\",\"order\":1,\"cfg\":\"{\\n\\\"scope\\\": 75 \\n}\"}','{\"fu\":[1],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:25:21Z\",\"users\":{\"1\":11}}}'),(85,'{\"_title\":\"url\",\"en\":\"URL\",\"type\":\"varchar\",\"order\":2}','{\"fu\":[1],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:25:59Z\",\"users\":{\"1\":12}}}'),(86,'{\"_title\":\"description\",\"en\":\"Description\",\"type\":\"varchar\",\"order\":3}','{\"fu\":[1],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-01T07:26:29Z\",\"users\":{\"1\":13}}}'),(87,'{\"_title\":\"tags\",\"en\":\"Tags\",\"type\":\"_objects\",\"order\":4,\"cfg\":\"{\\n\\\"scope\\\": 82\\n,\\\"editor\\\": \\\"tagField\\\"\\n}\"}','{\"fu\":[1],\"solr\":[],\"lastAction\":{\"type\":\"update\",\"users\":{\"1\":16},\"time\":\"2015-09-01T07:30:36Z\"}}'),(88,'{\"_title\":\"Built-in\"}','{\"fu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2015-09-02T13:45:53Z\",\"users\":{\"1\":17}}}'),(89,'{\"_title\":\"Config\"}','{\"fu\":[],\"solr\":[]}'),(90,'{\"_title\":\"Config\"}','{\"fu\":[],\"solr\":[]}'),(91,'{\"_title\":\"Config int option\",\"en\":\"Config int option\",\"type\":\"config\",\"visible\":1,\"iconCls\":\"icon-element\"}','{\"fu\":[1],\"solr\":[]}'),(92,'{\"name\":\"_title\",\"en\":\"Name\",\"type\":\"varchar\",\"order\":1}','{\"fu\":[1],\"solr\":[]}'),(93,'{\"name\":\"value\",\"en\":\"Value\",\"type\":\"int\",\"order\":2}','{\"fu\":[1],\"solr\":[]}'),(94,'{\"_title\":\"Config varchar option\",\"en\":\"Config varchar option\",\"type\":\"config\",\"visible\":1,\"iconCls\":\"icon-element\"}','{\"fu\":[1],\"solr\":[]}'),(95,'{\"name\":\"_title\",\"en\":\"Name\",\"type\":\"varchar\",\"order\":1}','{\"fu\":[1],\"solr\":[]}'),(96,'{\"name\":\"value\",\"en\":\"Value\",\"type\":\"varchar\",\"order\":2}','{\"fu\":[1],\"solr\":[]}'),(97,'{\"_title\":\"Config text option\",\"en\":\"Config text option\",\"type\":\"config\",\"visible\":1,\"iconCls\":\"icon-element\"}','{\"fu\":[1],\"solr\":[]}'),(98,'{\"name\":\"_title\",\"en\":\"Name\",\"type\":\"varchar\",\"order\":1}','{\"fu\":[1],\"solr\":[]}'),(99,'{\"name\":\"value\",\"en\":\"Value\",\"type\":\"text\",\"order\":2}','{\"fu\":[1],\"solr\":[]}'),(100,'{\"_title\":\"Config json option\",\"en\":\"Config json option\",\"type\":\"config\",\"visible\":1,\"iconCls\":\"icon-element\"}','{\"fu\":[1],\"solr\":[]}'),(101,'{\"name\":\"_title\",\"en\":\"Name\",\"type\":\"varchar\",\"order\":1}','{\"fu\":[1],\"solr\":[]}'),(102,'{\"name\":\"value\",\"en\":\"Value\",\"type\":\"text\",\"order\":2,\"cfg\":\"{\\\"editor\\\":\\\"ace\\\",\\\"format\\\":\\\"json\\\",\\\"validator\\\":\\\"json\\\"}\"}','{\"fu\":[1],\"solr\":[]}'),(103,'{\"name\":\"order\",\"en\":\"Order\",\"type\":\"int\",\"order\":3,\"solr_column_name\":\"order\",\"cfg\":\"{\\\"indexed\\\":true}\"}','{\"fu\":[1],\"solr\":[]}'),(104,'{\"_title\":\"project_name_en\",\"value\":\"CaseBox - Demo\"}','{\"fu\":[1],\"solr\":[]}'),(105,'{\"_title\":\"templateIcons\",\"value\":\"\\r\\nicon-arrow-left-medium\\r\\nicon-arrow-left-medium-green\\r\\nicon-arrow-left\\r\\nicon-arrow-right-medium\\r\\nicon-arrow-right\\r\\nicon-case_card\\r\\nicon-complaint\\r\\nicon-complaint-subjects\\r\\nicon-info-action\\r\\nicon-decision\\r\\nicon-echr_complaint\\r\\nicon-echr_decision\\r\\nicon-petition\\r\\nicon-balloon\\r\\nicon-bell\\r\\nicon-blog-blue\\r\\nicon-blog-magenta\\r\\nicon-blue-document-small\\r\\nicon-committee-phase\\r\\nicon-document-medium\\r\\nicon-document-stamp\\r\\nicon-document-text\\r\\nicon-mail\\r\\nicon-object1\\r\\nicon-object2\\r\\nicon-object3\\r\\nicon-object4\\r\\nicon-object5\\r\\nicon-object6\\r\\nicon-object7\\r\\nicon-object8\\r\\nicon-zone\\r\\nicon-applicant\\r\\nicon-suspect\\r\\nicon-milestone\"}','{\"fu\":[1],\"solr\":[]}'),(106,'{\"_title\":\"folder_templates\",\"value\":\"5,11,100\"}','{\"fu\":[1],\"solr\":[]}'),(107,'{\"_title\":\"default_folder_template\",\"value\":\"5\"}','{\"fu\":[1],\"solr\":[]}'),(108,'{\"_title\":\"default_file_template\",\"value\":\"6\"}','{\"fu\":[1],\"solr\":[]}'),(109,'{\"_title\":\"default_task_template\",\"value\":\"7\"}','{\"fu\":[1],\"solr\":[]}'),(110,'{\"_title\":\"default_language\",\"value\":\"en\"}','{\"fu\":[1],\"solr\":[]}'),(111,'{\"_title\":\"languages\",\"value\":\"en\"}','{\"fu\":[1],\"solr\":[]}'),(113,'{\"_title\":\"treeNodes\",\"value\":\"\"}','{\"fu\":[1],\"solr\":[]}'),(114,'{\"_title\":\"Tasks\",\"value\":\"{\\n    \\\"pid\\\": 1\\n}\",\"order\":1}','{\"fu\":[1],\"solr\":{\"order\":1}}'),(115,'{\"_title\":\"Dbnode\",\"value\":\"[]\",\"order\":2}','{\"fu\":[1],\"solr\":{\"order\":2}}'),(116,'{\"_title\":\"RecycleBin\",\"value\":\"{\\r\\n    \\\"pid\\\": \\\"1\\\",\\r\\n    \\\"facets\\\": [\\r\\n        \\\"did\\\"\\r\\n    ],\\r\\n    \\\"DC\\\": {\\r\\n        \\\"nid\\\": {}\\r\\n        ,\\\"name\\\": {}\\r\\n        ,\\\"cid\\\": {}\\r\\n        ,\\\"ddate\\\": {\\r\\n            \\\"solr_column_name\\\": \\\"ddate\\\"\\r\\n        }\\r\\n    }\\r\\n}\",\"order\":3}','{\"fu\":[1],\"solr\":{\"order\":3},\"wu\":[1],\"lastAction\":{\"type\":\"update\",\"users\":{\"1\":1},\"time\":\"2015-11-25T13:52:47Z\"}}'),(117,'{\"_title\":\"Create config options rule\",\"node_ids\":90,\"menu\":\"91,94,97,100\"}','{\"fu\":[1],\"solr\":[]}'),(118,'{\"_title\":\"case\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:15:02Z\",\"users\":{\"1\":12}}}'),(119,'{\"_title\":\"contact role\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:16:34Z\",\"users\":{\"1\":13}}}'),(120,'{\"en\":\"Defendant\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":1}','{\"wu\":[],\"solr\":{\"order\":1},\"lastAction\":{\"type\":\"update\",\"users\":{\"1\":15},\"time\":\"2016-06-29T03:17:41Z\"}}'),(121,'{\"en\":\"Government Official\",\"iconCls\":\"icon-small-tag\",\"visible\":1,\"order\":2}','{\"wu\":[],\"solr\":{\"order\":2},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:19:21Z\",\"users\":{\"1\":16}}}'),(122,'{\"en\":\"Lawyer\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":3}','{\"wu\":[],\"solr\":{\"order\":3},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:20:14Z\",\"users\":{\"1\":17}}}'),(123,'{\"_title\":\"status\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:20:34Z\",\"users\":{\"1\":18}}}'),(124,'{\"en\":\"New\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":1}','{\"wu\":[],\"solr\":{\"order\":1},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:21:08Z\",\"users\":{\"1\":19}}}'),(125,'{\"en\":\"Ongoing\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":2}','{\"wu\":[],\"solr\":{\"order\":2},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:21:46Z\",\"users\":{\"1\":20}}}'),(126,'{\"en\":\"On Hold\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":3}','{\"wu\":[],\"solr\":{\"order\":3},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:26:21Z\",\"users\":{\"1\":21}}}'),(127,'{\"en\":\"Archived\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":4}','{\"wu\":[],\"solr\":{\"order\":4},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:27:02Z\",\"users\":{\"1\":22}}}'),(128,'{\"en\":\"Closed\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":5}','{\"wu\":[],\"solr\":{\"order\":5},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:27:34Z\",\"users\":{\"1\":23}}}'),(129,'{\"_title\":\"tags\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:28:02Z\",\"users\":{\"1\":24}}}'),(130,'{\"en\":\"Torture\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":1}','{\"wu\":[],\"solr\":{\"order\":1},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:28:36Z\",\"users\":{\"1\":25}}}'),(131,'{\"en\":\"Assault\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":2}','{\"wu\":[],\"solr\":{\"order\":2},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:29:06Z\",\"users\":{\"1\":26}}}'),(132,'{\"en\":\"Murder\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":3}','{\"wu\":[],\"solr\":{\"order\":3},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:29:44Z\",\"users\":{\"1\":27}}}'),(133,'{\"en\":\"Housing\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":4}','{\"wu\":[],\"solr\":{\"order\":4},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:30:13Z\",\"users\":{\"1\":28}}}'),(134,'{\"en\":\"Child\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":5}','{\"wu\":[],\"solr\":{\"order\":5},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:42:16Z\",\"users\":{\"1\":29}}}'),(135,'{\"en\":\"Arrest\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":6}','{\"wu\":[],\"solr\":{\"order\":6},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:42:42Z\",\"users\":{\"1\":30}}}'),(136,'{\"en\":\"Health\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":7}','{\"wu\":[],\"solr\":{\"order\":7},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:43:16Z\",\"users\":{\"1\":31}}}'),(137,'{\"_title\":\"type\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:43:38Z\",\"users\":{\"1\":32}}}'),(138,'{\"en\":\"Civil\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":1}','{\"wu\":[],\"solr\":{\"order\":1},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:44:16Z\",\"users\":{\"1\":33}}}'),(139,'{\"en\":\"Constitutional\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":2}','{\"wu\":[],\"solr\":{\"order\":2},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:45:00Z\",\"users\":{\"1\":34}}}'),(140,'{\"en\":\"Human Rights\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":3}','{\"wu\":[],\"solr\":{\"order\":3},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:45:31Z\",\"users\":{\"1\":35}}}'),(141,'{\"en\":\"Criminal\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":4}','{\"wu\":[],\"solr\":{\"order\":4},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:46:03Z\",\"users\":{\"1\":36}}}'),(142,'{\"en\":\"Military\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":5}','{\"wu\":[],\"solr\":{\"order\":5},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:46:40Z\",\"users\":{\"1\":37}}}'),(143,'{\"_title\":\"Case\",\"en\":\"Case\",\"type\":\"case\",\"visible\":1,\"iconCls\":\"icon-briefcase\",\"title_template\":\"{name}\\n\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:49:29Z\",\"users\":{\"1\":38}},\"solrConfigUpdated\":true}'),(144,'{\"_title\":\"contacts\",\"en\":\"Case contacts\",\"type\":\"_objects\",\"order\":8,\"cfg\":\"{\\\"source\\\":\\\"users\\\",\\\"multiValued\\\":true}\\n\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:50:39Z\",\"users\":{\"1\":39}}}'),(145,'{\"_title\":\"Country\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:51:24Z\",\"users\":{\"1\":40}}}'),(146,'{\"en\":\"Indonesia\",\"iconCls\":\"icon-tag-small\",\"visible\":1,\"order\":1}','{\"wu\":[],\"solr\":{\"order\":1},\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:52:00Z\",\"users\":{\"1\":41}}}'),(147,'{\"_title\":\"country\",\"en\":\"Country\",\"type\":\"_objects\",\"order\":7,\"cfg\":\"{\\\"source\\\":\\\"tree\\\",\\\"scope\\\":145, \\\"faceting\\\":true}\\n\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:53:27Z\",\"users\":{\"1\":42}}}'),(148,'{\"_title\":\"date\",\"en\":\"Date\",\"type\":\"date\",\"order\":5}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:54:10Z\",\"users\":{\"1\":43}}}'),(149,'{\"_title\":\"description\",\"en\":\"Description\",\"type\":\"text\",\"order\":6}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:54:50Z\",\"users\":{\"1\":44}}}'),(150,'{\"_title\":\"name\",\"en\":\"Name\",\"type\":\"varchar\",\"order\":1}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T03:55:28Z\",\"users\":{\"1\":45}}}'),(151,'{\"_title\":\"status\",\"en\":\"Case status\",\"type\":\"_objects\",\"order\":2,\"cfg\":\"{\\n\\\"source\\\":\\\"tree\\\",\\n\\\"scope\\\":123,\\n\\\"faceting\\\":true\\n}\",\"solr_column_name\":\"case_status_i\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"update\",\"users\":{\"1\":50},\"time\":\"2016-06-29T04:01:22Z\"}}'),(152,'{\"_title\":\"tags\",\"en\":\"Tags\",\"type\":\"_objects\",\"order\":3,\"cfg\":\"{\\\"source\\\":\\\"tree\\\",\\\"multiValued\\\":true,\\\"scope\\\":129, \\\"faceting\\\":true}\\n\",\"solr_column_name\":\"case_tags_i\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"update\",\"users\":{\"1\":49},\"time\":\"2016-06-29T04:00:51Z\"}}'),(153,'{\"_title\":\"type\",\"en\":\"Type\",\"type\":\"_objects\",\"order\":4,\"cfg\":\"{\\\"source\\\":\\\"tree\\\",\\\"scope\\\":137, \\\"faceting\\\":true}\\n\",\"solr_column_name\":\"case_type_i\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T04:00:20Z\",\"users\":{\"1\":48}}}'),(154,'{\"_title\":\"CaseBy\",\"value\":\"{\\n\\\"class\\\": \\\"CB\\\\\\\\TreeNode\\\\\\\\FacetNav\\\",\\n\\\"pid\\\": 1,\\n\\\"iconCls\\\": \\\"icon-case\\\",\\n\\\"title_en\\\": \\\"Cases By Status\\\",\\n\\\"fq\\\": [\\n\\\"template_id: 143\\\"\\n],\\n\\\"level_fields\\\": \\\"case_status, case_type, case_tags\\\",\\n\\\"facets\\\": [\\n\\\"case_status\\\",\\n\\\"case_type\\\",\\n\\\"case_tags\\\",\\n\\\"case_country\\\"\\n],\\n\\\"sort\\\": {\\n\\\"property\\\": \\\"name\\\",\\n\\\"direction\\\": \\\"DESC\\\"\\n},\\n\\\"view\\\": \\\"grid\\\",\\n\\\"show_count\\\": true,\\n\\\"show_in_tree\\\": true\\n}\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"update\",\"users\":{\"1\":53},\"time\":\"2016-06-29T04:05:30Z\"}}'),(155,'{\"_title\":\"Danang Kastowo\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T04:06:38Z\",\"users\":{\"1\":54}}}'),(156,'{\"name\":\"Vaksin Palsu\",\"status\":125,\"tags\":\"136\",\"type\":138,\"date\":\"2016-06-29T00:00:00Z\",\"description\":\"Permasalahan vaksin palsu perlu menjadi perhatian pemerintah.\",\"country\":146,\"contacts\":\"1\"}','{\"wu\":[1],\"solr\":{\"case_status_i\":125,\"case_tags_i\":136,\"case_type_i\":138,\"\":146},\"lastAction\":{\"type\":\"update\",\"users\":{\"1\":63},\"time\":\"2016-06-30T01:20:28Z\"}}'),(157,'[]','{\"wu\":[],\"solr\":{\"size\":\"14848\",\"versions\":2},\"lastAction\":{\"type\":\"file_update\",\"users\":{\"3\":62},\"time\":\"2016-06-29T05:11:24Z\"}}'),(158,'[]','{\"wu\":[],\"solr\":{\"size\":\"4339\",\"versions\":0},\"lastAction\":{\"type\":\"file_upload\",\"users\":{\"1\":57},\"time\":\"2016-06-29T04:14:20Z\"}}'),(159,'{\"_title\":\"facet_configs\",\"value\":\"{\\n\\\"case_status\\\": {\\n\\\"field\\\": \\\"case_status_i\\\"\\n,\\\"title\\\": \\\"Case Status\\\"\\n,\\\"type\\\": \\\"objects\\\"\\n},\\n\\n\\\"case_type\\\": {\\n\\\"field\\\": \\\"case_type_i\\\"\\n,\\\"title\\\": \\\"Case Type\\\"\\n,\\\"type\\\": \\\"objects\\\"\\n},\\n\\n\\\"case_country\\\": {\\n\\\"field\\\": \\\"case_country_i\\\"\\n,\\\"title\\\": \\\"Case Country\\\"\\n,\\\"type\\\": \\\"objects\\\"\\n},\\n\\n\\\"case_tags\\\": {\\n\\\"field\\\": \\\"case_tags_i\\\"\\n,\\\"title\\\": \\\"Tags\\\"\\n,\\\"type\\\": \\\"objects\\\"\\n}\\n}\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T04:24:38Z\",\"users\":{\"1\":58}}}'),(160,'{\"_title\":\"object_type_plugins\",\"value\":\"{\\n\\\"object\\\": [\\\"objectProperties\\\", \\\"files\\\", \\\"tasks\\\", \\\"contentItems\\\", \\\"comments\\\", \\\"systemProperties\\\"]\\n,\\\"case\\\": [\\\"objectProperties\\\", \\\"files\\\", \\\"tasks\\\", \\\"contentItems\\\", \\\"comments\\\", \\\"systemProperties\\\"]\\n,\\\"task\\\": [\\\"objectProperties\\\", \\\"files\\\", \\\"contentItems\\\", \\\"comments\\\", \\\"systemProperties\\\"]\\n,\\\"file\\\": [\\\"thumb\\\", \\\"meta\\\", \\\"versions\\\", \\\"tasks\\\", \\\"comments\\\", \\\"systemProperties\\\"]\\n}\"}','{\"wu\":[],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-06-29T04:26:08Z\",\"users\":{\"1\":59}}}'),(161,'[]','{\"wu\":[1],\"solr\":{\"comment_user_id\":1,\"comment_date\":\"2016-07-13T03:31:09Z\",\"size\":\"160608\",\"versions\":0},\"lastAction\":{\"type\":\"comment\",\"users\":{\"1\":64},\"time\":\"2016-07-13T03:31:09Z\"},\"lastComment\":{\"user_id\":1,\"date\":\"2016-07-13T03:31:09Z\"}}'),(162,'{\"_title\":\"wah mengerikan sekali\"}','{\"wu\":[],\"solr\":{\"content\":\"wah mengerikan sekali\"}}'),(163,'{\"_title\":\"Chanthel User Guide\"}','{\"wu\":[1],\"solr\":[],\"lastAction\":{\"type\":\"create\",\"time\":\"2016-07-20T02:56:06Z\",\"users\":{\"1\":65}}}'),(164,'[]','{\"wu\":[],\"solr\":{\"size\":\"8932059\",\"versions\":1}}');
/*!40000 ALTER TABLE `objects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sessions` (
  `id` varbinary(100) NOT NULL,
  `pid` varbinary(100) DEFAULT NULL COMMENT 'parrent session id',
  `last_action` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expires` timestamp NULL DEFAULT NULL COMMENT 'expire could be null for non expiring sessions',
  `user_id` int(10) unsigned NOT NULL,
  `data` text,
  PRIMARY KEY (`id`),
  KEY `idx_expires` (`expires`),
  KEY `idx_last_action` (`last_action`),
  KEY `idx_pid` (`pid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
INSERT INTO `sessions` VALUES ('nqjedcv36i6i4f8u8711isf0e4','nqjedcv36i6i4f8u8711isf0e4','2016-07-20 02:59:51','2016-07-23 02:59:51',0,'');
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `templates`
--

DROP TABLE IF EXISTS `templates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `templates` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(11) unsigned DEFAULT NULL,
  `is_folder` tinyint(1) unsigned DEFAULT '0',
  `type` enum('case','object','file','task','user','email','template','field','search','comment','shortcut','menu','config','time_tracking') DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `l1` varchar(100) DEFAULT NULL,
  `l2` varchar(100) DEFAULT NULL,
  `l3` varchar(250) DEFAULT NULL,
  `l4` varchar(100) DEFAULT NULL,
  `order` int(11) unsigned DEFAULT '0',
  `visible` tinyint(1) NOT NULL DEFAULT '1',
  `iconCls` varchar(50) DEFAULT NULL,
  `default_field` varchar(50) DEFAULT NULL,
  `cfg` text,
  `title_template` text,
  `info_template` text,
  PRIMARY KEY (`id`),
  KEY `FK_templates__pid` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templates`
--

LOCK TABLES `templates` WRITE;
/*!40000 ALTER TABLE `templates` DISABLE KEYS */;
INSERT INTO `templates` VALUES (5,88,0,'object','folder','Folder','Folder','Folder','Folder',5,1,'icon-folder',NULL,'{\n\"createMethod\":\"inline\"\n}','{name}',NULL),(6,88,0,'file','file_template','File','File','File','File',6,1,'file-',NULL,'[]','{name}',NULL),(7,88,0,'task','task','Task','Task','Task','Task',3,1,'icon-task',NULL,NULL,'{name}',NULL),(8,88,0,'object','Thesauri Item','Thesauri item','Thesauri item','Thesauri item','Thesauri item',0,1,'icon-blue-document-small',NULL,NULL,'{en}',NULL),(9,88,0,'comment','Comment',NULL,NULL,NULL,NULL,0,1,'icon-balloon',NULL,'{\n  \"systemType\": 2\n}',NULL,NULL),(10,88,0,'user','User','User',NULL,'Пользователь',NULL,1,1,'icon-object4',NULL,'{\"files\":\"1\",\"main_file\":\"1\"}',NULL,NULL),(11,88,0,'template','Template','Template','Template','Template','Template',0,1,'icon-template',NULL,'[]',NULL,NULL),(12,88,0,'field','Field','Field','Field','Field','Field',0,1,'icon-snippet',NULL,'[]',NULL,NULL),(58,88,0,'shortcut','shortcut','Shortcut',NULL,NULL,NULL,0,0,'i-shortcut',NULL,NULL,NULL,NULL),(61,59,0,'object','- Menu separator -','- Menu separator -',NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL),(62,59,0,'menu','Menu rule','Menu rule',NULL,NULL,NULL,0,0,NULL,NULL,NULL,NULL,NULL),(83,88,0,'object','link','Link',NULL,NULL,NULL,0,0,'icon-shortcut',NULL,NULL,'{url}',NULL),(91,89,0,'config','Config int option','Config int option',NULL,NULL,NULL,0,0,'icon-element',NULL,NULL,NULL,NULL),(94,89,0,'config','Config varchar option','Config varchar option',NULL,NULL,NULL,0,0,'icon-element',NULL,NULL,NULL,NULL),(97,89,0,'config','Config text option','Config text option',NULL,NULL,NULL,0,0,'icon-element',NULL,NULL,NULL,NULL),(100,89,0,'config','Config json option','Config json option',NULL,NULL,NULL,0,0,'icon-element',NULL,NULL,NULL,NULL),(143,3,0,'case','Case',NULL,NULL,NULL,NULL,0,0,'icon-briefcase',NULL,NULL,'{name}\n',NULL);
/*!40000 ALTER TABLE `templates` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `templates_structure`
--

DROP TABLE IF EXISTS `templates_structure`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `templates_structure` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(11) unsigned DEFAULT NULL,
  `template_id` int(11) unsigned NOT NULL,
  `tag` varchar(30) DEFAULT NULL,
  `level` smallint(6) unsigned DEFAULT '0',
  `name` varchar(1000) NOT NULL,
  `l1` varchar(1000) DEFAULT NULL,
  `l2` varchar(1000) DEFAULT NULL,
  `l3` varchar(1000) DEFAULT NULL,
  `l4` varchar(1000) DEFAULT NULL,
  `type` varchar(30) DEFAULT NULL COMMENT 'varchar,date,time,int,bool,text,combo,popup_list',
  `order` smallint(6) unsigned DEFAULT '0',
  `cfg` text,
  `solr_column_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `templates_structure_pid` (`pid`),
  KEY `templates_structure_template_id` (`template_id`),
  KEY `idx_templates_structure_type` (`type`),
  CONSTRAINT `FK_templates_structure__template_id` FOREIGN KEY (`template_id`) REFERENCES `templates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=154 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `templates_structure`
--

LOCK TABLES `templates_structure` WRITE;
/*!40000 ALTER TABLE `templates_structure` DISABLE KEYS */;
INSERT INTO `templates_structure` VALUES (13,10,10,'f',0,'en','Full name (en)',NULL,NULL,NULL,'varchar',1,NULL,NULL),(14,10,10,'f',0,'initials','Initials','Initiales','Инициалы',NULL,'varchar',4,'[]',NULL),(15,10,10,'f',0,'sex','Sex','Sexe','Пол',NULL,'_sex',5,'{\"thesauriId\":\"90\"}',NULL),(16,10,10,'f',0,'position','Position','Titre','Должность',NULL,'_objects',7,'{\"source\":\"tree\",\"scope\":24340,\"oldThesauriId\":\"362\"}',NULL),(17,10,10,'f',0,'email','E-mail','E-mail','E-mail',NULL,'varchar',9,'{\"maxInstances\":\"3\"}',NULL),(18,10,10,'f',0,'language_id','Language','Langue','Язык',NULL,'_language',11,'[]',NULL),(19,10,10,'f',0,'short_date_format','Date format','Format de date','Формат даты',NULL,'_short_date_format',12,'[]',NULL),(20,10,10,'f',0,'description','Description','Description','Примечание',NULL,'varchar',13,'[]',NULL),(21,10,10,'f',0,'room','Room','Salle','Кабинет',NULL,'varchar',8,'[]',NULL),(22,10,10,'f',0,'phone','Phone','Téléphone','Телефон',NULL,'varchar',10,'{\"maxInstances\":\"10\"}',NULL),(23,10,10,'f',0,'location','Location','Emplacement','Расположение',NULL,'_objects',6,'{\"source\":\"tree\",\"scope\":24373,\"oldThesauriId\":\"394\"}',NULL),(24,6,6,'f',0,'program','Program','Program','Program','Program','_objects',1,'{\"source\":\"tree\",\"multiValued\":true,\"autoLoad\":true,\"editor\":\"form\",\"renderer\":\"listGreenIcons\",\"faceting\":true,\"scope\":24265,\"oldThesauriId\":\"715\"}',NULL),(25,12,12,NULL,0,'_title','Name','Name','Name','Name','varchar',NULL,'{\"showIn\":\"top\"}',NULL),(26,12,12,NULL,0,'type','Type','Type','Type','Type','_fieldTypesCombo',5,'[]',NULL),(27,12,12,NULL,0,'order','Order','Order','Order','Order','int',6,'[]',NULL),(28,12,12,NULL,0,'cfg','Config','Config','Config','Config','memo',7,'{\"height\":100}',NULL),(29,12,12,NULL,0,'solr_column_name','Solr column name','Solr column name','Solr column name','Solr column name','varchar',8,'[]',NULL),(30,12,12,NULL,0,'en','Title (en)','Title (en)','Title (en)','Title (en)','varchar',1,'[]',NULL),(31,11,11,NULL,0,'_title','Name','Name','Name','Name','varchar',NULL,'{\"showIn\":\"top\",\"rea-dOnly\":true}',NULL),(32,11,11,NULL,0,'type','Type','Type','Type','Type','_templateTypesCombo',5,'[]',NULL),(33,11,11,NULL,0,'visible','Active','Active','Active','Active','checkbox',6,'{\"showIn\":\"top\"}',NULL),(34,11,11,NULL,0,'iconCls','Icon class','Icon class','Icon class','Icon class','iconcombo',7,'[]',NULL),(35,11,11,NULL,0,'cfg','Config','Config','Config','Config','text',8,'{\"height\":100}',NULL),(36,11,11,NULL,0,'title_template','Title template','Title template','Title template','Title template','text',9,'{\"height\":50}',NULL),(37,11,11,NULL,0,'info_template','Info template','Info template','Info template','Info template','text',10,'{\"height\":50}',NULL),(38,11,11,NULL,0,'en','Title (en)','Title (en)','Title (en)','Title (en)','varchar',1,'[]',NULL),(39,8,8,NULL,0,'iconCls','Icon class',NULL,NULL,NULL,'iconcombo',5,NULL,NULL),(40,8,8,NULL,0,'visible','Visible',NULL,NULL,NULL,'checkbox',6,NULL,NULL),(41,8,8,NULL,0,'order','Order',NULL,NULL,NULL,'int',7,'{\n\"indexed\": true\n}','order'),(42,8,8,NULL,0,'en','Title',NULL,NULL,NULL,'varchar',0,'{\"showIn\":\"top\"}',NULL),(43,8,8,NULL,0,'ru','Title (ru)','Title (ru)','Title (ru)','Title (ru)','varchar',1,'{\"showIn\":\"top\"}',NULL),(44,7,7,NULL,0,'_title','Title',NULL,NULL,NULL,'varchar',1,'{\n\"required\": true\n,\"hidePreview\": true\n}',NULL),(45,7,7,NULL,0,'assigned','Assigned',NULL,NULL,NULL,'_objects',7,'{\n  \"editor\": \"form\"\n  ,\"source\": \"users\"\n  ,\"renderer\": \"listObjIcons\"\n  ,\"autoLoad\": true\n  ,\"multiValued\": true\n  ,\"hidePreview\": true\n}',NULL),(46,7,7,NULL,0,'importance','Importance',NULL,NULL,NULL,'_objects',8,'{\n  \"scope\": 53,\n  \"value\": 54,\n  \"faceting\": true\n}',NULL),(47,7,7,NULL,0,'description','Description',NULL,NULL,NULL,'memo',10,'{\n  \"height\": 100\n  ,\"noHeader\": true\n  ,\"hidePreview\": true\n  ,\"linkRenderer\": \"user,object,url\"\n}',NULL),(48,5,5,NULL,0,'_title','Name','Название',NULL,NULL,'varchar',1,NULL,NULL),(49,9,9,NULL,0,'_title','Text','Текст',NULL,NULL,'memo',0,'{\n\"height\": 100\n}','content'),(50,7,7,NULL,0,'due_date','Due date',NULL,NULL,NULL,'date',5,'{\n\"hidePreview\": true\n}',NULL),(51,7,7,NULL,0,'due_time','Due time',NULL,NULL,NULL,'time',6,'{\n\"hidePreview\": true\n}',NULL),(63,62,62,NULL,0,'_title','Title',NULL,NULL,NULL,'varchar',1,NULL,NULL),(64,62,62,NULL,0,'node_ids','Nodes',NULL,NULL,NULL,'_objects',2,'{\"multiValued\":true,\"editor\":\"form\",\"renderer\":\"listObjIcons\"}',NULL),(65,62,62,NULL,0,'template_ids','Templates',NULL,NULL,NULL,'_objects',3,'{\"templates\":\"11\",\"editor\":\"form\",\"multiValued\":true,\"renderer\":\"listObjIcons\"}',NULL),(66,62,62,NULL,0,'user_group_ids','Users/Groups',NULL,NULL,NULL,'_objects',4,'{\"source\":\"usersgroups\",\"multiValued\":true}',NULL),(67,62,62,NULL,0,'menu','Menu',NULL,NULL,NULL,'_objects',5,'{\"templates\":\"11\",\"multiValued\":true,\"editor\":\"form\",\"allowValueSort\":true,\"renderer\":\"listObjIcons\"}',NULL),(84,83,83,NULL,0,'type','Type',NULL,NULL,NULL,'_objects',1,'{\n\"scope\": 75 \n}',NULL),(85,83,83,NULL,0,'url','URL',NULL,NULL,NULL,'varchar',2,NULL,NULL),(86,83,83,NULL,0,'description','Description',NULL,NULL,NULL,'varchar',3,NULL,NULL),(87,83,83,NULL,0,'tags','Tags',NULL,NULL,NULL,'_objects',4,'{\n\"scope\": 82\n,\"editor\": \"tagField\"\n}',NULL),(92,91,91,NULL,0,'_title','Name',NULL,NULL,NULL,'varchar',1,NULL,NULL),(93,91,91,NULL,0,'value','Value',NULL,NULL,NULL,'int',2,NULL,NULL),(95,94,94,NULL,0,'_title','Name',NULL,NULL,NULL,'varchar',1,NULL,NULL),(96,94,94,NULL,0,'value','Value',NULL,NULL,NULL,'varchar',2,NULL,NULL),(98,97,97,NULL,0,'_title','Name',NULL,NULL,NULL,'varchar',1,NULL,NULL),(99,97,97,NULL,0,'value','Value',NULL,NULL,NULL,'text',2,NULL,NULL),(101,100,100,NULL,0,'_title','Name',NULL,NULL,NULL,'varchar',1,NULL,NULL),(102,100,100,NULL,0,'value','Value',NULL,NULL,NULL,'text',2,'{\"editor\":\"ace\",\"format\":\"json\",\"validator\":\"json\"}',NULL),(103,100,100,NULL,0,'order','Order',NULL,NULL,NULL,'int',3,'{\"indexed\":true}','order'),(144,143,143,NULL,0,'contacts',NULL,NULL,NULL,NULL,'_objects',8,'{\"source\":\"users\",\"multiValued\":true}\n',NULL),(147,143,143,NULL,0,'country',NULL,NULL,NULL,NULL,'_objects',7,'{\"source\":\"tree\",\"scope\":145, \"faceting\":true}\n',NULL),(148,143,143,NULL,0,'date',NULL,NULL,NULL,NULL,'date',5,NULL,NULL),(149,143,143,NULL,0,'description',NULL,NULL,NULL,NULL,'text',6,NULL,NULL),(150,143,143,NULL,0,'name',NULL,NULL,NULL,NULL,'varchar',1,NULL,NULL),(151,143,143,NULL,0,'status',NULL,NULL,NULL,NULL,'field',2,'{\n\"source\":\"tree\",\n\"scope\":123,\n\"faceting\":true\n}','case_status_i'),(152,143,143,NULL,0,'tags',NULL,NULL,NULL,NULL,'field',3,'{\"source\":\"tree\",\"multiValued\":true,\"scope\":129, \"faceting\":true}\n','case_tags_i'),(153,143,143,NULL,0,'type',NULL,NULL,NULL,NULL,'_objects',4,'{\"source\":\"tree\",\"scope\":137, \"faceting\":true}\n','case_type_i');
/*!40000 ALTER TABLE `templates_structure` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `templates_structure_bi` BEFORE INSERT ON `templates_structure` FOR EACH ROW BEGIN
	DECLARE msg VARCHAR(255);
	
	if (new.id = new.pid) then
		set msg = concat('Error: cyclic reference in templates_structure ', cast(new.id as char));
		signal sqlstate '45000' set message_text = msg;
	end if;
	
	if(NEW.PID is not null) THEN
		SET NEW.LEVEL = COALESCE((SELECT `level` + 1 FROM templates_structure WHERE id = NEW.PID), 0);
	END IF;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `templates_structure_bu` BEFORE UPDATE ON `templates_structure` FOR EACH ROW BEGIN
	DECLARE msg VARCHAR(255);
	
	IF (new.id = new.pid) THEN
		SET msg = CONCAT('Error: cyclic reference in templates_structure ', CAST(new.id AS CHAR));
		signal SQLSTATE '45000' SET message_text = msg;
	END IF;
	
	IF(NEW.PID IS NOT NULL) THEN
		SET NEW.LEVEL = coalesce((SELECT `level` +1 FROM templates_structure WHERE id = NEW.PID), 0);
	END IF;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `translations`
--

DROP TABLE IF EXISTS `translations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `translations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pid` int(10) unsigned DEFAULT NULL,
  `name` varbinary(100) DEFAULT NULL,
  `en` varchar(250) DEFAULT NULL,
  `es` varchar(250) DEFAULT NULL,
  `ge` varchar(250) DEFAULT NULL,
  `fr` varchar(250) DEFAULT NULL,
  `hy` varchar(250) DEFAULT NULL,
  `pt` varchar(250) DEFAULT NULL,
  `ro` varchar(250) DEFAULT NULL,
  `ru` varchar(250) DEFAULT NULL,
  `ar` varchar(1000) DEFAULT NULL,
  `zh` varchar(1000) DEFAULT NULL,
  `type` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '0 - anywhere, 1 - server, 2 - client',
  `info` varchar(1000) DEFAULT NULL COMMENT 'Where in CB the term is used, what it means',
  `deleted` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '0 - not deleted, 1 - deleted',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQUE_translations__name` (`name`),
  KEY `FK_translations__pid` (`pid`),
  CONSTRAINT `FK_translations__pid` FOREIGN KEY (`pid`) REFERENCES `translations` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `translations`
--

LOCK TABLES `translations` WRITE;
/*!40000 ALTER TABLE `translations` DISABLE KEYS */;
/*!40000 ALTER TABLE `translations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tree`
--

DROP TABLE IF EXISTS `tree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tree` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) unsigned DEFAULT NULL,
  `user_id` int(20) unsigned DEFAULT NULL,
  `system` tinyint(1) NOT NULL DEFAULT '0',
  `type` smallint(5) unsigned DEFAULT NULL,
  `draft` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `draft_pid` varchar(10) DEFAULT NULL COMMENT 'used to attach other objects to a non existing, yet creating item',
  `template_id` int(10) unsigned DEFAULT NULL,
  `tag_id` int(10) unsigned DEFAULT NULL,
  `target_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(1000) DEFAULT NULL,
  `date` datetime DEFAULT NULL COMMENT 'start date',
  `date_end` datetime DEFAULT NULL,
  `size` bigint(20) unsigned DEFAULT NULL,
  `is_main` tinyint(1) DEFAULT NULL,
  `cfg` text,
  `inherit_acl` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'inherit the access permissions from parent',
  `cid` int(10) unsigned DEFAULT NULL COMMENT 'creator id',
  `cdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'creation date',
  `uid` int(10) DEFAULT NULL COMMENT 'updater id',
  `udate` timestamp NULL DEFAULT NULL COMMENT 'update date',
  `updated` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1st bit - node updated, 2nd - security updated, 3rd - node moved',
  `oid` int(11) DEFAULT NULL COMMENT 'owner id',
  `did` int(10) unsigned DEFAULT NULL COMMENT 'delete user id',
  `ddate` timestamp NULL DEFAULT NULL,
  `dstatus` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT 'delete item status: 0 - not deleted, 1 - deleted, 2 - parent deleted',
  PRIMARY KEY (`id`),
  KEY `tree_tag_id` (`tag_id`),
  KEY `tree_pid` (`pid`),
  KEY `tree_updated` (`updated`),
  KEY `IDX_tree_date__date_end` (`date`,`date_end`),
  KEY `tree_template_id` (`template_id`),
  KEY `tree_draft` (`draft`),
  CONSTRAINT `tree_pid` FOREIGN KEY (`pid`) REFERENCES `tree` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tree_template_id` FOREIGN KEY (`template_id`) REFERENCES `templates` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tree`
--

LOCK TABLES `tree` WRITE;
/*!40000 ALTER TABLE `tree` DISABLE KEYS */;
INSERT INTO `tree` VALUES (1,NULL,NULL,1,1,0,NULL,5,NULL,NULL,'Tree',NULL,NULL,NULL,1,'[]',0,1,'2012-11-17 10:10:21',1,'2014-01-17 06:53:00',0,1,NULL,NULL,0),(2,1,NULL,0,1,0,NULL,5,NULL,NULL,'System',NULL,NULL,NULL,NULL,'[]',0,1,'2015-05-20 08:57:45',NULL,NULL,0,1,NULL,NULL,0),(3,2,NULL,0,NULL,0,NULL,5,NULL,NULL,'Templates',NULL,NULL,NULL,NULL,'[]',1,1,'2014-01-17 06:50:45',1,'2014-01-17 06:53:08',0,1,NULL,NULL,0),(4,2,NULL,0,4,0,NULL,5,NULL,NULL,'Thesauri','2013-09-24 19:38:09',NULL,NULL,NULL,'[]',1,256,'2013-09-24 12:38:09',1,'2014-01-17 06:53:08',0,256,NULL,NULL,0),(5,3,NULL,0,NULL,0,NULL,11,NULL,NULL,'folder',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',1,'2016-03-23 03:18:23',0,1,NULL,NULL,0),(6,3,NULL,0,NULL,0,NULL,11,NULL,NULL,'file',NULL,NULL,NULL,NULL,'[]',1,1,'2014-01-17 06:50:48',1,'2014-01-17 07:09:12',0,1,NULL,NULL,0),(7,3,NULL,0,NULL,0,NULL,11,NULL,NULL,'task',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',1,'2015-05-20 23:58:35',0,1,NULL,NULL,0),(8,3,NULL,0,NULL,0,NULL,11,NULL,NULL,'Thesauri Item',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 07:09:11',240,'2014-02-28 07:12:11',0,1,NULL,NULL,0),(9,3,NULL,0,NULL,0,NULL,11,NULL,NULL,'Comment',NULL,NULL,NULL,NULL,'null',1,1,'2014-02-12 14:14:04',NULL,NULL,0,1,NULL,NULL,0),(10,3,NULL,0,NULL,0,NULL,11,NULL,NULL,'User',NULL,NULL,NULL,NULL,'{\"files\":\"1\",\"main_file\":\"1\"}',1,1,'2014-01-17 06:50:48',1,'2014-01-17 07:09:12',0,1,NULL,NULL,0),(11,88,NULL,0,NULL,0,NULL,11,NULL,NULL,'Template',NULL,NULL,NULL,NULL,'[]',1,1,'2014-01-17 06:50:45',1,'2014-01-17 06:50:51',0,1,NULL,NULL,0),(12,88,NULL,0,NULL,0,NULL,11,NULL,NULL,'Field',NULL,NULL,NULL,NULL,'[]',1,1,'2014-01-17 06:50:45',1,'2014-01-17 06:50:51',0,1,NULL,NULL,0),(13,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'en',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',1,'2015-05-20 23:36:59',0,1,NULL,NULL,0),(14,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'initials',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',NULL,NULL,0,1,NULL,NULL,0),(15,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'sex',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',NULL,NULL,0,1,NULL,NULL,0),(16,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'position',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',NULL,NULL,0,1,NULL,NULL,0),(17,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'email',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',NULL,NULL,0,1,NULL,NULL,0),(18,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'language_id',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',NULL,NULL,0,1,NULL,NULL,0),(19,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'short_date_format',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',NULL,NULL,0,1,NULL,NULL,0),(20,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'description',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',NULL,NULL,0,1,NULL,NULL,0),(21,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'room',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',NULL,NULL,0,1,NULL,NULL,0),(22,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'phone',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',NULL,NULL,0,1,NULL,NULL,0),(23,10,NULL,0,NULL,0,NULL,12,NULL,NULL,'location',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:48',NULL,NULL,0,1,NULL,NULL,0),(24,6,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:50',NULL,NULL,0,1,NULL,NULL,0),(25,12,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',1,'2014-01-21 04:24:06',0,1,NULL,NULL,0),(26,12,NULL,0,NULL,0,NULL,12,NULL,NULL,'type',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(27,12,NULL,0,NULL,0,NULL,12,NULL,NULL,'order',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(28,12,NULL,0,NULL,0,NULL,12,NULL,NULL,'cfg',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',1,'2014-02-28 09:12:37',0,1,NULL,NULL,0),(29,12,NULL,0,NULL,0,NULL,12,NULL,NULL,'solr_column_name',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(30,12,NULL,0,NULL,0,NULL,12,NULL,NULL,'en',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(31,11,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',1,'2014-02-12 14:12:31',0,1,NULL,NULL,0),(32,11,NULL,0,NULL,0,NULL,12,NULL,NULL,'type',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(33,11,NULL,0,NULL,0,NULL,12,NULL,NULL,'visible',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(34,11,NULL,0,NULL,0,NULL,12,NULL,NULL,'iconCls',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(35,11,NULL,0,NULL,0,NULL,12,NULL,NULL,'cfg',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(36,11,NULL,0,NULL,0,NULL,12,NULL,NULL,'title_template',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(37,11,NULL,0,NULL,0,NULL,12,NULL,NULL,'info_template',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(38,11,NULL,0,NULL,0,NULL,12,NULL,NULL,'en',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 06:50:51',NULL,NULL,0,1,NULL,NULL,0),(39,8,NULL,0,NULL,0,NULL,12,NULL,NULL,'iconCls',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 07:09:11',1,'2015-07-21 05:05:08',0,1,NULL,NULL,0),(40,8,NULL,0,NULL,0,NULL,12,NULL,NULL,'visible',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 07:09:11',1,'2015-07-21 05:05:42',0,1,NULL,NULL,0),(41,8,NULL,0,NULL,0,NULL,12,NULL,NULL,'order',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 07:09:11',1,'2015-07-21 05:05:57',0,1,NULL,NULL,0),(42,8,NULL,0,NULL,0,NULL,12,NULL,NULL,'en',NULL,NULL,NULL,NULL,'{\"showIn\":\"top\"}',1,1,'2014-01-17 07:09:11',1,'2015-07-21 05:04:56',0,1,NULL,NULL,0),(43,8,NULL,0,NULL,0,NULL,12,NULL,NULL,'ru',NULL,NULL,NULL,NULL,'{\"showIn\":\"top\"}',1,1,'2014-01-17 07:09:11',NULL,NULL,0,1,1,'2015-05-21 05:20:51',1),(44,7,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 07:33:42',1,'2015-05-21 02:34:21',0,1,NULL,NULL,0),(45,7,NULL,0,NULL,0,NULL,12,NULL,NULL,'assigned',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 07:33:42',1,'2015-05-21 03:32:02',0,1,NULL,NULL,0),(46,7,NULL,0,NULL,0,NULL,12,NULL,NULL,'importance',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 07:33:42',1,'2015-05-21 05:26:19',0,1,NULL,NULL,0),(47,7,NULL,0,NULL,0,NULL,12,NULL,NULL,'description',NULL,NULL,NULL,NULL,NULL,1,1,'2014-01-17 07:33:42',1,'2015-05-21 03:32:34',0,1,NULL,NULL,0),(48,5,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,'null',1,1,'2014-01-22 07:10:27',NULL,NULL,0,1,NULL,NULL,0),(49,9,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,'null',1,1,'2014-02-12 14:15:03',NULL,NULL,0,1,NULL,NULL,0),(50,7,NULL,0,NULL,0,NULL,12,NULL,NULL,'due_date',NULL,NULL,NULL,NULL,'null',1,1,'2015-05-21 03:30:34',NULL,NULL,0,1,NULL,NULL,0),(51,7,NULL,0,NULL,0,NULL,12,NULL,NULL,'due_time',NULL,NULL,NULL,NULL,'null',1,1,'2015-05-21 03:31:04',NULL,NULL,0,1,NULL,NULL,0),(52,4,NULL,0,NULL,0,NULL,5,NULL,NULL,'task',NULL,NULL,NULL,NULL,'null',1,1,'2015-05-21 05:09:09',NULL,NULL,0,1,NULL,NULL,0),(53,52,NULL,0,NULL,0,NULL,5,NULL,NULL,'Importance',NULL,NULL,NULL,NULL,'null',1,1,'2015-05-21 05:09:33',NULL,NULL,0,1,NULL,NULL,0),(54,53,NULL,0,NULL,0,NULL,8,NULL,NULL,'Low',NULL,NULL,NULL,NULL,'null',1,1,'2015-05-21 05:23:09',NULL,NULL,0,1,NULL,NULL,0),(55,53,NULL,0,NULL,0,NULL,8,NULL,NULL,'Medium',NULL,NULL,NULL,NULL,'null',1,1,'2015-05-21 05:24:01',NULL,NULL,0,1,NULL,NULL,0),(56,53,NULL,0,NULL,0,NULL,8,NULL,NULL,'High',NULL,NULL,NULL,NULL,'null',1,1,'2015-05-21 05:24:41',NULL,NULL,0,1,NULL,NULL,0),(57,53,NULL,0,NULL,0,NULL,8,NULL,NULL,'CRITICAL',NULL,NULL,NULL,NULL,'null',1,1,'2015-05-21 05:25:12',NULL,NULL,0,1,NULL,NULL,0),(58,3,NULL,0,NULL,0,NULL,11,NULL,NULL,'shortcut',NULL,NULL,NULL,NULL,NULL,1,1,'2015-06-06 14:50:18',NULL,NULL,0,1,NULL,NULL,0),(59,3,NULL,0,NULL,0,NULL,5,NULL,NULL,'Menu',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(60,2,NULL,0,NULL,0,NULL,5,NULL,NULL,'Menus',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(61,59,NULL,0,NULL,0,NULL,11,NULL,NULL,'- Menu separator -',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(62,59,NULL,0,NULL,0,NULL,11,NULL,NULL,'Menu rule',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(63,62,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(64,62,NULL,0,NULL,0,NULL,12,NULL,NULL,'node_ids',NULL,NULL,NULL,NULL,'{\"multiValued\":true,\"editor\":\"form\",\"renderer\":\"listObjIcons\"}',1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(65,62,NULL,0,NULL,0,NULL,12,NULL,NULL,'template_ids',NULL,NULL,NULL,NULL,'{\"templates\":\"11\",\"editor\":\"form\",\"multiValued\":true,\"renderer\":\"listObjIcons\"}',1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(66,62,NULL,0,NULL,0,NULL,12,NULL,NULL,'user_group_ids',NULL,NULL,NULL,NULL,'{\"source\":\"usersgroups\",\"multiValued\":true}',1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(67,62,NULL,0,NULL,0,NULL,12,NULL,NULL,'menu',NULL,NULL,NULL,NULL,'{\"templates\":\"11\",\"multiValued\":true,\"editor\":\"form\",\"allowValueSort\":true,\"renderer\":\"listObjIcons\"}',1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(68,60,NULL,0,NULL,0,NULL,62,NULL,NULL,'Global Menu',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',1,'2016-06-29 04:03:06',0,1,NULL,NULL,0),(69,60,NULL,0,NULL,0,NULL,62,NULL,NULL,'System Templates',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(70,60,NULL,0,NULL,0,NULL,62,NULL,NULL,'System Templates SubMenu',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(71,60,NULL,0,NULL,0,NULL,62,NULL,NULL,'System Fields',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(72,60,NULL,0,NULL,0,NULL,62,NULL,NULL,'System Thesauri',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(73,60,NULL,0,NULL,0,NULL,62,NULL,NULL,'Create menu rules in this folder',NULL,NULL,NULL,NULL,NULL,1,1,'2015-07-24 00:45:11',NULL,NULL,0,1,NULL,NULL,0),(74,4,NULL,0,NULL,0,NULL,5,NULL,NULL,'link',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:15:55',NULL,NULL,0,1,NULL,NULL,0),(75,74,NULL,0,NULL,0,NULL,5,NULL,NULL,'Type',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:16:07',NULL,NULL,0,1,NULL,NULL,0),(76,75,NULL,0,NULL,0,NULL,8,NULL,NULL,'Article',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:17:46',NULL,NULL,0,1,NULL,NULL,0),(77,75,NULL,0,NULL,0,NULL,8,NULL,NULL,'Document',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:18:06',NULL,NULL,0,1,NULL,NULL,0),(78,75,NULL,0,NULL,0,NULL,8,NULL,NULL,'Image',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:18:24',NULL,NULL,0,1,NULL,NULL,0),(79,75,NULL,0,NULL,0,NULL,8,NULL,NULL,'Sound',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:18:42',NULL,NULL,0,1,NULL,NULL,0),(80,75,NULL,0,NULL,0,NULL,8,NULL,NULL,'Video',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:19:03',NULL,NULL,0,1,NULL,NULL,0),(81,75,NULL,0,NULL,0,NULL,8,NULL,NULL,'Website',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:19:25',NULL,NULL,0,1,NULL,NULL,0),(82,74,NULL,0,NULL,0,NULL,5,NULL,NULL,'Tags',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:19:42',NULL,NULL,0,1,NULL,NULL,0),(83,3,NULL,0,NULL,0,NULL,11,NULL,NULL,'link',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:23:21',NULL,NULL,0,1,NULL,NULL,0),(84,83,NULL,0,NULL,0,NULL,12,NULL,NULL,'type',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:25:21',NULL,NULL,0,1,NULL,NULL,0),(85,83,NULL,0,NULL,0,NULL,12,NULL,NULL,'url',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:25:58',NULL,NULL,0,1,NULL,NULL,0),(86,83,NULL,0,NULL,0,NULL,12,NULL,NULL,'description',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:26:29',NULL,NULL,0,1,NULL,NULL,0),(87,83,NULL,0,NULL,0,NULL,12,NULL,NULL,'tags',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-01 00:27:09',1,'2015-09-01 00:30:36',0,1,NULL,NULL,0),(88,3,NULL,0,NULL,0,NULL,5,NULL,NULL,'Built-in',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-02 06:45:52',NULL,NULL,0,1,NULL,NULL,0),(89,3,NULL,0,NULL,0,NULL,5,NULL,NULL,'Config',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(90,2,NULL,0,NULL,0,NULL,5,NULL,NULL,'Config',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(91,89,NULL,0,NULL,0,NULL,11,NULL,NULL,'Config int option',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(92,91,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(93,91,NULL,0,NULL,0,NULL,12,NULL,NULL,'value',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(94,89,NULL,0,NULL,0,NULL,11,NULL,NULL,'Config varchar option',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(95,94,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(96,94,NULL,0,NULL,0,NULL,12,NULL,NULL,'value',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(97,89,NULL,0,NULL,0,NULL,11,NULL,NULL,'Config text option',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(98,97,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(99,97,NULL,0,NULL,0,NULL,12,NULL,NULL,'value',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(100,89,NULL,0,NULL,0,NULL,11,NULL,NULL,'Config json option',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(101,100,NULL,0,NULL,0,NULL,12,NULL,NULL,'_title',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(102,100,NULL,0,NULL,0,NULL,12,NULL,NULL,'value',NULL,NULL,NULL,NULL,'{\"editor\":\"ace\",\"format\":\"json\",\"validator\":\"json\"}',1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(103,100,NULL,0,NULL,0,NULL,12,NULL,NULL,'order',NULL,NULL,NULL,NULL,'{\"indexed\":true}',1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(104,90,NULL,0,NULL,0,NULL,94,NULL,NULL,'project_name_en',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(105,90,NULL,0,NULL,0,NULL,97,NULL,NULL,'templateIcons',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(106,90,NULL,0,NULL,0,NULL,97,NULL,NULL,'folder_templates',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(107,90,NULL,0,NULL,0,NULL,91,NULL,NULL,'default_folder_template',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(108,90,NULL,0,NULL,0,NULL,91,NULL,NULL,'default_file_template',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(109,90,NULL,0,NULL,0,NULL,91,NULL,NULL,'default_task_template',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(110,90,NULL,0,NULL,0,NULL,94,NULL,NULL,'default_language',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(111,90,NULL,0,NULL,0,NULL,94,NULL,NULL,'languages',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(113,90,NULL,0,NULL,0,NULL,100,NULL,NULL,'treeNodes',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(114,113,NULL,0,NULL,0,NULL,100,NULL,NULL,'Tasks',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(115,113,NULL,0,NULL,0,NULL,100,NULL,NULL,'Dbnode',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(116,113,NULL,0,NULL,0,NULL,100,NULL,NULL,'RecycleBin',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',1,'2015-11-25 06:52:47',0,1,NULL,NULL,0),(117,60,NULL,0,NULL,0,NULL,62,NULL,NULL,'Create config options rule',NULL,NULL,NULL,NULL,NULL,1,1,'2015-09-09 05:58:27',NULL,NULL,0,1,NULL,NULL,0),(118,4,NULL,0,NULL,0,NULL,5,NULL,NULL,'case',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:15:01',NULL,NULL,0,1,NULL,NULL,0),(119,118,NULL,0,NULL,0,NULL,5,NULL,NULL,'contact role',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:16:34',NULL,NULL,0,1,NULL,NULL,0),(120,119,NULL,0,NULL,0,NULL,8,NULL,NULL,'Defendant',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:17:00',1,'2016-06-29 03:17:41',0,1,NULL,NULL,0),(121,119,NULL,0,NULL,0,NULL,8,NULL,NULL,'Government Official',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:19:21',NULL,NULL,0,1,NULL,NULL,0),(122,119,NULL,0,NULL,0,NULL,8,NULL,NULL,'Lawyer',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:20:14',NULL,NULL,0,1,NULL,NULL,0),(123,118,NULL,0,NULL,0,NULL,5,NULL,NULL,'status',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:20:34',NULL,NULL,0,1,NULL,NULL,0),(124,123,NULL,0,NULL,0,NULL,8,NULL,NULL,'New',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:21:08',NULL,NULL,0,1,NULL,NULL,0),(125,123,NULL,0,NULL,0,NULL,8,NULL,NULL,'Ongoing',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:21:46',NULL,NULL,0,1,NULL,NULL,0),(126,123,NULL,0,NULL,0,NULL,8,NULL,NULL,'On Hold',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:26:21',NULL,NULL,0,1,NULL,NULL,0),(127,123,NULL,0,NULL,0,NULL,8,NULL,NULL,'Archived',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:27:01',NULL,NULL,0,1,NULL,NULL,0),(128,123,NULL,0,NULL,0,NULL,8,NULL,NULL,'Closed',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:27:34',NULL,NULL,0,1,NULL,NULL,0),(129,118,NULL,0,NULL,0,NULL,5,NULL,NULL,'tags',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:28:02',NULL,NULL,0,1,NULL,NULL,0),(130,129,NULL,0,NULL,0,NULL,8,NULL,NULL,'Torture',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:28:36',NULL,NULL,0,1,NULL,NULL,0),(131,129,NULL,0,NULL,0,NULL,8,NULL,NULL,'Assault',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:29:06',NULL,NULL,0,1,NULL,NULL,0),(132,129,NULL,0,NULL,0,NULL,8,NULL,NULL,'Murder',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:29:44',NULL,NULL,0,1,NULL,NULL,0),(133,129,NULL,0,NULL,0,NULL,8,NULL,NULL,'Housing',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:30:13',NULL,NULL,0,1,NULL,NULL,0),(134,129,NULL,0,NULL,0,NULL,8,NULL,NULL,'Child',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:42:16',NULL,NULL,0,1,NULL,NULL,0),(135,129,NULL,0,NULL,0,NULL,8,NULL,NULL,'Arrest',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:42:42',NULL,NULL,0,1,NULL,NULL,0),(136,129,NULL,0,NULL,0,NULL,8,NULL,NULL,'Health',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:43:16',NULL,NULL,0,1,NULL,NULL,0),(137,118,NULL,0,NULL,0,NULL,5,NULL,NULL,'type',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:43:38',NULL,NULL,0,1,NULL,NULL,0),(138,137,NULL,0,NULL,0,NULL,8,NULL,NULL,'Civil',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:44:16',NULL,NULL,0,1,NULL,NULL,0),(139,137,NULL,0,NULL,0,NULL,8,NULL,NULL,'Constitutional',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:45:00',NULL,NULL,0,1,NULL,NULL,0),(140,137,NULL,0,NULL,0,NULL,8,NULL,NULL,'Human Rights',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:45:31',NULL,NULL,0,1,NULL,NULL,0),(141,137,NULL,0,NULL,0,NULL,8,NULL,NULL,'Criminal',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:46:03',NULL,NULL,0,1,NULL,NULL,0),(142,137,NULL,0,NULL,0,NULL,8,NULL,NULL,'Military',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:46:40',NULL,NULL,0,1,NULL,NULL,0),(143,3,NULL,0,NULL,0,NULL,11,NULL,NULL,'Case',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:49:29',NULL,NULL,0,1,NULL,NULL,0),(144,143,NULL,0,NULL,0,NULL,12,NULL,NULL,'contacts',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:50:39',NULL,NULL,0,1,NULL,NULL,0),(145,4,NULL,0,NULL,0,NULL,5,NULL,NULL,'Country',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:51:24',NULL,NULL,0,1,NULL,NULL,0),(146,145,NULL,0,NULL,0,NULL,8,NULL,NULL,'Indonesia',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:52:00',NULL,NULL,0,1,NULL,NULL,0),(147,143,NULL,0,NULL,0,NULL,12,NULL,NULL,'country',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:53:27',NULL,NULL,0,1,NULL,NULL,0),(148,143,NULL,0,NULL,0,NULL,12,NULL,NULL,'date',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:54:10',NULL,NULL,0,1,NULL,NULL,0),(149,143,NULL,0,NULL,0,NULL,12,NULL,NULL,'description',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:54:50',NULL,NULL,0,1,NULL,NULL,0),(150,143,NULL,0,NULL,0,NULL,12,NULL,NULL,'name',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:55:28',NULL,NULL,0,1,NULL,NULL,0),(151,143,NULL,0,NULL,0,NULL,12,NULL,NULL,'status',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:57:50',1,'2016-06-29 04:01:22',0,1,NULL,NULL,0),(152,143,NULL,0,NULL,0,NULL,12,NULL,NULL,'tags',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 03:59:11',1,'2016-06-29 04:00:51',0,1,NULL,NULL,0),(153,143,NULL,0,NULL,0,NULL,12,NULL,NULL,'type',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 04:00:20',NULL,NULL,0,1,NULL,NULL,0),(154,113,NULL,0,NULL,0,NULL,100,NULL,NULL,'CaseBy',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 04:04:53',1,'2016-06-29 04:05:30',0,1,NULL,NULL,0),(155,1,NULL,0,NULL,0,NULL,5,NULL,NULL,'Danang Kastowo',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 04:06:38',NULL,NULL,0,1,NULL,NULL,0),(156,155,NULL,0,NULL,0,NULL,143,NULL,NULL,'Vaksin Palsu\n',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 04:09:53',1,'2016-06-30 01:20:28',0,1,NULL,NULL,0),(157,156,NULL,0,NULL,0,NULL,6,NULL,NULL,'vaksin_palsu.doc','2016-06-29 04:14:18','2016-06-29 04:14:18',14848,NULL,NULL,1,3,'2016-06-29 04:14:18',3,'2016-06-29 05:11:24',0,3,NULL,NULL,0),(158,156,NULL,0,NULL,0,NULL,6,NULL,NULL,'vaksin_palsu2.docx','2016-06-29 04:14:20','2016-06-29 04:14:20',4339,NULL,NULL,1,1,'2016-06-29 04:14:20',1,'2016-06-29 04:14:20',0,1,NULL,NULL,0),(159,90,NULL,0,NULL,0,NULL,100,NULL,NULL,'facet_configs',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 04:24:38',NULL,NULL,0,1,NULL,NULL,0),(160,90,NULL,0,NULL,0,NULL,100,NULL,NULL,'object_type_plugins',NULL,NULL,NULL,NULL,NULL,1,1,'2016-06-29 04:26:08',NULL,NULL,0,1,NULL,NULL,0),(161,156,NULL,0,NULL,0,NULL,6,NULL,NULL,'vaksin_palsu.pdf','2016-06-29 04:43:19','2016-06-29 04:43:19',160608,NULL,NULL,1,1,'2016-06-29 04:43:19',1,'2016-06-29 04:43:19',0,1,NULL,NULL,0),(162,161,NULL,2,NULL,0,NULL,9,NULL,NULL,'wah mengerikan sekali',NULL,NULL,NULL,NULL,NULL,1,1,'2016-07-13 03:31:08',NULL,NULL,0,1,NULL,NULL,0),(163,1,NULL,0,NULL,0,NULL,5,NULL,NULL,'Chanthel User Guide',NULL,NULL,NULL,NULL,NULL,1,1,'2016-07-20 02:56:05',NULL,NULL,0,1,NULL,NULL,0),(164,163,NULL,0,NULL,0,NULL,6,NULL,NULL,'User Guide Chanthel.pdf','2016-07-20 02:57:37','2016-07-20 02:57:37',8932059,NULL,NULL,1,1,'2016-07-20 02:57:37',1,'2016-07-20 02:57:39',0,1,NULL,NULL,0);
/*!40000 ALTER TABLE `tree` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tree_bi` BEFORE INSERT ON `tree` FOR EACH ROW BEGIN
	DECLARE msg VARCHAR(255);
	
	if (new.id = new.pid) then
		set msg = concat('Error inserting cyclic reference: ', cast(new.id as char));
		signal sqlstate '45000' set message_text = msg;
	end if;
	
	
	set new.oid = coalesce(new.oid, new.cid);
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tree_ai` AFTER INSERT ON `tree` FOR EACH ROW BEGIN
	
	declare tmp_new_case_id
		,tmp_new_security_set_id bigint unsigned default null;
	DECLARE tmp_new_pids TEXT DEFAULT '';
	
	if( 	(new.template_id is not null)
		and (select id from templates where (id = new.template_id) and (`type` = 'case') )
	) THEN
		SET tmp_new_case_id = new.id;
	END IF;
	select
		ti.pids
		,coalesce(tmp_new_case_id, ti.case_id)
		,ti.security_set_id
	into
		tmp_new_pids
		,tmp_new_case_id
		,tmp_new_security_set_id
	from tree t
	left join tree_info ti on t.id = ti.id
	where t.id = new.pid;
	SET tmp_new_pids = TRIM( ',' FROM CONCAT( tmp_new_pids, ',', new.id) );
	if(new.inherit_acl = 0) then
		set tmp_new_security_set_id = f_get_security_set_id(new.id);
	END IF;
	insert into tree_info (
		id
		,pids
		,case_id
		,security_set_id
	)
	values (
		new.id
		,tmp_new_pids
		,tmp_new_case_id
		,tmp_new_security_set_id
	);
	
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tree_au` AFTER UPDATE ON `tree` FOR EACH ROW BEGIN
	DECLARE tmp_old_pids
		,tmp_new_pids TEXT DEFAULT '';

	DECLARE tmp_old_case_id
		,tmp_new_case_id
		,tmp_old_security_set_id
		,tmp_new_security_set_id BIGINT UNSIGNED DEFAULT NULL;
	DECLARE tmp_old_security_set
		,tmp_new_security_set VARCHAR(9999) DEFAULT '';
	DECLARE tmp_old_pids_length
		,tmp_old_security_set_length
		,tmp_acl_count INT UNSIGNED DEFAULT 0;

	
	IF( (COALESCE(old.pid, 0) <> COALESCE(new.pid, 0) )
	    OR ( old.inherit_acl <> new.inherit_acl )
	  )THEN
		
		SELECT
			ti.pids 
			,ti.case_id 
			,ti.acl_count 
			,ti.security_set_id 
			,ts.set 
		INTO
			tmp_old_pids
			,tmp_old_case_id
			,tmp_acl_count
			,tmp_old_security_set_id
			,tmp_old_security_set
		FROM tree_info ti
		LEFT JOIN tree_acl_security_sets ts ON ti.security_set_id = ts.id
		WHERE ti.id = new.id;

		
		IF(tmp_old_case_id = old.id) THEN
			SET tmp_new_case_id = new.id;
		END IF;

		
		if(new.pid is null) THEN
			SET tmp_new_pids = new.id;
			
			SET tmp_new_security_set_id = null;
			set tmp_new_security_set = '';
		ELSE
			SELECT
				ti.pids
				,COALESCE(tmp_new_case_id, ti.case_id)
				,ti.security_set_id
				,ts.set
			INTO
				tmp_new_pids
				,tmp_new_case_id
				,tmp_new_security_set_id
				,tmp_new_security_set
			FROM tree t
			LEFT JOIN tree_info ti ON t.id = ti.id
			LEFT JOIN tree_acl_security_sets ts ON ti.security_set_id = ts.id
			WHERE t.id = new.pid;

			SET tmp_new_pids = TRIM( ',' FROM CONCAT( tmp_new_pids, ',', new.id) );
		END IF;
		
		
		IF(tmp_acl_count > 0) THEN
			
			IF(new.inherit_acl = 0) THEN
				SET tmp_new_security_set = new.id;
			else
				SET tmp_new_security_set = TRIM( ',' FROM CONCAT(tmp_new_security_set, ',', new.id ) );
			END IF;

			UPDATE tree_acl_security_sets
			SET `set` = tmp_new_security_set
				,updated = 1
			WHERE id = tmp_old_security_set_id;
			SET tmp_new_security_set_id = tmp_old_security_set_id;
		ELSE
			
			IF(new.inherit_acl = 0) THEN
				SET tmp_new_security_set_id = NULL;
				SET tmp_new_security_set = '';
			END IF;
		END IF;
		
		SET tmp_old_pids_length = LENGTH( tmp_old_pids ) +1;
		SET tmp_old_security_set_length = LENGTH( tmp_old_security_set ) +1;
		
		UPDATE tree_info
		SET	pids = tmp_new_pids
			,case_id = tmp_new_case_id
			,security_set_id = tmp_new_security_set_id
		WHERE id = new.id;
		
		CREATE TEMPORARY TABLE IF NOT EXISTS `tmp_tree_info_pids`(
			`id` BIGINT UNSIGNED NOT NULL,
			`inherit_acl` TINYINT(1) NOT NULL DEFAULT '1',
			PRIMARY KEY (`id`)
		);
		CREATE TEMPORARY TABLE IF NOT EXISTS `tmp_tree_info_childs`(
			`id` BIGINT UNSIGNED NOT NULL,
			`inherit_acl` TINYINT(1) NOT NULL DEFAULT '1',
			PRIMARY KEY (`id`)
		);
		CREATE TEMPORARY TABLE IF NOT EXISTS `tmp_tree_info_security_sets`(
			`id` BIGINT UNSIGNED NOT NULL,
			`new_id` BIGINT UNSIGNED NULL,
			`set` VARCHAR(9999),
			PRIMARY KEY (`id`),
			INDEX `IDX_tmp_tree_info_security_sets__set` (`set`),
			INDEX `IDX_tmp_tree_info_security_sets__new_id` (`new_id`)
		);
		DELETE FROM tmp_tree_info_pids;
		DELETE FROM tmp_tree_info_childs;
		DELETE FROM tmp_tree_info_security_sets;
		INSERT INTO tmp_tree_info_childs (id, inherit_acl)
			SELECT id, inherit_acl
			FROM tree
			WHERE pid = new.id;
		WHILE( ROW_COUNT() > 0 )DO
			UPDATE
				tmp_tree_info_childs
				,tree_info
			SET
				tree_info.pids = CONCAT(tmp_new_pids, SUBSTRING(tree_info.pids, tmp_old_pids_length))
				,tree_info.case_id = CASE WHEN (tree_info.case_id = tmp_old_case_id) THEN tmp_new_case_id ELSE COALESCE(tree_info.case_id, tmp_new_case_id) END
				,tree_info.security_set_id =
					CASE
					WHEN (tmp_tree_info_childs.inherit_acl = 1)
					     AND ( coalesce(tree_info.security_set_id, 0) = coalesce(tmp_old_security_set_id, 0) )
						THEN tmp_new_security_set_id
					ELSE tree_info.security_set_id
					END
			WHERE tmp_tree_info_childs.id = tree_info.id;
			DELETE FROM tmp_tree_info_pids;
			INSERT INTO tmp_tree_info_pids
				SELECT id, inherit_acl
				FROM tmp_tree_info_childs;
			INSERT INTO tmp_tree_info_security_sets (id)
				SELECT DISTINCT ti.security_set_id
				FROM tmp_tree_info_childs c
				JOIN tree_info ti ON c.id = ti.id
				WHERE ti.security_set_id IS NOT NULL
					and c.inherit_acl = 1
			ON DUPLICATE KEY UPDATE id = ti.security_set_id;
			DELETE FROM tmp_tree_info_childs;
			INSERT INTO tmp_tree_info_childs (id, inherit_acl)
				SELECT
					t.id,
					case when ( (t.inherit_acl = 1) and (ti.inherit_acl = 1) ) then 1 else 0 END
				FROM tmp_tree_info_pids  ti
				JOIN tree t
					ON ti.id = t.pid;
		END WHILE;
		
		UPDATE tmp_tree_info_security_sets
			,tree_acl_security_sets
			SET tree_acl_security_sets.`set` = TRIM( ',' FROM CONCAT(tmp_new_security_set, SUBSTRING(tree_acl_security_sets.set, tmp_old_security_set_length)) )
				,tree_acl_security_sets.updated = 1
		WHERE tmp_tree_info_security_sets.id <> coalesce(tmp_new_security_set_id, 0)
			AND tmp_tree_info_security_sets.id = tree_acl_security_sets.id
			AND tree_acl_security_sets.set LIKE CONCAT(tmp_old_security_set,',%');
		
		if(tmp_old_security_set_id <> coalesce(tmp_new_security_set_id, 0)) THEN
			if( (select count(*) from tree_info where security_set_id = tmp_old_security_set_id) = 0) THEN
				delete from `tree_acl_security_sets` where id = tmp_old_security_set_id;
			END IF;
		END IF;
	END IF;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tree_acl`
--

DROP TABLE IF EXISTS `tree_acl`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tree_acl` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `node_id` bigint(20) unsigned NOT NULL,
  `user_group_id` int(10) unsigned NOT NULL,
  `allow` int(16) NOT NULL DEFAULT '0',
  `deny` int(16) NOT NULL DEFAULT '0',
  `cid` int(10) unsigned DEFAULT NULL,
  `cdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `uid` int(10) unsigned DEFAULT NULL,
  `udate` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `FK_tree_acl__node_id__user_group_id` (`node_id`,`user_group_id`),
  KEY `FK_tree_acl__user_group_id` (`user_group_id`),
  CONSTRAINT `FK_tree_acl__node_id` FOREIGN KEY (`node_id`) REFERENCES `tree` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_tree_acl__user_group_id` FOREIGN KEY (`user_group_id`) REFERENCES `users_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tree_acl`
--

LOCK TABLES `tree_acl` WRITE;
/*!40000 ALTER TABLE `tree_acl` DISABLE KEYS */;
INSERT INTO `tree_acl` VALUES (3,163,2,2175,0,1,'2016-07-20 02:59:22',1,'2016-07-20 02:59:28');
/*!40000 ALTER TABLE `tree_acl` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tree_acl_ai` AFTER INSERT ON `tree_acl` FOR EACH ROW BEGIN
	declare tmp_acl_count int unsigned default 0;
	DECLARE tmp_new_security_set_id
		,tmp_old_security_set_id BIGINT UNSIGNED default null;
	DECLARE tmp_old_security_set, msg
		,tmp_new_security_set varchar(9999) default '';
	select ti.acl_count + 1
		,ti.security_set_id
		,coalesce( ts.set, '')
	into tmp_acl_count
		,tmp_old_security_set_id
		,tmp_old_security_set
	from tree_info ti
	left join `tree_acl_security_sets` ts on ti.security_set_id = ts.id
	where ti.id = new.node_id;

	
	IF((tmp_acl_count > 1) OR
	  (tmp_old_security_set = new.node_id) OR
	  (CONCAT(',', tmp_old_security_set) LIKE CONCAT('%,', new.node_id))
	 ) THEN
		UPDATE tree_info
		SET acl_count = tmp_acl_count
		WHERE id = new.node_id;
		
		update `tree_acl_security_sets`
		set updated = 1
		where id = tmp_old_security_set_id;
		
		UPDATE `tree_acl_security_sets`
		SET updated = 1
		WHERE `set` like concat(tmp_old_security_set, ',%');
	ELSE
		
		set tmp_new_security_set = trim( ',' from concat(tmp_old_security_set, ',', new.node_id) );
		insert into tree_acl_security_sets (`set`)
		values(tmp_new_security_set)
		on duplicate key
		update id = last_insert_id(id);
		set tmp_new_security_set_id = last_insert_id();
		

		UPDATE tree_info
		SET 	acl_count = tmp_acl_count
			,security_set_id = tmp_new_security_set_id
		WHERE id = new.node_id;
		
		CALL p_update_child_security_sets(new.node_id, tmp_old_security_set_id, tmp_new_security_set_id);
	END IF;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tree_acl_au` AFTER UPDATE ON `tree_acl` FOR EACH ROW BEGIN
	DECLARE tmp_security_set_id BIGINT UNSIGNED;
	DECLARE tmp_security_set VARCHAR(9999) DEFAULT '';
	
	SELECT ti.security_set_id
		,ts.set
	INTO tmp_security_set_id
		,tmp_security_set
	FROM tree_info ti
	JOIN `tree_acl_security_sets` ts ON ti.security_set_id = ts.id
	WHERE ti.id = new.node_id;
	
	UPDATE `tree_acl_security_sets`
	SET updated = 1
	WHERE id = tmp_security_set_id;
	
	UPDATE `tree_acl_security_sets`
	SET updated = 1
	WHERE `set` LIKE CONCAT(tmp_security_set, ',%');
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tree_acl_ad` AFTER DELETE ON `tree_acl` FOR EACH ROW BEGIN
	DECLARE tmp_acl_count
		,tmp_length INT DEFAULT 0;
	DECLARE tmp_old_security_set_id
		,tmp_new_security_set_id BIGINT UNSIGNED default null;
	DECLARE tmp_old_security_set
		,tmp_new_security_set VARCHAR(9999) DEFAULT '';
	declare tmp_inherit_acl  tinyint(1) default 1;
	
	
	SELECT  case when (ti.acl_count >0)
			THEN ti.acl_count - 1
			ELSE 0
		END
		,ti.security_set_id
		,ts.set
	INTO tmp_acl_count
		,tmp_old_security_set_id
		,tmp_old_security_set
	FROM tree_info ti
	JOIN `tree_acl_security_sets` ts ON ti.security_set_id = ts.id
	WHERE ti.id = old.node_id;
	
	IF(tmp_acl_count > 0) THEN
		UPDATE tree_info
		SET acl_count = tmp_acl_count
		WHERE id = old.node_id;
		
		UPDATE `tree_acl_security_sets`
		SET updated = 1
		WHERE id = tmp_old_security_set_id;
		
		UPDATE `tree_acl_security_sets`
		SET updated = 1
		WHERE `set` LIKE CONCAT(tmp_old_security_set, ',%');
	ELSE
		
		select inherit_acl
		into tmp_inherit_acl
		from tree
		where id = old.node_id;
		
		if(tmp_inherit_acl = 1) THEN
			
			set tmp_length = length( SUBSTRING_INDEX( tmp_old_security_set, ',', -1 ) );
			
			set tmp_length = LENGTH( tmp_old_security_set) - tmp_length - 1;
			if(tmp_length < 0) Then
				Set tmp_length = 0;
			END IF;
			SET tmp_new_security_set = substring( tmp_old_security_set, 1,  tmp_length );
			
			if(LENGTH(tmp_new_security_set) > 0) THEN
				select id
				into tmp_new_security_set_id
				from tree_acl_security_sets
				where `set` = tmp_new_security_set;
			else
				set tmp_new_security_set_id = null;
			END IF;
		END IF;
		
		UPDATE tree_info
		SET acl_count = tmp_acl_count
			,security_set_id = tmp_new_security_set_id
		WHERE id = old.node_id;
		
		CALL p_update_child_security_sets(old.node_id, tmp_old_security_set_id, tmp_new_security_set_id);
		IF( COALESCE(tmp_new_security_set_id, 0) <> tmp_old_security_set_id) THEN
			DELETE FROM tree_acl_security_sets
			WHERE id = tmp_old_security_set_id;
		END IF;
	END IF;
  END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tree_acl_security_sets`
--

DROP TABLE IF EXISTS `tree_acl_security_sets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tree_acl_security_sets` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `set` varchar(9999) NOT NULL,
  `md5` varchar(32) NOT NULL DEFAULT '-',
  `updated` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNQ_tree_acl_security_sets__md5` (`md5`),
  KEY `IDX_tree_acl_security_sets__set` (`set`(100))
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tree_acl_security_sets`
--

LOCK TABLES `tree_acl_security_sets` WRITE;
/*!40000 ALTER TABLE `tree_acl_security_sets` DISABLE KEYS */;
INSERT INTO `tree_acl_security_sets` VALUES (2,'163','0777d5c17d4066b82ab86dff8a46af6f',0);
/*!40000 ALTER TABLE `tree_acl_security_sets` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tree_acl_security_sets_bi` BEFORE INSERT ON `tree_acl_security_sets` FOR EACH ROW BEGIN
	set new.md5 = md5(new.set);
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tree_acl_security_sets_bu` BEFORE UPDATE ON `tree_acl_security_sets` FOR EACH ROW BEGIN
	set new.md5 = md5(new.set);
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tree_acl_security_sets_result`
--

DROP TABLE IF EXISTS `tree_acl_security_sets_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tree_acl_security_sets_result` (
  `security_set_id` bigint(20) unsigned NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  `bit0` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0=deny, 1=allow',
  `bit1` tinyint(1) NOT NULL DEFAULT '0',
  `bit2` tinyint(1) DEFAULT '0',
  `bit3` tinyint(1) DEFAULT '0',
  `bit4` tinyint(1) DEFAULT '0',
  `bit5` tinyint(1) DEFAULT '0',
  `bit6` tinyint(1) DEFAULT '0',
  `bit7` tinyint(1) DEFAULT '0',
  `bit8` tinyint(1) DEFAULT '0',
  `bit9` tinyint(1) DEFAULT '0',
  `bit10` tinyint(1) DEFAULT '0',
  `bit11` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`security_set_id`,`user_id`),
  KEY `IDX_tree_acl_security_sets_result__user_id` (`user_id`),
  CONSTRAINT `FK_tree_acl_security_sets_result__security_set_id` FOREIGN KEY (`security_set_id`) REFERENCES `tree_acl_security_sets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_tree_acl_security_sets_result__user_id` FOREIGN KEY (`user_id`) REFERENCES `users_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tree_acl_security_sets_result`
--

LOCK TABLES `tree_acl_security_sets_result` WRITE;
/*!40000 ALTER TABLE `tree_acl_security_sets_result` DISABLE KEYS */;
INSERT INTO `tree_acl_security_sets_result` VALUES (2,2,1,1,1,1,1,1,1,0,0,0,0,1);
/*!40000 ALTER TABLE `tree_acl_security_sets_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tree_info`
--

DROP TABLE IF EXISTS `tree_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tree_info` (
  `id` bigint(20) unsigned NOT NULL,
  `pids` text NOT NULL COMMENT 'comma separated parent ids',
  `path` text COMMENT 'slash separated parent names',
  `case_id` bigint(20) unsigned DEFAULT NULL,
  `acl_count` int(10) unsigned NOT NULL DEFAULT '0' COMMENT 'count of security rules associated with this node in the tree',
  `security_set_id` bigint(20) unsigned DEFAULT NULL,
  `updated` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `tree_info__case_id` (`case_id`),
  KEY `tree_info__security_set_id` (`security_set_id`),
  KEY `tree_info__updated` (`updated`),
  KEY `tree_info_pids` (`pids`(200)),
  CONSTRAINT `tree_info__case_id` FOREIGN KEY (`case_id`) REFERENCES `tree` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `tree_info__id` FOREIGN KEY (`id`) REFERENCES `tree` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tree_info__security_set_id` FOREIGN KEY (`security_set_id`) REFERENCES `tree_acl_security_sets` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tree_info`
--

LOCK TABLES `tree_info` WRITE;
/*!40000 ALTER TABLE `tree_info` DISABLE KEYS */;
INSERT INTO `tree_info` VALUES (1,'1','',NULL,0,NULL,0),(2,'1,2','/',NULL,0,NULL,0),(3,'1,2,3','/System/',NULL,0,NULL,0),(4,'1,2,4','/System/',NULL,0,NULL,0),(5,'1,2,3,5','/System/Templates/',NULL,0,NULL,0),(6,'1,2,3,6','/System/Templates/',NULL,0,NULL,0),(7,'1,2,3,7','/System/Templates/',NULL,0,NULL,0),(8,'1,2,3,8','/System/Templates/',NULL,0,NULL,0),(9,'1,2,3,9','/System/Templates/',NULL,0,NULL,0),(10,'1,2,3,10','/System/Templates/',NULL,0,NULL,0),(11,'1,2,3,88,11','/System/Templates/',NULL,0,NULL,0),(12,'1,2,3,88,12','/System/Templates/',NULL,0,NULL,0),(13,'1,2,3,10,13','/System/Templates/User/',NULL,0,NULL,0),(14,'1,2,3,10,14','/System/Templates/User/',NULL,0,NULL,0),(15,'1,2,3,10,15','/System/Templates/User/',NULL,0,NULL,0),(16,'1,2,3,10,16','/System/Templates/User/',NULL,0,NULL,0),(17,'1,2,3,10,17','/System/Templates/User/',NULL,0,NULL,0),(18,'1,2,3,10,18','/System/Templates/User/',NULL,0,NULL,0),(19,'1,2,3,10,19','/System/Templates/User/',NULL,0,NULL,0),(20,'1,2,3,10,20','/System/Templates/User/',NULL,0,NULL,0),(21,'1,2,3,10,21','/System/Templates/User/',NULL,0,NULL,0),(22,'1,2,3,10,22','/System/Templates/User/',NULL,0,NULL,0),(23,'1,2,3,10,23','/System/Templates/User/',NULL,0,NULL,0),(24,'1,2,3,6,24','/System/Templates/file/',NULL,0,NULL,0),(25,'1,2,3,88,12,25','/System/Templates/Fields template/',NULL,0,NULL,0),(26,'1,2,3,88,12,26','/System/Templates/Fields template/',NULL,0,NULL,0),(27,'1,2,3,88,12,27','/System/Templates/Fields template/',NULL,0,NULL,0),(28,'1,2,3,88,12,28','/System/Templates/Fields template/',NULL,0,NULL,0),(29,'1,2,3,88,12,29','/System/Templates/Fields template/',NULL,0,NULL,0),(30,'1,2,3,88,12,30','/System/Templates/Fields template/',NULL,0,NULL,0),(31,'1,2,3,88,11,31','/System/Templates/Templates template/',NULL,0,NULL,0),(32,'1,2,3,88,11,32','/System/Templates/Templates template/',NULL,0,NULL,0),(33,'1,2,3,88,11,33','/System/Templates/Templates template/',NULL,0,NULL,0),(34,'1,2,3,88,11,34','/System/Templates/Templates template/',NULL,0,NULL,0),(35,'1,2,3,88,11,35','/System/Templates/Templates template/',NULL,0,NULL,0),(36,'1,2,3,88,11,36','/System/Templates/Templates template/',NULL,0,NULL,0),(37,'1,2,3,88,11,37','/System/Templates/Templates template/',NULL,0,NULL,0),(38,'1,2,3,88,11,38','/System/Templates/Templates template/',NULL,0,NULL,0),(39,'1,2,3,8,39','/System/Templates/Thesauri Item/',NULL,0,NULL,0),(40,'1,2,3,8,40','/System/Templates/Thesauri Item/',NULL,0,NULL,0),(41,'1,2,3,8,41','/System/Templates/Thesauri Item/',NULL,0,NULL,0),(42,'1,2,3,8,42','/System/Templates/Thesauri Item/',NULL,0,NULL,0),(43,'1,2,3,8,43','/System/Templates/Thesauri Item/',NULL,0,NULL,0),(44,'1,2,3,7,44','/System/Templates/task/',NULL,0,NULL,0),(45,'1,2,3,7,45','/System/Templates/task/',NULL,0,NULL,0),(46,'1,2,3,7,46','/System/Templates/task/',NULL,0,NULL,0),(47,'1,2,3,7,47','/System/Templates/task/',NULL,0,NULL,0),(48,'1,2,3,5,48','/System/Templates/folder/',NULL,0,NULL,0),(49,'1,2,3,9,49','/System/Templates/Comment/',NULL,0,NULL,0),(50,'1,2,3,7,50','/System/Templates/task/',NULL,0,NULL,0),(51,'1,2,3,7,51','/System/Templates/task/',NULL,0,NULL,0),(52,'1,2,4,52',NULL,NULL,0,NULL,0),(53,'1,2,4,52,53',NULL,NULL,0,NULL,0),(54,'1,2,4,52,53,54',NULL,NULL,0,NULL,0),(55,'1,2,4,52,53,55',NULL,NULL,0,NULL,0),(56,'1,2,4,52,53,56',NULL,NULL,0,NULL,0),(57,'1,2,4,52,53,57',NULL,NULL,0,NULL,0),(58,'1,2,3,58',NULL,NULL,0,NULL,0),(59,'1,2,3,59',NULL,NULL,0,NULL,0),(60,'1,2,60',NULL,NULL,0,NULL,0),(61,'1,2,3,59,61',NULL,NULL,0,NULL,0),(62,'1,2,3,59,62',NULL,NULL,0,NULL,0),(63,'1,2,3,59,62,63',NULL,NULL,0,NULL,0),(64,'1,2,3,59,62,64',NULL,NULL,0,NULL,0),(65,'1,2,3,59,62,65',NULL,NULL,0,NULL,0),(66,'1,2,3,59,62,66',NULL,NULL,0,NULL,0),(67,'1,2,3,59,62,67',NULL,NULL,0,NULL,0),(68,'1,2,60,68',NULL,NULL,0,NULL,0),(69,'1,2,60,69',NULL,NULL,0,NULL,0),(70,'1,2,60,70',NULL,NULL,0,NULL,0),(71,'1,2,60,71',NULL,NULL,0,NULL,0),(72,'1,2,60,72',NULL,NULL,0,NULL,0),(73,'1,2,60,73',NULL,NULL,0,NULL,0),(74,'1,2,4,74',NULL,NULL,0,NULL,0),(75,'1,2,4,74,75',NULL,NULL,0,NULL,0),(76,'1,2,4,74,75,76',NULL,NULL,0,NULL,0),(77,'1,2,4,74,75,77',NULL,NULL,0,NULL,0),(78,'1,2,4,74,75,78',NULL,NULL,0,NULL,0),(79,'1,2,4,74,75,79',NULL,NULL,0,NULL,0),(80,'1,2,4,74,75,80',NULL,NULL,0,NULL,0),(81,'1,2,4,74,75,81',NULL,NULL,0,NULL,0),(82,'1,2,4,74,82',NULL,NULL,0,NULL,0),(83,'1,2,3,83',NULL,NULL,0,NULL,0),(84,'1,2,3,83,84',NULL,NULL,0,NULL,0),(85,'1,2,3,83,85',NULL,NULL,0,NULL,0),(86,'1,2,3,83,86',NULL,NULL,0,NULL,0),(87,'1,2,3,83,87',NULL,NULL,0,NULL,0),(88,'1,2,3,88',NULL,NULL,0,NULL,0),(89,'1,2,3,89',NULL,NULL,0,NULL,0),(90,'1,2,90',NULL,NULL,0,NULL,0),(91,'1,2,3,89,91',NULL,NULL,0,NULL,0),(92,'1,2,3,89,91,92',NULL,NULL,0,NULL,0),(93,'1,2,3,89,91,93',NULL,NULL,0,NULL,0),(94,'1,2,3,89,94',NULL,NULL,0,NULL,0),(95,'1,2,3,89,94,95',NULL,NULL,0,NULL,0),(96,'1,2,3,89,94,96',NULL,NULL,0,NULL,0),(97,'1,2,3,89,97',NULL,NULL,0,NULL,0),(98,'1,2,3,89,97,98',NULL,NULL,0,NULL,0),(99,'1,2,3,89,97,99',NULL,NULL,0,NULL,0),(100,'1,2,3,89,100',NULL,NULL,0,NULL,0),(101,'1,2,3,89,100,101',NULL,NULL,0,NULL,0),(102,'1,2,3,89,100,102',NULL,NULL,0,NULL,0),(103,'1,2,3,89,100,103',NULL,NULL,0,NULL,0),(104,'1,2,90,104',NULL,NULL,0,NULL,0),(105,'1,2,90,105',NULL,NULL,0,NULL,0),(106,'1,2,90,106',NULL,NULL,0,NULL,0),(107,'1,2,90,107',NULL,NULL,0,NULL,0),(108,'1,2,90,108',NULL,NULL,0,NULL,0),(109,'1,2,90,109',NULL,NULL,0,NULL,0),(110,'1,2,90,110',NULL,NULL,0,NULL,0),(111,'1,2,90,111',NULL,NULL,0,NULL,0),(113,'1,2,90,113',NULL,NULL,0,NULL,0),(114,'1,2,90,113,114',NULL,NULL,0,NULL,0),(115,'1,2,90,113,115',NULL,NULL,0,NULL,0),(116,'1,2,90,113,116',NULL,NULL,0,NULL,0),(117,'1,2,60,117',NULL,NULL,0,NULL,0),(118,'1,2,4,118',NULL,NULL,0,NULL,0),(119,'1,2,4,118,119',NULL,NULL,0,NULL,0),(120,'1,2,4,118,119,120',NULL,NULL,0,NULL,0),(121,'1,2,4,118,119,121',NULL,NULL,0,NULL,0),(122,'1,2,4,118,119,122',NULL,NULL,0,NULL,0),(123,'1,2,4,118,123',NULL,NULL,0,NULL,0),(124,'1,2,4,118,123,124',NULL,NULL,0,NULL,0),(125,'1,2,4,118,123,125',NULL,NULL,0,NULL,0),(126,'1,2,4,118,123,126',NULL,NULL,0,NULL,0),(127,'1,2,4,118,123,127',NULL,NULL,0,NULL,0),(128,'1,2,4,118,123,128',NULL,NULL,0,NULL,0),(129,'1,2,4,118,129',NULL,NULL,0,NULL,0),(130,'1,2,4,118,129,130',NULL,NULL,0,NULL,0),(131,'1,2,4,118,129,131',NULL,NULL,0,NULL,0),(132,'1,2,4,118,129,132',NULL,NULL,0,NULL,0),(133,'1,2,4,118,129,133',NULL,NULL,0,NULL,0),(134,'1,2,4,118,129,134',NULL,NULL,0,NULL,0),(135,'1,2,4,118,129,135',NULL,NULL,0,NULL,0),(136,'1,2,4,118,129,136',NULL,NULL,0,NULL,0),(137,'1,2,4,118,137',NULL,NULL,0,NULL,0),(138,'1,2,4,118,137,138',NULL,NULL,0,NULL,0),(139,'1,2,4,118,137,139',NULL,NULL,0,NULL,0),(140,'1,2,4,118,137,140',NULL,NULL,0,NULL,0),(141,'1,2,4,118,137,141',NULL,NULL,0,NULL,0),(142,'1,2,4,118,137,142',NULL,NULL,0,NULL,0),(143,'1,2,3,143',NULL,NULL,0,NULL,0),(144,'1,2,3,143,144',NULL,NULL,0,NULL,0),(145,'1,2,4,145',NULL,NULL,0,NULL,0),(146,'1,2,4,145,146',NULL,NULL,0,NULL,0),(147,'1,2,3,143,147',NULL,NULL,0,NULL,0),(148,'1,2,3,143,148',NULL,NULL,0,NULL,0),(149,'1,2,3,143,149',NULL,NULL,0,NULL,0),(150,'1,2,3,143,150',NULL,NULL,0,NULL,0),(151,'1,2,3,143,151',NULL,NULL,0,NULL,0),(152,'1,2,3,143,152',NULL,NULL,0,NULL,0),(153,'1,2,3,143,153',NULL,NULL,0,NULL,0),(154,'1,2,90,113,154',NULL,NULL,0,NULL,0),(155,'1,155',NULL,NULL,0,NULL,0),(156,'1,155,156',NULL,156,0,NULL,0),(157,'1,155,156,157',NULL,156,0,NULL,0),(158,'1,155,156,158',NULL,156,0,NULL,0),(159,'1,2,90,159',NULL,NULL,0,NULL,0),(160,'1,2,90,160',NULL,NULL,0,NULL,0),(161,'1,155,156,161',NULL,156,0,NULL,0),(162,'1,155,156,161,162',NULL,156,0,NULL,0),(163,'1,163',NULL,NULL,1,2,0),(164,'1,163,164',NULL,NULL,0,2,0);
/*!40000 ALTER TABLE `tree_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tree_info_bu` BEFORE UPDATE ON `tree_info` FOR EACH ROW BEGIN
	if(
		(old.pids <> new.pids)
		OR(old.path <> new.path)
		OR ( coalesce(old.case_id, 0) <> coalesce(new.case_id, 0) )
		OR (old.acl_count <> new.acl_count)
		OR ( COALESCE(old.security_set_id, 0) <> COALESCE(new.security_set_id, 0) )
	)
	THEN
		SET new.updated = 1;
	END IF;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tree_user_config`
--

DROP TABLE IF EXISTS `tree_user_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tree_user_config` (
  `guid` varchar(50) NOT NULL COMMENT 'id of the tree node or vitual node',
  `user_id` int(10) unsigned NOT NULL,
  `cfg` text,
  PRIMARY KEY (`guid`,`user_id`),
  KEY `tree_user_config__user_id` (`user_id`),
  CONSTRAINT `tree_user_config__user_id` FOREIGN KEY (`user_id`) REFERENCES `users_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tree_user_config`
--

LOCK TABLES `tree_user_config` WRITE;
/*!40000 ALTER TABLE `tree_user_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `tree_user_config` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_groups`
--

DROP TABLE IF EXISTS `users_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_groups` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `type` tinyint(3) unsigned NOT NULL DEFAULT '2' COMMENT '1 - group, 2 - user',
  `system` tinyint(3) unsigned NOT NULL DEFAULT '0' COMMENT '1 - is a system group that cannot be deleted from ui',
  `name` varchar(50) NOT NULL,
  `first_name` varchar(100) DEFAULT NULL,
  `last_name` varchar(100) DEFAULT NULL,
  `l1` varchar(150) DEFAULT NULL,
  `l2` varchar(150) DEFAULT NULL,
  `l3` varchar(150) DEFAULT NULL,
  `l4` varchar(150) DEFAULT NULL,
  `sex` char(1) DEFAULT NULL COMMENT 'extracted gender from users data',
  `email` varchar(150) DEFAULT NULL COMMENT 'primary user email',
  `photo` varchar(250) DEFAULT NULL COMMENT 'filename of uploated photo file',
  `password` varchar(255) DEFAULT NULL,
  `password_change` date DEFAULT NULL,
  `recover_hash` varchar(100) DEFAULT NULL,
  `language_id` smallint(6) unsigned NOT NULL DEFAULT '1' COMMENT 'extracted language index from users data',
  `cfg` text,
  `data` mediumtext,
  `last_login` timestamp NULL DEFAULT NULL COMMENT 'should be moved to an auth log table for security enhancement',
  `login_successful` tinyint(1) DEFAULT NULL COMMENT 'should be moved to an auth log table for security enhancement',
  `login_from_ip` varchar(40) DEFAULT NULL COMMENT 'should be moved to an auth log table for security enhancement',
  `last_logout` timestamp NULL DEFAULT NULL COMMENT 'should be moved to an auth log table for security enhancement',
  `last_action_time` timestamp NULL DEFAULT NULL,
  `enabled` tinyint(1) unsigned DEFAULT '1',
  `cid` int(11) unsigned DEFAULT NULL COMMENT 'creator id',
  `cdate` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'creation timestamp',
  `uid` int(11) unsigned DEFAULT NULL COMMENT 'updater id',
  `udate` timestamp NULL DEFAULT '0000-00-00 00:00:00' COMMENT 'updated timestamp',
  `did` int(11) unsigned DEFAULT NULL COMMENT 'deleter id',
  `ddate` timestamp NULL DEFAULT NULL,
  `searchField` text COMMENT 'helper field for users quick searching',
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_type__name` (`name`,`type`),
  KEY `IDX_recover_hash` (`recover_hash`),
  KEY `FK_users_groups_language` (`language_id`),
  KEY `IDX_type` (`type`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_groups`
--

LOCK TABLES `users_groups` WRITE;
/*!40000 ALTER TABLE `users_groups` DISABLE KEYS */;
INSERT INTO `users_groups` VALUES (1,2,1,'root','Administrator','','Administrator','Administrator','Administrator','Administrator','m','danang.kastowo@solusi247.com',NULL,'76add4e6fd3b4ecda005739870ab5022','2016-06-29',NULL,1,'{\"short_date_format\":\"%m\\/%d\\/%Y\",\"long_date_format\":\"%F %j, %Y\",\"country_code\":\"\",\"phone\":\"\",\"timezone\":\"\",\"security\":{\"recovery_email\":true,\"email\":\"danang.kastowo@solusi247.com\"},\"state\":{\"mAc\":{\"width\":250,\"weight\":-10},\"mopp\":{\"collapsed\":false,\"weight\":-20},\"oew100\":{\"width\":600,\"height\":450,\"maximized\":false,\"size\":{\"width\":600,\"height\":450},\"pos\":[751,188]},\"oevg\":{\"columns\":{\"title\":{\"idx\":0,\"width\":100},\"value\":{\"idx\":1,\"flex\":1}},\"group\":null},\"oew11\":{\"width\":600,\"height\":450,\"maximized\":false,\"size\":{\"width\":600,\"height\":450},\"pos\":[452,116]},\"oew62\":{\"width\":600,\"height\":450,\"maximized\":false,\"size\":{\"width\":600,\"height\":450},\"pos\":[409,72]},\"oew5\":{\"width\":600,\"height\":450,\"maximized\":false,\"size\":{\"width\":600,\"height\":450},\"pos\":[751,188]},\"oew8\":{\"width\":600,\"height\":450,\"maximized\":false,\"size\":{\"width\":600,\"height\":450},\"pos\":[751,188]},\"oew12\":{\"width\":600,\"height\":450,\"maximized\":false,\"size\":{\"width\":600,\"height\":450},\"pos\":[751,188]},\"oew143\":{\"width\":1366,\"height\":643,\"maximized\":true,\"size\":{\"width\":600,\"height\":450},\"pos\":[338,49]},\"oew6\":{\"width\":1366,\"height\":658,\"maximized\":true,\"size\":{\"width\":600,\"height\":550},\"pos\":[383,47]},\"veg\":{\"columns\":{\"title\":{\"idx\":0,\"width\":100},\"value\":{\"idx\":1,\"flex\":1}},\"group\":null},\"uploadGrid\":{\"columns\":{\"name\":{\"idx\":0,\"width\":150},\"size\":{\"idx\":1,\"width\":90,\"sortable\":true},\"status\":{\"idx\":2,\"width\":75,\"sortable\":true},\"loaded\":{\"idx\":3,\"width\":75,\"sortable\":true},\"pathtext\":{\"idx\":4,\"width\":200,\"sortable\":true},\"msg\":{\"idx\":5,\"width\":175,\"hidden\":true,\"sortable\":true}},\"group\":null}},\"color\":\"#8fada9\",\"lastNotifyTime\":\"2016-07-20 02:58:35\"}','{\"email\": \"danang.kastowo@solusi247.com\"}','2016-07-20 02:55:27',1,'|192.168.10.154|',NULL,'2016-07-20 02:59:44',1,1,NULL,1,'2013-03-20 05:57:29',NULL,NULL,' root Administrator  Administrator Administrator Administrator Administrator danang.kastowo@solusi247.com '),(2,1,1,'everyone','Everyone',NULL,'Everyone','Everyone','Everyone','Everyone',NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,NULL,NULL,NULL,NULL,NULL,NULL,1,NULL,'2015-05-20 10:17:52',NULL,'0000-00-00 00:00:00',NULL,NULL,' everyone Everyone Everyone Everyone Everyone  '),(3,2,0,'kulicoding','danang','kastowo',NULL,NULL,NULL,NULL,NULL,'kastowoayani@gmail.com',NULL,'28b32273c2e7b90e43fb9651d42d4528','2016-06-29','$2y$15$gWWUzUu/.h1X8Lpl3Itcqe/fSkmzB6Ok44VDxRNXKxUBS8KGDjb3m',1,'{\"color\":\"#e1e2ea\"}','{}','2016-06-29 07:27:02',-1,'|192.168.10.154|',NULL,'2016-06-29 05:11:57',1,1,'2016-06-29 04:32:28',1,'0000-00-00 00:00:00',NULL,NULL,' kulicoding danang kastowo     kastowoayani@gmail.com '),(4,2,0,'danang','danang','',NULL,NULL,NULL,NULL,NULL,'danang@yahoo.com',NULL,NULL,NULL,'$2y$15$UmInhRQ4nkUrSIFj08lXKugVc9Yklol6DsWVoyQo67jcxbWyEmhtu',1,'{\"color\":\"#1c0b01\"}','{}',NULL,NULL,NULL,NULL,NULL,1,1,'2016-07-04 03:25:36',NULL,'0000-00-00 00:00:00',1,'2016-07-04 03:25:54',' danang danang      danang@yahoo.com '),(5,2,0,'decasto','dani','',NULL,NULL,NULL,NULL,NULL,'decastocollections@gmail.com',NULL,NULL,NULL,'$2y$15$VMz6HmBw0uWfTAMmNvuEYOSOSyFxoAnayBvYxxQxJgB19wLSGiC3e',1,'{\"color\":\"#103c49\"}','{}',NULL,NULL,NULL,NULL,NULL,1,1,'2016-07-04 03:27:00',NULL,'0000-00-00 00:00:00',NULL,NULL,' decasto dani      decastocollections@gmail.com ');
/*!40000 ALTER TABLE `users_groups` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `users_groups_bi` BEFORE INSERT ON `users_groups` FOR EACH ROW BEGIN
	set new.searchField = concat(
		' '
		,coalesce(new.name, '')
		,' '
		,COALESCE(new.first_name, '')
		,' '
		,COALESCE(new.last_name, '')
		,' '
		,COALESCE(new.l1, '')
		,' '
		,COALESCE(new.l2, '')
		,' '
		,COALESCE(new.l3, '')
		,' '
		,COALESCE(new.l4, '')
		,' '
		,COALESCE(new.email, '')
		,' '
	);
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `users_groups_ai` AFTER INSERT ON `users_groups` FOR EACH ROW BEGIN
	declare tmp_everyone_user_id int unsigned;
	
	IF( new.type = 2 ) THEN
		
		SELECT id
		into tmp_everyone_user_id
		FROM users_groups
		WHERE `type` = 1
			AND `system` = 1
			AND name = 'everyone';
		
		update `tree_acl_security_sets`
		set updated = 1
			where id in (
				select distinct security_set_id
				from `tree_acl_security_sets_result`
				where user_id = tmp_everyone_user_id
			)
		;
	END IF;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `users_groups_bu` BEFORE UPDATE ON `users_groups` FOR EACH ROW BEGIN
	SET new.searchField = CONCAT(
		' '
		,COALESCE(new.name, '')
		,' '
		,COALESCE(new.first_name, '')
		,' '
		,COALESCE(new.last_name, '')
		,' '
		,COALESCE(new.l1, '')
		,' '
		,COALESCE(new.l2, '')
		,' '
		,COALESCE(new.l3, '')
		,' '
		,COALESCE(new.l4, '')
		,' '
		,COALESCE(new.email, '')
		,' '
	);
	if( coalesce(old.password, '') <> coalesce(new.password, '') ) THEN
		set new.password_change = CURRENT_DATE;
	end if;
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `users_groups_association`
--

DROP TABLE IF EXISTS `users_groups_association`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_groups_association` (
  `user_id` int(11) unsigned NOT NULL,
  `group_id` int(11) unsigned NOT NULL,
  `cid` int(11) unsigned NOT NULL DEFAULT '1',
  `cdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `uid` int(11) unsigned DEFAULT NULL,
  `udate` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`user_id`,`group_id`),
  KEY `FK_users_groups_association__group_id` (`group_id`),
  CONSTRAINT `FK_users_groups_association__group_id` FOREIGN KEY (`group_id`) REFERENCES `users_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_users_groups_association__user_id` FOREIGN KEY (`user_id`) REFERENCES `users_groups` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_groups_association`
--

LOCK TABLES `users_groups_association` WRITE;
/*!40000 ALTER TABLE `users_groups_association` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_groups_association` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `users_groups_association_ai` AFTER INSERT ON `users_groups_association` FOR EACH ROW BEGIN
	
	UPDATE tree_acl_security_sets
	SET updated = 1
		WHERE id IN (
			SELECT DISTINCT ti.security_set_id
			FROM `tree_acl` ta
			JOIN tree_info ti ON ti.`id` = ta.`node_id`
			WHERE ta.`user_group_id` = new.group_id
		)
	;
	
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `users_groups_association_ad` AFTER DELETE ON `users_groups_association` FOR EACH ROW BEGIN
	
	UPDATE tree_acl_security_sets
	SET updated = 1
		WHERE id IN (
			SELECT DISTINCT security_set_id
			FROM `tree_acl_security_sets_result`
			WHERE user_id = old.user_id
		)
	;
	
    END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-21 14:12:17
