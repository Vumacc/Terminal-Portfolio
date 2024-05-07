let input = document.querySelector('#terminal-input');
let content = document.querySelector('#terminal-content');
const o = '&nbsp;'
let helpCmds = [
    `<br>`,
    `<strong>------ Utility ------</strong><br>`,
    `<span id='faint-glow-purple' class='term-purple'>help</span> ${o}${o}${o}${o}${o}${o}${o}${o} Displays this message <br>`,
    `<span id='faint-glow-purple' class='term-purple'>welcome</span> ${o}${o}${o}${o}${o} Displays the welcome message <br>`,
    `<span id='faint-glow-purple' class='term-purple'>info</span> ${o}${o}${o}${o}${o}${o}${o}${o} Information about myself <br>`,
    `<span id='faint-glow-purple' class='term-purple'>projects</span> ${o}${o}${o}${o} Some of my major projects <br>`,
    `<span id='faint-glow-purple' class='term-purple'>skills</span> ${o}${o}${o}${o}${o}${o} Shows the skills I have <br>`,
    `<span id='faint-glow-purple' class='term-purple'>contact</span> ${o}${o}${o}${o}${o} Displays information of my contacts <br>`,
    `<span id='faint-glow-purple' class='term-purple'>source</span> ${o}${o}${o}${o}${o}${o} Gives the Github repository with the source code <br>`,
    `<span id='faint-glow-purple' class='term-purple'>clear</span> ${o}${o}${o}${o}${o}${o}${o} Clears the terminal <br>`,
    `<br>`,
    `<strong>------ Fun ------</strong><br>`,
    `<span id='faint-glow-purple' class='term-purple'>whoami</span> ${o}${o}${o}${o}${o}${o} What\'s your name? <br>`,
    `<span id='faint-glow-purple' class='term-purple'>sudo</span> ${o}${o}${o}${o}${o}${o}${o}${o} ??? <br>`
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