// check off specific todos by clicking
$("li").click(function() {
    $(this).toggleClass("completed");
});

// Delete a to-do
$("span").click(function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});