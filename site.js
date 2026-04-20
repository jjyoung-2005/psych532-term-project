(function () {
  const page = document.body.dataset.page; // "home", "background", etc.
  if (!page) return;

  const hereNode = document.querySelector(`.node[data-node="${page}"]`);
  if (!hereNode) return;

  hereNode.classList.add("is-here");

  const meta = hereNode.querySelector(".node-meta");
  if (meta) meta.textContent = "You are here";
})();