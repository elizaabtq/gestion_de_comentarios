const containers = document.querySelectorAll('.icon-container');

containers.forEach(clickedContainer => {
  clickedContainer.addEventListener('click', () => {
    const allContainers = Array.from(containers);
    const wrapper = clickedContainer.querySelector('.icon-wrapper');
    const icon = wrapper.querySelector('i');
    const loader = wrapper.querySelector('.loader');

    const clickedRect = clickedContainer.getBoundingClientRect();

    allContainers.forEach(container => {
      if (container !== clickedContainer) {
        const rect = container.getBoundingClientRect();
        const deltaX = clickedRect.left - rect.left;
        const deltaY = clickedRect.top - rect.top;

        container.style.transition = "transform 0.6s ease, opacity 0.6s ease";
        container.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.5)`;
        container.style.opacity = '0';
      }
    });

    setTimeout(() => {
      const centerX = window.innerWidth / 2 - clickedRect.width / 2;
      const centerY = window.innerHeight / 2 - clickedRect.height / 2;
      const deltaXToCenter = centerX - clickedRect.left;
      const deltaYToCenter = centerY - clickedRect.top;

      clickedContainer.style.zIndex = '100';
      clickedContainer.style.position = 'fixed';
      clickedContainer.style.left = `${clickedRect.left}px`;
      clickedContainer.style.top = `${clickedRect.top}px`;
      clickedContainer.style.transition = 'transform 0.6s ease';
      clickedContainer.style.transform = `translate(${deltaXToCenter}px, ${deltaYToCenter}px)`;

      wrapper.classList.add('hover-active');
    }, 600);

    setTimeout(() => {
      icon.style.display = 'none';
      loader.style.display = 'flex';
    }, 1200);

    setTimeout(() => {
      clickedContainer.classList.add('expand');
    }, 1800);

    setTimeout(() => {
      const url = clickedContainer.getAttribute('data-url');
      window.location.href = url;
    }, 3000);
  });
});
