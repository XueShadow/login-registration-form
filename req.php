<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $gender = $_POST['gender'];

    if (!empty($gender)) {
        echo "You have selected: " . htmlspecialchars($gender);
    } else {
        echo "Please select a gender.";
    }
} else {
    echo "Invalid request method.";
}
?>
