<?php
include __DIR__ . '/task1.php';
header('Content-Type: application/json; charset=utf-8');
echo json_encode($newFormatArray, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
