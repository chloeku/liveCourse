$(document).ready(function() {
    $("#header").load("page/header.html");
    $("#header-mold").load("page/header-mold.html");
    $("#header-member").load("page/header-member.html");
    $("#footer").load("page/footer.html");
  });

AOS.init({
    useClassNames: true,
    initClassName: false,
    animatedClassName: 'animate__animated'
});