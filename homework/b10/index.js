let last = new Date();
let lastUpdate = last.getTime();
console.log(lastUpdate);

$(document).ready(() => {
    listenToFormSubmitEvent();
})

const listenToFormSubmitEvent = () => {
    const formElement = $(".article-search-form");
    formElement.on("submit", async event => {
        event.preventDefault()
        search();
        /**
         * TODO:
         *  - Lấy từ khoá search của người dùng
         *  - Lấy data từ server wikipedia tương ứng với từ khoá search 
         *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia
         *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div>
         */

    });
    let changed = false;
    let first = true;
    $('#article-search-form__input').on("keyup", () => {
        changed = true;
        if (first) {
            fist = false;
            console.log("changed");
            search();
        } else {
            setTimeout(() => {
                if (!changed) {
                    console.log("changed");
                    search();
                    
                }
                changed = false;
            }, 1000);
        }
    });

    const search = () => {
        $('.article-list').html(" ");
        $('#animation').removeClass("d-none");
        $('#animation').addClass("d-block");
        console.log($('#article-search-form__input').val());
        let keyworld = $('#article-search-form__input').val();
        if (keyworld) {
            let data = {
                action: "query",
                list: "search",
                format: "json",
                srprop: "snippet",
                origin: "*",
                srsearch: encodeURI(keyworld)
            }

            $.ajax({
                url: "https://en.wikipedia.org/w/api.php",
                data: data,
                method: "POST",
                success: (data) => {

                    if (data) {

                        if (data.query.search.length == 0) {
                            console.log("null");
                            $('.article-list').text("Không có kết Quả");
                            $('.article-list').addClass("text-center");
                            $('#animation').removeClass("d-block");
                            $('#animation').addClass("d-none");
                        } else {
                            $('.article-list').html(" ");
                            $('#animation').removeClass("d-block");
                            $('#animation').addClass("d-none");
                            data.query.search.forEach(element => {
                                // console.log(element);
                                let view__title = element.title;
                                let view__snippet = element.snippet;

                                $('.article-list').html($('.article-list').html() + `<a href='https://en.wikipedia.org/?curid=${element.pageid}' target="_blank"
                                class="article-view">
                                <h3 className="article-view__title">${view__title} </h3>
                                <p className="article-view__snippet">${view__snippet}</p>
                                </a>`);
                            });
                        }
                    } else {
                        $('.article-list').text("Không có kết Quả");
                        $('.article-list').addClass("text-center");
                        $('#animation').removeClass("d-block");
                        $('#animation').addClass("d-none");
                    }
                }
            });
        } else {
            $('.article-list').text("Không có kết Quả");
            $('.article-list').addClass("text-center");
            $('#animation').removeClass("d-block");
            $('#animation').addClass("d-none");
        }
    }

    function debounce(func, time){
        var timer = null
        return function(){
            clearTimeout(timer);
            timer = setTimeout(func(), time)
        }
    }
}
