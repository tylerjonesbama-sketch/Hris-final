import { useMemo, useState } from 'react';

const modules = [
  {
    icon: '🏗️',
    title: 'What Is an HRIS?',
    subtitle: 'The system that runs HR — and your opportunity',
    overview: "An HRIS is the central system employers use to manage employee records, payroll, benefits, time, compliance, onboarding, and offboarding. For a benefits producer, the HRIS is where operational pain lives.",
    sections: [
      ['Core Functions', ['Employee records', 'Payroll integration', 'Benefits administration', 'Time and attendance', 'Compliance reporting', 'Onboarding and offboarding']],
      ['Common Platforms', ['Workday: enterprise and complex integrations', 'ADP Workforce Now: SMB and mid-market payroll/HR', 'Paylocity: modern HR-forward mid-market platform', 'Paychex Flex: payroll-first SMB platform', 'BambooHR: HR-first fast-growth SMBs', 'UKG: strong hourly/time and attendance', 'Gusto: small employer payroll/HR']]
    ],
    quiz: [
      q('An employer with 800 employees needing highly customized integrations is most likely running which HRIS?', ['Gusto', 'Workday', 'BambooHR', 'Paychex Flex'], 1, 'Workday is common in enterprise and larger mid-market groups with complex integrations.'),
      q('Which HRIS function is most directly tied to ACA 1094/1095 filings?', ['Time & Attendance', 'Onboarding', 'Compliance & Reporting', 'Payroll Integration'], 2, 'ACA filings sit under compliance and reporting.'),
      q('A 60-employee tech startup that grew fast is most likely on which platform?', ['UKG', 'Workday', 'BambooHR', 'ADP Enterprise'], 2, 'BambooHR is common with fast-growing SMB and tech companies.')
    ]
  },
  {
    icon: '🧩',
    title: 'HR Service Models: SaaS, ASO/BPO, Fractional HR & PEO',
    subtitle: 'What vendors are selling — and where benefits fit',
    overview: 'Employers buying HR help may be buying software, outsourcing a function, adding fractional expertise, or entering co-employment. The model determines who sponsors benefits and whether the broker relationship is protected or threatened.',
    sections: [
      ['SaaS / HRIS', ['Employer licenses software and runs HR internally', 'Employer sponsors benefit plans', 'Broker relationship remains intact']],
      ['BPO', ['Vendor performs a specific process like payroll, COBRA, or benefits admin', 'Employer remains employer of record', 'Broker still advises and places coverage']],
      ['ASO', ['Broad HR administration under the client’s own EIN', 'No co-employment', 'Employer sponsors benefits and keeps broker/carrier choice']],
      ['Fractional HR', ['Part-time HR expertise without hiring full time', 'Can be an ally for open enrollment and implementation', 'Employer keeps control and benefit plans']],
      ['PEO', ['Co-employment relationship', 'PEO may become employer of record for tax/admin purposes', 'PEO often sponsors benefit plans, which can displace the broker']]
    ],
    quiz: [
      q('What is the defining feature of a PEO that sets it apart from an ASO?', ['It is cheaper', 'It enters a co-employment relationship and becomes employer of record', 'It only does payroll', 'It is just software'], 1, 'The co-employment relationship is the key distinction.'),
      q('Which model is most likely to DISPLACE a benefits broker?', ['SaaS HRIS', 'ASO', 'Fractional HR', 'PEO'], 3, 'PEOs often sponsor the benefit plans and can replace the outside broker relationship.'),
      q('Under an ASO model, who sponsors the benefit plans?', ['The ASO', 'The employer under its own EIN', 'The PEO', 'The carrier'], 1, 'ASO clients retain their own benefit plans and broker relationship.')
    ]
  },
  {
    icon: '🎯',
    title: 'Why Producers Must Understand HRIS',
    subtitle: "Your competition doesn't know this — yet",
    overview: 'Most benefits agents sell products. Producers who understand HRIS pain sell operational solutions. That creates stickiness, uncovers hidden risk, and positions you as a strategic partner.',
    sections: [
      ['Business Case', ['Retention through system stickiness', 'Discovery of pain competitors miss', 'Speaking the HR director’s language', 'Finding compliance risk before it becomes a lawsuit', 'Differentiating on execution']],
      ['Common HR Complaints', ['Carrier data discrepancies', 'Open enrollment setup chaos', 'Manual benefits administration', 'ACA compliance anxiety']]
    ],
    quiz: [
      q('Why does HRIS embeddedness improve client retention?', ['It lowers premiums automatically', 'Replacing you means replacing an operational system, not just a quote', 'It is required by ACA', 'Carriers mandate it'], 1, 'Operational embeddedness makes the relationship harder to displace.'),
      q('Which question signals expertise to an HR director?', ['What carriers do you use?', 'What is your budget?', 'Are you running EDI feeds to your carriers from your HRIS?', 'When does your plan renew?'], 2, 'EDI feed questions show operational fluency.'),
      q('What turns a producer from a vendor into a strategic partner?', ['Cheaper plans', 'Solving the employer’s operational pain', 'More carrier options', 'Faster quotes'], 1, 'Strategic partners solve business pain, not just insurance price.')
    ]
  },
  {
    icon: '🔍',
    title: 'Reading the HRIS Like a Detective',
    subtitle: 'What to look for, what to ask, and what it tells you',
    overview: 'HRIS conversations reveal operational friction, compliance gaps, and administrative burden. These are selling opportunities.',
    sections: [
      ['Questions to Ask', ['What HRIS are you currently on?', 'Are benefits inside the HRIS or a separate platform?', 'Do you have active EDI/834 feeds?', 'Who owns the open enrollment build?', 'How do you track ACA eligibility?', 'How long does carrier invoice reconciliation take?']],
      ['Red Flags', ['Multiple spreadsheets for benefits tracking', 'No carrier feeds', 'Current broker just sends the renewal', 'Different headcounts in HRIS vs carrier billing']]
    ],
    quiz: [
      q('An HR team tracking benefits across multiple spreadsheets most likely signals what?', ['A well-run system', 'They outgrew or never configured their HRIS for benefits', 'A Workday deployment', 'Strong carrier feeds'], 1, 'Spreadsheet sprawl usually means the benefits workflow is broken.'),
      q('Different headcounts in HRIS vs carrier billing typically cause what problem?', ['Lower premiums', 'Ghost enrollments and claim issues', 'Faster open enrollment', 'Better compliance'], 1, 'Mismatched counts lead to billing and claim problems.'),
      q('Roughly how long can manual carrier invoice reconciliation take many employers monthly?', ['A few minutes', '1 hour', '4–10 hours', 'A full week'], 2, 'Manual reconciliation can create several hours of monthly HR waste.')
    ]
  },
  {
    icon: '🏆',
    title: 'Winning AOR with HRIS Knowledge',
    subtitle: 'The step-by-step playbook',
    overview: 'AOR wins are about trust and perceived value. HRIS fluency lets you move from quoting plans to improving the employer’s benefits operation.',
    sections: [
      ['HRIS-Led AOR Strategy', ['Discovery call: lead with operational questions', 'Pain audit: quantify wasted time and risk', 'Capability demonstration: show prior implementation work', 'Proposal: speak in HRIS integration outcomes', 'Transition plan: make the AOR feel safe']],
      ['Common Objections', ['Current broker handles everything fine', 'We do not want to disrupt our HRIS', 'Can you just quote the renewal?']]
    ],
    quiz: [
      q('What should you lead with on an HRIS-led discovery call?', ['Plan design options', 'Operational questions about HRIS and feeds', 'Commission structure', 'A renewal quote'], 1, 'Lead with operational pain before plan design.'),
      q('The Pain Audit step is most effective when you do what?', ['Quantify time and risk cost', 'Offer lowest price', 'List every carrier', 'Skip to proposal'], 0, 'Quantification makes the problem concrete.'),
      q('What makes signing an AOR feel safe to a prospect?', ['A discount', 'A 30/60/90-day transition plan with data audit', 'A long contract', 'Pressure to decide fast'], 1, 'A structured transition plan lowers perceived risk.')
    ]
  },
  {
    icon: '⚙️',
    title: 'HRIS Benefits Admin: Key Concepts',
    subtitle: 'The technical vocabulary that builds credibility',
    overview: 'You do not need to be an implementation consultant. You do need enough vocabulary to show HR that you understand how benefits actually get administered.',
    sections: [
      ['Must-Know Terms', ['EDI / 834 carrier feed', 'Benefits administration module', 'Open enrollment configuration', 'Qualifying life event / QLE', 'ACA measurement periods', 'Carrier invoice reconciliation', 'COBRA integration', 'Dependent eligibility audit']]
    ],
    quiz: [
      q('What does an 834 EDI feed do?', ['Files taxes', 'Transmits enrollment data from HRIS/benefits platform to carriers', 'Calculates payroll', 'Generates 1095-C forms'], 1, 'The 834 transmits enrollment data to carriers.'),
      q('A termination in the HRIS should trigger a COBRA notice within how long?', ['24 hours', '14 days', '30 days', '90 days'], 1, 'COBRA timing is a common compliance handoff issue.'),
      q('ACA Measurement Periods are used to determine what?', ['Premium rates', 'Full-time status for variable-hour employees', 'Carrier discounts', 'PTO balances'], 1, 'Measurement periods determine ACA full-time status.')
    ]
  },
  {
    icon: '📋',
    title: 'Field Exercises & Role Play',
    subtitle: 'Practice before your next prospect meeting',
    overview: 'Knowledge becomes skill through repetition. These scenarios help producers practice discovery, pain identification, and value positioning.',
    sections: [
      ['Scenario 1: Mid-Market Manufacturer', ['250 employees on ADP Workforce Now', 'One-person HR team', 'Manual carrier portal entry each OE', 'Value prop: own ADP benefits build, establish feeds, handle OE communications']],
      ['Scenario 2: Fast-Growing Tech Company', ['80 employees on BambooHR', 'Currently on PEO and considering exit', 'Value prop: be implementation quarterback for independent benefits setup']],
      ['Self-Assessment', ['Name at least 5 HRIS platforms', 'Explain 834 EDI in plain language', 'Ask HRIS questions before plan questions', 'Quantify manual admin time cost']]
    ],
    quiz: [
      q('For the 250-employee ADP manufacturer, what is the strongest value prop?', ['Lowest premium quote', 'Own ADP benefits build + 834 feeds + OE to give HR time back', 'More carrier choices', 'A longer contract'], 1, 'The strongest pain is operational burden.'),
      q('For a company leaving a PEO, your best positioning is as the:', ['Cheapest option', 'Implementation quarterback for independent benefits setup', 'Passive renewal sender', 'Carrier representative'], 1, 'PEO exits need an implementation quarterback.')
    ]
  },
  {
    icon: '🔗',
    title: 'Employee Navigator & HRIS Integrations',
    subtitle: "The broker's benefits platform that connects everything",
    overview: 'Employee Navigator is not an HRIS. It is a broker-owned benefits administration platform that connects payroll/HRIS, employees, carriers, COBRA/TPAs, and specialty vendors.',
    sections: [
      ['What EN Is', ['Broker-owned benefits admin platform', 'Hub between payroll and carriers', 'Where employees enroll', 'Creates broker stickiness']],
      ['Payroll Integration', ['Bi-directional demographic sync', 'Compensation flows from payroll to EN', 'Deductions flow from EN to payroll', 'New hires and terms usually start in payroll', 'Demographic and deduction audits are setup steps']],
      ['Carrier Integration', ['834 EDI feed', 'Data Exchange', 'iFrame integrations for certain worksite carriers']]
    ],
    quiz: [
      q('What is Employee Navigator, precisely?', ['An HRIS owned by employer', 'A broker-owned benefits admin platform connecting payroll/HRIS and carriers', 'A payroll processor', 'An insurance carrier'], 1, 'EN is broker-owned benefits administration, not an HRIS.'),
      q('In the payroll integration, which direction does compensation data flow?', ['From EN to payroll', 'From payroll to EN', 'It is not shared', 'From carrier to EN'], 1, 'Payroll owns compensation.'),
      q('Why does Employee Navigator create strong client stickiness for a broker?', ['It lowers premiums', 'The broker owns/manages the platform relationship', 'It is free for everyone', 'Carriers require it'], 1, 'The platform becomes part of the client’s operation.')
    ]
  },
  {
    icon: '🔄',
    title: 'The Hire-to-Retire Lifecycle',
    subtitle: 'Where benefits live at every stage',
    overview: 'Hire-to-retire maps every employee stage from recruitment to separation. Each stage touches HRIS, payroll, Employee Navigator, carriers, and COBRA/TPA workflows.',
    sections: [
      ['Lifecycle Stages', ['Recruit and hire', 'Onboard and enroll', 'Active employment and life events', 'Annual open enrollment', 'Leave of absence', 'Termination and offboarding', 'COBRA/post-employment', 'Retirement']],
      ['System Ownership', ['HRIS/payroll owns identity and money', 'Employee Navigator owns benefits elections and deductions', 'Carriers own coverage and claims', 'Handoffs are where things break']],
      ['Selling Across the Lifecycle', ['Map pain to a lifecycle stage', 'Fix new-hire leakage', 'Own open enrollment burden', 'Tighten termination and COBRA timing', 'Support retirement and Medicare transitions']]
    ],
    quiz: [
      q('In the hire-to-retire flow, where is a new hire entered FIRST?', ['Employee Navigator', 'Carrier portal', 'Payroll/HRIS', 'COBRA TPA'], 2, 'New hires generally originate in payroll/HRIS.'),
      q('Which system is the system of record for what an employee actually elected?', ['HRIS', 'Employee Navigator', 'Payroll', 'Carrier'], 1, 'EN is the benefits election record.'),
      q('Where does most lifecycle pain occur?', ['Inside one system', 'At handoffs between systems', 'Only during recruiting', 'Only at retirement'], 1, 'The seams are where mistakes happen.')
    ]
  },
  {
    icon: '🤝',
    title: 'Payroll Reps as Centers of Influence',
    subtitle: 'Building reciprocal referral relationships',
    overview: 'Payroll reps meet employers while they are making system decisions. A benefits producer who can send good payroll referrals and understand integrations can build a valuable COI channel.',
    sections: [
      ['Why Payroll Reps Matter', ['They meet prospects at a system-change moment', 'The relationship is naturally reciprocal', 'Shared technology creates collaboration', 'Quota-driven reps remember who helps them']],
      ['ADP and Paylocity Fit', ['ADP Major Accounts: roughly 50–1,000 employees', 'Paylocity: strong middle-market fit', 'Employee Navigator integration creates a shared implementation story']],
      ['How to Build the Relationship', ['Give first with qualified introductions', 'Prefer quality over volume', 'Create a repeatable handoff', 'Establish regular touchpoints', 'Co-market where allowed']]
    ],
    quiz: [
      q('Why is a payroll rep an ideal center of influence for a benefits producer?', ['They sell insurance directly', 'They meet employers actively making system decisions', 'They set carrier rates', 'They handle ERISA compliance for you'], 1, 'System-change conversations are a great time to revisit benefits.'),
      q('What is the best first move when building a COI relationship with a payroll rep?', ['Demand a written split', 'Send one or two qualified introductions first', 'Send as many cold names as possible', 'Wait for them to refer you first'], 1, 'Give first with qualified opportunities.'),
      q('Which target segments fit the partner strategy described?', ['ADP small business only', 'ADP Major Accounts and Paylocity middle market', 'Only under 50 employees', 'Only enterprise employers'], 1, 'Those segments align with the training strategy.')
    ]
  }
].map((m, i) => ({ ...m, id: i + 1 }));

function q(question, options, answer, explain) {
  return { q: question, options, answer, explain };
}

const C = {
  bg: '#0f1117', panel: '#141820', panel2: '#0d1018', line: '#1e2535',
  line2: '#2a3650', blue: '#4da6ff', purple: '#7c3aed', text: '#e8e8e8',
  muted: '#8b96a8', soft: '#c8d0dc', green: '#34d399', red: '#f87171'
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Quiz({ quiz, onComplete }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [locked, setLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const item = quiz[current];

  function choose(i) {
    if (locked) return;
    setSelected(i);
    setLocked(true);
    if (i === item.answer) setScore((s) => s + 1);
  }

  function next() {
    const projectedScore = score + (selected === item.answer ? 0 : 0);
    if (current + 1 < quiz.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setLocked(false);
    } else {
      setDone(true);
      onComplete(projectedScore, quiz.length);
    }
  }

  if (done) {
    const pct = Math.round((score / quiz.length) * 100);
    return <div className="card center"><div className="big">{pct >= 67 ? '✅' : '📚'}</div><h2>{score}/{quiz.length} correct</h2><p className={pct >= 67 ? 'good' : 'muted'}>{pct >= 67 ? 'Module quiz passed' : 'Review and try again'} · {pct}%</p></div>;
  }

  return <div className="quiz">
    <div className="row muted small"><span>Question {current + 1} of {quiz.length}</span><span>Score: {score}</span></div>
    <h3>{item.q}</h3>
    <div className="answers">
      {item.options.map((opt, i) => {
        const cls = locked ? (i === item.answer ? 'answer right' : i === selected ? 'answer wrong' : 'answer') : 'answer';
        return <button className={cls} key={opt} onClick={() => choose(i)}>{opt}{locked && i === item.answer ? ' ✓' : ''}{locked && i === selected && i !== item.answer ? ' ✗' : ''}</button>;
      })}
    </div>
    {locked && <p className="explain">{item.explain}</p>}
    {locked && <button className="primary" onClick={next}>{current + 1 < quiz.length ? 'Next Question →' : 'See Results'}</button>}
  </div>;
}

function Certificate({ name, pct, correct, total, onRestart }) {
  const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const code = 'HRIS-' + btoa(`${name}|${dateStr}|${correct}/${total}`).replace(/[^A-Z0-9]/gi, '').slice(0, 7).toUpperCase();
  return <>
    <style>{`@media print{body *{visibility:hidden}#certificate,#certificate *{visibility:visible}#certificate{position:absolute;left:0;top:0;width:100%}.no-print{display:none!important}}`}</style>
    <div id="certificate" className="certificate">
      <div className="big">🏆</div>
      <p className="eyebrow">Certificate of Completion</p>
      <h1>{name || '—'}</h1>
      <p>has successfully completed <strong>HRIS Mastery for Benefits Producers</strong> and passed the final cumulative exam.</p>
      <div className="certstats"><b>{pct}%</b><b>{correct}/{total}</b><b>{modules.length} Modules</b></div>
      <p className="muted small">Date: {dateStr} · Verification: {code}</p>
    </div>
    <div className="no-print center actions"><button className="primary" onClick={() => window.print()}>🖨️ Print / Save as PDF</button><button onClick={onRestart}>Retake Exam</button></div>
  </>;
}

function FinalExam({ onExit }) {
  const pool = useMemo(() => modules.flatMap((m) => m.quiz.map((item) => ({ ...item, moduleTitle: m.title }))), []);
  const [name, setName] = useState('');
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const EXAM_LENGTH = 20;
  const PASS_THRESHOLD = 80;

  function start() {
    setQuestions(shuffle(pool).slice(0, Math.min(EXAM_LENGTH, pool.length)));
    setAnswers({});
    setCurrent(0);
    setSubmitted(false);
    setStarted(true);
  }

  const correct = questions.reduce((acc, item, i) => acc + (answers[i] === item.answer ? 1 : 0), 0);
  const pct = questions.length ? Math.round((correct / questions.length) * 100) : 0;
  const passed = pct >= PASS_THRESHOLD;
  const allAnswered = questions.length && Object.keys(answers).length === questions.length;

  if (!started) return <div className="card center"><div className="big">🎓</div><h2>Final Cumulative Exam</h2><p className="muted">20 random questions from all modules. Score 80% to earn the certificate.</p><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" /><div className="actions"><button className="primary" disabled={!name.trim()} onClick={start}>Begin Exam →</button><button onClick={onExit}>Back to course</button></div></div>;

  if (submitted) return <div><div className="center"><div className="big">{passed ? '🎉' : '📚'}</div><h2>{passed ? 'Congratulations — you passed!' : 'Not quite there yet'}</h2><p className={passed ? 'good' : 'muted'}>{correct}/{questions.length} correct · {pct}%</p></div>{passed ? <Certificate name={name} pct={pct} correct={correct} total={questions.length} onRestart={start} /> : <div className="center actions"><button className="primary" onClick={start}>Retake Exam</button><button onClick={onExit}>Back to Course</button></div>}<h3>Review</h3>{questions.map((item, i) => <div className="review" key={i}><b>{answers[i] === item.answer ? '✓' : '✗'} {item.q}</b><p>Correct: <span className="good">{item.options[item.answer]}</span>{answers[i] !== item.answer ? <> · You chose: <span className="bad">{answers[i] != null ? item.options[answers[i]] : '—'}</span></> : null} · <span className="muted">{item.moduleTitle}</span></p></div>)}</div>;

  const item = questions[current];
  return <div className="card"><div className="row muted small"><span>Question {current + 1} of {questions.length}</span><span>{Object.keys(answers).length} answered</span></div><div className="progress"><span style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div><h3>{item.q}</h3><div className="answers">{item.options.map((opt, i) => <button key={opt} className={answers[current] === i ? 'answer picked' : 'answer'} onClick={() => setAnswers((p) => ({ ...p, [current]: i }))}>{String.fromCharCode(65 + i)}. {opt}</button>)}</div><div className="row actions"><button disabled={current === 0} onClick={() => setCurrent((c) => Math.max(0, c - 1))}>← Back</button>{current < questions.length - 1 ? <button onClick={() => setCurrent((c) => c + 1)}>Next →</button> : <button className="primary" disabled={!allAnswered} onClick={() => setSubmitted(true)}>{allAnswered ? 'Submit Exam ✓' : `Answer all (${questions.length - Object.keys(answers).length} left)`}</button>}</div></div>;
}

export default function App() {
  const [screen, setScreen] = useState('course');
  const [view, setView] = useState('learn');
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState({});
  const [scores, setScores] = useState({});
  const mod = modules[active];
  const completed = Object.keys(scores).length;
  const overall = completed ? Math.round((Object.values(scores).reduce((a, b) => a + b.score, 0) / Object.values(scores).reduce((a, b) => a + b.total, 0)) * 100) : 0;

  function go(i) { setActive(i); setView('learn'); setOpen({}); setScreen('course'); window.scrollTo(0, 0); }

  return <div className="app">
    <header><div className="wrap head"><div><p className="eyebrow">Benefits Producer Training Series</p><h1>HRIS Mastery for<br/><span>Benefits Producers</span></h1><p className="muted">Understand the systems employers run on — and use that knowledge to earn Agent of Record and never lose a renewal.</p></div><div className="badge"><small>Progress</small><b>{completed}/{modules.length}</b><small>modules quizzed</small>{completed ? <small className="good">{overall}% avg score</small> : null}</div></div><nav className="wrap">{modules.map((m, i) => <button key={m.id} className={active === i && screen === 'course' ? 'tab active' : 'tab'} onClick={() => go(i)}>{m.icon} {String(m.id).padStart(2, '0')}{scores[m.id] ? ' ●' : ''}</button>)}<button className={screen === 'exam' ? 'tab exam activeExam' : 'tab exam'} onClick={() => setScreen('exam')}>🎓 Final Exam</button></nav></header>
    <main className="wrap">{screen === 'exam' ? <FinalExam onExit={() => setScreen('course')} /> : <><section className="moduleHero"><div className="emoji">{mod.icon}</div><div><p className="eyebrow">Module {mod.id} of {modules.length}</p><h2>{mod.title}</h2><p className="muted">{mod.subtitle}</p></div><p className="overview">{mod.overview}</p><div className="toggle"><button className={view === 'learn' ? 'on' : ''} onClick={() => setView('learn')}>📖 Learn</button><button className={view === 'quiz' ? 'on' : ''} onClick={() => setView('quiz')}>📝 Quiz {scores[mod.id] ? `(${scores[mod.id].score}/${scores[mod.id].total})` : ''}</button></div></section>{view === 'learn' ? <section>{mod.sections.map(([heading, items], sIdx) => <div className="section" key={heading}><h3>{heading}</h3>{items.map((text, iIdx) => { const key = `${sIdx}-${iIdx}`; return <button className="item" key={text} onClick={() => setOpen((p) => ({ ...p, [key]: !p[key] }))}><b>{text.split(':')[0]}</b>{text.includes(':') && open[key] ? <p>{text.split(':').slice(1).join(':').trim()}</p> : null}<span>{open[key] ? '×' : '+'}</span></button>; })}</div>)}<div className="center"><button className="primary" onClick={() => setView('quiz')}>Test Yourself on Module {mod.id} →</button></div></section> : <Quiz key={mod.id} quiz={mod.quiz} onComplete={(score, total) => setScores((p) => ({ ...p, [mod.id]: { score, total } }))} />}<div className="row navButtons"><button disabled={active === 0} onClick={() => go(active - 1)}>← Previous</button><button onClick={() => active < modules.length - 1 ? go(active + 1) : setScreen('exam')}>{active < modules.length - 1 ? 'Next Module →' : '🎓 Final Exam →'}</button></div></>}</main>
  </div>;
}
