<?php include 'header.php';?>
<?php
$list_nums = array( 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 10 , 11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20);
$rand_nums = array_rand($list_nums, 5);
$val1 = $list_nums[$rand_nums[0]]; 
$val2 = $list_nums[$rand_nums[1]];
$val3 = $list_nums[$rand_nums[2]];
$val4 = $list_nums[$rand_nums[3]];
$val5 = $list_nums[$rand_nums[4]];  
?>
<?php include 'footer.php';?>