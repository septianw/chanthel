<?php
//hapus data melalui cron
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "cb_chanthel";

// Create connection
$conn = new mysqli($servername, $username, $password , $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$sql = "SELECT id from tree where dstatus > 0";

$result = $conn->query($sql);

$coreName = "chanthel";
$ds = DIRECTORY_SEPARATOR;

//mounting to hdfs
$filesDir = '/chanthel-data' . $ds . 'files' . $ds . $coreName . $ds;

$jumData = $result->num_rows;
 
if($jumData > 0){
	while ($row = $result->fetch_assoc()) {
		$sql2 = "SELECT content_id, `path` FROM files LEFT JOIN files_content on files.content_id = files_content.id where files.id = ".$row['id'];
		
		$result2 = $conn->query($sql2); 

		while ($row2 = $result2->fetch_assoc()) {
			$pathFile = $filesDir.$row2['path'].$ds.$row2['content_id'];

			//hapus file fisik
			 exec('sudo -su hdfs hadoop fs -rm '.$pathFile);
			//unlink('/var/www/chanthel/data'.$pathFile);

			//hapus dari table tree, files, 
			$sql4 = "DELETE FROM tree WHERE dstatus > 0 ";
			$conn->query($sql4);
			$sql41 = "DELETE FROM tree_info WHERE id = ".$row['id'];
                        $conn->query($sql41);
			$sql42 = "DELETE FROM objects WHERE id = ".$row['id'];
                        $conn->query($sql42);
			$sql5 = "DELETE FROM files WHERE id = ".$row['id'];
			$conn->query($sql5);


			//files_content dan file_previews
			$sql6 = "DELETE FROM files_content WHERE id = ".$row2['content_id'];
			$conn->query($sql6);
			$sql7 = "DELETE FROM file_previews WHERE id = ".$row2['content_id'];
			$conn->query($sql7);
		}
	}
}else{
	echo "Data kosong";
}

?>
