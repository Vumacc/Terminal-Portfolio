let input = document.querySelector('#terminal-input');
let content = document.querySelector('#terminal-content');

const o = '&nbsp;'
const helpCmds = [
    `<strong>------ Utility ------</strong><br>`,
    `<span id='faint-glow-purple' class='term-purple'>help</span>     ${o}${o}${o}${o}${o}${o}${o}${o}  Displays this message <br>`,
    `<span id='faint-glow-purple' class='term-purple'>welcome</span>  ${o}${o}${o}${o}${o}              Displays the welcome message <br>`,
    `<span id='faint-glow-purple' class='term-purple'>info</span>     ${o}${o}${o}${o}${o}${o}${o}${o}  Information about myself <br>`,
    `<span id='faint-glow-purple' class='term-purple'>projects</span> ${o}${o}${o}${o}                  Some of my major projects <br>`,
    `<span id='faint-glow-purple' class='term-purple'>skills</span>   ${o}${o}${o}${o}${o}${o}          Shows the skills I have <br>`,
    `<span id='faint-glow-purple' class='term-purple'>contact</span>  ${o}${o}${o}${o}${o}              Displays information of my contacts <br>`,
    `<span id='faint-glow-purple' class='term-purple'>source</span>   ${o}${o}${o}${o}${o}${o}          Redirects to this project's Github repository <br>`,
    `<span id='faint-glow-purple' class='term-purple'>clear</span>    ${o}${o}${o}${o}${o}${o}${o}      Clears the terminal <br>`,
    `<br>`,
    `<strong>------ Fun ------</strong><br>`,
    `<span id='faint-glow-purple' class='term-purple'>whoami</span>   ${o}${o}${o}${o}${o}${o}          What\'s your name? <br>`,
    `<span id='faint-glow-purple' class='term-purple'>sudo</span>     ${o}${o}${o}${o}${o}${o}${o}${o}  ??? <br>`
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
    `Welcome to my portfolio. (Version 1.0.0) <br>`,
    `<br>`,
    `Type <span id="term-green" class="faint-glow-green">'help'</span> for the list of availible commands. <br>`,
    `Type <span id="term-green" class="faint-glow-green">'source'</span> to view the Github repository.`
];

input.addEventListener('keydown', HandleCommand);

function TermEcho(text, delay) {
    let index = 0;
    content.innerHTML += '<br>';
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

    }
}

/* No worky :(
function ScrollDown() {
    document.getElementById('#bottom').scrollIntoView();
    window.setTimeout( function () { top(); }, 2000 );
};
*/

function ExecuteCommand(command) {
    switch (command) {
        case 'help':
            TermEcho(helpCmds, 25);
            break;

        case 'welcome':
            TermEcho(welcomeMsg, 25)
            break;

        case 'info':

            break;

        case 'projects':

            break;

        case 'skills':

            break;

        case 'contact':

            break;

        case 'source':
            TermEcho('Redirecting to Github...', 15)
            window.location.href = 'https://github.com/Vumacc/Terminal-Portfolio';
            break;

        case 'clear':

            break;

        case 'whoami':
            TermEcho(`visitor`, 15)
            break;

        case 'sudo':

            break;

        default:
            content.innerHTML += `Unrecognised command: \`${command}\``;
            break;
    }
}