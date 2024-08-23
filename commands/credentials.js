import inquirer from 'inquirer';
import ora from 'ora';
import { savePasswords, loadPasswords } from '../utils/fileManager.js';
import { encrypt, decrypt } from '../utils/encryption.js';
import chalk from 'chalk';

async function addPassword() {
    const { site, username, password } = await inquirer.prompt([
        { type: 'input', name: 'site', message: 'Enter site name:' },
        { type: 'input', name: 'username', message: 'Enter username:' },
        { type: 'password', name: 'password', message: 'Enter password:' }
    ]);

    const encryptedPassword = encrypt(password);
    const passwords = loadPasswords();
    passwords.push({ site, username, password: encryptedPassword });
    savePasswords(passwords);

    console.log(chalk.green('Password added successfully.'));
}

async function listPasswords() {
    const adminPassword = await inquirer.prompt([
        { type: 'password', name: 'adminPassword', message: 'Enter the admin password:' }
    ]);

    const validAdminPassword = 'admin'; // Senha admin de exemplo

    if (adminPassword.adminPassword !== validAdminPassword) {
        console.log(chalk.red('Invalid admin password.'));
        return;
    }

    const spinner = ora('Fetching passwords...').start();

    setTimeout(() => {
        const passwords = loadPasswords();
        const results = passwords.map(p => ({
            site: p.site,
            username: p.username,
            password: decrypt(p.password),
        }));

        spinner.stop();

        if (results.length === 0) {
            console.log(chalk.yellow('No passwords found.'));
        } else {
            console.table(results);
        }
    }, 1000);
}

async function updatePassword() {
    const passwords = loadPasswords();
    const { site } = await inquirer.prompt([
        {
            type: 'list',
            name: 'site',
            message: 'Select site to update password:',
            choices: passwords.map(p => p.site)
        }
    ]);

    const { username, newPassword } = await inquirer.prompt([
        { type: 'input', name: 'username', message: 'Enter new username:' },
        { type: 'password', name: 'newPassword', message: 'Enter new password:' }
    ]);

    const updatedPasswords = passwords.map(p =>
        p.site === site ? { site, username, password: encrypt(newPassword) } : p
    );
    savePasswords(updatedPasswords);

    console.log(chalk.green('Password updated successfully.'));
}

async function removePassword() {
    const passwords = loadPasswords();
    const { site } = await inquirer.prompt([
        {
            type: 'list',
            name: 'site',
            message: 'Select site to remove:',
            choices: passwords.map(p => p.site)
        }
    ]);

    const updatedPasswords = passwords.filter(p => p.site !== site);
    savePasswords(updatedPasswords);

    console.log(chalk.green('Password removed successfully.'));
}

async function findPassword() {
    const adminPassword = await inquirer.prompt([
        { type: 'password', name: 'pass', message: 'Enter the admin password:' }
    ]);

    const validAdminPassword = 'admin'; // Senha admin de exemplo

    if (adminPassword.pass !== validAdminPassword) {
        console.log(chalk.red('Invalid admin password.'));
        return;
    }

    const search = await inquirer.prompt([
        { type: 'input', name: 'keyword', message: 'Enter search keyword:' }
    ]);

    if (!search.keyword) {
        console.log(chalk.red('Keyword not provided.'));
        findPassword();
        return;
    }

    const { keyword } = search;

    const spinner = ora('Searching for passwords...').start();

    setTimeout(() => {
        const passwords = loadPasswords();
        const results = passwords.filter(p =>
            p.site.toLowerCase().includes(keyword.toLowerCase()) ||
            p.username.toLowerCase().includes(keyword.toLowerCase())
        ).map(p => ({
            site: p.site,
            username: p.username,
            password: decrypt(p.password),
        }));

        spinner.stop();

        if (results.length === 0) {
            console.log(chalk.yellow('No passwords found matching your criteria.'));
        } else {
            console.table(results);
        }
    }, 1000);
}

// Exportar todas as funções como propriedades do objeto default
export default {
    addPassword,
    listPasswords,
    updatePassword,
    removePassword,
    findPassword
};
