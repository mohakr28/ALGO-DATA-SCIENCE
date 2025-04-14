document.addEventListener("DOMContentLoaded", () => {
  // --- (كود زر الموبايل الموجود سابقاً يبقى كما هو) ---
  const mobileSidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const body = document.body;
  const overlay =
    document.querySelector(".sidebar-overlay") || document.createElement("div"); // استخدم الموجود أو أنشئ

  if (!document.querySelector(".sidebar-overlay")) {
    overlay.classList.add("sidebar-overlay");
    body.appendChild(overlay);
  }

  if (mobileSidebarToggle && sidebar) {
    mobileSidebarToggle.addEventListener("click", () => {
      body.classList.toggle("sidebar-toggled");
      const isExpanded = body.classList.contains("sidebar-toggled");
      mobileSidebarToggle.setAttribute("aria-expanded", isExpanded);
    });
    overlay.addEventListener("click", () => {
      body.classList.remove("sidebar-toggled");
      mobileSidebarToggle.setAttribute("aria-expanded", "false");
    });
    const sidebarLinks = sidebar.querySelectorAll("nav a");
    sidebarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (
          window.innerWidth <= 768 &&
          body.classList.contains("sidebar-toggled")
        ) {
          body.classList.remove("sidebar-toggled");
          mobileSidebarToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }
  // --- نهاية كود زر الموبايل ---

  // --- كود زر إخفاء/إظهار القائمة الرئيسي (الجديد) ---
  const mainSidebarToggle = document.getElementById("mainSidebarToggle");
  const container = document.querySelector(".sidebar"); // استهداف الكونتينر
  const mainToggleIcon = mainSidebarToggle
    ? mainSidebarToggle.querySelector(".icon")
    : null;

  if (mainSidebarToggle && container && mainToggleIcon) {
    mainSidebarToggle.addEventListener("click", () => {
      container.classList.toggle("sidebar-collapsed");

      // تغيير الأيقونة وتحديث ARIA (اختياري)
    });
  } else {
    // لا تطبع خطأ إذا كان الزر غير موجود بشكل طبيعي على الموبايل
    // console.error("Main sidebar toggle button or container not found!");
  }
});
