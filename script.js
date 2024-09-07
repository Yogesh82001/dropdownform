$(document).ready(function(){
    // Add new option
    $(document).on('click', '.addOption', function(){
        let optionRow = `<div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Label">
            <input type="text" class="form-control" placeholder="Value or Confluence Value">
            <div class="input-group-append">
                <button class="btn btn-outline-success addOption" type="button">+</button>
                <button class="btn btn-outline-danger removeOption" type="button">-</button>
            </div>
        </div>`;
        $('#optionsContainer').append(optionRow);
    });

    // Remove option
    $(document).on('click', '.removeOption', function(){
        $(this).closest('.input-group').remove();
    });
});
$(document).ready(function(){
    // Toggle dropdown menu when input is focused
    $('#longInputDropdown').focus(function() {
        $(this).siblings('.dropdown-menu').addClass('show');
    });

    // Hide dropdown when input is blurred
    $('#longInputDropdown').blur(function() {
        $(this).siblings('.dropdown-menu').removeClass('show');
    });
});
$(document).ready(function(){
    $('#listDescription').on('focus', function() {
        $(this).siblings('.dropdown-menu').addClass('show');
    });
    $('#listDescription').on('blur', function() {
        $(this).siblings('.dropdown-menu').removeClass('show');
    });
});