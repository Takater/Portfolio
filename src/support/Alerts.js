export default function alerts(lang, name, messageText) {
    const language = lang;
    const alert_name = name;
    let message = ''

    // Get message for alert
    switch (alert_name) {

        // No name found
        case 'no-name':
            if(language === 'en') {
                message = "I'm sorry, the name in the form seems to be missing. Try again, please.";
            } 
            else {
                message = "Me desculpe, o nome no formulário parece estar faltando. Tente novamente, por favor."
            }
            break;

        // No email found
        case 'no-email':
            if(language === 'en') {
                message = "I'm sorry, your e-mail seems to be missing in the form. Try again, please.";
            } 
            else {
                message = "Me desculpe, o seu email parece estar faltando no formulário. Tente novamente, por favor."
            }
            break;

        // No Phone found
        case 'no-phone':
            if(language === 'en') {
                message = "Please, insert a phone number!";
            } 
            else {
                message = "Por favor, insera um número de telefone!"
            }
            break;

        // No option selected
        case 'no-option':
            if(language === 'en') {
                message = 'Please, select at least one option'
            }
            else {
                message = 'Por favor, selecione ao menos uma opção'
            }
            break;
        
        // Empty description
        case 'no-description':
            if(language === 'en'){
                message = 'Please, write a short description of what you wish'
            }
            else {
                message = 'Por favor, escreva uma descrição curta do que deseja'
            }
            break;

        default:
            // Custom message, if so
            if(language === 'en') {
                message = messageText.eng;
            } 
            else {
                message = messageText.pt;
            }
            break;
    }

    return alert(message);
}