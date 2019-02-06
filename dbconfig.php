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

<!DOCTYPE html>
<html>
<head>
<meta charset="utf8">
<title></title>
</head>
<body>
<?php
$quary="select * from user";
$result=mysqli_query($conn,$quary);
if(!$result){
    die("error");
}
?>


<?php
mysqli_close($conn);

?>
