<?php
$host="localhost";
$user="root";
$pass="";
$database="collectors_db";
$conn=mysqli_connect($host, $user, $pass, $database);

if(mysqli_connect_error()){
    die("cannot connect to database");
}
else
echo 'database is connected';
?>

<?php
mysqli_close($conn);

?>
