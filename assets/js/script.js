// check off specific todos by clicking
$("ul").on("click", "li", function() {
        $(this).toggleClass("completed");
});

// Delete a to-do
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
});

// Create a to-do upon pressing enter
$("input[type='text']").keypress(function() {
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});