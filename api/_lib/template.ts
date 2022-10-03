import { sanitizeHTML } from './sanitizer';
import { ParsedRequest } from './types';

function getCSS(theme: string, fontSize: string) {
    let background = 'white';
    let themeBackground = "https://pbs.twimg.com/profile_banners/841458289191747585/1637644132/1500x500";
    if(theme === "thirdweb"){
        themeBackground = "https://pbs.twimg.com/profile_banners/1382854043433783296/1654550853/1500x500";
    }
    if (theme === 'dark') {
        background = 'black';
    }
    return `

    body {
        background: ${background};
        background-image: url('${themeBackground}'), linear-gradient(#e66465, #9198e5);
        background-repeat: no-repeat;
        background-position-x: center;
        background-position-y: center;
        height: 1000px;
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
        border-radius: 100%;
    }

    .spacer {
        margin: 50px;
    }

    .heading {
        font-family: 'Inter', sans-serif;
        font-size: ${sanitizeHTML(fontSize)};
        font-style: normal;
        color: white;
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
        ${getCSS(theme[0], fontSize)}
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


