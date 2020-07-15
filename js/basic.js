$(function () {
    $("#gooey-v").gooeymenu({
        style: "vertical",
        vertical: {
            menuItemPosition: "spaced",
            direction: "up"
        }
    });
});
$(function () {
    $("#gooey-v2").gooeymenu({
        style: "vertical",
        vertical: {
            menuItemPosition: "spaced",
            direction: "down"
        }
    });
});
//textarea支持tab缩进
$("textarea").on(
    'keydown',
    function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            var indent = '    ';
            var start = this.selectionStart;
            var end = this.selectionEnd;
            var selected = window.getSelection().toString();
            selected = indent + selected.replace(/\n/g, '\n' + indent);
            this.value = this.value.substring(0, start) + selected
                + this.value.substring(end);
            this.setSelectionRange(start + indent.length, start
                + selected.length);
        }
    }
)
