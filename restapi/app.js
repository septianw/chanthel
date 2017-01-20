var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var xml2js = require('xml2js');
var exec = require('child_process').exec;
var Database = require('baciro-orm');
var dateFormat = require('dateformat');

/**
baciro-common
*/
var Common = require('bcommon'),
    showStatus = Common.showStatus;

var yamlconfig = require('yaml-config');
// var configYaml = yamlconfig.readConfig('/etc/baciro/config.yml');

/**
baciro-hdfs
*/
var Hdfs = require('hdfs');
var hdfs = new Hdfs({
  protocol: 'http',
  hostname: '192.168.1.230',
  port: 50070
});


/**
baciro-solr
*/
// var Solr = require('solr');

// var solrProtocol = "http"
// var solrHostname = "192.168.1.170";
// var solrPort = 8983;

// var solr = new Solr({
//                       "protocol": solrProtocol,
//                       "hostname": solrHostname,
//                       "port": solrPort
//                     });

var host = '192.168.1.230',
    port = 3344;

/**
Host chanthel
**/
var chanthel = 'http://192.168.1.230/chanthel/';
var dirfilechanthel = '/var/www/html/chanthel/';


/**
setting global configurasi data provider berkaitan koneksi database (ORM)
*/

var conf = {};
conf.host = '192.168.1.230';
conf.port = 3306;
conf.name = 'cb_chanthel';
conf.user = 'root';
conf.pass = 'root';
conf.type = 'mysql';

var masterkey = '96f7be8fa7af5e537d165a21dcd3f7626b2a09cb4af4307d00eab41126abeb8c';

//setting midleware
app.use (function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "key, origin, content-type, accept");
  res.header("Access-Control-Allow-Methods", "DELETE, GET, POST, PUT, OPTIONS");
//  res.removeHeader("x-powered-by");
  next();
});


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var Chanthel = {
  /**
 * Fungsi listSeedid
 * Fungsi ini bertindak untuk menampilkan collection atau seedid dari solr
 * @param  {object} req   parameter input dari express
 * @param  {object}  res   parameter output dari express
 */
  
  get : {
    /**
     * Fungsi files
     * Fungsi ini bertindak untuk menampilkan informasi files chanthel
     * @param  {object} req   parameter input dari express
     * @param  {object}  res   parameter output dari express
     */
    files: function files(req, res){
      var apikey = req.headers.key;
      var fileid = req.params.fileid;
      
      //check apikey harus sama dengan masterkey
      if(apikey == masterkey){
        var path = require('path');
        var db = new Database(conf, path.resolve('./schema.js'));
        var files = db.model('files');
        var files_content = db.model('files_content');
        
        if(fileid){
          files.findJoin({"id": fileid}, {files_content: "content_id"}, function(err, data){
            if(err){
              res.json(showStatus(5, err));
            }else{
              if(data.length === 0){
                res.json(showStatus(5, "File id is not found."));
              }else{
                //susun response
                var data2 = [];
                var obj2 = {};
                var ext = getExtension(data[0].name);

                switch(ext) {
                  case 'rtf':
                  case 'doc':
                  case 'xls':
                  case 'csv':
                  case 'ppt':
                  case 'pps':
                  case 'docx':
                  case 'docm':
                  case 'xlsx':
                  case 'pptx':
                  case 'odt':
                      var exists = fs.existsSync(dirfilechanthel + 'preview/' + data[0].content_id + '_.pdf');
                     
                      if(exists){
                        obj2.fileid    = data[0].id,
                        obj2.filename  = data[0].name,
                        obj2.ext       = ext,
                        obj2.filetype  = data[0].files_content.type;
                        obj2.url       = chanthel + 'download/' + data[0].content_id + '.' + ext;
                        obj2.preview   = chanthel + 'preview/' + data[0].content_id + '_.pdf';
                        
                        data2.push(obj2);    

                        res.json(showStatus(1, data2));
                      }else{
                        path = data[0].files_content.path;
                        content_id = data[0].content_id;

                        fn = '/var/www/chanthel/data/chanthel-data/files/chanthel/'+ path + '/' + content_id;
                        nfn = dirfilechanthel + 'download/' + content_id + '.'+ ext;
                        pfn = dirfilechanthel + 'preview/' + content_id + '_.pdf';

                        exec('cp ' + fn + ' '+ nfn); 

                        exec('"python" "/var/www/chanthel/httpsdocs/libx/unoconv" -v -f pdf -o ' + pfn + ' ' + nfn);                 

                        obj2.fileid    = data[0].id,
                        obj2.filename  = data[0].name,
                        obj2.ext       = ext,
                        obj2.filetype  = data[0].files_content.type;
                        obj2.url       = chanthel + 'download/' + data[0].content_id + '.' + ext;
                        obj2.preview   = chanthel + 'preview/' + data[0].content_id + '_.pdf';

                        data2.push(obj2);  
                       
                        res.json(showStatus(1, data2));
                      }
                      break;
                  default:
                    path = data[0].files_content.path;
                    content_id = data[0].content_id;

                    fn = '/var/www/chanthel/data/chanthel-data/files/chanthel/'+ path + '/' + content_id;

                    nfn = dirfilechanthel + 'download/' + content_id + '.'+ ext;

                    exec('cp ' + fn + ' '+ nfn); 

                    obj2.fileid    = data[0].id,
                    obj2.filename  = data[0].name,
                    obj2.ext       = ext,
                    obj2.filetype  = data[0].files_content.type;
                    obj2.url       = chanthel + 'download/' + data[0].content_id + '.' + ext;
                    obj2.preview   = chanthel + 'download/' + data[0].content_id + '.'+ ext;

                    data2.push(obj2);    

                    res.json(showStatus(1, data2));
                }
              }
            }
          }) 
        }else{
          files.findJoin({}, {files_content: "content_id"},function(err, data){
            if(err){
              res.json(showStatus(5, err));
            }else{
              if(data.length === 0){
                res.json(showStatus(5, "Files is empty."));
              }else{
                //susun response
                var data2 = [];

                for(i=0; i < data.length; i++){
                  var obj2 = {};

                  //checking files_content ada atau tidak
                  if(data[i].files_content){
                    var ext = getExtension(data[i].name);
                    switch(ext) {
                      case 'rtf':
                      case 'doc':
                      case 'xls':
                      case 'csv':
                      case 'ppt':
                      case 'pps':
                      case 'docx':
                      case 'docm':
                      case 'xlsx':
                      case 'pptx':
                      case 'odt':
                          exists = fs.existsSync(dirfilechanthel + 'preview/' + data[i].content_id + '_.pdf');

                          if(exists){
                            obj2.fileid    = data[i].id,
                            obj2.filename  = data[i].name,
                            obj2.ext       = ext,
                            obj2.filetype  = data[i].files_content.type;
                            obj2.url       = chanthel + 'download/' + data[i].content_id +'.'+ ext;
                            obj2.preview   = chanthel + 'preview/' + data[i].content_id + '_.pdf';

                            data2.push(obj2);

                            if(i == data.length - 1){
                              res.json(showStatus(1, data2));
                            }
                          }else{
                            path = data[i].files_content.path;
                            content_id = data[i].content_id;

                            fn = '/var/www/chanthel/data/chanthel-data/files/chanthel/'+ path + '/' + content_id;
                            nfn = dirfilechanthel + 'download/' + content_id + '.'+ ext;
                            pfn = dirfilechanthel + 'preview/' + content_id + '_.pdf';

                            exec('cp ' + fn + ' '+ nfn); 
                            exec('"python" "/var/www/chanthel/httpsdocs/libx/unoconv" -v -f pdf -o ' + pfn + ' ' + nfn);                

                            obj2.fileid    = data[i].id,
                            obj2.filename  = data[i].name,
                            obj2.ext       = ext,
                            obj2.filetype  = data[i].files_content.type;
                            obj2.url       = chanthel + 'download/' + data[i].content_id +'.'+ ext;
                            obj2.preview   = chanthel + 'preview/' + data[i].content_id + '_.pdf';

                            data2.push(obj2);    

                            if(i == data.length - 1){
                              res.json(showStatus(1, data2));
                            }
                          }
                          break;
                      default:
                        path = data[i].files_content.path;
                        content_id = data[i].content_id;

                        fn = '/var/www/chanthel/data/chanthel-data/files/chanthel/'+ path + '/' + content_id;

                        nfn = dirfilechanthel + 'download/' + content_id + '.'+ ext;

                        exec('cp ' + fn + ' '+ nfn); 

                        obj2.fileid    = data[i].id,
                        obj2.filename  = data[i].name,
                        obj2.ext       = ext,
                        obj2.filetype  = data[i].files_content.type;
                        obj2.url       = chanthel + 'download/' + data[i].content_id +'.'+ ext;
                        obj2.preview   = chanthel + 'download/' + data[i].content_id +'.'+ ext;
                        data2.push(obj2);    

                        if(i == data.length - 1){
                          res.json(showStatus(1, data2));
                        }
                    }
                  }
                }
              }
            }
          }) 
        }  
      }else{
        res.json(showStatus(7, "Failed apikey."));
      }
    },
    /**
     * Fungsi preview
     * Fungsi ini bertindak untuk menampilkan detail file
     * @param  {object} req   parameter input dari express
     * @param  {object}  res   parameter output dari express
     */
    preview: function preview(req, res){
      var apikey = req.headers.key;
      var fileid = req.params.fileid;

      //check apikey harus sama dengan masterkey
      if(apikey == masterkey){
        var path = require('path');
        var db = new Database(conf, path.resolve('./schema.js'));
        var files = db.model('files');
        var files_content = db.model('files_content');
        
        if(fileid){
          files.findJoin({"id": fileid}, {files_content: "content_id"}, function(err, data){
            if(err){
              res.json(showStatus(5, err));
            }else{
              if(data.length === 0){
                res.json(showStatus(5, "File id is not found."));
              }else{
                //susun response
                var data2 = [];
                var obj2 = {};
                var ext = getExtension(data[0].name);

                switch(ext) {
                  case 'rtf':
                  case 'doc':
                  case 'xls':
                  case 'csv':
                  case 'ppt':
                  case 'pps':
                  case 'docx':
                  case 'docm':
                  case 'xlsx':
                  case 'pptx':
                  case 'odt':
                      var exists = fs.existsSync(dirfilechanthel + 'preview/' + data[0].content_id + '_.pdf');
                     
                      if(exists){
                        obj2.fileid    = data[0].id,
                        obj2.filename  = data[0].name,
                        obj2.ext       = ext,
                        obj2.filetype  = data[0].files_content.type;
                        obj2.url       = chanthel + 'download/' + data[0].content_id + '.' + ext;
                        obj2.preview   = chanthel + 'preview/' + data[0].content_id + '_.pdf';
                        data2.push(obj2);    

                        res.json(showStatus(1, data2));
                      }else{
                        res.json(showStatus(5, 'File is not exist.'));
                      }
                      break;
                  default:
                    path = data[0].files_content.path;
                    content_id = data[0].content_id;

                    fn = '/var/www/chanthel/data/chanthel-data/files/chanthel/'+ path + '/' + content_id;

                    nfn = dirfilechanthel + 'download/' + content_id + '.'+ ext;
                    // pfn = dirfilechanthel + 'preview/' + content_id + '_.pdf';

                    exec('cp ' + fn + ' '+ nfn); 
                    //copy ke dir rest chanthel
                    // exec('cp ' + nfn + ' '+ dirfilechanthel + 'download/');                         
                    // exec('cp ' + pfn + ' '+ dirfilechanthel + 'preview/');  

                    obj2.fileid    = data[0].id,
                    obj2.filename  = data[0].name,
                    obj2.ext       = ext,
                    obj2.filetype  = data[0].files_content.type;
                    obj2.url       = chanthel + 'download/' + data[0].content_id + '.' + ext;
                    obj2.preview   = chanthel + 'download/' + data[0].content_id + '.'+ ext;
                    data2.push(obj2);    
                    res.json(showStatus(1, data2));
                }
              }
            }
          }) 
        } 
      }else{
        res.json(showStatus(7, "Failed apikey."));
      }
    }
    
    
  }
}

function getExtension(filename){
    ext = filename.split('.');
    if (ext.length <2) {
        return '';
    }
    ext = ext.pop();
    ext = ext.trim();

    return ext.toLowerCase();
}


//get methode
app.get('/chanthel/files/:fileid?', Chanthel.get.files);
app.get('/chanthel/preview/:fileid', Chanthel.get.preview);
// app.get('/chanthel/download/:fileid', Craw.get.seedid);


var server = app.listen(port, host, function () {
  console.log("Server running at http://%s:%s", host, port);
})
