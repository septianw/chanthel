
//schema files
/*
+------------+---------------------+------+-----+-------------------+----------------+
| Field      | Type                | Null | Key | Default           | Extra          |
+------------+---------------------+------+-----+-------------------+----------------+
| id         | bigint(20) unsigned | NO   | PRI | NULL              | auto_increment |
| content_id | bigint(20) unsigned | YES  | MUL | NULL              |                |
| date       | date                | YES  |     | NULL              |                |
| name       | varchar(250)        | NO   | MUL | NULL              |                |
| title      | varchar(200)        | YES  |     | NULL              |                |
| cid        | int(10) unsigned    | NO   |     | 1                 |                |
| uid        | int(10) unsigned    | NO   |     | 1                 |                |
| cdate      | timestamp           | NO   |     | CURRENT_TIMESTAMP |                |
| udate      | timestamp           | YES  |     | NULL              |                |
+------------+---------------------+------+-----+-------------------+----------------+
*/
exports.files = function files(){
  schema = {
              "id": { "type": "BigInt(20)", "index": true, "primaryKey": true, "autoIncrement": true },
              "content_id": "BigInt(20)",
              "date": "Date",
              "name": "String(250)",
              "title": "String(200)",
              "cid": "Integer(10)",
              "uid": "Integer(10)",
              "cdate": "Date Time",
              "udate": "Date Time"
          };

  return schema;
};
/*
+--------------+---------------------+------+-----+---------+----------------+
| Field        | Type                | Null | Key | Default | Extra          |
+--------------+---------------------+------+-----+---------+----------------+
| id           | bigint(20) unsigned | NO   | PRI | NULL    | auto_increment |
| size         | bigint(20) unsigned | YES  | MUL | NULL    |                |
| pages        | int(11) unsigned    | YES  |     | NULL    |                |
| type         | varchar(100)        | YES  |     | NULL    |                |
| path         | varchar(250)        | YES  |     | NULL    |                |
| ref_count    | int(11)             | NO   |     | 0       |                |
| parse_status | tinyint(1) unsigned | YES  | MUL | NULL    |                |
| skip_parsing | tinyint(1)          | NO   | MUL | 0       |                |
| md5          | varchar(100)        | YES  | UNI | NULL    |                |
+--------------+---------------------+------+-----+---------+----------------+
*/
exports.files_content = function files_content(){
  schema = {
              "id": { "type": "BigInt(20)", "primaryKey": true, "autoIncrement": true },
              "size": "BigInt(20)",
              "pages": "Integer",
              "type": "String(100)",
              "path": "String(250)",
              "ref_count": "Integer",
              "parse_status": "BOOLEAN",
              "skip_parsing": "BOOLEAN",
              "md5": "String(100)"
          };

  return schema;
};
