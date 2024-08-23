import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';

export function showBanner() {
    console.log(
        chalk.blue(
            figlet.textSync('Node CLI Basic', { horizontalLayout: 'full' })
        )
    );
}

export async function choiceActions() {
    const choices = [
        'addPassword',
        'listPasswords',
        'updatePassword',
        'removePassword',
        'findPassword'
    ];

    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'Choose an action:',
            choices: choices
        }
    ]);

    return action;
}
