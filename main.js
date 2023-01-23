window.onscroll = function () {
  if (window.scrollY > 30) {
    document.getElementById("navbar").style.backgroundColor = "#002480";
  } else {
    document.getElementById("navbar").style.backgroundColor = "";
  }
};
const myTimeout = setTimeout(show, 20000000);
function show() {
  document.getElementById("whatsappShow").style.cssText = `
  visibility:visible;
  opacity: 1;
  transition:opacity 600ms, visibility 600ms;
`;
}
function closeWhatsapp() {
  document.getElementById("whatsappShow").style.cssText = `
  visibility:hidden;
  opacity: 0;
  transition:opacity 600ms, visibility 600ms;
`;
}
var tabChange = function () {
  var tabs = $(".nav-tabs > button");
  var active = tabs.filter(".active");
  var next = active.next("button").length
    ? active.next("button")
    : tabs.filter(":first-child");
  next.tab("show");
};
var tabCycle = setInterval(tabChange, 2000);
$(function () {
  $(".nav-tabs button").click(function (e) {
    e.preventDefault();
    clearInterval(tabCycle);
    $(this).tab("show");
    // setTimeout(function () {
    //   tabCycle = setInterval(tabChange, 2000);
    // }, 2000);
  });
});
