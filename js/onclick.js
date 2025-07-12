$(document).ready(function () {
    $('img.photo').click(function () {
        const src = $(this).attr('src');
        $('body').append(`
            <div id="overlay" style="
                position:fixed;top:0;left:0;width:100%;height:100%;
                background:rgba(0,0,0,0.6);display:flex;align-items:center;justify-content:center;
                z-index:9999;
            ">
                <img src="${src}" style="max-width:90%;max-height:90%;">
            </div>
        `);
    });

    // Удаляем увеличенное изображение при клике
    $(document).on('click', '#overlay', function () {
        $(this).remove();
    });
});
