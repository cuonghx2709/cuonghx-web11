
$(document).ready(() => {
    listenToFormSubmitEvent();
    listenToInputEven();
})

const listenToFormSubmitEvent = () => {
    const formElement = $(".article-search-form");
    formElement.on("submit", async event => {
        event.preventDefault()


        /**
         * TODO:
         *  - Lấy từ khoá search của người dùng
         *  - Lấy data từ server wikipedia tương ứng với từ khoá search 
         *  - Từ data trả về, tạo một array DOM hiển thị các bài viết của wikipedia
         *  - Đưa các DOM trong array trên vào trong <div class="article-list"></div>
         */

        search();

    });

}

function Debounce(func, time){
    var timer 
    return function(){

        clearTimeout(timer);
        timer = setTimeout(function(){
            console.log("run")
            func()
        }, time)
    }
}

function throttle(func, time) {
    var last, timer;
    return function () {
      var now = +new Date
      if (last != null && now < last + time) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            last = now;
            func()
        }, time);
      } else {
        last = now;
        func()
      }
    };
  }

const listenToInputEven = () => {
    const debounce = throttle(search, 1000)
    const input = $('#article-search-form__input');
    input.on("input", () => {
        debounce()
    });


};

let clear = () => {
    $('.article-list').empty();
}




function search() {
    clear();
    const searchQuery = getUserSearchQuery();
    console.log(searchQuery);
    if(searchQuery.length > 0){
        $.ajax({
            url: "https://en.wikipedia.org/w/api.php",
            method: "POST",
            data: {
                 action: "query",
                list: "search",
                format: "json",
                srprop: "snippet",
                origin: "*",
                limit: "100",
                srsearch: encodeURI(searchQuery)
                },
            success: (data) => {
                procesData(data);
            }
        })
    }
}

let getUserSearchQuery = () => $('#article-search-form__input').val();

let procesData = (data) => {

    const elementArry = data.query.search.map((element) => {
        return `<a href="https://en.wikipedia.org/?curid=${element.pageid}" target="_blank"
        class="article-view">
        <h3 className="article-view__title">${element.title}</h3>
        <p className="article-view__snippet">${element.snippet}</p>
        </a>`

    }).join("");

    $('.article-list').append(elementArry);
}
