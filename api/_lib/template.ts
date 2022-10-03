import { sanitizeHTML } from './sanitizer';
import { ParsedRequest } from './types';

function getCSS(theme: string, fontSize: string) {
    let background = 'white';
    let foreground = 'black';
    let radial = 'lightgray';

    if (theme === 'dark') {
        background = 'black';
        foreground = 'white';
        radial = 'dimgray';
    }
    return `

    body {
        background: ${background};
        background-image: radial-gradient(circle at 25px 25px, ${radial} 2%, transparent 0%), radial-gradient(circle at 75px 75px, ${radial} 2%, transparent 0%);
        background-size: 100px 100px;
        height: 100vh;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .logo-wrapper {
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        justify-items: center;
    }

    .logo {
        margin: 0 75px;
    }

    .spacer {
        margin: 150px;
    }

    .heading {
        font-family: 'Inter', sans-serif;
        font-size: ${sanitizeHTML(fontSize)};
        font-style: normal;
        color: ${foreground};
        line-height: 1.8;
    }`;
}

export function getHTML(parsedReq: ParsedRequest) {
    const { theme, fontSize, username, profile  } = parsedReq;
    return `<!DOCTYPE html>
<html>
    <meta charset="utf-8">
    <title>Generated Twitter Profile NFT</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
        ${getCSS(theme, fontSize)}
    </style>
    <body>
        <div>
            <div class="spacer">
            <div class="logo-wrapper">
                ${getImage(profile[0])}
            </div>
            <div class="spacer">
            <div class="heading">
                ${sanitizeHTML(username)}
            </div>
        </div>
    </body>
</html>`;
}

function getImage(src: string, width ='auto', height = '225') {
    return `<img
        class="logo"
        alt="generated image"
        src="${sanitizeHTML(src)}"
        width="${sanitizeHTML(width)}"
        height="${sanitizeHTML(height)}"
    />`
}


