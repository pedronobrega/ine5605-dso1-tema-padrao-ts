interface IMailReceipt {
    name: string
    email: string
}

interface IMailMessage {
    subject: string
    body: string
    attachment?: string[]
}

interface IMessageDTO {
    receipt: IMailReceipt
    message: IMailMessage
}

class EmailService {
    sendMail({ receipt, message }: IMessageDTO) {
        console.log(`Email Enviado para ${receipt.name}: ${message.subject}`)
    }
}

export default EmailService