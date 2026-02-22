import os

def create_mini_pdf(filename, text):
    content = (
        "%PDF-1.1\n"
        "1 0 obj\n"
        "<</Type /Catalog /Pages 2 0 R>>\n"
        "endobj\n"
        "2 0 obj\n"
        "<</Type /Pages /Kids [3 0 R] /Count 1>>\n"
        "endobj\n"
        "3 0 obj\n"
        "<</Type /Page /Parent 2 0 R /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> >> >> /Contents 4 0 R>>\n"
        "endobj\n"
        "4 0 obj\n"
        f"<</Length {len(text) + 50}>>\n"
        "stream\n"
        "BT /F1 18 Tf 100 700 Td (" + text + ") Tj ET\n"
        "endstream\n"
        "endobj\n"
        "xref\n"
        "0 5\n"
        "0000000000 65535 f\n"
        "0000000009 00000 n\n"
        "0000000052 00000 n\n"
        "0000000101 00000 n\n"
        "0000000173 00000 n\n"
        "trailer\n"
        "<</Size 5 /Root 1 0 R>>\n"
        "startxref\n"
        "242\n"
        "%%EOF"
    )
    with open(filename, "w", encoding="ascii") as f:
        f.write(content)

os.makedirs("resources", exist_ok=True)
create_mini_pdf("resources/scaling_playbook_2026.pdf", "Meta Scaling Playbook 2026 - Master Document")
create_mini_pdf("resources/creative_script_templates.pdf", "D2C Creative Script Templates - High Converting Hooks")
create_mini_pdf("resources/security_checklist.pdf", "Anti-Ban Security Checklist - Professional Setup")
create_mini_pdf("resources/roas_calculator.pdf", "ROAS & Breakeven Calculator - Scaling Framework")
create_mini_pdf("resources/client_report_template.pdf", "Client Retention Report Template - Agency Toolkit")

print("Valid minimal PDF files generated successfully.")
