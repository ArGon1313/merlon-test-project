<?php
include __DIR__ . '/task3.php';
header('Content-Type: application/json; charset=utf-8');
echo json_encode($groupAndFilterArray, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);


