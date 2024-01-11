document.addEventListener('DOMContentLoaded', function () {
    flatpickr("#check-in-date", {
        minDate: "today"
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Get the current year
    var currentYear = new Date().getFullYear();

    // Update the content of the 'current-year' span
    document.getElementById('current-year').textContent = currentYear;
});