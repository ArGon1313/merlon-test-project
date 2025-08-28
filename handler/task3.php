<?php
include __DIR__ . '/task1.php';

// 1 PART
$groups = [
    'archive' => [],
    'notArchive' => []
];

foreach ($newFormatArray as $item) {
    if ($item['archive'] == 1) {
        array_push($groups['archive'], $item);
    } else {
        array_push($groups['notArchive'], $item);
    }
}

function sortNameByAl($a, $b)
{
    return strcmp($a['name'], $b['name']);
};


usort($groups['archive'], 'sortNameByAl');
usort($groups['notArchive'], 'sortNameByAl');

foreach ($groups as &$group) {
    foreach ($group as &$item) {
        unset($item['archive']);
    }
}
unset($group, $item);

//Переделываем characteristic -> characteristics
foreach ($groups as &$group) {
    foreach ($group as &$item) {
        $item['characteristics'] = [
            $item['characteristic'] => $item['value']
        ];
        unset($item['characteristic'], $item['value']);
    }
}
unset($group, $item);

// 2 PART

$filter = [
    'kindArchive' => ['archive', 'notArchive'],
    'name' => ['Product 01', 'Product 02', 'Product 03', 'Product 04', 'Product 05'],
    'characteristic' => ['characteristic 01', 'characteristic 02', 'characteristic 03']
];

$groupAndFilterArray = [
    'groups' => $groups,
    'filter' => $filter
];
