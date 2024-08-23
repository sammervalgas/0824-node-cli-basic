import chalk from 'chalk';
import { showBanner } from './config/cliConfig.js';
import { choiceActions } from './config/cliConfig.js';

async function initCli() {
    showBanner();

    const action = await choiceActions();

    if (action) {
        try {
            // Importar o módulo de senhas
            const commandModule = await import('./commands/credentials.js');
            
            // Obter a função correspondente
            const commandFunction = commandModule.default[action];
            
            if (typeof commandFunction === 'function') {
                // Se a função for encontrada, execute-a
                await commandFunction();
            } else {
                console.error(chalk.red('Invalid action.'));
            }
        } catch (error) {
            console.error(chalk.red(`Error loading command module: ${error.message}`));
        }
    } else {
        console.log(chalk.red('Invalid action selected.'));
    }
}

initCli();
