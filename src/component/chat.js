function chatbot() {
    return {
        chatOpen: false,
        typing: false,
        showThemes: false,
        theme: 'primary',
        messages: [],
        userInput: '',
        quickReplies: ['Comment ça va ?', 'Que puis-je faire pour vous ?', 'Parlez-moi de vous'],
        emojis: ['😊', '😂', '😍', '🥺', '😡', '😅', '😎', '😜'],
        hasNewMessage: false,

        // Fonction pour envoyer un message
        sendMessage() {
            if (this.userInput.trim() === '') return;
            
            this.messages.push({
                sender: 'user',
                text: this.userInput,
                time: new Date().toLocaleTimeString(),
            });

            this.typing = true;
            this.userInput = '';
            setTimeout(() => {
                this.typing = false;
                this.messages.push({
                    sender: 'bot',
                    text: 'Je suis ici pour vous aider. Que puis-je faire pour vous ?',
                    time: new Date().toLocaleTimeString(),
                    actions: ['Répondre à une question', 'Demander des ressources', 'Je veux parler à quelqu\'un']
                });
            }, 1500);
        },

        // Fonction pour gérer les actions sur les messages du bot
        handleAction(action) {
            this.messages.push({
                sender: 'user',
                text: action,
                time: new Date().toLocaleTimeString(),
            });

            this.typing = true;
            setTimeout(() => {
                this.typing = false;
                this.messages.push({
                    sender: 'bot',
                    text: `Vous avez choisi l'option : ${action}.`,
                    time: new Date().toLocaleTimeString(),
                });
            }, 1500);
        },

        // Fonction pour envoyer une réponse rapide
        sendQuickReply(reply) {
            this.messages.push({
                sender: 'user',
                text: reply,
                time: new Date().toLocaleTimeString(),
            });

            this.typing = true;
            setTimeout(() => {
                this.typing = false;
                this.messages.push({
                    sender: 'bot',
                    text: `Réponse rapide reçue : ${reply}`,
                    time: new Date().toLocaleTimeString(),
                });
            }, 1500);
        }
    }
}
