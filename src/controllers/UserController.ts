import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    { name: 'thais', email: 'thais@gmail.com' },
];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async createUser(req: Request, res: Response){
        const emailService = new EmailService();
        
        emailService.sendMail({
            to: { 
                name: 'Thais Rocha', 
                email: 'thais@gmail.com' 
            },
            message: { 
                subject: 'Bem-vindo ao sistema', 
                body: 'Seja bem-vindo' 
            }
        });
        return res.send();
    }
};