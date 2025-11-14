<?php
function insideOut($arr) {
    $length = count($arr);
    if ($length % 2 !== 0) {
        return $arr; 
    }
    $half = $length / 2;
    $firstHalf = array_slice($arr, 0, $half);
    $secondHalf = array_slice($arr, $half);
    $newFirst = array_reverse($secondHalf);
    $newSecond = array_reverse($firstHalf);
    return array_merge($newFirst, $newSecond);
}
print_r(insideOut([1, 2, 2, 1]));
print_r(insideOut(["Everyone", "says", "Kelly", "is", "REALLY", "awesome"]));
?>