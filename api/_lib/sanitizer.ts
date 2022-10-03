const entityMap: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
};

export function sanitizeHTML(html: string) {
    return String(html).replace(/[&<>"'\/]/g, key => entityMap[key]);
}

