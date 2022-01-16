<?php

require_once "../modules/conn.php";
require_once "../modules/Projects.php";

global $conn;

$request = $_SERVER['REQUEST_URI'];
$params = explode("/", $request);

session_start();

?>

<!DOCTYPE html>
<html lang="en">

<?php

    include_once "./templates/defaults/head.php";

?>

<body>

<?php

include_once "./templates/defaults/navbar.php";


switch ($params[1]) {

    case 'projectpage':
        include_once "./templates/projectpage.php";
        break;
    case 'home':
        include_once "./templates/home.php";
        break;
    default:
        include_once "./templates/home.php";
        break;
}

?>

</body>
    <script src="./js/basic.js" type=module></script>
    <script src="./js/main.js" type=module></script>
</html>