export class AccountForm {
  static async onload(context: Xrm.Events.EventContext): Promise<void> {
    context
      .getFormContext()
      .getAttribute("name")
      .addOnChange(() => {
        console.log("name onchange");
      });
  }
}
