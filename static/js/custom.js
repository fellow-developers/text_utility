"use strict";
const btn = document.getElementById("btnCopy");
btn.addEventListener("click", () => {
    const copyText = document.getElementById("result");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
});

//# sourceMappingURL=custom.js.map
