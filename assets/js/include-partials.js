const resolvePartialPath = (partialPath) => {
  const root = document.documentElement.dataset.root || "/";
  if (partialPath.startsWith("/")) {
    return `${root.replace(/\/+$/, "")}${partialPath}`;
  }
  return `${root.replace(/\/+$/, "/")}${partialPath}`;
};

const loadFooterPartial = async () => {
  const footerTarget = document.querySelector("#siteFooter");
  if (!footerTarget) return;

  try {
    const response = await fetch(resolvePartialPath("/partials/footer.html"));
    if (!response.ok) {
      throw new Error(`Failed to load footer: ${response.status}`);
    }
    const html = await response.text();
    footerTarget.innerHTML = html;
    attachSocialRipple(footerTarget);
  } catch (error) {
    console.error(error);
  }
};

const attachSocialRipple = (scope) => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const bubbles = scope.querySelectorAll(".social-bubble");
  bubbles.forEach((bubble) => {
    bubble.addEventListener("click", (event) => {
      const ripple = document.createElement("span");
      ripple.className = "social-ripple";
      const rect = bubble.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${event.clientY - rect.top - size / 2}px`;
      bubble.appendChild(ripple);
      ripple.addEventListener("animationend", () => ripple.remove());
    });
  });
};

loadFooterPartial();
