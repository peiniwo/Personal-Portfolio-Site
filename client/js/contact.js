(function () {
    var unxss = require('unxss');
    var escapeScript = unxss.escape;
    $('#contact-form').validator();
    $('#contact-form').on('submit', function (e) {
        e.preventDefault();
        if (this.elements[0].className === 'close') {
            this.removeChild(this.children[0]);
        }
        var data = {
            name: escapeScript(this.elements[0].value),
            email: escapeScript(this.elements[1].value),
            subject: escapeScript(this.elements[2].value),
            message: escapeScript(this.elements[3].value),
        };
        var url = "/contact";
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (data) {
                var messageAlert = 'alert-' + (data.success ? 'success' : 'warning');
                var messageText = data.message;

                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                if (messageAlert && messageText) {
                    $('#contact-form').find('.messages').html(alertBox);
                    $('#contact-form')[0].reset();
                }
            }
        });
    })
})();
