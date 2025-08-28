<?php

// Task # 1
$content = file_get_contents(__DIR__ . "/../data/products.csv");
if (substr($content, 0, 3) === "\xEF\xBB\xBF") {
    $content = substr($content, 3);
}
file_put_contents(__DIR__ . "/../data/products.csv", $content);


$fp = fopen(__DIR__ . "/../data/products.csv", "r");

$data = [];
while (($row = fgetcsv($fp, 0, ";", ' ', ' ')) !== false) {
    $data[] = $row;
}
fclose($fp);

$titles = $data[0];
array_shift($data);

$newFormatArray = [];
foreach ($data as $item) {
    $newFormatArray[] = array_combine($titles, $item);
}
