var count_time = expire_time - server_time;
var local_time = (new Date()).getTime();
var left_time = count_time - Math.floor(((new Date()).getTime() - local_time) / 1000);

var $expire_time = $('#expire_time');

function count_down() {
    left_time = count_time - Math.floor(((new Date()).getTime() - local_time) / 1000);
    if (left_time <= 0) {
        return count_down_finish();
    }

    var str = '';
    var hours = Math.floor(left_time / 3600);
    var minites = Math.floor(left_time % 3600 / 60);
    var seconds = left_time % 60;

    str += '<span>'+(hours < 10 ? '0'+hours: hours)+'</span>' + '时';
    str += '<span>'+ (minites < 10 ? '0' + minites : minites)+'</span>' + '分';
    str += '<span>'+ (seconds < 10 ? '0' + seconds : seconds)+'</span>' + '秒';
    $expire_time.html(str);

    setTimeout(count_down, 1000)
}

function count_down_finish() {
    if($("#new_alipay").length > 0) {
        $("#pay_content").remove();
        $(".btn-wrap").remove();
        $('#pay_expired').show();
    } else if($("#payment_code").length > 0) {
        $("#jump_alipay_btn").remove();
        $("#qr").attr('src', 'data:image/png;base64,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');
        $("#count_down").html("订单已过期");
    } else {
        $('#count_down').css('visibility', 'hidden');
        $('#pay_content').remove();
        $('#bottom-news').remove();
        $('#pay_expired').show();
    }
}

count_down();

function query_status() {
    if (left_time < 0) return;
    var interval = 3000;
    $.ajax({
        'method':'post',
        'data':data,
        'url':'/api/payment/status',
        'error':function () {
            setTimeout(query_status, interval);
        },
        'dataType':'json',
        'success':function (response) {
            if (response.code === 0) {
                if (response.data.received_flag == 1) {
                    window.location.href = success_href;
                }
                else {
                    setTimeout(query_status, interval);
                }
            }
            else {
                setTimeout(query_status, interval);
            }
        }
    });
}

query_status();

var clipboard = new ClipboardJS('.copy');

clipboard.on('success', function (e) {
    $(".copy").text('复制成功');
    setTimeout(function() {
        $(".copy").text('复制');
    },2000);
    e.clearSelection();
});

$(".close").click(function(){
    $(".vux-alert").remove();
});