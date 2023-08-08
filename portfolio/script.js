
// taskbar visibility
document.addEventListener('visibilitychange',
  function () {
      if (document.visibilityState === "visible") {
          document.title = "Portfolio | Shashwat Srivastava";
          $("#favicon").attr("href", "images/hero.png");
      }
      else {
          document.title = "Come Back To Portfolio";
          $("#favicon").attr("href", "portfolio\images\favhand.png");
      }
  });
