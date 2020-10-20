$(".long").dblclick(function() {
    $(".long").hide();
    $(".note").hide();
    $(".titletext").hide();
    $(".cavetext").show();
});

$(".titletext").click(function() {
    $(".titletext").css("color", "blue");
});

$(".note").click(function() {
    $(".note").text("click on (welcome to DnD) for blue text");
});

$(".cavetext").click(function() {
    $(".cavetext").hide();
    $(".red").show();
    $(".green").show();
    $(".blue").show();
    $(".druid").show();
});

$(".blue").click(function() {
    $(".red").hide();
    $(".green").hide();
    $(".blue").hide();
    $(".druid").hide();
    $(".ice").show();
});

$(".red").click(function() {
    $(".red").hide();
    $(".green").hide();
    $(".blue").hide();
    $(".druid").hide();
    $(".fire").show();
});

$(".green").click(function() {
    $(".red").hide();
    $(".green").hide();
    $(".blue").hide();
    $(".druid").hide();
    $(".tree").show();
});

$(".ice").click(function() {
    $(".ice").hide();
    $(".wd").show();
    $(".fail_1").show();
});

$(".fire").click(function() {
    $(".fire").hide();
    $(".wd").show();
    $(".win_1").show();
});

$(".tree").click(function() {
    $(".tree").hide();
    $(".wd").show();
    $(".fail_2").show();
});

$(".fail_1").click(function() {
    $(".wd").hide();
    $(".fail_1").hide();
    $(".oof").show();
    $(".rewind").show();
});

$(".fail_2").click(function() {
    $(".wd").hide();
    $(".fail_2").hide();
    $(".oof").show();
     $(".rewind").show();
});

$(".win_1").click(function() {
    $(".wd").hide();
    $(".win_1").hide();
    $(".troll").show();
    $(".rewind").show();
});

$(".rewind").click(function() {
     $(".rewind").hide();
      $(".troll").hide();
    $(".long").show();
    $(".titletext").show();
});