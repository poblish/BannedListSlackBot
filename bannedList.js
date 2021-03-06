var s = require('./contentSupport.js');

var theCoreTerms = [s.optSuffixes('(A )?(basket|package|raft|range|series) of',  'Measures?'),
'Above my pay grade',
'Acclaimed' + s.someWords(0,1) + ' authors?',
'(A|C|Z)-list',
'Across the piece',
s.optPrefixes('(Action|Cascade|Progress) this',  'I','Let.s','We','You'),
'Added bonus',
'A fine art',
'Affordable',
s.optDashes('Age-old question'),
s.reqdPrefixes('Agenda',  'Forward'),
'Ahead of( the curve)?',
'Ahem',
s.optPrefixes('All comes down to turnout',  'It'),
'A long time in politics',
'Any time soon',
'Any way, shape or form',
'Approbation',
s.reqdPrefixes('Arrogance',  'Breathtaking'),
'Art form',
'Articulated* a',
s.optSuffixes('A sense of',  'Vitality'),
'At a crossroads',
'At the end of the day',
'At this moment in time',
'[A-Z][A-Z][A-Z]+athon',
'Atop',
'A truth universally acknowledged',
'A very British' + s.someWords(0,1),
'Aver(red|ring)',
'Awry',
s.optDashes('Back-burner'),
'Back in the day',
'Ballpark',
'Bank of Mum and Dad',
s.optDashes('Basket-case'),
'Battle lines?',
'Beggars Belief',
'Beleaguered',
'Beyond (parody|satire)',
s.optPrefixes('Biblical proportions', 'Almost'),
'Big Ask',
'Big Beasts?',
s.optPrefixes('Big picture',  'The'),
'Blood on the (carpet|floor|walls)',
'Blueprint',
'Blue sky thinking',
'Bottom line',
'Bubbly',
s.reqdPrefixes('Bullet',  'Magic','Silver'),
'By the back door',
s.optPrefixes('Campaigners',  'Health'),
s.optDashes('Cast-iron guarantees?'),
'Catalogue of errors',
'Celebrat(es*|ing) diversity',
'Celebrity',
'Chaos',
'Chillax(ed)?',
'Circular firing squad',
'Civil society',
'Clause (Four|IV) moment',
'Clear and present danger',
'Close down discussion',
'Cognoscenti',
s.optDashes('Comfort-zone'),
s.optSuffixes( s.optPrefixes('Communit(y|ies)',  'Asian','Black','BME','Diverse','Ethnic','Gay','Harmonious','International','Minority','Muslim','Positive','Real','Scientific','Security','Strong(er)?','The','The \\w+','(The )?Wider \\w+','Vulnerable',s.optDashes('Working-class')),  'Cohesion','Leaders?','Partner(ship)?s?','Representatives?','Tensions?'),
'Compelling',
'Confined to a wheelchair',
'Connect with the (electorate|voters?)',
'Crash and burn',
'Crowd-*sourc(e|ing)',
'Crystal clear',
s.reqdSuffixes('Culture of',  'Blame','Excuses'),
'Damp squib',
'Dawn of time',
'Dead hand',
'Dead in the water',
'Dead on arrival',
'Deafening silence',
'Death knell',
'Decruit',
'Demoni(s|z)(ation|e|ed|ing)',
'Dialogue of the deaf',
s.optPrefixes('(Capitalism.s|His|Her|Labour(.s)?|My|Our|Their|Tor(y|ies.)|\\S+ Party(.s)?) DNA',  'In','Not in'),
'Direct descendant',
s.reqdPrefixes('Do self-doubt',  'Does not','Doesn.t'),
'Doff',
s.optDashes('Dog-whistle'),
'Downward spiral',
'Dracula in charge of a blood bank',
s.optDashes('Drink(s|ing)? the Kool-Aid'),
'Edgy',
'Elephant in the room',
'Empower(ment)?',
'Empty-chair',
'Enough already',
'Enviable curves',
'Epic Fail',
'Et tu, \\w+',
'Eurogeddon',
'Events, dear \\S+',
'Every dot and comma',
s.optSuffixes( 'Existential',  'Challenge','Crisis'),
s.reqdPrefixes('Experience',  'Passenger'),
'Exponentially',
'Eye-watering',
'False dawn',
s.optDashes('Fast-forward to'),
'Fatally flawed',
'Febrile',
'Feisty',
'Feral',
'Few and far between',
s.optPrefixes('Fit for Purpose',  'Not'),
s.reqdSuffixes('Flagship',  'Hospital','News','Policy','(\\S+ )?Programmes?','(\\S+ )?Stores?'),
'Flatlin(e|ed|ing)',
'Flexicurity',
'Fog of war',
s.reqdPrefixes('Footprint',  'Carbon','Digital','Energy','Environmental'),
'Footprinted',
'Foregone conclusion',
s.optDashes('Front-line'),
'Gamely',
'Gerrymander(ing)?',
s.reqdPrefixes('Get it',  'Does not','Doesn.t'),
'Giftable',
'Give 110(%| per cent)',
'Glaring loophole',
'Good Election to Lose',
'Grexit',
'(Grind|Ground) to a halt',
'Grist to the mill',
'Guilty as charged',
'Guns blazing',
'Hapless',
'Hard-headed',
s.reqdSuffixes( s.optDashes('Hard-working'),  'families','people'),
'Hearts and minds',
s.optDashes('Heavy-lifting'),
'Here.s the thing',
'Hodge-podge',
'Hoffice',
'Honcho',
'Hope (you are|you.re) well',
'Hostage to fortune',
'Hotbed',
'Human shield',
s.reqdPrefixes('Hypocrisy',  'Breathtaking','Rank','Shameless'),
'Iconic',
'If I were a betting man',
'Ignore at our peril',
s.optSuffixes('Inclusive',  'Vision'),
'In conjunction with',
'Inconvenient truth',
'Incredibl(e|y)',
s.reqdPrefixes('Indictment',  'Damning','Devastating'),
'Inextricably link(ed)?',
'In harm.s way',
'In point of fact',
'In (order|relation) to',
'In (respect|terms) of',
'Inside the Beltway',
'Is it just me, or',
s.optPrefixes('Is not an option',  'Doing nothing','(The )?Status quo'),
'Is toast',
'It.s \\S+, Jim, but not as we know it',
'It.s (the )?\\S+, stupid',
'Jubilympics',
'Keynote speech',
'Kick(ed)? into (the )?long grass',
'Kick(ing)? the can( further)? down the road',
s.optDashes('Last-ditch'),
'Last time I looked',
'Learning curve',
'Leav(es|ing) little to the imagination',
'Let.?s be clear',
'Level playing field',
'Life chances',
'Lifestyle',
'Line in the sand',
'Lost generation',
s.reqdPrefixes('Majority',  'Deserving','Silent'),
'Make no mistake',
'Makeover',
'Massive own goal',
'Mee*t with',
'Methinks',
'Militate against',
'Moment in time',
s.optPrefixes('Mood music', 'Political'),
'Moral compass',
s.optSuffixes('(The )?Most vulnerable',  'in society'),
'Name and Shame',
'Neglect \\S+ at our peril',
'New Normal',
'No-brainer',
'No longer\\.',
'No \\S+, please, we.re \\S+',
'Normalcy',
'Nothing ruled out',
'Nothing will ever be the same again',
'Now is not the time for',
'Now,? more than ever',
'\\S+ of the madhouse',
'Omnishambles',
'Omnishambolic',
'On a collision course',
'On a daily basis',
s.optPrefixes('Only poll that matters',  'The'),
'Opening salvo',
'Opined*',
'Outside of',
/* 'Outwith', */
'Paucity',
'Perfect Storm',
s.optDashes('Pipe-dream'),
'Plan B',
'Play(ed|ing)? a leading (part|role)( in)?',
'Play(ing)? catch-up',
'Play into (the hands of|\\S+ hands)',
'Plethora',
'Political (football|hot potato|Journey)',
'Post ?code lotter(y|ies)',
'Pot, Kettle',
'Prior to',
'Progressive',
'Progressives*',
s.optPrefixes('Psyche',  'American','National'),
'Psychodrama',
s.optSuffixes('Quantum',  'Leap'),
'Question mark over',
s.reqdPrefixes('Radar',  '(Below|Under)' + s.someWords(1,2)),
'Rais(es*|ing) awareness',
s.reqdPrefixes('Raison d.etre',  'Her','His'),
'Read(ing)?(| \\S*) the Riot Act',
'Real (change|choice|families|lives|people|relationships?|world)',
'Reality check',
s.optSuffixes('(Re)?arranging( the)? deckchairs',  'On the \\S'),
'Rebalanc(e|ing) (the|the \\S+|our) economy',
'(Re)?Connect with the voters',
'Red lines',
s.optSuffixes('Ride roughshod',  'Over','Poop'),
s.optDashes('Ring-fenced?'),
'Ring the changes',
s.optSuffixes('Robust',  'Evidence','Frameworks?','Measures?'),
'Rude awakening',
'Scant comfort',
'Scientifically proven',
'Scrap heap',
s.optDashes('(Sea|Step)-change'),
'Seal the Deal',
s.optSuffixes('Seismic',  'Shift'),
'Serve\\S? the purpose of',
'Serves to',
'Shocked and appalled',
s.optDashes('Shovel-ready'),
'Shred of credibility',
'Signage',
'Simples',
'Sing(ing|s)? from the same (hymn|song) sheet',
'Siren voices*',
'Sleaze',
s.reqdSuffixes('Sleepwalk(ing)?',  'Into','Towards?'),
s.optPrefixes('Smell the Coffee',  'Wake up and'),
'Social mobility',
'Something of a',
'Soubriquet',
'Speak(ing)? truth (un)?to power',
'Spiral of decline',
s.optDashes('Squeaky-bum-time'),
'Spiral out of control',
'Stand shoulder to shoulder with',
'Stark contrast',
'Staycation',
s.reqdSuffixes('Stinging',  'Attack','Criticism'),
'Substantive',
'Take up the cudgels for',
'Talismanic',
'Tangled web',
'Tectonic plates',
'The clue is in the (name|title)',
'The hallmarks of',
'The most important' + s.someWords(1,2) + ' you.ve never heard of',
'The Mother of all',
'The prospect of',
'The reason why',
'The reason is because',
'The(| simple) fact(| of the matter) is',
'The simple reason being',
'The truth( of the matter)? is',
'The \\S+ Delusion',
'Tick(ing|s)? all the( right)? boxes',
s.optDashes('(Ticking-)?' + 'Time-Bomb'),
s.optDashes('Tipping-point'),
'Tome',
'To(e|w)(ing)? (the|\\S+) line',
'Too little, too late',
s.optDashes('Top-down'),
'Top priority',
'Touch base',
'Toxic',
'Tropes?',
'Turkeys voting for Christmas',
s.reqdPrefixes('Underbelly( of the city)?',  'Dark','Seedy','Sinister'),
'Underclass',
'Uni',
s.reqdPrefixes('Unique',  'Fairly','Particularly'),
'Unlock(ing)? potential',
'Up and down the country',
'Upcoming',
'Uptick',
'Utilis(e|ed|ing)',
'Vibran(t|cy)',
'Virtuous circle',
'Vulnerable moment',
'Waitlist(ed|ing)',
'Wake-up call',
'War of words',
'Way (beyond|more)',
'We are all \\S+ now',
'We are where we are',
s.optDashes('Well-oiled machine'),
s.reqdSuffixes('Westminster',  'Bubble','Village'),
s.optPrefixes('What drives (him|her)',  'Not'),
s.optPrefixes('What gets (him|her) up in the morning',  'Not'),
s.optDashes('Wheelchair-bound'),
'Wield the dagger',
'Wiggle room',
s.optPrefixes('Will take no (lectures|lessons)',  'I','We'),
'Win-win',
'Without fear or favour',
'Wow factor',
'Wreak havoc',
'You couldn.t make it up\\.?'];


var theCaseSensitiveCoreTerms = ['ConDems?( Government)?',
'Team [A-Z]\\S+'];


var theNotJustWordsTerms = [ s.optPrefixes('.?Son of the manse.?',  'Dour'),
'on speed\.'
];


var theCaseSensitiveNotJustWordsTerms = ['\\b' + 'As a [A-Z]\\S+' + s.someWords(0,2) + ',( I.m)?',
'It is what it is\\.',
'It was not meant to be like this\\.',
'SoLoMo',
'Step forward, [A-Z]\\S+',
'That is all\\.',
'To be fair,',
'\\b' + 'Well-worn clich(e|\\xE9)',
'\\b' + 'Who knew\\?'];


var theIgnoreTerms = ['(Points|Pulls?|Way) Ahead of',
'Common sense',
s.reqdSuffixes('Communities',  'Secretary'),
s.reqdSuffixes('Community',  'Cent(er|re)s?','Hospital','Order','School'),
'Equality Act',
'Hackathon',
'Jonathon',
'Marathon',
'Orthodox priest',
'Progressive (Space )?Rock',
'(Russian|Greek) Orthodoxy?' /* So all Orthodoxies are banned apart from these ones */,
'Sense of' + s.someWords(0,1) + ' humour',
'Team (Blog|Building|Championships?|Leader|Meeting|Pursuit)',
s.reqdSuffixes('Toxic', 'Chemicals?','Gas(es)?','Nuclear','\\S+ Radioactive','Substances?'),
'Vital (organ|signs)',
'Was met with'
];


var theIgnoredNotJustWordTerms = [ s.quoted('Honou?r killings?')
];


var theEducationSpeakTerms = [ 'Learnacy' ];


var theManagementSpeakTerms = [ s.optPrefixes('Action points?',  'Key','Numerous'),
s.optSuffixes('Adjective-rich',  'Answers'),
'Articulate (this|that) message',
s.optDashes('Best-of-(brand|breed)'),
s.reqdSuffixes('Brand',  'Positioning','Story'),
'Build on these (strengths)',
'Change agents?',
'Changemakers?',
'Coordinative leadership',
'Corporate citizen',
s.reqdSuffixes('Creat(e|ing) a',  'Place that','Space where'),
'Deliverables?',
'Delivery landscape',
'Demanding methodology',
s.optPrefixes('De-risk',  'Absolutely'),
'Digital by default',
s.reqdPrefixes('Direction', 'Strategic'),
s.reqdSuffixes('Downstream',  'Costs?'),
'Empathies',
'Extract adjectives',
'Fit for the future',
'Five point plan',
'Focus+ed objectives',
s.reqdSuffixes('Forward',  'Offer','Planning','Policy'),
s.reqdPrefixes('Frameworks?', 'Critical','Narrow','Policy','Strategic'),
s.optDashes('Game-chang(er|ing)'),
s.optPrefixes('Global leadership',  'Aspire to'),
'Going forward',
'Granular(ity)?',
s.optDashes('Ground-breaking'),
'Hardwired?',
'Helicopter view',
'Holistic',
s.optPrefixes('Horizon Shift',  'Engineer a'),
'Ignite their base',
'Implement \\S+ commitments?',
'Information age',
'Inject some clarity',
'Key technolog(y|ies)',
s.optSuffixes('Lead(ing)? cheerleader',  'Behind'),
'Leverage' + s.someWords(1,2) + ' functionality',
'Leverage the \\S+',
'Likeonomics?',
s.optDashes('Low-hanging fruit'),
'Mainstreaming',
'Metaphor questions?',
'(Off|On)-?boarding',
'Ongoing',
'Organically',
'Out of the box',
s.optPrefixes('Outreach',  'Intensify'),
s.optDashes('Outside-the-box'),
'Pacier',
s.optPrefixes( s.optSuffixes('Paradigm(atic|s)?',  'Shift'),  'Dominant'),
s.reqdPrefixes('Parameters?',  'Certain','Her','His','Important','Key','Main','The'),
'Partner with',
'Plurality concerns?',
'Pluss?ification',
s.optPrefixes('Produc(e|ing) the goods',  'To'),
s.optDashes('Purpose-driven'),
'Reactive incrementalism',
'Reinvent(ing)? the wheel',
'Resonates?( with)?',
'Root and branch',
'Service redesign',
'Shap(e|ing) the future',
s.optPrefixes('Shared value',  'Create'),
'Sharp-edged statements?',
'Sharpen(ing)? accountability',
'Shift the graph',
s.optSuffixes('Stakeholders?',  'Liaison'),
s.optDashes('State-of-the-art'),
s.optSuffixes('Step(ping)? up',  'To the plate'),
'Strategic (imperatives?|storytelling)',
'Sunsetting',
'Surface them',
s.reqdSuffixes('Sustainability',  'Champions?','Positioning'),
'Systemic( failure|ally)?',
'Systems thinking',
s.reqdSuffixes('Takeaway',  'Points?'),
'Take effect',
'Tak(e|ing) on board',
'Taking(\\S+)? forward',
s.optDashes('Thought-leader'),
'Tradigital',
'Transition into',
'Two-way dialogue',
'Undertaking in lieu',
'Unlock \\S+ dynamism',
'Value chains?',
'Vanilla Strategy',
s.reqdPrefixes('Vision',  'Cogent','coherent','coherent and compelling','compelling',s.optDashes('Long-term'),'(More )?Rounded'),
'Walk the talk',
'Web 2.0',
'Webinar',
'Where we need to (be|go)',
'Wrongsided?' + s.someWords(0,1) + ' demographic',
];


/* Abused sociological terms */
var theSociologyTerms = ['Disciplinarity',
'Eliciting meaning',
'Fact Pattern',
'Intersectionality',
'Meaning-(based|centered)',
s.optSuffixes('Overarching',  'Story'),
'Positionality',
s.optSuffixes('Psychodynamic',  'Dimensions'),
s.optSuffixes('Psychosocial',  'Dimensions'),
'Transformative',
];


/* Weaselly language used by lazy or tricky authors */
var theExtraWeaselTerms = ['Arguably',
/* 'Clearly', */
'Could be argued',
'Could do worse than',
'Demonstrably',
s.optSuffixes('Evidence (does show|shows)',  'That'),
'For (many|several) reasons',
s.reqdPrefixes('Good reasons',  'Many','Several'),
'In (many|numerous|several) ways',
'Is it any wonder',
s.optSuffixes('It goes without saying',  'That'),
'Key argument',
s.reqdPrefixes('Linked to',  'Has been','Is'),
'Mature debate',
'More than comparable.* (to|with)',
'Negative consequences?',
'Negative impact on \\S+',
'Negatively affect(ed)?',
'Not (inconceivable|inconsequential)',
'Not un(connected|familiar|just|justifiable|like)',
s.optPrefixes('One thing is certain',  'Only'),
'Research has shown',
s.reqdSuffixes('Seems only',  'Fair','Right','Sensible'),
/* 'Significant', */
'Some circumstances',
'Some have argued',
'Studies have (found|shown)',
'Troubling questions?',
s.optSuffixes('What is clear is',  'That'),
'What seems clear',
s.reqdPrefixes('Would Argue',  'Many','Some')
];


/* Extra political terms, added by Andrew Regan */
var theExtraTerms = ['Abundantly clear',
'A Capitalism that',
'Accelerating' + s.someWords(1,2) + ' change',
'Accelerating \\S+ and \\S+ change',
'Accelerating rapidly',
'A concept of what it means',
'A dynamic of',
'Against (a|this) backdrop',
s.reqdPrefixes('Agenda',  'Fairness','Strong'),
'Alarm bells( are)? ringing',
'An Economics that',
'Annus horribilis',
'Apropos nothing',
'Arc of history',
'Are we all' + s.someWords(1,2) + ' now\?',
'Axe to grind',
'Backbone of Britain',
'Backsliding',
'Balkanis(e|ed|ation)',
s.optPrefixes('Baseline',  'Firm'),
'Blanket idea',
'Blink(ed)* in the face',
'Blood money',
'Body (blow|politic)',
'Bow down before',
'Brighton Rocks',
'Broad swathes?',
'Broad sweep of history',
'Broken Britain',
'By dint of',
'Byzantine complexity',
'Campaign groups?',
s.optSuffixes('Cannot afford the luxury of',  'Time'),
'Catastroph(e|ic)',
'Challenges? for both (Left|Right) and (Right|Left)',
'Chang(e|ing) the conversation',
'Clarion',
s.reqdPrefixes('Clarity',  'Gain','Get'),
s.optSuffixes( s.optDashes('Cloud-cuckoo'),  'Land'),
'Clear (blue|red) water',
'Closer? to the ground',
'Clunking fist',
'Coherent (alternative|strategy)',
'Common story',
s.reqdPrefixes('Concerns',  'A few','Has','Have'),
'Concrete (awareness|solutions?)',
'Constant vigilance',
s.reqdPrefixes('Contradictions?',  'Internal','Its own'),
s.reqdPrefixes('Conversation',  'Contemporary','Economic','Grown-up','National','Nuanced','Political'),
'Conversation with the public',
s.optPrefixes('Creative industries',  'The'),
'Credibility gap',
'Creeping (deregulation|privati[s|z]ation)',
s.reqdPrefixes('Critical mass',  'Attained'),
'Cross(ed|ing)? (a|the) Rubicon',
s.optDashes('Crunch-time'),
'cui bono',
'Day of reckoning',
'Dead man walking',
'Deal or No Deal',
s.optDashes('Death-spiral'),
s.optPrefixes('Decency',  'Common'),
'Decent',
s.optPrefixes('Decent people',  'All'),
'Decimat(e|ing)',
'Defining moment',
'Deserve nothing less',
'Detoxify',
'Different kind of emphasis',
'Direction of (political )?travel',
s.reqdPrefixes('Discourse',  'Prevailing'),
'Do \\S+ differently',
'Do the right thing',
'Dollargeddon',
s.reqdSuffixes('Dustbin of',  'History','\\S+ failure'),
'Dust down the record',
'Echo \\S+ the years',
'Embrace reform',
s.reqdPrefixes('Engagement',  'Effective','Higher'),
s.optDashes('Ever-polarising'),
s.reqdPrefixes('Excess',  'Runaway'),
'Excessive',
'Excellence',
'Expeditious(ly)?',
'Factoids?',
'Fear to tread',
s.reqdSuffixes('Fertile',  'Ground','Territory'),
'Fight(ing)? the (fair|good) fight',
'Fight(ing)?,? tooth and nail',
'Fill(ing)? the black hole',
'Foot-dragging',
'For the few',
'Frau Merkel',
s.reqdSuffixes('Fundamental',  'Change','Debate','Issue'),
'(Gave|Given?) rise to',
'Gazang(ing|ed)?',
s.optSuffixes('Gendered',  'Dynamics','Lens'),
'Generation Rent',
s.reqdSuffixes('Genuine',  'Attempt','Credibility'),
'Get(ting)? into bed with',
s.optPrefixes('Get serious',  'Need to'),
'Global world',
s.optDashes('Gold-plated'),
'Golden goose',
'Golden thread',
'Good ship \\S+',
s.optPrefixes('Good society',  'The'),
'Good values',
'Grand narrative',
'Grasp the nettle',
'Grassroots (movements?|supporters?)',
'Growing (calls|consensus)',
'Growth industries',
s.optDashes('Hard-pressed families'),
s.reqdSuffixes( s.optDashes('Hard-working'),  'Britons','Majority','Many','Taxpayers?'),
'(Has|Have) to go further',
'(Has|Have) resonance',
s.reqdPrefixes('(Has|Have) (Her|His|Their) views',  'He','She','They'),
'Have the values',
'\'Healthier\'',
'Hearts? ripped out',
'Hegemonic',
'Hell hath no fury',
'Honou?r killings?',
'Hove,? Actually',
'Human-scale',
'Humanitarian space',
'Hurtling towards',
'I make you this promise',
s.optSuffixes('Ideological',  'Divisions?','Gamble','Purpose','Reasons'),
'If that makes me a' + s.someWords(1,2) + '. then',
'In politics, as in \\S+',
'In the name of ideology',
'In the \\S+ worldview',
'In this era of \\S+',
'Incalculable',
'Increasingly noted',
'Inexorable',
'\\S+ in sheep\'s clothing',
s.reqdPrefixes('Insiders?',  'Downing Street'),
'Insignificant',
'Interests of the majority',
s.optPrefixes('(National|Public) Interest',  'The'),
s.optPrefixes('Internet is changing the way',  'The'),
'Iron \\S+ in \\S+ velvet glove',
s.optPrefixes('Issues? of conscience',  'Critical'),
'Issues that matter',
s.optSuffixes('Job of work',  'To do'),
'Jump(ed)* the shark',
s.optPrefixes('Jury is still out',  'The'),
s.reqdPrefixes('Justice',  'Gender','Social'),
'Kick in the teeth',
'Kulturkampf',
'(Laid|Lay|Laying) the foundations',
'Lamented',
s.reqdPrefixes('Landscape', 'Changed','Different','Economic','Political','Social'),
'Last chance saloon',
'Leading (\\S+ )?(blogger|campaigner|MP|reason|thinker|voice)s?',
'Leaps and bounds',
s.reqdSuffixes('Let.s be',  'Honest','Realistic'),
'Level killing-field',
'Licking their lips',
'Lifeblood',
'Listen very hard and you will hear',
'Litmus test',
'Little local difficulty',
'Lived experiences?',
'Loom large',
'Ludicrous',
'Made his mark',
'Map \\S+ agenda',
'Marathon not a sprint',
'May or may not',
'Meaningful',
/* 'Meaningless', */
/* 'Mechanisms', */
'Media moguls?',
'Mentality shift',
'Message discipline',
'Me-too approach',
'Metastorm',
'\'Minefield\'',
s.reqdPrefixes('Moment',  'Iraq War','poll tax'),
'Mounting opposition',
s.reqdSuffixes('Moral',  'Bankruptcy','Integrity'),
s.reqdSuffixes('Morally',  'Bankrupt','Important'),
'Mumtrepreneurs?',
'Nature of society',
'Netizen',
'Noises off',
'No less a \\S+ than',
'No-nonsense',
'Nonsensical',
'Non-traditional backgrounds?',
'No past to',
s.reqdPrefixes('Nostrums?',  'Fundamentalist'),
'Nothing short of',
'Not waving but drowning',
'Objective analysis',
'(\\S+s|People) of all (colou?rs|hues)',
s.reqdPrefixes('Of colou?r',  'Man','Men','People','Woman','Women'),
s.reqdPrefixes('Old days',  'Bad','Good'),
'Old (economic|political) certaint(y|ies)',
'On a knife edge',
'On a timely basis',
s.reqdPrefixes('On the beat',  'Bobbies','Police.*'),
'Only fair that',
'Operationali(s|z)(e|ation)',
'Organi(s|z)ational citizenship',
'Our culture',
'Our \\S+ crosshairs',
'Owns this turf',
'Panjandrums*',
s.optPrefixes('Parroting',  'Endless'),
'Pay packet',
'People of colou?r',
'Perma-austerity',
'(People|Person) of colou?r',
s.reqdPrefixes('Picture', 'Bigger'),
s.optPrefixes('Pivotal role', 'Play(s|ed)? a'),
s.optPrefixes('Plague on',  'A'),
s.optDashes('Political dead-end'),
'Political (calculus|dynamics*|furniture|lexicon|space)',
s.reqdPrefixes('Poll Tax',  '(The|This) Government.s','His','(Tony )?Blair.s','(David )?Cameron.s'),
'Prism',
'Privately delighted',
'\'Promising\'',
'Prostrated',
'Put manufacturing at its heart',
'Puts? the public interest before',
'Put(ting)? \\S+ at the (very )?heart of',
'Quality of place',
'Race is wide open',
'Radical transformation',
'Reach(ing)? boiling point',
s.optSuffixes('Reach(ing)? out to',  'All people'),
s.optPrefixes('Real issues',  'Distract(ing)? from the'),
'Reared its(| ugly) head',
s.reqdPrefixes('Reception',  'Lukewarm'),
'Reciprocity',
'Redefine' + s.someWords(1,2) + ' politics',
'Red in tooth and claw',
'Reflect (our|their) values',
'Reframe',
'Remains to be seen',
'Responsible measures*',
'Rethink the very foundations?',
"Rising echo",
'Rolling programme',
'Rootedness',
s.optPrefixes('Rot has set in',  'The'),
'Rubs? salt into the wound',
'Sacrificed? (at|on|upon) the altar',
s.optSuffixes('Sacrificial lambs?',  'To the slaughter'),
'Say it again',
'Scale of the challenges? faced',
s.optPrefixes('Scarcely be able to believe',  'Must'),
'Scathing attacks?',
'Seared in(to)? my memory',
'Seiz(e|ing) the initiative',
'Self-(evident|hatred|indulgent|satisfied|serving)(ly)*',
'Senior( (Labour|Tory))? figures?',
'Sensible proposal',
'Serious questions? to answer',
'Set to continue',
'Shameless(ly)*',
'Shape a new deal',
'Sharply critical',
s.optPrefixes('Shibboleths?',  'Economic','Free-market','Market','Old'),
'Ship of state',
'Shock and awe',
'Shutting the stable door after the horse has bolted',
'Slap in the face',
'Slippery slope',
'Slow motion \\S+ crash',
s.reqdSuffixes('Social',  'Acceptability','Change','Cleansing','Legitimacy'),
s.reqdPrefixes('Sources?',  'Downing Street'),
'Squar(e|ing) the circle',
'Squeezed? families',
'Squeezed middle',
'Standstill commitments?',
s.reqdPrefixes('Story',  'Resonant'),
'Straitened times*',
s.optSuffixes('Strike at the heart',  'Of'),
'\'Strong case\'',
'Substantial',
'Sucking demand out',
'Sustainable (future|growth)',
'(Un)?Sustainab(le|ility)',
'Synapses? of struggle',
'Take the opportunity to',
'Take up the cudgels?',
'Tantamount',
s.optPrefixes('Tenets?',  'Central','Core','Key'),
'The reality is',
s.optPrefixes('The heart bleeds',  'How'),
'The (left|right) needs (a|to)',
s.optPrefixes('The reset button',  'Hit(ting)?'),
'The time for \\S+ is over',
s.optDashes('Thinly-veiled'),
s.reqdPrefixes('This forward',  'Move','Take'),
'(This|thus) far and no further',
'Those( not)? of faith',
'\\S+,? thy name is',
'To fit changing times',
s.optPrefixes('Traction',  'Gain'),
s.optPrefixes('Trajectory',  'Current'),
'Trenderati',
'Trendfear',
'Tsunami of \\S+',
'Unbeknownst',
'Uncharted waters',
'Undeniabl(e|y)',
s.optDashes('Under-funded'),
'Unforgettable',
'UK plc',
'Unsurprisingly',
s.reqdPrefixes('Uplift',  'An','Full'),
'Upkick',
'Upskill(ing)*',
s.optPrefixes('Vacuous',  'Ideologically','Intellectually'),
'Values? shift',
'Very distinctive',
'Very real risk',
'Vital',
s.optSuffixes('Vocalise',  '\\S+ feelings'),
'Vulnerable groups*',
'Waiting nervously',
s.reqdPrefixes('Ways? of thinking',  'New','Old'),
'Weather the' + s.someWords(0,3) + ' storm',
'We live in interesting times',
s.optPrefixes('Well-?being',  'General'),
'Where ' + s.andOrEither('children','young people') + ' come first',
'Where I am coming from',
'Where.s the beef?',
s.optPrefixes('Where we.re at( politically)?',  '(An )?Expression of'),
'Whiff of grapeshot',
'Whip(ping)? up a storm',
'Whither \\S+\?',
'Who will rid me of this turbulent \\S+\\??',
'Wiped off the value',
'Wip(e|ing) the slate clean',
s.optPrefixes('With a human face',  'Capitalism','Politics'),
'With( greater| our)? freedom( also| should)? comes?( greater)? responsibilit(y|ies)',
'Won.t happen by accident',
'Works for the many',
s.optSuffixes('Worship at the altar( of)?',  'Commercialism','Technology'),
'Year zero'
/* 'Young people' */];


/* 'Hooray' terms: the writer wants you to like something, e.g. Justice, Equality, People before Profit, etc. @ http://wordlywisdom.net/Boo-and-Hooray.php */
var theExtraHoorayTerms = ['A new thinking',
'Build(ing)? a different kind of',
s.optPrefixes('Equality',  'Embrac(e|ing)'),
s.optDashes('Ever-astute'),
'Fair(er)* (capitalism|economy|society|tax(es)?)',
'Fairness',
'For democracy',
s.optPrefixes('Integrated approach',  'Balanced and'),
'Integrated transport policy',
'National (mission|story)',
'New political settlement',
'New type of( \\S+)* (democracy|economics|economy|society)',
'Ordinary (families|people|working people)',
'People before profits?',
'Pithy',
'Prescient',
'Real (alternative|argument|generosity)',
'Responsible middle',
'Socially (acceptable|just)',
s.optDashes('Something-for-something'),
s.optPrefixes('Thoughtful',  'Ever-','Usually'),
s.optDashes('Three-dimensional approach'),
'Transform(ed|ing)? (Britain|Capitalism)'
];


/* 'Shut Up / Boo' terms: with a covert sneer, the writer wants you to dislike something @ http://wordlywisdom.net/Boo-and-Hooray.php */
var theExtraShutUpTerms = ['A Distraction',
'Abusive philosophy',
'Against democracy',
'Arch-(Blairite|Thatcherite)',
s.reqdPrefixes('Assumptions?',  'Absurd'),
'Austerians?',
'Backward-looking',
'Bow down to',
s.optPrefixes('Business as usual',  'Go back to','Return to'),
s.optPrefixes('Cannot be the change',  'He'),
s.reqdPrefixes('Capitalis(m|ts?)', s.optDashes('Gung-ho'),'Predatory','Vulture'),
'Chorus of criticism',
'Chutzpah',
'Clutch(ing)? at straws',
'Condemned to repeat \\S+',
'Congratulations, \\S+.',
'Consumeris(m|t|tic)',
'Corporate media',
'Crawl(ed)? out of the woodwork',
'Cuckoo in the \\S+ nest',
'Cynica(l|lly)',
'Defend(ing)* the indefensible',
'Delusional',
'Disaster Capitalism',
'Distort(ed|ing)',
'Disgrace(ful)*',
/* 'Disgusting', */
'Dodgy',
s.optPrefixes('Dogma',  'Economic','Left-?wing','Monetarist','Neo-?liberal','Right-?wing','Socialist'),
'Draconian',
s.optDashes('Economic dead-end'),
'Economic(ally)* illitera(te|cy)',
'Economic(ally)* incoheren(t|ce)',
'Economic madhouse',
'Ermine-clad',
'Evidence-free',
'Failed (policy|policies) of the past',
'Familiar litany',
'From another time',
s.reqdPrefixes('Fundamentalis(m|ts?)',  'Free-market','Market'),
s.optDashes('Half-baked'),
'Hard-(left|right)',
'Height of irresponsibility',
'Here we go again',
'High priests of \\S+',
'Hold(ing)? the \\S+ to ransom',
'Homosexualists?',
'Hysterical',
s.optDashes('Ideologically-driven'),
s.optPrefixes('Ideologues?',  'Economic',s.optDashes('Free-market')),
s.reqdPrefixes('Ideology',  'Discredited','Misguided'),
'Ill-(conceived|considered|founded|informed)',
'Immoral',
'Imperialis[m|t]',
'\\S+ In a hole, stop digging',
'In hock to',
'Insidious',
'invidious',
/* 'Irrationa(l|lly)', */
'Knee-jerk',
'Laughable',
'Law of the jungle',
'Liebore',
'Lurch to the \\S+',
'Makes no mention',
s.reqdPrefixes('Mantras?',  'Free-market'),
'Market-fundamentalist',
'Meanest intellect',
'Messianic',
'Mutual back-slapping',
'Neocons?',
s.optDashes('Neo-(Conservatives?|Reaganites?|Thatcherites?)'),
'Oldest trick in the (\\S+ )?book',
'Old-fashioned views?',
s.optPrefixes('Orthodox(y|ies)',  'Economic','Failed','Free-market','Keynesian','Market','Old','Past','Political','Right-?wing','Stale','Tired','Wrong'),
s.optSuffixes('Orthodox',  'Political( thinking)?'),
s.optPrefixes('Out of touch', 'Increasingly','So'),
'Pander(ing)? to',
'Parasites*',
'Pernicious',
'Political(ly)? incoheren(t|ce)',
'Pushy parents',
'Quaint',
'Quisling',
'Raced? to the bottom',
'Raise.? the spectre',
'Rampant Commercialism',
'Reactionary',
s.optPrefixes('Reactionaries',  'Cadre of'),
'Reckless',
'Regurgitat(e|ed|ing|ion)',
'Regressive',
'Same old failed \\S+',
'Scandalous',
'Shrill calls',
s.optPrefixes('Silence( (of|on)' + s.someWords(1,3) + ')? speaks volumes',  'Her','His','The','Their'),
'Slash-and-burn',
'Slash(ed|ing)?',
s.optDashes('Something-for-nothing'),
'Sowing the seeds of',
'Sparked outrage',
s.optDashes('Sticking-plaster solution'),
'Sycophantic',
'The old model of',
'The old (order|politics)',
'The old view',
'Tumbleweed',
s.reqdPrefixes('Types',  'Compass','Progress'),
'Uncritical',
'Undemocratic',
'Unfairness',
'Unfettered \\S+',
'Unintelligent',
'Unregulated',
'Unthinking',
'Vested interests?',
'Vultures*',
'Wanton',
'Warmist',
'Wholesale destruction',
'Will?ful ignorance',
'Wrong-headed(ness)?',
'Zombie arguments?'];


var theCaseSensitiveExtraTerms = ['[A-Z]\\S+' + 'ite spin',
'militant (cells?|groups?|organisations?)',
'militants?'
];


var theExtraHealthTerms = [
s.optPrefixes('(Aid|Block|Cure|Cut|Fight|Slow|Stop)s?( \\S+)? Cancer( Risk)?',  'Could','May'),
'At risk from',
s.optPrefixes('(Her |His |The |Their )?' + 'Battles? with cancer',  'Los(e|ing|t)','Win(ning)?','Won'),
'Battling cancer',
'Leading (health|medical) ' + s.andOr('bodies','charities'),
'Linked to( \\S+)? cancer',
s.reqdPrefixes('Save (more than|over|up to) \\S+ lives( a year)?',  'Could','May','Would')
];


////////////////////////////////////////////////////////////////////////////////

var blLink = '<http://bit.ly/bannedList|#BannedList>'

exports.coreTerms = [
  new s.TermSet({terms: theIgnoreTerms}),
  new s.TermSet({terms: theIgnoredNotJustWordTerms, ignoreWordBoundaries:true}),
  new s.TermSet({terms: theCaseSensitiveCoreTerms, title: blLink, caseInsensitive:false}),
  new s.TermSet({terms: theNotJustWordsTerms, ignoreWordBoundaries:true, title: blLink}),
  new s.TermSet({terms: theCaseSensitiveNotJustWordsTerms, caseInsensitive:false, ignoreWordBoundaries:true, title: blLink}),
  new s.TermSet({terms: theManagementSpeakTerms, title: blLink + ' of Management Speak'}),
  new s.TermSet({terms: theEducationSpeakTerms, title: blLink + ' of Education Speak'}),
  new s.TermSet({terms: theCoreTerms, title: blLink})
];

exports.extraTerms = [
  new s.TermSet({terms: theExtraTerms, title: blLink + ' of dodgy political language'}),
  new s.TermSet({terms: theExtraShutUpTerms, title:'<http://bit.ly/bannedList|#BannedList> of "Boo" terms'}),
  new s.TermSet({terms: theExtraHoorayTerms, title: blLink + ' of "Hooray" terms'}),
  new s.TermSet({terms: theExtraWeaselTerms, title: blLink + ' of weasel terms'}),
  new s.TermSet({terms: theSociologyTerms, title: blLink + ' of dodgy sociological terms'}),
  new s.TermSet({terms: theExtraHealthTerms, title: blLink + ' of dodgy Health language'}),
  new s.TermSet({terms: theCaseSensitiveExtraTerms, title: blLink + ' of dodgy political language', caseInsensitive:false})
];
