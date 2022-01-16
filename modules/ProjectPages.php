<?php

function GetProjecPages() {
    global $conn;

    $sql = "SELECT * FROM projectdata_rules";

    $stmt = $conn->prepare($sql);

    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_CLASS);
}