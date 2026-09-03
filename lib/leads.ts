export type LeadData = { fullName: string; phone: string; frequency: string; goal: string };

export async function submitLead(data: LeadData): Promise<void> {
  // Ponto de integração futuro: enviar para uma API segura e, depois, iniciar o fluxo de WhatsApp.
  void data;
  await new Promise((resolve) => setTimeout(resolve, 900));
}