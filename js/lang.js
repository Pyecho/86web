// 语言切换
$(document).ready(function () {
    // PC
    // PC-鼠标悬浮时显示语言选项框
    $("#language-toggle").hover(function () {
        $("#language-options").show();
    });

    // PC-监听鼠标移出按钮区域的事件
    $(document).on("mouseleave", ".language", function () {
        $("#language-options").hide();
    });

    // PC-点击语言选项时切换语言
    $("#language-options a").click(function (e) {
        e.preventDefault(); // 阻止默认行为（例如跳转）
        var lang = $(this).data("lang");
        // 根据选中的语言执行相应操作，例如切换文本内容或者修改页面样式
        switch (lang) {
            case "en":
                // 切换为英文
                break;
            case "zh":
                // 切换为中文
                break;
            // 添加其他语言的处理逻辑
        }
    });
    $("#language-toggle").hover(function () {
        $("#language-options").show();
    });


    // H5
    // H5-弹窗窗口
    $("#showPopup").click(function (event) {
        $("#popupContainer").css("display", "block");
        $("#popupContainer").animate({ height: '35%' }, 300);
        // adjustPopupHeight();
        event.stopPropagation();
    });
    // H5-隐藏窗口
    $("#closePopup").click(function () {
        hidePopup();
    });
    // H5-点击其他区域关闭弹窗
    $(document).click(function (event) {
        var target = $(event.target);
        if (!target.closest("#popupContainer").length && !target.is("#showPopup")) {
            hidePopup();
        }
    });
});
// PC-跳转页面
function changeLang(lang, page = 'index') {
    location = `/${lang}/${page}.html`
}
// H5-关闭弹窗
function hidePopup() {
    $("#popupContainer").animate({ height: '0' }, 300);
}
