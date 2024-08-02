var input = document.getElementById('terminal-input');
var content = document.getElementById('terminal-content');

const o = '&nbsp;';
const commandList = [
    'help',
    'welcome',
    'info',
    'projects',
    'email',
    'source',
    'clear',
    'whoami',
    'echo',
    'pages',
];
const helpCmds = [
    `<strong>------ Utility ------</strong><br>`,
    `<span id='faint-glow-purple' class='term-purple'>help</span>     ${o}${o}${o}${o}${o}${o}${o}${o}   Displays this message <br>`,
    `<span id='faint-glow-purple' class='term-purple'>welcome</span>  ${o}${o}${o}${o}${o}               Displays the welcome message <br>`,
    `<span id='faint-glow-purple' class='term-purple'>info</span>     ${o}${o}${o}${o}${o}${o}${o}${o}   Information about myself <br>`,
    `<span id='faint-glow-purple' class='term-purple'>projects</span> ${o}${o}${o}${o}                   Some of my coding projects <br>`,
    `<span id='faint-glow-purple' class='term-purple'>email</span>    ${o}${o}${o}${o}${o}${o}${o}       Send me an email <br>`,
    `<span id='faint-glow-purple' class='term-purple'>source</span>   ${o}${o}${o}${o}${o}${o}           Redirects to this project's Github repository <br>`,
    `<span id='faint-glow-purple' class='term-purple'>clear</span>    ${o}${o}${o}${o}${o}${o}${o}       Clears the terminal <br>`,
    `<br>`,
    `<strong>------ Fun ------</strong><br>`,
    `<span id='faint-glow-purple' class='term-purple'>whoami</span>   ${o}${o}${o}${o}${o}${o}             What\'s your name? <br>`,
    `<span id='faint-glow-purple' class='term-purple'>echo</span>    ${o}${o}${o}${o}${o}${o}${o}${o}      Will repeat what you say <br>`,
    `<span id='faint-glow-purple' class='term-purple'>pages</span>    ${o}${o}${o}${o}${o}${o}${o}         More knicknacks`,
];
const testHelpCmds = [
    // TODO :: Add all the testing commands here
];
const welcomeMsg = [
    `<span id="banner-glow">__ ${o}${o} __<br></span>`,
    `<span id="banner-glow">| | ${o}/ /__  __${o} ____ ___${o}${o} ____ _ _____<br></span>`,
    `<span id="banner-glow">| | / // / / // __ \`__ \\ / __ \`// ___/<br></span>`,
    `<span id="banner-glow">| |/ // /_/ // / / / / // /_/ // /__<br></span>`,
    `<span id="banner-glow">|___/ \\____//_/ /_/ /_/ \\__,_/ \\___/<br></span>`,
    `</span>`,
    `<br>`,
    `<br>`,
    `Welcome to my portfolio. (Version 1.0.8) <br>`,
    `<br>`,
    `Type <span id="term-green" class="faint-glow-green">'help'</span> for the list of availible commands. <br>`,
    `Type <span id="term-green" class="faint-glow-green">'source'</span> to view the Github repository.<br>`,
];
const infoMsg = [
    `<div class="flex info-border">
        <div class="info-left">
            <img src="https://cdn.discordapp.com/avatars/1247240273218768898/a97fefc31e28505fcef35668ec96f651.webp?size=4096" width="200" height="200" style="margin-right: 20px; border-radius: 20px;">
        </div>
        <div class="info-right">
            <br>
            VUMACC<br>
            ----------<br>
            Hello! I'm a self-taught web developer<br>
            and programmer.
            <br><br>
            I mainly use Javascript and C#,<br>
            but I am also learning C++ and<br>
            Typescript aswell.
        </div>
    </div>`,
];
const projectsMsg = [
    `<a href="https://github.com/Vumacc/Notepad" target="_blank" class="item">Notepad</a> ${o}${o}${o}${o}${o}${o}${o}${o}${o}${o}${o}${o}${o}${o}${o}${o}${o}${o} Generic notepad made in C# (DEVELOPMENT CURRENTLY HALTED)<br>`,
    `<a href="https://github.com/Vumacc/Connection-Catcher" target="_blank" class="item">Connection Catcher</a> ${o}${o}${o}${o}${o}${o}${o} Catches incoming connections from other clients made with C#<br>`,
    `<a href="https://github.com/Vumacc/Terminal-Portfolio" target="_blank" class="item">Terminal Portfolio</a> ${o}${o}${o}${o}${o}${o}${o} A terminal styled portfolio made using HTML, CSS and Javascript`,
    `<br><br>`,
    `3 total file(s)`,
];
const emailMsg = [
    `<a href="mailto:ays7.vumacc@gmail.com">ays7.vumacc@gmail.com</a>`,
];
const sourceMsg = [
    `Redirecting `,
    `to `,
    `Github...<br>`,
    `Click <a href="https://github.com/Vumacc/Terminal-Portfolio" target="_blank">here</a> `,
    `if you have not been redirected.`,
];
const whoAmIMsg = [`v`, `i`, `s`, `i`, `t`, `o`, `r`];
const pagesMsg = [
    `<a href="/" target="_blank" class="item">gui</a>   ${o}${o}${o}${o}${o}${o}${o}${o}${o}   Redirects to my other portfolio (This link will eventually work) <br>`,
    `<a onclick="pages.quotes()" class="item pages-item"><u style="text-decoration-style: dashed;">quotes</u></a>   ${o}${o}${o}${o}${o}${o}   Some quotes from cool people <br>`,
    `<a onclick="pages.settings()" class="item"><u style="text-decoration-style: dashed;">settings</u></a>   ${o}${o}${o}${o}   It's just some settings`,
];

input.addEventListener('keydown', HandleCommands);

const people = {
    msg: [],
    dontmindme: async function () {
        msg = [
            `<div class="flex">
                <div>
                    <img src="https://avatars.githubusercontent.com/u/124188707?v=4" width=200px style="border-radius: 25%">
                </div>
                <div class="info-right">
                    <br>
                    <h1>DONTMINDME</h1>
                    <h3>This guy is like 4"11' :sob:</h3>
                    <br>
                    <span class="quote">"vumacc is 100% a homosexual"</span>
                </div>
            </div>`,
        ];
        let str = content.innerHTML;
        let result = str.slice(0, -674);
        content.innerHTML = await result;
        terminal.echo(msg, 25, true, true, true);
        ScrollTo('bottom');
    },
    anshiuru: async function () {
        msg = [
            `<div class="flex">
                <div>
                    <img src="https://cdn.discordapp.com/avatars/1004705916677009470/2f756461df42ffebd3c0abc06d5c6474.webp?size=4096" width=200px style="border-radius: 25%">
                </div>
                <div class="info-right">
                    <br>
                    <h1>ANSHIURU</h1>
                    <h3>Average discord moderator</h3>
                    <br>
                    <span class="quote">"my father came back with the milk unlike Vumacc's father"</span>
                </div>
            </div>`,
        ];
        let str = content.innerHTML;
        let result = str.slice(0, -674);
        content.innerHTML = await result;
        terminal.echo(msg, 25, true, true, true);
        ScrollTo('bottom');
    },
    zaynedrift: async function () {
        msg = [
            `<div class="flex">
                <div>
                    <img src="https://avatars.githubusercontent.com/u/146078609?v=4" width=200px style="border-radius: 25%">
                </div>
                <div class="info-right">
                    <br>
                    <h1>ZAYNEDRIFT</h1>
                    <h3>Competitive dumbass</h3>
                    <br>
                    <span class="quote">"Miau :3 ich bin eine katze und ich hab ein verlangen nach <b>USB MIKRO TYP B GERÄTEN</b>"</span>
                </div>
            </div>`,
        ];
        let str = content.innerHTML;
        let result = str.slice(0, -674);
        content.innerHTML = await result;
        terminal.echo(msg, 25, true, true, true);
        ScrollTo('bottom');
    },
    creator: async function () {
        msg = [
            `<div class="flex">
                <div>
                    <img src="https://cdn.discordapp.com/avatars/1027982521184563252/e0c59f9a2dce010c659f55682dc07576.webp?size=4096" width=200px style="border-radius: 25%">
                </div>
                <div class="info-right">
                    <br>
                    <h1>CREATOR</h1>
                    <h3>Crown guy</h3>
                    <br>
                    <span class="quote">"Very cool"</span>
                </div>
            </div>`,
        ];
        let str = content.innerHTML;
        let result = str.slice(0, -674);
        content.innerHTML = await result;
        terminal.echo(msg, 25, true, true, true);
        ScrollTo('bottom');
    },
    shadow: async function () {
        msg = [
            `<div class="flex">
                <div>
                    <img src="https://cdn.discordapp.com/avatars/434486221171851264/27377be2b2c090eef340ef3708c93099.webp?size=4096" width=200px style="border-radius: 25%">
                </div>
                <div class="info-right">
                    <br>
                    <h1>SHADOW</h1>
                    <h3>CEO of Brainrot</h3>
                    <br>
                    <span class="quote">"I rizz, I mew, I edge, but when I see you, I goon."</span>
                </div>
            </div>`,
        ];
        let str = content.innerHTML;
        let result = str.slice(0, -674);
        content.innerHTML = await result;
        terminal.echo(msg, 25, true, true, true);
        ScrollTo('bottom');
    },
    maniq: async function () {
        msg = [
            `<div class="flex">
                <div>
                    <img src="https://cdn.discordapp.com/avatars/1123676241304764627/e0e7bca0f216fb6ec55048f2e7b6b204.webp?size=4096" width=200px style="border-radius: 25%">
                </div>
                <div class="info-right">
                    <br>
                    <h1>MANIQ</h1>
                    <h3>Builtlike a brick wall</h3>
                    <br>
                    <span class="quote">"ok"</span>
                </div>
            </div>`,
        ];
        let str = content.innerHTML;
        let result = str.slice(0, -674);
        content.innerHTML = await result;
        terminal.echo(msg, 25, true, true, true);
        ScrollTo('bottom');
    },
    dumby: async function () {
        msg = [
            `<div class="flex">
                <div>
                    <img src="https://cdn.discordapp.com/avatars/1082398971923804271/482b48c7d299ce8f6ef7d91984805417.webp?size=4096" width=200px style="border-radius: 25%">
                </div>
                <div class="info-right">
                    <br>
                    <h1>DUMBY</h1>
                    <h3>Gamblecore</h3>
                    <br>
                    <span class="quote">"Make money."</span>
                </div>
            </div>`,
        ];
        let str = content.innerHTML;
        let result = str.slice(0, -674);
        content.innerHTML = await result;
        terminal.echo(msg, 25, true, true, true);
        ScrollTo('bottom');
    },
};
const pages = {
    return: function () {
        alert('Lorem Ipsum');
    },
    quotes: async function () {
        const quotesMsg = [
            `<a onclick="people.dontmindme()"><u style="text-decoration-style: dashed;">Dontmindme<br></u></a>`,
            `<a onclick="people.anshiuru()"><u style="text-decoration-style: dashed;">Anshiuru<br></u></a>`,
            `<a onclick="people.zaynedrift()"><u style="text-decoration-style: dashed;">Zaynedrift<br></u></a>`,
            `<a onclick="people.creator()"><u style="text-decoration-style: dashed;">Creator<br></u></a>`,
            `<a onclick="people.shadow()"><u style="text-decoration-style: dashed;">Shadow<br></u></a>`,
            `<a onclick="people.maniq()"><u style="text-decoration-style: dashed;">Maniq<br></u></a>`,
            `<a onclick="people.dumby()"><u style="text-decoration-style: dashed;">Dumby</u></a>`,
        ];
        let str = content.innerHTML;
        let result = str.slice(0, -477);
        content.innerHTML = await result;
        terminal.echo(quotesMsg, 25, false, true, true);
        ScrollTo('bottom');
    },

    settings: async function () {
        const settingsPage = [`Settings page is in development :3`];
        let str = content.innerHTML;
        let result = str.slice(0, -477);
        content.innerHTML = await result;
        terminal.echo(settingsPage, 25, false, true, true);
        ScrollTo('bottom');
    },
};

const terminal = {
    echo: async function (
        text,
        delay,
        startNewLine = true,
        endNewLine = true,
        isAwaited = false,
        inputField = content
    ) {
        let index = 0;
        if (startNewLine) {
            inputField.innerHTML += '<br>';
        }
        terminal.hide();
        terminal.disable();
        const inputInterval = setInterval(async function () {
            if (isAwaited) {
                inputField.innerHTML += await text[index];
            }
            if (!isAwaited) {
                inputField.innerHTML += text[index];
            }
            index++;
            ScrollTo('bottom');
            if (index === text.length) {
                clearInterval(inputInterval);
                if (endNewLine) {
                    content.innerHTML += '<br>';
                }
                terminal.show();
                terminal.enable();
                input.focus();
            }
        }, delay);
    },

    autofocus: function () {
        if (input.hasAttribute('onblur')) {
            input.removeAttribute('onblur');
        } else {
            input.setAttribute('onblur', 'FocusInput()');
        }
    },

    enable: function () {
        document
            .getElementById('terminal-input')
            .removeAttribute('disabled', '');
    },

    disable: function () {
        document.getElementById('terminal-input').setAttribute('disabled', '');
    },

    show: function () {
        document.getElementById('path').removeAttribute('class', 'invisible');
    },

    hide: function () {
        document.getElementById('path').setAttribute('class', 'invisible');
    },
};

function ScrollTo(direction) {
    if (direction === 'top') {
        window.scrollTo(top, 0);
    }
    if (direction === 'bottom') {
        window.scrollTo(0, document.body.scrollHeight);
    }
}

function FocusInput() {
    setTimeout(() => {
        input.focus();
    }, 25);
}

function ExecuteWelcomeCommandOnLoad() {
    let index = 0;
    let text = welcomeMsg;
    let delay = 25;

    const inputInterval = setInterval(function () {
        content.innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(inputInterval);
        }
    }, delay);

    ScrollTo('top');
    document.getElementById('terminal-welcome-loading-text').innerText =
        'welcome';
    document.getElementById('terminal').removeAttribute('class');
    input.removeAttribute('disabled');
    input.focus();
}

function HandleCommands(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim();
        input.value = '';
        content.innerHTML += `<br><span id="term-orange">visitor</span>@<span id="term-green">github.vumacc.io</span>:~$ ${command} <br>`;
        ExecuteCommand(command);
    }
}

function getClosestCommand(command, commandList) {
    let closestCommand = '';
    let minDistance = Infinity;

    for (const cmd of commandList) {
        const distance = levenshteinDistance(
            command.toLowerCase(),
            cmd.toLowerCase()
        );
        if (distance < minDistance) {
            minDistance = distance;
            closestCommand = cmd;
        }
    }

    return closestCommand;
}

function levenshteinDistance(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

function ExecuteCommand(command) {
    const commandParts = command.split(' ');
    const mainCommand = commandParts[0];

    switch (mainCommand) {
        case 'help':
            terminal.echo(helpCmds, 25);
            break;

        case 'welcome':
            terminal.echo(welcomeMsg, 25);
            break;

        case 'info':
            terminal.echo(infoMsg, 25);
            break;

        case 'projects':
            terminal.echo(projectsMsg, 25);
            break;

        case 'email':
            window.location.href = 'mailto:ays7.vumacc@gmail.com';
            terminal.echo(emailMsg, 25);
            break;

        case 'source':
            terminal.echo(sourceMsg, 25);
            window.open('https://github.com/Vumacc/Terminal-Portfolio');
            break;

        case 'clear':
            content.innerHTML = '';
            ScrollTo('top');
            break;

        case 'whoami':
            terminal.echo(whoAmIMsg, 25);
            break;

        case 'echo':
            const commandArgs = commandParts.slice(1).join(' ');
            if (commandArgs == '') {
                terminal.echo('null', 25);
                return;
            }
            terminal.echo(commandArgs, 25);
            break;

        case 'pages':
            terminal.echo(pagesMsg, 25, true, true);
            break;

        // ---
        // Funny testing commands
        // ---

        case 'autofocus':
            terminal.autofocus();
            ScrollTo('bottom');
            break;

        case 'enable':
            terminal.enable();
            ScrollTo('bottom');
            break;

        case 'disable':
            terminal.disable();
            ScrollTo('bottom');
            break;

        case 'show':
            terminal.show();
            ScrollTo('bottom');
            break;

        case 'hide':
            terminal.hide();
            ScrollTo('bottom');
            break;

        default:
            if (command === '') {
                ScrollTo('bottom');
                return;
            } else {
                const closestCommand = getClosestCommand(command, commandList);
                content.innerHTML += `<br>Unrecognised command: \`${command}\`<br>`;
                if (closestCommand) {
                    content.innerHTML += `Did you mean \`${closestCommand}\`?<br>`;
                }
                ScrollTo('bottom');
            }
            break;
    }
}
