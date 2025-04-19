document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    let isDark = true;
  
    toggleBtn.addEventListener("click", () => {
      const root = document.documentElement;
      const icon = toggleBtn.querySelector("i");
  
      if (isDark) {
        root.style.setProperty('--bg-color', '#ffffff');
        root.style.setProperty('--text-color', '#000000');
        root.style.setProperty('--link-bg', '#f0f0f0cc');
        root.style.setProperty('--link-hover', '#e0e0e0cc');
        root.style.setProperty('--blur-bg', 'rgba(0, 0, 0, 0.05)');
        root.style.setProperty('--box-glow', 'rgba(0, 0, 0, 0.1)');
        root.style.setProperty('--accent-color', '#ff0066');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark mode';
      } else {
        root.style.setProperty('--bg-color', '#000000');
        root.style.setProperty('--text-color', '#ffffff');
        root.style.setProperty('--link-bg', 'rgba(26, 26, 26, 0.7)');
        root.style.setProperty('--link-hover', 'rgba(51, 51, 51, 0.7)');
        root.style.setProperty('--blur-bg', 'rgba(255, 255, 255, 0.05)');
        root.style.setProperty('--box-glow', 'rgba(255, 87, 0, 0.6)');
        root.style.setProperty('--accent-color', '#ff5700');
        toggleBtn.innerHTML = '<i class="fas fa-sun"></i> Light mode';
      }
  
      isDark = !isDark;
    });
});
