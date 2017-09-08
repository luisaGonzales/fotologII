// /*aquí va tu código*/
const app = {
    item: {
        name: undefined,
        comment: undefined
    },
    init: function () {
        app.item.name = $('#name');
        app.item.comment = $('#clave');
        app.setup();
        app.showComments();
    },

    setup: function () {
        $('#btnComment').click(app.addComment);
        $('#btnClean').click(app.clearComments);
    },

    addComment: function (event) {
        localStorage.setItem(app.item.name.val(), app.item.comment.val());

        $('#espacio').append(`<div class="fondo"><div class="nombre"> ${app.item.name.val()} </div>\
                            <div class="comentario">  ${app.item.comment.val()} </div></div>`);

        $('#name').val() = "";
        $('#clave').val() = "";
        showComments();
    },

    clearComments: function (event) {
        localStorage.clear();
        $('#espacio').empty();
        $('#name').val() = "";
        $('#clave').val() = "";
    },

    showComments: function (event) {
        for (var clave in localStorage) {
            var comentario = localStorage[clave];
            $('#espacio').append(`<div class="fondo"><div class="nombre"> ${clave} </div>\
            <div class="comentario">  ${comentario} </div></div>`);
        }
    }
};

$(document).ready(app.init);