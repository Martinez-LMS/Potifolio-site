
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = "xxxxxartigo157xxxxxx@gmail.com"; // Email fixo para receber as mensagens

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();
    console.log("Dados recebidos:", { email, subject, message });

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes (email, assunto ou mensagem)." },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail], // Envia apenas para o Gmail configurado
      replyTo: email, // Permite responder diretamente para quem enviou
      subject: `Contato do Portfólio: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #3b82f6, #8b5cf6); padding: 20px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🚀 Nova Mensagem do Portfólio!</h1>
          </div>
          
          <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin: 20px 0; border: 1px solid #e2e8f0;">
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
              <span style="background: #3b82f6; color: white; padding: 8px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-right: 10px;">DE</span>
              <span style="font-size: 16px; font-weight: 600; color: #1e293b;">${email}</span>
            </div>
            
            <div style="display: flex; align-items: center; margin-bottom: 15px;">
              <span style="background: #8b5cf6; color: white; padding: 8px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-right: 10px;">ASSUNTO</span>
              <span style="font-size: 16px; font-weight: 600; color: #1e293b;">${subject}</span>
            </div>
            
            <div style="margin-top: 20px;">
              <span style="background: #06b6d4; color: white; padding: 8px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; display: inline-block; margin-bottom: 15px;">MENSAGEM</span>
              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <p style="margin: 0; line-height: 1.6; color: #374151; font-size: 15px;">
                  ${message.replace(/\n/g, '<br>')}
                </p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding: 20px; background: #f1f5f9; border-radius: 8px;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              📧 Esta mensagem foi enviada através do formulário de contato do portfólio de Leonardo Martinez
            </p>
            <p style="color: #64748b; font-size: 12px; margin: 10px 0 0 0;">
              💡 Você pode responder diretamente para este email para entrar em contato com ${email}
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email enviado com sucesso:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
