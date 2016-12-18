const el = document.createElement("script");
el.innerHTML = "Object.defineProperty(window, 'bbcredirection', { writeable: false, value: null })";
document.documentElement.appendChild(el);
