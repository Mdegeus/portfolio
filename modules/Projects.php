<?php

function GetProjects() {
    global $conn;

    $sql = "SELECT * FROM projects";

    $stmt = $conn->prepare($sql);

    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_CLASS);
}

function GetProjectsReverse() {
    global $conn;

    $sql = "SELECT * FROM projects ORDER BY id DESC";

    $stmt = $conn->prepare($sql);

    $stmt->execute();

    return $stmt->fetchAll(PDO::FETCH_CLASS);
}