# QA prompt — website leads and CRM

Paste everything below the line into a Cursor agent chat (Agent mode, with the browser available). Change `SITE` if you are testing a preview or `http://localhost:3000`.

---

You are doing QA on the Senior Transitions Group website and admin CRM. Use the browser to act like a real visitor, then like the admin. Do not change any code. Report back in plain language.

SITE = https://seniors-transitions.com
Admin login: SITE/admin/login (password is in Vercel env `ADMIN_PASSWORD`; ask me if you don't have it).

Rules:
- Every test lead's name must start with `QA TEST -` and use 503-555-01xx phone numbers and `qa-test@example.com`.
- Before each form submit, wrap `window.fetch` with Runtime.evaluate so you can record the `/api/contacts` status code and response body. A form only passes if the request returned 201 and the page showed the thank-you message. A thank-you message after a non-201 response is a critical failure.
- Stop and tell me if anything asks for payment, a captcha, or a login you don't have.

1. Lead forms. Submit each one twice, once with every field filled and once with only the required fields:
   - /free-consultation
   - /free-family-consultation
   - /contact (try each "inquiry type" at least once across runs)
   - /partner-with-us
   - /refer (both the "Professional Partner" tab and the "Family/Friend" tab)
   Also try submitting with a required field empty and confirm the browser blocks it.

2. Data privacy. While logged out, request SITE/api/contacts, SITE/api/contacts/<any id> with GET, PATCH, and DELETE, and POST SITE/api/contacts/seed. All must return 401. Report the status codes only. Do not print contact data.

3. CRM. Log in and check:
   - Every QA TEST lead from step 1 is in All Contacts with stage "New Lead", the right type, and the message in Notes. For Refer > Family/Friend, the referred family's name must be in Notes.
   - The Dashboard "Recently Added" shows them first and "Needs Follow-Up" includes them.
   - Open one lead: Mark Contacted, edit a field and save, move it through each Pipeline stage, then reload and confirm the changes stuck.
   - Tasks page: note whether tasks look like real work or sample data.

4. Lead alert email. If the person running this says alerts are set up (`RESEND_API_KEY` and `LEAD_ALERT_TO` in Vercel), ask them to confirm an email arrived for each QA TEST lead.

5. Mobile. Set the viewport to 390x844 with Emulation.setDeviceMetricsOverride, screenshot the home page, /free-consultation, and /contact, and check the form is usable (no overlapping or cut-off fields, button reachable). Clear the override afterwards.

6. Basics. Check that the phone number link is `tel:5037558555`, the header and footer links don't 404, and SITE/sitemap.xml and SITE/robots.txt load.

7. Cleanup. Delete every `QA TEST -` contact from the CRM and confirm none are left.

Report:
- One-line verdict: are leads reaching the CRM reliably?
- A table of each form and run: HTTP status, saved yes/no, what the visitor saw.
- Anything broken, in priority order, with the page and steps to reproduce.
- Smaller improvements, kept short.
- What you could not test and why.
