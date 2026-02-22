const lessonsData = {
    // ── MODULE 1: FOUNDATIONS ──────────────────────────────────────────────
    'm1-1': {
        title: "1.1 The Digital Marketing Revolution",
        video: "https://www.youtube.com/embed/l_oEL1mBPMo",
        image: "images/meta_marketing_hero_1771675075538.png",
        explanation: `
            <p>Digital marketing is no longer an "option"—it is the lifeblood of modern commerce. In this lesson, we break down the shift from interruption-based media to data-driven discovery.</p>
            <div class="step-card">
                <h5>The 4 Pillars of Digital Superiority</h5>
                <ul>
                    <li><strong>Measurability:</strong> Track every cent from click to purchase.</li>
                    <li><strong>Targeting:</strong> Use AI to find people who are "ready to buy."</li>
                    <li><strong>Scalability:</strong> Start with $10 and scale to $10,000 without a sales team.</li>
                    <li><strong>Iterative Speed:</strong> Change your creative in minutes, not months.</li>
                </ul>
            </div>
            <div class="strategy-tip"><strong>Insight:</strong> Don't pay for "eye-balls." Pay for "Results." Meta's bidding system is an auction for attention.</div>
            <div class="step-card">
                <h5>✅ Action Items</h5>
                <ol>
                    <li>Define your target customer's "Average Life Value."</li>
                    <li>Compare your potential "Cost Per Click" against traditional billboard prices.</li>
                </ol>
            </div>
        `
    },
    'm1-2': {
        title: "1.2 Why Meta is the King of E-commerce",
        video: "https://www.youtube.com/embed/yPL3FlH0QCE",
        image: "images/meta_marketing_hero_1771675049551.png",
        explanation: `
            <p>Meta controls the world's most advanced behavioral database. Over 3 billion people share their desires, hobbies, and shopping habits with Meta every single day.</p>
            <div class="step-card">
                <h5>Platform Ecosystem breakdown</h5>
                <ul>
                    <li><strong>Facebook:</strong> Community and logic-based buyers.</li>
                    <li><strong>Instagram:</strong> Aspiration and visual-first discovery.</li>
                    <li><strong>Messenger/WhatsApp:</strong> The conversational conversion engine.</li>
                </ul>
            </div>
            <p>Unlike Google (where people search for what they *need*), Meta is where people discover what they *want*. This is "Demand Generation" vs "Demand Capture."</p>
        `
    },
    'm1-3': {
        title: "1.3 The Psychology of Social Shopping",
        video: "",
        image: "images/629980be-5abb-4f98-b148-b85b8b09c7b7.jpg",
        explanation: `
            <p>To win on social media, you must stop the "Dopamine Scroll." Your ad is competing with memories, news, and entertainment.</p>
            <div class="step-card">
                <h5>The Emotional Hook Loop</h5>
                <ol>
                    <li><strong>Interrupt:</strong> A visual shock that breaks the scroll pattern.</li>
                    <li><strong>Agitate:</strong> Remind the user of a problem they are currently facing.</li>
                    <li><strong>Solve:</strong> Present your product as the bridge to a "Better Self."</li>
                </ol>
            </div>
            <div class="strategy-tip"><strong>Tip:</strong> People don't buy products; they buy better versions of themselves. Sell the transformation.</div>
        `
    },
    'm1-4': {
        title: "1.4 Essential Meta Assets & Security",
        video: "",
        image: "images/meta_marketing_hero_1771675075538.png",
        explanation: `
            <p>A professional digital presence requires a robust foundation. 90% of bans happen because of poor asset structure.</p>
            <div class="step-card">
                <h5>The Business Manager Fortress</h5>
                <ul>
                    <li><strong>Business Manager:</strong> The parent container for all assets.</li>
                    <li><strong>Ad Account:</strong> Always have at least 2 ad accounts as backups.</li>
                    <li><strong>Facebook Page:</strong> Must be aged and have high "Page Health."</li>
                    <li><strong>2FA Security:</strong> Mandatory for all administrators to prevent hacking.</li>
                </ul>
            </div>
            <div class="resource-download-box" onclick="downloadResource('resources/security_checklist.pdf')">
                <i class="fas fa-file-pdf" style="font-size: 2rem; color: #ef4444;"></i>
                <div>
                    <h5 style="margin:0;">Anti-Ban Security Checklist</h5>
                    <p style="margin:0; font-size:0.8rem; color:var(--text-muted);">PDF Guide • 0.5 MB</p>
                </div>
                <button class="btn btn-outline btn-sm" style="margin-left:auto;">Download</button>
            </div>
        `
    },
    'm1-5': {
        title: "1.5 The Anatomy of a Winning Campaign",
        video: "",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800",
        explanation: `
            <p>Meta campaigns are built in a 3-tier structure. Mastering the hierarchy is key to organization and scaling.</p>
            <div class="step-card">
                <h5>Campaign Hierarchy</h5>
                <ul>
                    <li><strong>Campaign:</strong> Choose the 'Sales' Objective. Turn on CBO if scaling.</li>
                    <li><strong>Ad Set:</strong> This is where you set the Budget, Targeting, and Placements.</li>
                    <li><strong>Ad:</strong> The Creative layer. This is where your customer sees the message.</li>
                </ul>
            </div>
            <p>Always name your campaigns with a clear date and objective (e.g., 2026_02_22_TOF_PUR_CBO).</p>
        `
    },

    // ── MODULE 2: TECHNICAL TRACKING ───────────────────────────────────────
    'm2-1': {
        title: "2.1 The Philosophy of Meta Tracking",
        video: "",
        image: "images/meta_learning_hero_webp_1771675113408.png",
        explanation: `
            <p>Tracking is the "Brain" of your advertising. Without it, Meta is just guessing who your customers are.</p>
            <div class="step-card">
                <h5>The Full-Funnel Signal Chain</h5>
                <p>Track every micro-commitment a user makes on your store:</p>
                <ul>
                    <li><strong>PageView:</strong> Interest.</li>
                    <li><strong>ViewContent:</strong> High Interest.</li>
                    <li><strong>AddToCart:</strong> Intent.</li>
                    <li><strong>InitiateCheckout:</strong> Deep Intent.</li>
                    <li><strong>Purchase:</strong> The Conversion.</li>
                </ul>
            </div>
        `
    },
    'm2-2': {
        title: "2.2 Shopify-Meta Integration Mastery",
        video: "",
        image: "images/meta_learning_hero_webp_1771675113408.png",
        explanation: `
            <p>Shopify is the world's most meta-friendly platform. Integrating them takes 5 minutes but requires "Maximum" settings.</p>
            <div class="step-card">
                <h5>Step-by-Step Setup</h5>
                <ol>
                    <li>Install FB Sales Channel in Shopify.</li>
                    <li>Under 'Data Sharing', select **MAXIMUM**.</li>
                    <li>This enables Advanced Matching and Server-side CAPI.</li>
                </ol>
            </div>
            <div class="strategy-tip"><strong>DANGER:</strong> Setting this to 'Standard' will lose you 30% of your sales data due to browser privacy.</div>
        `
    },
    'm2-3': {
        title: "2.3 Solving iOS 14 with CAPI",
        video: "",
        image: "images/meta_learning_hero_webp_1771675113408.png",
        explanation: `
            <p>Apple's iOS 14 update blocked browser-based pixels. The solution is <strong>Conversions API (CAPI)</strong>.</p>
            <div class="step-card">
                <h5>What is CAPI?</h5>
                <p>Instead of the browser sending a "Sale" signal, your Shopify server sends the signal directly to Meta's server. It cannot be blocked by Safari or Chrome privacy settings.</p>
            </div>
            <p>Maintain at least an "8/10" Event Match Quality Score for stable scaling.</p>
        `
    },
    'm2-4': {
        title: "2.4 Domain Verification & Aggregated Events",
        video: "",
        image: "images/meta_learning_hero_webp_1771675113408.png",
        explanation: `
            <p>To respect user privacy while tracking sales, Meta requires you to prove you own the website domain.</p>
            <div class="step-card">
                <h5>The Setup Workflow</h5>
                <ol>
                    <li>Go to Business Settings > Brand Safety > Domains.</li>
                    <li>Add your domain and copy the Meta-Tag.</li>
                    <li>Paste the tag in your theme.liquid head.</li>
                    <li>Go to Events Manager and prioritize your 'Purchase' event in Aggregated Event Measurement.</li>
                </ol>
            </div>
        `
    },
    'm2-5': {
        title: "2.5 Implementation for Custom Sites",
        video: "",
        image: "images/meta_learning_hero_webp_1771675113408.png",
        explanation: `
            <p>If you aren't on Shopify, you must use <strong>Google Tag Manager (GTM)</strong> or manual Hard-Coding.</p>
            <div class="step-card">
                <h5>GTM Fundamentals</h5>
                <p>GTM allows you to fire your Pixel based on specific triggers (e.g., when a button is clicked or a form is submitted). This is essential for lead-gen landing pages.</p>
            </div>
        `
    },

    // ── MODULE 3: CREATIVE STRATEGY ────────────────────────────────────────
    'm3-1': {
        title: "3.1 Video Ad Anatomy & Storytelling",
        video: "",
        image: "images/629980be-5abb-4f98-b148-b85b8b09c7b7.jpg",
        explanation: `
            <p>Creative is the new targeting. Meta's AI uses your visual content to find your audience. A winning ad follows a specific storytelling arc.</p>
            <div class="step-card">
                <h5>The 4-Part Winning Arc</h5>
                <ol>
                    <li><strong>The Hook (0-3s):</strong> A visual pattern interrupt.</li>
                    <li><strong>Problem & Agitation:</strong> Show why they *need* a solution.</li>
                    <li><strong>Benefit & Feature:</strong> Show your product in action.</li>
                    <li><strong>The Direct Offer:</strong> Give them a reason to click now.</li>
                </ol>
            </div>
        `
    },
    'm3-2': {
        title: "3.2 Mastering The Hook: 5 Frameworks",
        video: "",
        image: "images/629980be-5abb-4f98-b148-b85b8b09c7b7.jpg",
        explanation: `
            <p>If you don't win the hook, the rest of your ad doesn't matter. Here are 5 proven hooks for e-commerce:</p>
            <div class="step-card">
                <ul>
                    <li><strong>The Secret:</strong> "The one thing big brands don't want you to know..."</li>
                    <li><strong>The Comparison:</strong> "This vs That" visual split-screen.</li>
                    <li><strong>The Aesthetic:</strong> High-definition macro shots of the product.</li>
                    <li><strong>The Relatable:</strong> UGC (User Generated Content) style of someone unboxing.</li>
                    <li><strong>The Question:</strong> "Struggling with [Problem]? Read this."</li>
                </ul>
            </div>
            <div class="resource-download-box" onclick="downloadResource('resources/creative_script_templates.pdf')">
                <i class="fas fa-file-pdf" style="font-size: 2rem; color: #ef4444;"></i>
                <div>
                    <h5 style="margin:0;">50 Scroll-Stopping Hooks</h5>
                    <p style="margin:0; font-size:0.8rem; color:var(--text-muted);">PDF Guide • 1.2 MB</p>
                </div>
                <button class="btn btn-outline btn-sm" style="margin-left:auto;">Download</button>
            </div>
        `
    },
    'm3-3': {
        title: "3.3 AI-Powered Scripting & ChatGPT",
        video: "",
        image: "images/629980be-5abb-4f98-b148-b85b8b09c7b7.jpg",
        explanation: `
            <p>ChatGPT is your 24/7 copywriter. Use the <strong>AIDA framework</strong> to write viral scripts in minutes.</p>
            <div class="step-card">
                <h5>The GPT "Creative Prompt"</h5>
                <p style="font-family: monospace; font-size: 0.8rem; background: #eef2ff; color: #3730a3; padding: 15px; border-radius: 8px;">
                    "Write me 3 scripts for a 30s Meta ad for [Product]. Focus on [Benefit]. Toni is friendly and conversational. Use a visual pattern interrupt for the first 3 seconds."
                </p>
            </div>
        `
    },
    'm3-4': {
        title: "3.4 Success Metrics: Reading The Data",
        video: "",
        image: "images/629980be-5abb-4f98-b148-b85b8b09c7b7.jpg",
        explanation: `
            <p>Don't just look at ROAS. To fix a failing ad, you must diagnose *where* it is failing.</p>
            <div class="step-card">
                <h5>Leading Creative Indicators</h5>
                <ul>
                    <li><strong>Hook Rate (3s View / Impression):</strong> If <20%, your hook is bad.</li>
                    <li><strong>Hold Rate (15s / 3s):</strong> If <15%, your video body is boring.</li>
                    <li><strong>Outbound CTR:</strong> If <1%, your offer is weak.</li>
                </ul>
            </div>
        `
    },
    'm3-5': {
        title: "3.5 CTA, Urgency & Behavioral Triggers",
        video: "",
        image: "images/629980be-5abb-4f98-b148-b85b8b09c7b7.jpg",
        explanation: `
            <p>A good ad informs, but a great ad converts. You must give the user a psychological nudge to take action.</p>
            <div class="step-card">
                <h5>Urgency Tactics</h5>
                <ul>
                    <li><strong>Scarcity:</strong> "Only 50 units remaining at this price."</li>
                    <li><strong>Time-Bound:</strong> "Sale ends tonight at midnight."</li>
                    <li><strong>Social Proof:</strong> "Join 10,000+ satisfied customers."</li>
                </ul>
            </div>
        `
    },

    // ── MODULE 4: TESTING & SCALING ───────────────────────────────────────
    'm4-1': {
        title: "4.1 The Sandbox Methodology: Testing for Success",
        video: "",
        image: "images/hero_ecommerce_marketing_1771675155238.png",
        explanation: `
            <p>Never test new ideas in your main scaling campaign. The <strong>Sandbox</strong> is a controlled environment for experimentation.</p>
            <div class="step-card">
                <h5>ABO vs CBO for Testing</h5>
                <p>Use <strong>ABO (Ad Set Budget Optimization)</strong> for testing. Setting budgets at the adset level ensures every creative gets enough spend to be judged fairly by the data.</p>
            </div>
        `
    },
    'm4-2': {
        title: "4.2 The 72-Hour Rule & The Learning Phase",
        video: "",
        image: "images/hero_ecommerce_marketing_1771675155238.png",
        explanation: `
            <p>Meta's algorithm enters the **'Learning Phase'** every time you launch. Pivoting too soon will kill your results.</p>
            <div class="step-card">
                <h5>The Golden Rule</h5>
                <p>Do not touch any ad set for <strong>72 hours</strong>. Let the algorithm stabilize. After 3 days, kill the losers and keep the winners.</p>
            </div>
            <div class="strategy-tip"><strong>DANGER:</strong> Editing an ad set resets the learning. Only edit if the ROAS is unsalvageably low.</div>
        `
    },
    'm4-3': {
        title: "4.3 Vertical Scaling: Milking the Winners",
        video: "",
        image: "images/hero_ecommerce_marketing_1771675155238.png",
        explanation: `
            <p>Vertical scaling is increasing the budget on a successful ad set to drive more volume.</p>
            <div class="step-card">
                <h5>The Power Increase System</h5>
                <ol>
                    <li>Increase budget by <strong>20% every 24-48 hours</strong>.</li>
                    <li>Maintain ROAS stability.</li>
                    <li>If performance dips, revert to the previous budget instantly.</li>
                </ol>
            </div>
            <div class="resource-download-box" onclick="downloadResource('resources/scaling_playbook_2026.pdf')">
                <i class="fas fa-file-pdf" style="font-size: 2rem; color: #ef4444;"></i>
                <div>
                    <h5 style="margin:0;">The 2026 Scaling Playbook</h5>
                    <p style="margin:0; font-size:0.8rem; color:var(--text-muted);">PDF Guide • 4.2 MB</p>
                </div>
                <button class="btn btn-outline btn-sm" style="margin-left:auto;">Download</button>
            </div>
        `
    },
    'm4-4': {
        title: "4.4 Horizontal Scaling: Expanding Reach",
        video: "",
        image: "images/hero_ecommerce_marketing_1771675155238.png",
        explanation: `
            <p>Horizontal scaling is finding new "pockets" of customers by testing new audiences.</p>
            <div class="step-card">
                <h5>Scaling Vectors</h5>
                <ul>
                    <li><strong>Broad Targeting:</strong> Let the Meta AI find the buyers.</li>
                    <li><strong>Lookalikes (LALs):</strong> Build LALs from your buyers.</li>
                    <li><strong>Global Expansion:</strong> Move from your local market to Worldwide.</li>
                </ul>
            </div>
        `
    },
    'm4-5': {
        title: "4.5 The Post ID Method: Preserving Virality",
        video: "",
        image: "images/hero_ecommerce_marketing_1771675155238.png",
        explanation: `
            <p>Don't restart with 0 likes when you scale. Carry your social proof into your scaling campaigns.</p>
            <div class="step-card">
                <h5>Leveraging Post IDs</h5>
                <p>Find the <strong>Post ID</strong> of your winning ad in 'Page Posts' and use 'Existing Post' when creating your scaling ad. This carries over every comment and share.</p>
            </div>
        `
    },

    // ── MODULE 5: RETARGETING & RETENTION ──────────────────────────────────
    'm5-1': {
        title: "5.1 The Logic of Warm Traffic: ROI Mastery",
        video: "",
        image: "images/hero_meta_marketing_1771675178719.png",
        explanation: `
            <p>Retargeting is harvesting the sales from people who saw your brand but didn't buy on the first visit.</p>
            <div class="step-card">
                <h5>The ROI Principle</h5>
                <p>It is <strong>5x cheaper</strong> to convert someone who already knows you. Retargeting campaigns should always have your highest ROAS.</p>
            </div>
        `
    },
    'm5-2': {
        title: "5.2 Custom Audience Creation",
        video: "",
        image: "images/hero_meta_marketing_1771675178719.png",
        explanation: `
            <p>Build audiences based on behavior. This is the difference between a generalist and a specialist.</p>
            <div class="step-card">
                <h5>The Retargeting Hierarchy</h5>
                <ol>
                    <li><strong>Purchasers (Exclusion):</strong> Don't pay for people who already bought.</li>
                    <li><strong>Add to Cart (30 days):</strong> Highest intent.</li>
                    <li><strong>View Content (14 days):</strong> Engaged browsing.</li>
                    <li><strong>FB/IG Engagers:</strong> Brand fans.</li>
                </ol>
            </div>
        `
    },
    'm5-3': {
        title: "5.3 Funnel Logic & Objection Handling",
        video: "",
        image: "images/hero_meta_marketing_1771675178719.png",
        explanation: `
            <p>Warm audiences need different ads. They already know what you sell; now they need to know why they should trust you.</p>
            <div class="step-card">
                <h5>Objection Killers</h5>
                <ul>
                    <li><strong>FAQs:</strong> Answer their common worries in the copy.</li>
                    <li><strong>Social Proof:</strong> Show video testimonials.</li>
                    <li><strong>The Guarantee:</strong> "30-day money-back guarantee."</li>
                </ul>
            </div>
        `
    },
    'm5-4': {
        title: "5.4 Lookalike Mastery (LALs): The Data Seed",
        video: "",
        image: "images/hero_meta_marketing_1771675178719.png",
        explanation: `
            <p>Lookalike Audiences tell Meta: "Find me people who act exactly like these 1,000 buyers."</p>
            <div class="step-card">
                <h5>The 1% Rule</h5>
                <p>Start with a **1% Lookalike**. This is the most biologically and behaviorally similar audience. Only expand to 2-3% once you've exhausted the 1% pool.</p>
            </div>
        `
    },
    'm5-5': {
        title: "5.5 Understanding LTV & The Retention Engine",
        video: "",
        image: "images/hero_meta_marketing_1771675178719.png",
        explanation: `
            <p>Profit doesn't come from the first sale; it comes from the second. <strong>LTV (Lifetime Value)</strong> determines the survival of your brand.</p>
            <div class="step-card">
                <h5>Retention Strategy</h5>
                <p>Run a post-purchase retargeting ad to show past buyers complementary products. If they bought a camera, show them a tripod 15 days later.</p>
            </div>
        `
    },

    // ── MODULE 6: BUSINESS & CLIENTS ──────────────────────────────────────
    'm6-1': {
        title: "6.1 Monitoring and Analytics Mastery",
        video: "",
        image: "images/meta_marketing_hero_1771675049551.png",
        explanation: `
            <p>Media buying is a game of probability. You must track your metrics every single day to stay profitable.</p>
            <div class="step-card">
                <h5>The Daily Audit Dashboard</h5>
                <ul>
                    <li><strong>Spend & ROAS:</strong> The primary goals.</li>
                    <li><strong>Frequency:</strong> Is my audience seeing the ad too many times? (Target < 3).</li>
                    <li><strong>CPM:</strong> Is my targeting getting more expensive?</li>
                </ul>
            </div>
        `
    },
    'm6-2': {
        title: "6.2 Professional Client Reporting & Tools",
        video: "",
        image: "images/meta_marketing_hero_1771675049551.png",
        explanation: `
            <p>Clients don't pay for ads; they pay for **Clarity**. A good report is your insurance policy to keep a monthly retainer.</p>
            <div class="step-card">
                <h5>Reporting Pillars</h5>
                <ol>
                    <li>What we spent.</li>
                    <li>What we earned.</li>
                    <li>What we learned (The data insights).</li>
                    <li>Next month's roadmap.</li>
                </ol>
            </div>
        `
    },
    'm6-3': {
        title: "6.3 Client Acquisition Roadmap: From 0 to $10k/mo",
        video: "",
        image: "images/meta_marketing_hero_1771675049551.png",
        explanation: `
            <p>The biggest struggle for new media buyers is finding that first client. Start local.</p>
            <div class="step-card">
                <h5>The Outreach Engine</h5>
                <ul>
                    <li><strong>Step 1:</strong> Identify local shops with bad ads.</li>
                    <li><strong>Step 2:</strong> Offer a "Free Audit" or a 14-day free trial.</li>
                    <li><strong>Step 3:</strong> Get the case study and use it to land a monthly retainer.</li>
                </ul>
            </div>
        `
    },
    'm6-4': {
        title: "6.4 Niche Specialization & Authority Branding",
        video: "",
        image: "images/meta_marketing_hero_1771675049551.png",
        explanation: `
            <p>A "Generalist" is a commodity. A "Specialist for High-Ticket Furniture Stores" is a partner.</p>
            <div class="step-card">
                <h5>The Authority Loop</h5>
                <p>Post your wins on LinkedIn or Twitter. Explain the *logic* behind the success. When clients see you understand the theory, they stop questioning your price.</p>
            </div>
        `
    },
    'm6-5': {
        title: "6.5 Leveraging Freelance Platforms & Global Scaling",
        video: "",
        image: "images/meta_marketing_hero_1771675049551.png",
        explanation: `
            <p>Upwork, Fiverr, and K-Work are gateways to international business. Focus on your profile's "Trust Score."</p>
            <div class="strategy-tip"><strong>DANGER:</strong> Never compete on price. Compete on ROAS. A client will always pay $1,000 for someone who brings them $10,000.</div>
        `
    },
    'final-summary': {
        title: "Congratulations: Your Meta Ads Mastery Roadmap",
        video: "",
        image: "images/meta_marketing_hero_1771675049551.png",
        explanation: `
            <p>You have finished the technical curriculum. Now, the real learning begins in the Ads Manager.</p>
            <div class="step-card">
                <h5>Final Roadmap</h5>
                <ol>
                    <li>Pass the Capstone Exam Below.</li>
                    <li>Build your first Sandbox campaign with a $10/day budget.</li>
                    <li>Land your first client or launch your own store.</li>
                </ol>
            </div>
            <p>Keep testing, stay data-driven, and remember: The algorithm is your friend, but the creative is your weapon.</p>
        `
    }
};

const quizData = {
    module1: {
        title: "Module 1 Quiz: Foundations",
        questions: [
            { q: "Which campaign objective is best for a D2C store wanting direct purchases?", options: ["Brand Awareness", "Traffic", "Sales", "Engagement"], answer: 2 },
            { q: "True or False: In a CBO campaign, you set the budget at the adset level.", options: ["True", "False"], answer: 1 },
            { q: "Why is Meta better than traditional billboards for a mobile cover brand?", options: ["It's cheaper to print", "You can target users by their specific phone model", "Billboards have no reach"], answer: 1 }
        ]
    },
    module2: {
        title: "Module 2 Quiz: Technical Infrastructure",
        questions: [
            { q: "Which data sharing setting should you select in the Shopify Meta app?", options: ["Minimum", "Standard", "Maximum"], answer: 2 },
            { q: "What does CAPI stand for, and why is it used?", options: ["Creative API (Ad design)", "Conversions API (Bypasses iOS blocks)", "Customer API (Support)"], answer: 1 },
            { q: "How do you verify a Meta Pixel is working in real-time?", options: ["Email Meta support", "Meta Pixel Helper / Test Events tab", "Check sales only"], answer: 1 }
        ]
    },
    module3: {
        title: "Module 3 Quiz: Creative Strategy",
        questions: [
            { q: "How long do you have to grab a user's attention before they scroll?", options: ["1 second", "3 seconds", "10 seconds"], answer: 1 },
            { q: "A creator holding a microphone with a fork is an example of what?", options: ["Bad audio", "Pattern Interrupt", "Instructional video"], answer: 1 },
            { q: "Name the three parts of a high-converting video ad.", options: ["Hook, Body, CTA", "Intro, Middle, End", "Product, Price, Brand"], answer: 0 }
        ]
    },
    module4: {
        title: "Module 4 Quiz: Testing & Scaling",
        questions: [
            { q: "What is the minimum recommended daily budget per adset for testing in Pakistan?", options: ["500 PKR", "1,000 PKR", "5,000 PKR"], answer: 1 },
            { q: "After 72 hours, what should you do if an ad has zero purchases?", options: ["Increase budget", "Turn it off", "Wait another week"], answer: 1 },
            { q: "Safe scaling involves increasing the budget by what percentage every 24 hours?", options: ["10%", "20%", "50%"], answer: 1 }
        ]
    },
    module5: {
        title: "Module 5 Quiz: Retargeting & Retention",
        questions: [
            { q: "What percentage of your total budget should be spent on retargeting?", options: ["50%", "10% to 15%", "5%"], answer: 1 },
            { q: "Which custom audience is considered 'warm-up' and highly effective for retargeting?", options: ["Video Viewers (75%)", "New website visitors", "All Facebook fans"], answer: 0 },
            { q: "True or False: You should show the exact same ad to people in your retargeting funnel.", options: ["True", "False"], answer: 1 }
        ]
    },
    module6: {
        title: "Module 6 Quiz: Business & Clients",
        questions: [
            { q: "What tool allows you to see the ads your competitors are currently running?", options: ["Shopify Reports", "Meta Ads Library", "Google Analytics"], answer: 1 },
            { q: "Instead of being a generalist, what is a 'Media Buyer for Furniture Stores' called?", options: ["A Micro-niche or Nano-niche specialist", "An Affiliate", "A Designer"], answer: 0 },
            { q: "How can you provide social proof to a new campaign using a winning ad from a test?", options: ["Screenshot the likes", "Use the Post ID method", "Copy the comments manually"], answer: 1 }
        ]
    },
    final: {
        title: "💎 Capstone Mastery Exam",
        questions: [
            { q: "In a scaling campaign, why use the Post ID method?", options: ["To save money", "To carry over social proof", "To bypass the algorithm"], answer: 1 },
            { q: "What is the recommended budget increase for vertical scaling?", options: ["100% every day", "20% every 24-48 hours", "50% once a week"], answer: 1 },
            { q: "Which event should be your primary optimization goal for a D2C store?", options: ["View Content", "Add to Cart", "Purchase"], answer: 2 },
            { q: "What is the 'Sandbox' campaign used for?", options: ["Long-term scaling", "Testing new variables in isolation", "Retargeting past customers"], answer: 1 },
            { q: "How do you solve browser tracking blocks like iOS 14?", options: ["Using more hashtags", "Implementing Conversions API (CAPI)", "Increasing ad spend"], answer: 1 }
        ]
    }
};

const assignmentsData = [
    { id: 1, module: "Module 1", title: "Campaign Architecture Plan", description: "Create a campaign plan for a premium clothing brand. Define the objective and decide whether to use ABO or CBO for your initial testing phase.", deadline: "Feb 28, 2026", status: "Pending", submission: "", feedback: "" },
    { id: 2, module: "Module 2", title: "Pixel & CAPI Setup", description: "Connect a dummy Shopify store to Meta and set up a 'Purchase' event as your primary conversion goal.", deadline: "Mar 02, 2026", status: "Pending", submission: "", feedback: "" },
    { id: 3, module: "Module 3", title: "3-Hook Creative Script", description: "Using ChatGPT, write three different hook styles (Emotional, Curiosity, Relatability) for a single video body promoting a skincare serum.", deadline: "Mar 05, 2026", status: "Pending", submission: "", feedback: "" },
    { id: 4, module: "Module 4", title: "Data Analysis Exercise", description: "Analyze a sample data report. If the CPC is 10 PKR but the Hook Rate is 8%, identify which part of the ad needs to be changed.", deadline: "Mar 08, 2026", status: "Pending", submission: "", feedback: "" },
    { id: 5, module: "Module 5", title: "Lookalike Audience Build", description: "Build a 'Lookalike Audience' (LAL) based on 100 previous purchasers and explain why a 0-1% LAL is better than a 5-10% LAL.", deadline: "Mar 12, 2026", status: "Pending", submission: "", feedback: "" },
    { id: 6, module: "Module 6", title: "Client Performance Report", description: "Create a professional performance report for a client that highlights ROAS and Cost Per Acquisition (CPA).", deadline: "Mar 15, 2026", status: "Pending", submission: "", feedback: "" }
];

const resourcesData = [
    { title: "The 2026 Meta Scaling Playbook", description: "Complete SOP for vertical and horizontal scaling with exact budget rules.", type: "PDF Guide", size: "4.2 MB", file: "resources/scaling_playbook_2026.pdf" },
    { title: "D2C Creative Script Templates", description: "10+ high-converting hook patterns and script structures for UGC videos.", type: "Template", size: "1.8 MB", file: "resources/creative_script_templates.pdf" },
    { title: "Pixel & CAPI Fix Checklist", description: "Step-by-step diagnostic guide to fix tracking issues post iOS 14.", type: "Checklist", size: "0.5 MB", file: "resources/security_checklist.pdf" },
    { title: "ROAS & Breakeven Calculator", description: "Excel/Sheets template to find your exact allowable CPA and profit margins.", type: "Calculator", size: "1.2 MB", file: "resources/roas_calculator.pdf" },
    { title: "Client Retention Report Template", description: "Professional report structure that keeps clients paying month after month.", type: "Strategy", size: "2.1 MB", file: "resources/client_report_template.pdf" }
];

let completedLessons = 0;
const totalLessons = Object.keys(lessonsData).length;
let currentQuizModule = null;
let currentQuizIndex = 0;
let quizScore = 0;

function showDashboard() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('main-nav').style.display = 'none';
    document.getElementById('dash-nav').style.display = 'flex';
    loadLesson('m1-1');
    showSection('lesson');
}

function showLanding() {
    document.getElementById('landing-page').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('main-nav').style.display = 'flex';
    document.getElementById('dash-nav').style.display = 'none';
}

function showSection(sectionId) {
    const ids = ['lesson-view', 'simulation-view', 'assignments-view', 'quiz-view', 'resources-view'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    const target = document.getElementById(sectionId + '-view');
    if (target) target.style.display = 'block';
    const mainContent = document.querySelector('.main-content');
    if (mainContent) mainContent.scrollTop = 0;
}

function loadLesson(lessonKey) {
    const lesson = lessonsData[lessonKey];
    if (!lesson) return;
    showSection('lesson');
    document.getElementById('lesson-title').innerText = lesson.title;
    const iframe = document.getElementById('video-iframe');
    const videoContainer = document.querySelector('.video-container');
    if (lesson.video && lesson.video !== "") {
        iframe.src = lesson.video;
        videoContainer.style.display = 'block';
    } else {
        iframe.src = "";
        videoContainer.style.display = 'none';
    }
    document.getElementById('lesson-content').innerHTML = lesson.explanation;
    const banner = document.getElementById('lesson-banner');
    if (banner && lesson.image) {
        banner.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('${lesson.image}')`;
    }

    document.querySelectorAll('.module-item').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('onclick')?.includes(`'${lessonKey}'`)) item.classList.add('active');
    });
}

function markComplete() {
    if (completedLessons < totalLessons) {
        completedLessons++;
        updateProgress();
        const active = document.querySelector('.module-item.active');
        if (active) {
            active.style.textDecoration = 'line-through';
            active.style.opacity = '0.6';
        }
    }
}

function updateProgress() {
    const percentage = Math.round((completedLessons / totalLessons) * 100);
    const progressFill = document.getElementById('overall-progress');
    if (progressFill) progressFill.style.width = percentage + '%';
}

function showQuiz(moduleKey) {
    currentQuizModule = quizData[moduleKey];
    currentQuizIndex = 0;
    quizScore = 0;
    showSection('quiz');
    renderQuiz();
}

function renderQuiz() {
    const quizView = document.getElementById('quiz-view');
    if (!quizView || !currentQuizModule) return;
    if (currentQuizIndex >= currentQuizModule.questions.length) {
        quizView.innerHTML = `
            <div class="simulation-card" style="text-align:center; padding: 60px 40px;">
                <h2 style="margin-bottom: 20px;">Quiz Complete!</h2>
                <p style="font-size:1.4rem; margin-bottom: 30px;">Your score: <strong style="color:var(--primary)">${quizScore}/${currentQuizModule.questions.length}</strong></p>
                <button class="btn btn-primary" onclick="showSection('lesson')">Back to Lessons</button>
            </div>`;
        return;
    }
    const q = currentQuizModule.questions[currentQuizIndex];
    quizView.innerHTML = `
        <div class="simulation-card">
            <h3 style="margin-bottom: 20px;">${currentQuizModule.title}</h3>
            <p style="font-size: 1.1rem; margin-bottom: 24px;">Question ${currentQuizIndex + 1}: ${q.q}</p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                ${q.options.map((opt, i) => `<button class="btn btn-outline" onclick="answerQuiz(${i})" style="text-align:left; justify-content: flex-start;">${opt}</button>`).join('')}
            </div>
        </div>`;
}

function answerQuiz(idx) {
    if (idx === currentQuizModule.questions[currentQuizIndex].answer) quizScore++;
    currentQuizIndex++;
    renderQuiz();
}

function showAssignments() {
    showSection('assignments');
    const view = document.getElementById('assignments-view');
    if (!view) return;
    view.innerHTML = `
        <h2 style="margin-bottom: 20px;">Course Assignments</h2>
        <div class="benefit-grid">
            ${assignmentsData.map((a, i) => `
                <div class="benefit-card">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                        <span style="font-size: 0.7rem; font-weight: 700; color: var(--primary); text-transform: uppercase;">${a.module}</span>
                        <span class="status-badge status-${a.status.toLowerCase()}">${a.status}</span>
                    </div>
                    <h4>${a.title}</h4>
                    <p style="font-size: 0.85rem; margin-top: 10px; color: var(--text-muted); line-height: 1.5;">${a.description}</p>
                    <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid var(--border);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                            <span style="font-size: 0.75rem; color: var(--text-muted);"><i class="far fa-clock"></i> Deadline: <strong>${a.deadline}</strong></span>
                        </div>
                        ${a.status === 'Pending' ? `
                            <button class="btn btn-outline btn-sm" style="width: 100%;" onclick="openAssignmentSubmission(${i})">Submit Assignment</button>
                        ` : a.status === 'Submitted' ? `
                            <div class="strategy-tip" style="margin: 0; padding: 10px 15px; font-size: 0.8rem;">
                                <strong>Submission Received</strong>
                                Your work is under review by our instructors.
                            </div>
                        ` : `
                            <div class="step-card" style="margin: 0; padding: 15px; border-left-color: #10b981;">
                                <h5 style="color: #10b981; margin-bottom: 5px;">Instructor Feedback</h5>
                                <p style="font-size: 0.8rem;">${a.feedback}</p>
                            </div>
                        `}
                    </div>
                </div>`).join('')}
        </div>`;
}

function openAssignmentSubmission(idx) {
    const a = assignmentsData[idx];
    const view = document.getElementById('assignments-view');
    view.innerHTML = `
        <div class="simulation-card" style="max-width: 600px; margin: 0 auto;">
            <button class="btn btn-outline btn-sm" style="margin-bottom: 20px;" onclick="showAssignments()"><i class="fas fa-arrow-left"></i> Back</button>
            <h3>Submit: ${a.title}</h3>
            <p style="margin-bottom: 25px; color: var(--text-muted);">${a.description}</p>
            <div class="form-group">
                <label>Your Project Link (Google Doc / Canva / PDF)</label>
                <input type="text" id="assignment-link" class="form-control" placeholder="https://docs.google.com/...">
            </div>
            <div class="form-group">
                <label>Notes for Instructor</label>
                <textarea id="assignment-notes" class="form-control" style="height: 120px;" placeholder="Describe your strategy..."></textarea>
            </div>
            <button class="btn btn-primary" style="width: 100%;" onclick="submitAssignment(${idx})">Upload & Submit</button>
        </div>
    `;
}

function submitAssignment(idx) {
    const link = document.getElementById('assignment-link').value;
    if (!link) {
        alert("Please provide a submission link.");
        return;
    }
    assignmentsData[idx].status = 'Submitted';
    assignmentsData[idx].submission = link;
    showAssignments();

    setTimeout(() => {
        if (assignmentsData[idx].status === 'Submitted') {
            assignmentsData[idx].status = 'Marked';
            assignmentsData[idx].feedback = "Excellent work! Your breakdown is thorough and you've correctly identified the high-intent segments for this product.";
            if (document.getElementById('assignments-view').style.display === 'block') {
                showAssignments();
            }
        }
    }, 8000);
}

function showResources() {
    showSection('resources');
    const view = document.getElementById('resources-view');
    if (!view) return;
    view.innerHTML = `
        <h2 style="margin-bottom: 20px;">Downloadable Resources</h2>
        <div class="benefit-grid">
            ${resourcesData.map(r => `
                <div class="benefit-card">
                    <div style="font-size: 2.5rem; color: var(--primary); margin-bottom: 15px;"><i class="fas fa-file-pdf"></i></div>
                    <span style="font-size: 0.65rem; font-weight: 800; color: var(--text-muted); text-transform: uppercase; background: var(--bg-hover); padding: 4px 8px; border-radius: 4px; display: inline-block; margin-bottom: 10px;">${r.type}</span>
                    <h4 style="margin-bottom: 8px;">${r.title}</h4>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 20px;">${r.description}</p>
                    <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 15px; border-top: 1px solid var(--border);">
                        <span style="font-size: 0.75rem; color: var(--text-muted);">Size: ${r.size}</span>
                        <button class="btn btn-outline btn-sm" onclick="downloadResource('${r.file}')"><i class="fas fa-download"></i> Download</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function toggleChatbot() {
    document.getElementById('chatbot-widget').classList.toggle('active');
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const text = input.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    input.value = '';
    setTimeout(() => addMessage("Keep learning! Use the simulator to practice.", 'bot'), 800);
}

function addMessage(text, type) {
    const container = document.getElementById('chatbot-messages');
    if (!container) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${type}-message`;
    msgDiv.innerText = text;
    container.appendChild(msgDiv);
    container.scrollTop = container.scrollHeight;
}

document.addEventListener('DOMContentLoaded', updateProgress);

function downloadResource(filePath) {
    const link = document.createElement('a');
    link.href = filePath;
    link.download = filePath.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
