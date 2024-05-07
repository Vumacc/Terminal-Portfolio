let input = document.querySelector('#terminal-input');
let content = document.querySelector('#terminal-content');
const o = '&nbsp;' // Creates blank space
let helpCmds = [
    `------ Utility ------ <br>`,
    `help ${o}${o}${o}${o}${o}${o}${o}${o} Displays this message <br>`,
    `welcome ${o}${o}${o}${o}${o} Displays the welcome message <br>`,
    `info ${o}${o}${o}${o}${o}${o}${o}${o} Information about myself <br>`,
    `projects ${o}${o}${o}${o} Some of my major projects <br>`,
    `skills ${o}${o}${o}${o}${o}${o} Shows the skills I have <br>`,
    `contact ${o}${o}${o}${o}${o} Displays information of my contacts <br>`,
    `source ${o}${o}${o}${o}${o}${o} Gives the Github repository with the source code <br>`,
    `clear ${o}${o}${o}${o}${o}${o}${o} Clears the terminal <br>`,
    `<br>`,
    `------ Fun ------ <br>`,
    `whoami ${o}${o}${o}${o}${o}${o} What\'s your name? <br>`,
    `sudo ${o}${o}${o}${o}${o}${o}${o}${o} ??? <br>`
];

input.addEventListener('keydown', HandleCommand);

function TermEcho(text, delay) {
    let index = 0;
    const inputInterval = setInterval(function() {
        content.innerHTML += text[index];
        index++;
        if (index === text.length) {
            clearInterval(inputInterval);
        }
    }, delay);
}

function HandleCommand(event) {
    if(event.key === 'Enter') {
        const command = input.value.trim();
        input.value = '';
        content.innerHTML += `<br><span id="term-orange">visitor</span>@<span id="term-green">github.vumacc.io</span>:~$ ${command} <br>`;
        ExecuteCommand(command);

        ScrollDown();

    }
}

function ScrollDown() {
    document.getElementById('#bottom').scrollIntoView();
    window.setTimeout( function () { top(); }, 2000 );
};

function ExecuteCommand(command) {
    switch (command) {
        case 'help':
            TermEcho(helpCmds, 25);
            break;
        default:
            content.innerHTML += `Unrecognised command: \`${command}\``;
            break;
    }
}