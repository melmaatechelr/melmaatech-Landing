import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrainingEnquiry() {
  const [draft, setDraft] = useState("");
  const [status, setStatus] = useState("");

  function prepareEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const body = [
      "Industrial Training enquiry — November 2026",
      `Name: ${values.get("name")}`,
      `Email: ${values.get("email")}`,
      `Phone: ${values.get("phone") || "Not provided"}`,
      `College / branch: ${values.get("college") || "Not provided"}`,
      `Preferred mode: ${values.get("mode")}`,
      "", String(values.get("message") || "Please share the program details and next steps."),
    ].join("\n");
    setDraft(body);
    setStatus("Your draft is ready. Open your email app, review it and send it to our team.");
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setStatus("Copied. Paste your enquiry into an email to support@melmaa.com.");
    } catch {
      setStatus("Copy is unavailable in this browser. Select and copy the draft below.");
    }
  }

  return (
    <section id="training-enquiry" className="enquiry-panel" aria-labelledby="enquiry-title">
      <div>
        <p className="eyebrow">LET’S TALK ABOUT YOUR NEXT STEP</p>
        <h2 id="enquiry-title" className="text-3xl sm:text-4xl mt-3 mb-4">Your training journey starts with a conversation.</h2>
        <p className="text-slate-600 mb-6">Ask about the November 2026 diploma batch, the learning format, fees or joining requirements.</p>
        <ol className="space-y-4 text-sm text-slate-600 mb-8">
          {["Tell us what you would like to know.", "Review your enquiry and send it from your email app.", "Discuss program details and next steps with the team."].map((step, i) => (
            <li key={step} className="flex items-start gap-3"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-800 font-semibold">{i + 1}</span><span>{step}</span></li>
          ))}
        </ol>
        <a className="inline-flex items-center gap-2 font-semibold text-indigo-700 py-3" href="tel:+917997280049"><Phone size={18} />Prefer to talk? 7997280049</a>
        <p className="text-sm text-slate-500">This form prepares an email draft. It does not send or store your enquiry on the website.</p>
      </div>
      <form onSubmit={prepareEnquiry} className="enquiry-form" onChange={() => { setDraft(""); setStatus(""); }}>
        <div className="grid sm:grid-cols-2 gap-4">
          <label>Full name <span aria-hidden="true">*</span><input name="name" autoComplete="name" required minLength={2} maxLength={100} /></label>
          <label>Email address <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" required maxLength={200} /></label>
          <label>Phone <span className="font-normal text-slate-500">(optional)</span><input name="phone" type="tel" autoComplete="tel" maxLength={30} /></label>
          <label>College / branch <span className="font-normal text-slate-500">(optional)</span><input name="college" maxLength={150} /></label>
        </div>
        <label>Preferred training mode<select name="mode" defaultValue="Please help me choose"><option>Please help me choose</option><option>Online</option><option>Offline</option></select></label>
        <label>What would you like to know?<textarea name="message" rows={4} maxLength={1500} placeholder="Tell us your questions about the program…" /></label>
        <Button type="submit" className="w-full min-h-12 gap-2 bg-indigo-700 hover:bg-indigo-800">Prepare enquiry <ArrowUpRight size={18} /></Button>
        {draft && <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 space-y-3">
          <p className="flex gap-2 items-center font-semibold text-indigo-900"><Check size={18} />Review your email draft</p>
          <textarea aria-label="Prepared enquiry email" readOnly value={draft} rows={8} />
          <div className="flex flex-wrap gap-3">
            <Button asChild className="gap-2"><a href={`mailto:support@melmaa.com?subject=${encodeURIComponent("Industrial Training enquiry — November 2026")}&body=${encodeURIComponent(draft)}`}><Mail size={16} />Open email app</a></Button>
            <Button type="button" variant="outline" onClick={copyDraft} className="gap-2"><Copy size={16} />Copy enquiry</Button>
          </div>
        </div>}
        <p role="status" className="text-sm text-slate-600">{status}</p>
      </form>
    </section>
  );
}
