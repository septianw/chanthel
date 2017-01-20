<?php
    $servername = "localhost";
    $username = "root";
    $password = "chanthel";
    $dbname = "cb_chanthel";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT id FROM users_groups";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // output data of each row
        while($row = $result->fetch_assoc()) {
            echo "id: " . $row["id"]."<br>";
        }
    } else {
        echo "0 results";
    }
    $conn->close();
?> 