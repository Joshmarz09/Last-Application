let process = {
	menu:function(){
		let content = <div>
			<button><a href='#' onClick={process.page1}>Aatrox</a></button>
			<button><a href='#' onClick={process.page2}>Ahri</a></button>
			<button><a href='#' onClick={process.page3}>Akali</a></button>
			<button><a href='#' onClick={process.page4}>Alistar</a></button>
			<button><a href='#' onClick={process.page5}>Amumu</a></button>
			<button><a href='#' onClick={process.page6}>Bard</a></button>
			<button><a href='#' onClick={process.page7}>Blitzcrank</a></button>
			<button><a href='#' onClick={process.page8}>Brand</a></button>
			<button><a href='#' onClick={process.page9}>ChoGath</a></button>
			<button><a href='#' onClick={process.page10}>Caitlyn</a></button>
			<button><a href='#' onClick={process.page11}>Camille</a></button>
			<button><a href='#' onClick={process.page12}>Darius</a></button>
			<button><a href='#' onClick={process.page13}>Diana</a></button>
			<button><a href='#' onClick={process.page14}>Draven</a></button>
			<button><a href='#' onClick={process.page16}>Elise</a></button>
			<button><a href='#' onClick={process.page17}>Ezreal</a></button>
			<button><a href='#' onClick={process.page18}>Fiora</a></button>
			<button><a href='#' onClick={process.page19}>Fizz</a></button>
			<button><a href='#' onClick={process.page20}>Galio</a></button>
			<button><a href='#' onClick={process.page21}>Garen</a></button>
			<button><a href='#' onClick={process.page22}>Gnar</a></button>
			<button><a href='#' onClick={process.page23}>Graves</a></button>
			<button><a href='#' onClick={process.page24}>Hecarim</a></button>
			<button><a href='#' onClick={process.page25}>Heimerdinger</a></button>
			<button><a href='#' onClick={process.page26}>Illaoi</a></button>
			<button><a href='#' onClick={process.page27}>Jax</a></button>
			<button><a href='#' onClick={process.page28}>Jinx</a></button>
			<button><a href='#' onClick={process.page29}>Katarina</a></button>
			<button><a href='#' onClick={process.page30}>Kayn</a></button>
			<button><a href='#' onClick={process.page31}>Khazix</a></button>
			<button><a href='#' onClick={process.page32}>Leblanc</a></button>
			<button><a href='#' onClick={process.page33}>Leesin</a></button>
			<button><a href='#' onClick={process.page34}>MasterYi</a></button>
			<button><a href='#' onClick={process.page35}>Nasus</a></button>
			<button><a href='#' onClick={process.page36}>Orianna</a></button>
			<button><a href='#' onClick={process.page37}>Pantheon</a></button>
			<button><a href='#' onClick={process.page38}>Quinn</a></button>
			<button><a href='#' onClick={process.page39}>Riven</a></button>
			<button><a href='#' onClick={process.page40}>Ryze</a></button>
			<button><a href='#' onClick={process.page41}>Soraka</a></button>
			<button><a href='#' onClick={process.page42}>Tristana</a></button>
			<button><a href='#' onClick={process.page43}>Varus</a></button>
			<button><a href='#' onClick={process.page44}>Vayne</a></button>
			<button><a href='#' onClick={process.page45}>Wukong</a></button>
			<button><a href='#' onClick={process.page46}>XinZhao</a></button>
			<button><a href='#' onClick={process.page47}>Yasuo</a></button>
			<button><a href='#' onClick={process.page48}>Zed</a></button>
			<button><a href='#' onClick={process.page49}>Zoe</a></button>
			<button><a href='#' onClick={process.page50}>Zyra</a></button>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	page1:function(){
		let content = <div>
				<h2>Aatrox</h2>
				<center><img src="img/Aatrox.png"></img></center>
				<h4>(The Darkin Blade)</h4>
				<h3>Skills</h3>
				<p>Blood Well (Passive)</p>
				<p>Aatrox fills up his Blood Well through his abilities. When filled, Aatrox becomes Hellbent for as long as he stays in combat with champions or monsters, granting him attack damage, attack speed, and the ability to survive fatal damage.</p>
				<p>Dark Flight</p>
				<p>Aatrox takes flight and slams down at a targeted location, dealing damage and knocking up enemies at the center of impact.</p>
				<p>Blood Thirst / Blood Price</p>
				<p>While toggled on Aatrox deals bonus damage and fills a portion of his Blood Well every third subsequent attack.</p>
				<p>Blades of Torment</p>
				<p>Aatrox unleashes the power of his blade, dealing damage to enemies hit and slowing them. Aatrox unleashes the power of his blade, dealing 75/115/155/195/235 (+70% bonus Attack Damage) physical damage to enemies hit and slowing them by 30/35/40/45/50 for 2 seconds. Aatrox fills up 20% of the Blood Well upon cast.</p>
				<p>Massacre</p>
				<p>Aatrox draws in the blood of his foes, damaging all nearby enemy champions around him and gaining increased Attack Speed and bonus Attack Range for a short duration. Aatrox draws in the blood of his foes, dealing 200/300/400 (+100% Ability Power) magic damage to nearby enemy champions, filling up 20% of the Blood Well for each hit. Aatrox gains 40/50/60 Attack Speed and 225 attack range for 12 seconds upon cast.</p>
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page2:function(){
		let content = <div>
				<h2>Ahri</h2>
				<center><img src="img/Ahri.png"></img></center>
				<h4>(the Nine-Tailed Fox)</h4>
				<h3>Skills</h3>
				<p>Essence Theft (Passive)</p>
				<p>Gains a charge of Essence Theft whenever a spell hits an enemy (max: 3 charges per spell). Upon reaching 9 charges, Ahri's next spell heals her whenever it hits an enemy.</p>
				<p>Orb of Deception</p>
				<p>Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back. Ahri gains movement speed that decays while her orb is traveling.</p>
				<p>Fox-Fire</p>
				<p>Ahri releases three fox-fires, that lock onto and attack nearby enemies.</p>
				<p>Charm</p>
				<p>Ahri blows a kiss that damages and charms an enemy it encounters, causing them to walk harmlessly towards her.</p>
				<p>Spirit Rush</p>
				<p>Ahri dashes forward and fires essence bolts, damaging 3 nearby enemies (prioritizes Champions). Spirit Rush can be cast up to three times before going on cooldown.</p><br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page3:function(){
		let content = <div>
				<h2>Akali</h2>
				<center><img src="img/Akali.png"></img></center>
				<h4>(the Fist of Shadow)</h4>
				<h3>Skills</h3>
				<p>Twin Disciplines (Passive)</p>
				<p>Akali's first two attacks are empowered. The first strike heals her, and the second strike deals bonus magic damage. Twin Disciplines will recharge itself automatically a short while after being used.</p>
				<p>Mark of the Assassin</p>
				<p>Akali spins her kama at a target enemy to deal Magic Damage and mark the target for 6 seconds. Akali's melee attacks against a marked target will trigger and consume the mark to cause additional damage and restore Energy.</p>
				<p>Twilight Shroud</p>
				<p>Akali teleports to a nearby location, leaving a cover of smoke at her previous location. While inside the shroud, Akali becomes Invisible and gains Movement Speed. Attacking or using abilities will briefly reveal her. Enemies inside the smoke have their Movement Speed reduced.</p>
				<p>Crescent Slash</p>
				<p>Akali flourishes her kamas, dealing damage based on her bonus Attack Damage and Ability Power. When Crescent Slash kills a unit, it has a shorter cooldown.</p>
				<p>Shadow Dance</p>
				<p>Akali moves through shadows to quickly strike through her target, dealing damage and consuming an Essence of Shadow charge. Akali recharges Essence of Shadow charges periodically, max 3 stacks.</p>
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page4:function(){
	let content = <div>
				<h2>Alistar</h2>
				<center><img src="img/Alistar.png"></img></center>
				<h4>(the Minotaur)</h4>				
				<h3>Skills</h3>
				<p>Triumphant Roar (Passive)</p>
				<p>Alistar charges his roar by stunning or displacing enemy champions or when nearby enemies die. When fully charged he heals himself and all nearby allied champions.</p>
				<p>Pulverize</p>
				<p>Alistar smashes the ground, dealing damage to nearby enemies and tossing them into the air.</p>
				<p>Headbutt</p>
				<p>Alistar rams a target with his head, dealing damage and knocking the target back. Alistar rams into an enemy, dealing 55/110/165/220/275 (+70% Ability Power) magic damage and knocking them back.</p>
				<p>Trample</p>
				<p>Alistar tramples nearby enemy units, ignoring unit colision and gaining stacks if he damages an enemy champion. At full stacks Alistar's next basic attack against an enemy champion deals additional magic damage and stuns them.</p>
				<p>Unbreakable Will</p>
				<p>Alistar lets out a wild roar, removing all crowd control effects on himself, and reducing incoming physical and magical damage for the duration.</p>
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page5:function(){
	let content = <div>
				<h2>Amumu</h2>
				<center><img src="img/Amumu.png"></img></center>
				<h4>(the Sad Mummy)</h4>
				<h3>Skills</h3>
				<p>Cursed Touch (Passive)</p>
				<p>Amumu's basic attacks Curse enemies for 3 seconds, causing them to take 10% bonus true damage from any magic damage dealt to them.</p>
				<p>Bandage Toss</p>
				<p>Amumu tosses a sticky bandage at a target, stunning and damaging the target while he pulls himself to them. Launches a bandage in a direction. If it hits an enemy unit, Amumu pulls himself to them, dealing 80/130/180/230/280 (+70% Ability Power) magic damage and stunning for 1 second.</p>
				<p>Despair</p>
				<p>Overcome by anguish, nearby enemies lose a percentage of their maximum Health each second and have their Curses refreshed. Toggle: Amumu cries, refreshing Curses on nearby enemies and dealing magic damage equal to 10/15/20/25/30 plus 1/1.25/1.5/1.75/2 (+1% Ability Power)% of their maximum health each second.</p>
				<p>Tantrum</p>
				<p>Permanently reduces the physical damage Amumu would take. Amumu can unleash his rage, dealing damage to surrounding enemies. Each time Amumu is hit, the cooldown on Tantrum is reduced by 0.5 seconds. Passive: Amumu takes 2/4/6/8/10 reduced damage from physical attacks. Active: Amumu tantrums, dealing 75/100/125/150/175 (+50% Ability Power) magic damage to surrounding units. Basic attacks that hit Amumu reduce the cooldown of Tantrum by 0.5 seconds.</p>
				<p>Curse of the Sad Mummy</p>
				<p>Amumu entangles surrounding enemy units in bandages, applying his Curse, damaging them and rendering them unable to attack or move. Amumu entangles nearby enemy units, dealing 150/250/350 (+80% Ability Power) magic damage and applying Curse. Entangled enemies are unable to attack or move for 2 seconds.</p>
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page6:function(){
	let content = <div>
				<h2>Bard</h2>
				<center><img src="img/Bard.png"></img></center>
				<h4>(the Wandering Caretaker)</h4>				
				<h3>Skills</h3>
				<p>Traveler's Call (Passive)</p>
				<p>Bard's presence causes magical chimes to appear, which grant Bard experience, mana, and a burst of speed. Additionally, lesser spirits follow Bard and aid in his attacks - collecting chimes causes these meeps to gain power over the course of the game.</p>
				<p>Cosmic Binding</p>
				<p>Bard fires a missile which will slow the first enemy struck, and continue onward. If it strikes a wall, it will stun the initial target; if it strikes another enemy, it will stun them both.</p>
				<p>Caretaker's Shrine</p>
				<p>Reveals a healing shrine which powers up over a short time, disappearing after healing the first ally that touches it.</p>
				<p>Magical Journey</p>
				<p>Bard opens a portal in nearby terrain. Allies and enemies alike can take a one-way trip through that terrain by moving into the portal.</p>
				<p>Tempered Fate</p>
				<p>Bard sends spirit energy arcing to a location, putting all champions, minions, monsters, and turrets hit into stasis for a brief time.</p>
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page7:function(){
	let content = <div>
				<h2>Blitzcrank</h2>
				<center><img src="img/Blitzcrank.png"></img></center>
				<h4>(the Great Steam Golem)</h4>
				<h3>Skills</h3>
				<p>Mana Barrier (Passive)</p>
				<p>When Blitzcrank's life is brought below 20% health, he activates Mana Barrier. This creates a mana shield equal to 50% of his mana for 10 seconds. Mana Barrier can only occur once every 90 seconds.</p>
				<p>Rocket Grab</p>
				<p>Blitzcrank fires his right hand to grab an opponent on its path, dealing damage and dragging it back to him. Blitzcrank fires his right hand. If it encounters an enemy unit it will stun them and deal 80/135/190/245/300 (+100% Ability Power) magic damage while he pulls them to himself.</p>
				<p>Overdrive</p>
				<p>Blitzcrank super charges himself to get dramatically increased Movement and Attack Speed. He is temporarily slowed after the effect ends. Blitzcrank supercharges himself, gaining 70/75/80/85/90 Movement Speed and 30/38/46/54/62 Attack Speed for 5 seconds. The Movement Speed bonus decays over the duration. When Overdrive ends, Blitzcrank's Movement Speed is slowed by 30 for 1.5 seconds.</p>
				<p>Power Fist</p>
				<p>Blitzcrank charges up his fist to make his next attack deal double damage and pop his target up in the air. Blitzcrank charges up his fist to make his next attack deal double his total attack damage as physical damage and pop his target up in the air.</p>
				<p>Static Field</p>
				<p>Passively causes lightning bolts to damage a nearby enemy. Additionally, Blitzcrank can activate this ability to damage nearby enemies and silence them for 0.5 seconds, but doing so removes the passive lightning until Static Field becomes available again.</p>
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page8:function(){
	let content = <div>
				<h2>Brand</h2>
				<center><img src="img/Brand.png"></img></center>
				<h4>(the Burning Vengeance)</h4>
				<h3>Skills</h3>
				<p>Blaze (Passive)</p>
				<p>Brand's spells light his targets ablaze, dealing 2% of their maximum Health in magic damage over 4 seconds, stacking up to 3 times. If Brand kills an enemy while it is ablaze he regains mana. When Blaze reaches max stacks on a Champion or monster, it becomes unstable. It detonates in 2 seconds, applying spell effects and dealing massive damage in an area around the victim.</p>
				<p>Sear</p>
				<p>Brand launches a ball of fire forward that deals magic damage. If the target is ablaze, Sear will stun the target for 1.5 seconds.</p>
				<p>Pillar of Flame</p>
				<p>After a short delay, Brand creates a Pillar of Flame at a target area, dealing magic damage to enemy units within the area. Units that are ablaze take an additional 25% damage.</p>
				<p>Conflagration</p>
				<p>Brand conjures a powerful blast at his target, dealing magic damage to them. If the target is ablaze, Conflagration spreads to nearby enemies. Brand conjures a powerful blast at his target, dealing 70/90/110/130/150 (+35% Ability Power) magic damage. Blaze: If the target is ablaze, Conflagration spreads to nearby enemies.</p>
				<p>Pyroclasm</p>
				<p>Brand unleashes a devastating torrent of fire, dealing magic damage each time it bounces, up to 5 bounces. Bounces prioritize stacking Blaze to max on Champions. If a target is ablaze, Pyroclasm will briefly slow them.</p>
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page9:function(){
	let content = <div>
				<h2>ChoGath</h2>
				<center><img src="img/Chogath.png"></img></center>
				<h4>(the Terror of the Void)</h4>
				<h3>Skills</h3>
				<p>Carnivore (Passive)</p>
				<p>Whenever Cho'Gath kills a unit, he recovers Health and Mana. The values restored increase with Cho'Gath's level.</p>
				<p>Rupture</p>
				<p>Ruptures the ground at target location, popping enemy units into the air, dealing damage and slowing them. Ruptures the ground at target location. Enemies caught in the rupture are launched into the air for 1 second, take 80/135/190/245/300 (+100% Ability Power) magic damage, and are slowed by 60 for 1.5 seconds.</p>
				<p>Feral Scream</p>
				<p>Cho'Gath unleashes a terrible scream at enemies in a cone, dealing magic damage and Silencing enemies for a few seconds. Silences enemies in a cone for 1.6/1.7/1.8/1.9/2 seconds and deals 75/125/175/225/275 (+70% Ability Power) magic damage.</p>
				<p>Vorpal Spikes</p>
				<p>Cho'Gath's attacks release deadly spikes, dealing damage and slowing all enemy units in front of him. Cho'Gath's next 3 basic attacks launch spikes that deal 20/30/40/50/60 (+30% Ability Power) plus of enemies' maximum Health as magic damage and slow by 30/35/40/45/50 for 1.5 seconds, decaying over the duration. Spikes grow wider as Cho'Gath gains Feast stacks. Spikes deal an additional 0.5% of enemies' maximum Health per Feast stack. Percent Health damage against minions and monsters is capped at 60/80/100/120/140.</p>
				<p>Feast</p>
				<p>Devours an enemy unit, dealing a high amount of true damage. If the target is killed, Cho'Gath grows, gaining maximum Health. Ravenously feed on an enemy, dealing 300/475/650 (+50% Ability Power) true damage to champions or 1000 (+50% Ability Power) to minions and monsters. If the target is killed, Cho'Gath gains a stack of Feast, which causes him to grow in size and gain 80/120/160 maximum health. Only 6 total stacks can be gained from minions and non-epic monsters. (Current: /6)</p>
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page10:function(){
	let content = <div>
				<h2>Caitlyn</h2>
				<center><img src="img/Caitlyn.png"></img></center>
				<h4>(the Sheriff of Piltover)</h4>
				<h3>Skills</h3>
				<p>Headshot (Passive)</p>
				<p>Every few basic attacks, or against a target she has trapped or netted, Caitlyn will fire a headshot dealing bonus damage that scales with her critical strike chance. On trapped or netted targets, Caitlyn's Headshot attack range is doubled.</p>
				<p>Piltover Peacemaker</p>
				<p>Caitlyn revs up her rifle for 1 second to unleash a penetrating shot that deals physical damage (deals less damage to subsequent targets).</p>
				<p>Yordle Snap Trap</p>
				<p>Caitlyn sets a trap to find sneaky yordles. When sprung, the trap reveals and immobilizes the enemy champion for 1.5 seconds. Sets traps that an enemy Champion can spring, immobilizing them for 1.5 seconds and granting True Sight for a short duration. Traps last for 30/35/40/45/50 seconds. 3/3/4/4/5 traps may be active at once. Trapped enemies take an additional 40/90/140/190/240 increased damage from Headshot.</p>
				<p>90 Caliber Net</p>
				<p>Caitlyn fires a heavy net to slow her target. The recoil knocks Caitlyn back. Fires a net, knocking Caitlyn backwards. The net deals 70/110/150/190/230 (+80% Ability Power) magic damage and slows the first enemy hit by 50 for 1 second.</p>
				<p>Ace in the Hole</p>
				<p>Caitlyn takes time to line up the perfect shot, dealing massive damage to a single target at a huge range. Enemy champions can intercept the bullet for their ally.</p>
			<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page11:function(){
	let content = <div>
				<h2>Camille</h2>
				<center><img src="img/Camille.png"></img></center>
				<h4>(the Steel Shadow)</h4>
				<h3>Skills</h3>
				<p>Adaptive Defenses (Passive)</p>
				<p>Basic attacks on champions grant a shield equal to 20% of Camille's maximum health against their damage type (Physical or Magic) for 1.5-2.5 seconds.</p>
				<p>Precision Protocol</p>
				<p>Camille's next attack deals bonus damage and grants bonus movement speed. This spell can be recast for a short period of time, doing significantly increased bonus damage if Camille delays a period of time between the two attacks.</p>
				<p>Tactical Sweep</p>
				<p>Camille blasts in a cone after a delay, dealing damage. Enemies in the outer half are slowed and take extra damage, while also healing Camille.</p>
				<p>Hookshot</p>
				<p>Camille pulls herself to a wall, leaping off and knocking up enemies upon landing.</p>
				<p>The Hextech Ultimatum</p>
				<p>Camille dashes to target champion, anchoring them to the area. She also deals bonus magic damage to the target with her basic attacks.</p>
			<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page12:function(){
	let content = <div>
				<h2>Darius</h2>
				<center><img src="img/Darius.png"></img></center>
				<h4>(the Hand of Noxus)</h4>
				<h3>Skills</h3>
				<p>Hemorrhage (Passive)</p>
				<p>Darius aims his attacks strategically, causing his target to bleed. This effect stacks up to five times. Enemies that reach max Hemorrhage cause Darius to gain Noxian Might, greatly increasing his damage.</p>
				<p>Decimate</p>
				<p>Darius winds up and swings his axe in a wide circle. Enemies struck by the blade take more damage than those struck by the handle. Darius heals based on enemy champions hit by the blade.</p>
				<p>Crippling Strike</p>
				<p>Darius's next attack strikes an enemy's crucial artery. As they bleed out, their Movement Speed is slowed. Darius's next basic attack deals physical damage and slows the target by 90 for 1 second. Crippling Strike refunds its Mana cost and 50 of its cooldown if it kills the target.</p>
				<p>Apprehend</p>
				<p>Darius hones his axe, passively causing his physical damage to ignore a percentage of his target's Armor. When activated, Darius sweeps up his enemies with his axe's hook and pulls them to him.</p>
				<p>Noxian Guillotine</p>
				<p>Darius leaps to an enemy champion and strikes a lethal blow, dealing true damage. This damage is increased for each stack of Hemorrhage on the target. If Noxian Guillotine is a killing blow, its cooldown is refreshed for a brief duration.</p>
				
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page13:function(){
	let content = <div>
				<h2>Diana</h2>
				<center><img src="img/Diana.png"></img></center>
				<h4>(Scorn of the Moon)</h4>
				<h3>Skills</h3>
				<p>Moonsilver Blade (Passive)</p>
				<p>Every third strike restores mana and cleaves nearby enemies for additional magic damage. Every spell cast grants attack speed for the next 3 attacks.</p>
				<p>Crescent Strike</p>
				<p>Diana swings her blade to unleash a bolt of lunar energy that deals damage in an arc before exploding. Afflicts enemies struck with the Moonlight debuff, revealing them if they are not stealthed.</p>
				<p>Pale Cascade</p>
				<p>Diana creates three orbiting spheres that detonate on contact with enemies to deal damage in an area. She also gains a temporary shield that absorbs damage. If her third sphere detonates, the shield gains additional strength.</p>
				<p>Moonfall</p>
				<p>Diana draws in and slows all nearby enemies. Passively grants Diana attack speed after spell casts.</p>
				<p>Lunar Rush</p>
				<p>Diana dashes to an enemy and deals magic damage. Lunar Rush has no cooldown when used to teleport to a target afflicted with Moonlight.</p>
				
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page14:function(){
	let content = <div>
				<h2>Draven</h2>
				<center><img src="img/Draven.png"></img></center>
				<h4>(the Glorious Executioner)</h4>
				<h3>Skills</h3>
				<p>League of Draven (Passive)</p>
				<p>Draven gains his fans' Adoration when he catches a Spinning Axe or kills a minion, monster, or tower. Killing enemy champions grants Draven bonus gold based on how much Adoration he has.</p>
				<p>Spinning Axe</p>
				<p>Draven's next attack will deal bonus physical damage. This axe will ricochet off the target high up into the air. If Draven catches it, he automatically readies another Spinning Axe. Draven can have two Spinning Axes at once.</p>
				<p>Blood Rush</p>
				<p>Draven gains increased Movement Speed and Attack Speed. The Movement Speed bonus decreases rapidly over its duration. Catching a Spinning Axe will refresh the cooldown of Blood Rush.</p>
				<p>Stand Aside</p>
				<p>Draven throws his axes, dealing physical damage to targets hit and knocking them aside. Targets hit are slowed.</p>
				<p>Whirling Death</p>
				<p>Draven hurls two massive axes to deal physical damage to each unit struck. Whirling Death slowly reverses direction and returns to Draven after striking an enemy champion. Draven may also activate this ability while the axes are in flight to cause it to return early. Deals less damage for each unit hit and resets when the axes reverse direction.</p>
			
			<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page15:function(){
	let content = <div>
				<h2>Ekko</h2>
				<center><img src="img/Ekko.png"></img></center>
				<h4>(the Boy Who Shattered Time)</h4>
				<h3>Skills</h3>
				<p>Z-Drive Resonance (Passive)</p>
				<p>Ekko's Zero-Drive charges his spells and attacks with temporal energy. The third hit deals bonus damage and, if the target is a champion, Ekko gains accelerated movement speed.</p>
				<p>Timewinder</p>
				<p>Ekko throws a temporal grenade that expands into a time-distortion field upon hitting an enemy champion, slowing and damaging anyone caught inside. After a delay, the grenade rewinds back to Ekko, dealing damage on its return.</p>
				<p>Parallel Convergence</p>
				<p>Ekko splits the timeline, creating an anomaly after a few seconds that slows enemies caught inside. If Ekko enters the anomaly, he gains shielding and triggers a detonation, stunning enemies by suspending them in time.</p>
				<p>Phase Dive</p>
				<p>Ekko rolls evasively while charging up his Z-Drive. His next attack deals bonus damage and warps reality, teleporting him to his target.</p>
				<p>Chronobreak</p>
				<p>Ekko shatters his timeline, becoming untargetable and rewinding to a more favorable point in time. He returns to whenever he was a few seconds ago, and heals for a percentage of the damage received in that duration. Enemies near his arrival zone take massive damage.</p>



	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page16:function(){
	let content = <div>
				<h2>Elise</h2>
				<center><img src="img/Elise.png"></img></center>
				<h4>(the Spider Queen)</h4>
				<h3>Skills</h3>
				<p>Spider Queen (Passive)</p>
				<p>Human Form: When Elise's abilities hit an enemy, she gains a dormant Spiderling. Spider Form: Basic attacks deal bonus magic damage and restore health to Elise.</p>
				<p>Neurotoxin / Venomous Bite</p>
				<p>Human Form: Deals damage based upon how high the target's Health is. Spider Form: Lunges at an enemy and deals damage based upon how low their Health is. Deals magic damage equal to 40/75/110/145/180 plus 4 (+3% Ability Power) of the target's current health. Maximum bonus against monsters: 75/100/125/150/175.</p>
				<p>Volatile Spiderling / Skittering Frenzy</p>
				<p>Human Form: Releases a venom-gorged Spiderling that explodes when it nears a target. Spider Form: Elise and her Spiderlings gain Attack Speed. Summons a venom-gorged Spiderling that moves to target location and explodes, dealing 55/95/135/175/215 (+95% Ability Power) Magic Damage when it nears an enemy or after 3 seconds.</p>
				<p>Cocoon / Rappel</p>
				<p>Human Form: Stuns the first enemy unit hit and reveals them if they are not stealthed. Spider Form: Elise and her Spiderlings ascend into the air and then descend upon target enemy. Stuns the first enemy hit for 1.6/1.7/1.8/1.9/2 seconds and reveals them if they are not stealthed.</p>
				<p>Spider Form</p>
				<p>Transforms into a menacing spider, reducing her attack range in exchange for movement speed, new abilities, and a Spiderling swarm that will attack her foes.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page17:function(){
	let content = <div>
				<h2>Ezreal</h2>
				<center><img src="img/Ezreal.png"></img></center>
				<h4>(the Prodigal Explorer)</h4>
				<h3>Skills</h3>
				<p>Rising Spell Force (Passive)</p>
				<p>Ezreal gains increasing Attack Speed each time he successfully hits a spell, stacking up to 5 times.</p>
				<p>Mystic Shot</p>
				<p>Ezreal fires a damaging bolt of energy which reduces all of his cooldowns by 1.5 seconds if it strikes an enemy unit.</p>
				<p>Essence Flux</p>
				<p>Ezreal fires a fluctuating wave of energy, dealing magic damage to enemy champions, while increasing the Attack Speed of allied champions.</p>
				<p>Arcane Shift</p>
				<p>Ezreal teleports to a target nearby location and fires a homing bolt which strikes the nearest enemy unit.</p>
				<p>Trueshot Barrage</p>
				<p>Ezreal winds up for 1 second to fire a powerful barrage of energy missiles which do massive damage to each unit they pass through (deals 10% less damage to each unit it passes through).</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page18:function(){
	let content = <div>
				<h2>Fiora</h2>
				<center><img src="img/Fiora.png"></img></center>
				<h4>(the Grand Duelist)</h4>
				<h3>Skills</h3>
				<p>Duelist's Dance (Passive)</p>
				<p>Fiora challenges nearby enemy Champions to dodge her. She calls out a direction from which she will try to strike. If she can complete her own challenge, she receives a small bonus and calls out a new direction.</p>
				<p>Lunge</p>
				<p>Fiora lunges in a direction and stabs a nearby enemy, dealing physical damage and applying on-hit effects.</p>
				<p>Riposte</p>
				<p>Fiora parries all incoming damage and disables for a short time, then stabs in a direction. This stab slows the first enemy champion hit, or stuns them if Fiora blocked an immobilizing effect with this ability.</p>
				<p>Bladework</p>
				<p>Fiora has increased attack speed for the next two attacks. The first attack slows the target, and the second attack will critically strike.</p>
				<p>Grand Challenge</p>
				<p>Fiora reveals all four Vitals on an enemy champion and gains movement speed while near them. If Fiora hits all 4 Vitals or if the target dies after she has hit at least one, Fiora and her allies in the area are healed over the next few seconds.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page19:function(){
	let content = <div>
				<h2>Fizz</h2>
				<center><img src="img/Fizz.png"></img></center>
				<h4>(the Tidal Trickster)</h4>
				<h3>Skills</h3>
				<p>Nimble Fighter (Passive)</p>
				<p>Fizz's dexterity allows him to move through units and take less physical damage from basic attacks.</p>
				<p>Urchin Strike</p>
				<p>Fizz dashes through his target, dealing magic damage and applying on hit effects.</p>
				<p>Seastone Trident</p>
				<p>Fizz's attacks bleed his enemies, dealing magic damage over several seconds. Fizz can empower his next attack to deal bonus damage, increased by how long the bleed was active on his target.</p>
				<p>Playful / Trickster</p>
				<p>Fizz hops into the air, landing gracefully upon his spear and becoming untargetable. From this position, Fizz can either slam the ground or choose to jump again before smashing back down.</p>
				<p>Chum the Waters</p>
				<p>Fizz tosses a fish in a direction that attaches to any champion that touches it, slowing the target. After a short delay, a shark erupts from the ground, knocking up the target and knocking any nearby enemies aside. All enemies hit are dealt magic damage and slowed.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page20:function(){
	let content = <div>
				<h2>Galio</h2>
				<center><img src="img/Galio.png"></img></center>
				<h4>(the Colossus)</h4>
				<h3>Skills</h3>
				<p>Colossal Smash (Passive)</p>
				<p>Every few seconds, Galio's next basic attack deals bonus magic damage in an area. Colossal Smash's cooldown is reduced when Galio hits champions with his spells.</p>
				<p>Winds of War</p>
				<p>Galio fires two windblasts that converge into a large tornado.</p>
				<p>Shield of Durand</p>
				<p>Galio charges a defensive stance, moving slowly. Upon releasing the charge, Galio will taunt nearby enemies.</p>
				<p>Justice Punch</p>
				<p>Galio will briefly step back and charge, knocking up the first enemy champion he encounters.</p>
				<p>Hero's Entrance</p>
				<p>Galio grants damage reduction to an ally. After a delay Galio smashes down on the ally's original location, knocking up nearby enemies.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page21:function(){
	let content = <div>
				<h2>Garen</h2>
				<center><img src="img/Garen.png"></img></center>
				<h4>(The Might of Demacia)</h4>
				<h3>Skills</h3>
				<p>Perseverance (Passive)</p>
				<p>If Garen has not recently been struck by damage or enemy abilities, he regenerates a percentage of his total health each second. Minion damage does not stop Perseverance.If Garen has not recently been struck by damage or enemy abilities, he regenerates a percentage of his total health each second. Minion damage does not stop Perseverance.</p>
				<p>Decisive Strike</p>
				<p>Garen gains a burst of movement speed, breaking free of all slows affecting him. His next attack strikes a vital area of his foe, dealing bonus damage and silencing them.</p>
				<p>Courage</p>
				<p>Garen passively increases his armor and magic resist by killing enemies. He may also activate this ability to give him a huge burst of Tenacity and damage reduction for a brief moment followed by a lesser amount of damage reduction for a longer duration.</p>
				<p>Judgment</p>
				<p>Garen performs a dance of death with his sword, dealing damage around him for the duration and shredding the armor of enemy champions hit.</p>
				<p>Demacian Justice</p>
				<p>The enemy champion with the most recent kills is the Villain. Garen's attacks deal additional true damage to that champion.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page22:function(){
	let content = <div>
				<h2>Gnar</h2>
				<center><img src="img/Gnar.png"></img></center>
				<h4>(the Missing Link)</h4>
				<h3>Skills</h3>
				<p>Rage Gene (Passive)</p>
				<p>While in combat Gnar generates Rage. At maximum Rage his next ability will transform him into Mega Gnar, granting increased survivability and access to new spells.</p>
				<p>Boomerang Throw / Boulder Toss</p>
				<p>Gnar throws a boomerang that damages and slows enemies it hits before returning to him. If he catches the boomerang its cooldown is reduced.</p>
				<p>Hyper / Wallop</p>
				<p>Gnar's attacks and spells hype him up, dealing bonus damage and granting him Movement Speed.</p>
				<p>Hop / Crunch</p>
				<p>Gnar leaps to a location and bounces off the head of any unit he lands on, traveling further.</p>
				<p>GNAR!</p>
				<p>Mega Gnar throws everything around him in a chosen direction, dealing damage and slowing them. Any enemy that hits a wall is stunned and takes bonus damage.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page23:function(){
	let content = <div>
				<h2>Graves</h2>
				<center><img src="img/Graves.png"></img></center>
				<h4>(the Outlaw)</h4>
				<h3>Skills</h3>
				<p>New Destiny (Passive)</p>
				<p>Graves's shotgun holds two shells. After firing them he must reload. Each attack fires several bullets in a cone. Hitting an enemy with multiple bullets does bonus damage. These bullets cannot pass through units.</p>
				<p>End of the Line</p>
				<p>Graves fires an explosive shell that detonates after 2 seconds, or 0.2 seconds if it strikes terrain.</p>
				<p>Smoke Screen</p>
				<p>Graves fires a smoke canister at the target area creating a cloud of smoke. Enemies inside the smoke cloud have reduced sight range and Movement Speed.</p>
				<p>Quickdraw</p>
				<p>Graves dashes forward gaining an Armor boost for several seconds. If Graves dashes towards an enemy champion, gain two stacks of True Grit instead. Hitting enemies with basic attacks lowers the cooldown of this skill and refreshes the resistance boost.</p>
				<p>Collateral Damage</p>
				<p>Graves fires an explosive shell dealing heavy damage to the first champion it hits. After hitting a champion or reaching the end of its range, the shell explodes dealing damage in a cone.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page24:function(){
	let content = <div>
				<h2>Hecarim</h2>
				<center><img src="img/Hecarim.png"></img></center>
				<h4>(the Shadow of War)</h4>
				<h3>Skills</h3>
				<p>Warpath (Passive)</p>
				<p>Hecarim gains Attack Damage equal to a percentage of his bonus Movement Speed.</p>
				<p>Rampage</p>
				<p>Hecarim cleaves nearby enemies dealing physical damage.</p>
				<p>Spirit of Dread</p>
				<p>Hecarim deals magic damage to nearby enemies for a short duration. Hecarim gains Health equal to a percentage of any damage those enemies suffer.</p>
				<p>Devastating Charge</p>
				<p>Hecarim gains increasing Movement Speed and can move through units for a short duration. His next attack knocks the target back and deals additional physical damage based on the distance he has traveled since activating the ability.</p>
				<p>Onslaught of Shadows</p>
				<p>Hecarim summons spectral riders and charges forward, dealing magic damage in a line. Hecarim creates a shockwave when he finishes his charge, causing nearby enemies to flee in terror.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page25:function(){
	let content = <div>
				<h2>Heimerdinger</h2>
				<center><img src="img/Heimerdinger.png"></img></center>
				<h4>(the Revered Inventor)</h4>
				<h3>Skills</h3>
				<p>Hextech Affinity (Passive)</p>
				<p>Gain Movement Speed while near allied towers and turrets deployed by Heimerdinger.</p>
				<p>H-28G Evolution Turret</p>
				<p>Heimerdinger lays down a rapid-fire cannon turret equipped with a secondary pass-through beam attack (turrets deal half damage to towers).</p>
				<p>Hextech Micro-Rockets</p>
				<p>Heimerdinger fires long-range rockets that converge on his cursor.</p>
				<p>CH-2 Electron Storm Grenade</p>
				<p>Heimerdinger lobs a grenade at a location, dealing damage to enemy units, as well as stunning anyone directly hit and slowing surrounding units.</p>
				<p>UPGRADE!!!</p>
				<p>Heimerdinger invents an upgrade, causing his next spell to have increased effects. Makes Heimerdinger's next ability free and gives it bonus effects. Reactivate to cancel.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page26:function(){
	let content = <div>
				<h2>Illaoi</h2>
				<center><img src="img/Illaoi.png"></img></center>
				<h4>(the Kraken Priestess)</h4>
				<h3>Skills</h3>
				<p>Prophet of an Elder God (Passive)</p>
				<p>Illaoi and the Vessels she creates spawn Tentacles on nearby impassible terrain. Tentacles swing at spirits, Vessels, and victims of Illaoi's Harsh lesson. Tentacles deal physical damage to enemies hit, and will heal Illaoi if they damage a champion.</p>
				<p>Tentacle Smash</p>
				<p>Increases the damage dealt by Tentacles. When activated, Illaoi smashes down a Tentacle that deals physical damage.</p>
				<p>Harsh Lesson</p>
				<p>Illaoi leaps to her target, dealing physical damage and causing nearby Tentacles to also swing at the target.</p>
				<p>Test of Spirit</p>
				<p>Illaoi rips the spirit from a foe's body, forcing it to stand before her. Spirits echo a percentage of the damage they take to the original target. If killed, or if the target gets too far from the spirit, the target will become a Vessel and begin spawning Tentacles.</p>
				<p>Leap of Faith</p>
				<p>Illaoi smashes her idol into the ground, dealing physical damage to nearby enemies. A Tentacle spawns for each enemy champion hit.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page27:function(){
	let content = <div>
				<h2>Jax</h2>
				<center><img src="img/Jax.png"></img></center>
				<h4>(Grandmaster at Arms)</h4>
				<h3>Skills</h3>
				<p>Relentless Assault (Passive)</p>
				<p>Jax's consecutive basic attacks continuously increase his Attack Speed.</p>
				<p>Leap Strike</p>
				<p>Jax leaps toward a unit. If they are an enemy, he strikes them with his weapon.</p>
				<p>Empower</p>
				<p>Jax charges his weapon with energy, causing his next attack to deal additional damage.</p>
				<p>Counter Strike</p>
				<p>Jax's combat prowess allows him to dodge all incoming attacks for a short duration and then quickly counterattack, stunning all surrounding enemies.</p>
				<p>Grandmaster's Might</p>
				<p>Every third consecutive attack deals additional Magic Damage. Additionally, Jax can activate this ability to strengthen his resolve, increasing his Armor and Magic Resist for a short duration.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page28:function(){
	let content = <div>
				<h2>Jinx</h2>
				<center><img src="img/Jinx.png"></img></center>
				<h4>(the Loose Cannon)</h4>
				<h3>Skills</h3>
				<p>Get Excited! (Passive)</p>
				<p>Jinx receives massively increased Movement Speed and stacking Attack Speed whenever she damages an enemy champion, tower, or inhibitor that is then killed or destroyed within 3 seconds.</p>
				<p>Switcheroo!</p>
				<p>Jinx modifies her basic attacks by swapping between Pow-Pow, her minigun and Fishbones, her rocket launcher. Attacks with Pow-Pow grant Attack Speed, while attacks with Fishbones deal area of effect damage, gain increased range, and drain Mana.</p>
				<p>Zap!</p>
				<p>Jinx uses Zapper, her shock pistol, to fire a blast that deals damage to the first enemy hit, slowing and revealing it.</p>
				<p>Flame Chompers!</p>
				<p>Jinx throws out a line of snare grenades that explode after 5 seconds, lighting enemies on fire. Flame Chompers will bite enemy champions who walk over them, rooting them in place.</p>
				<p>Super Mega Death Rocket!</p>
				<p>Jinx fires a super rocket across the map that gains damage as it travels. The rocket will explode upon colliding with an enemy champion, dealing damage to it and surrounding enemies based on their missing Health.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page29:function(){
	let content = <div>
				<h2>Katarina</h2>
				<center><img src="img/Katarina.png"></img></center>
				<h4>(the Sinister Blade)</h4>
				<h3>Skills</h3>
				<p>Voracity (Passive)</p>
				<p>Whenever an enemy champion dies that Katarina has damaged in the last 3 seconds, her ability cooldowns are reduced by 15 seconds.</p>
				<p>Bouncing Blade</p>
				<p>Katarina throws a Dagger at the target that then bounces to nearby enemies before ricocheting onto the ground.</p>
				<p>Preparation</p>
				<p>Katarina gains a burst of movement speed, tossing a Dagger into the air directly above herself.</p>
				<p>Shunpo</p>
				<p>Katarina blinks to the target, striking it if its an enemy, or striking the nearest enemy otherwise.</p>
				<p>Death Lotus</p>
				<p>Katarina becomes a flurry of blades, dealing massive magic damage while she channels to the 3 nearest enemy champions.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page30:function(){
	let content = <div>
				<h2>Kayn</h2>
				<center><img src="img/Kayn.png"></img></center>
				<h4>(the Shadow Reaper)</h4>
				<h3>Skills</h3>
				<p>The Darkin Scythe (Passive)</p>
				<p>At one point in the game, Kayn will permanently transform into either a Shadow Assassin or a Darkin.</p>
				<p>Reaping Slash</p>
				<p>Kayn dashes, then slashes. Both deal damage.</p>
				<p>Blade's Reach</p>
				<p>Kayn damages and slows targets in a line.</p>
				<p>Shadow Step</p>
				<p>Kayn can walk through terrain.</p>
				<p>Umbral Trespass</p>
				<p>Kayn hides in an enemy's body, dealing massive damage when he bursts out.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page31:function(){
	let content = <div>
				<h2>Khazix</h2>
				<center><img src="img/Khazix.png"></img></center>
				<h4>(the Voidreaver)</h4>
				<h3>Skills</h3>
				<p>Unseen Threat (Passive)</p>
				<p>When Kha'Zix is not visible to the enemy team, he gains Unseen Threat, causing his next basic attack against an enemy Champion to deal bonus magic damage and slow.</p>
				<p>Taste Their Fear</p>
				<p>Deals physical damage to the target. Damage increased on Isolated targets. If he chooses to Evolve Reaper Claws, this refunds a percent of it's cooldown against Isolated targets. Kha'Zix also gains increased range on his basic attacks and Taste Their Fear.</p>
				<p>Void Spike</p>
				<p>Kha'Zix fires exploding spikes that deal physical damage to enemies hit. Kha'Zix is healed if he is also within the explosion radius. If he chooses to Evolve Spike Racks, Void Spike now fires three spikes in a cone, slow enemies hit, and reveals enemy champions hit for 2 seconds. Isolated targets are slowed for extra.</p>
				<p>Leap</p>
				<p>Kha'Zix leaps to an area, dealing physical damage upon landing. If he chooses to Evolve Wings, Leap's range increases by 200 and the cooldown resets on champion kill or assist.</p>
				<p>Void Assault</p>
				<p>Each rank allows Kha'Zix to evolve one of his abilities, giving it a unique additional effect. When activated, Kha'Zix becomes Invisible, triggering Unseen Threat and increasing Movement Speed. If he chooses to Evolve Adaptive Cloaking, while out of combat Kha'Zix also passively gains Void Assault upon entering a new brush.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page32:function(){
	let content = <div>
				<h2>Leblanc</h2>
				<center><img src="img/Leblanc.png"></img></center>
				<h4>(the Deceiver)</h4>
				<h3>Skills</h3>
				<p>Sigil of Malice (Passive)</p>
				<p>When LeBlanc damages an enemy with a spell, she marks the target for 4 seconds. After 1.5 seconds, LeBlanc's next spell shatters the Sigil to deal magic damage.</p>
				<p>Shatter Orb</p>
				<p>LeBlanc projects an orb towards her target, dealing magic damage. When Shatter Orb is empowered by Sigil of Malice, the spell bounces to the nearest ready Sigil of Malice (bounces deal reduced damage to minions).</p>
				<p>Distortion</p>
				<p>LeBlanc rapidly dashes to a target location, dealing magic damage to nearby units. In the following 4 seconds, she can activate Distortion again to return to her starting location.</p>
				<p>Ethereal Chains</p>
				<p>LeBlanc flings illusionary chains towards a target location. If it hits an enemy unit, it will deal initial magic damage and shackle them. If the target remains shackled for 1.5 seconds, the target takes additional magic damage and is unable to move.</p>
				<p>Mimic</p>
				<p>LeBlanc creates a clone and casts a mimicked version of one of her basic spells. The clone casts a fake copy of that spell. LeBlanc can instead send the clone far away, where it casts a fake copy of her most recently cast spell.</p>
				
				<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page33:function(){
	let content = <div>
				<h2>Leesin</h2>
				<center><img src="img/Leesin.png"></img></center>
				<h4>(the Blind Monk)</h4>
				<h3>Skills</h3>
				<p>Flurry (Passive)</p>
				<p>After Lee Sin uses an ability, his next 2 basic attacks gain 40% Attack Speed and return 20/10 Energy.</p>
				<p>Sonic Wave / Resonating Strike</p>
				<p>Sonic Wave: Lee Sin projects a discordant wave of sound to locate his enemies, dealing physical damage to the first enemy it encounters. If Sonic Wave hits, Lee Sin can cast Resonating Strike for the next 3 seconds.</p>
				<p>Safeguard / Iron Will</p>
				<p>Safeguard: Lee Sin rushes to target ally, shielding himself from damage. If the ally is a champion, they are also shielded. After using Safeguard, Lee Sin can cast Iron Will for the next 3 seconds. Iron Will: Lee Sin's intense training allows him to thrive in battle. For 4 seconds, Lee Sin gains Life Steal and Spell Vamp.</p>
				<p>Tempest / Cripple</p>
				<p>Tempest: Lee Sin smashes the ground, sending out a shockwave that deals magic damage and reveals enemy units hit. If Tempest hits an enemy, Lee Sin can cast cripple for the next 3 seconds. Cripple: Lee Sin cripples nearby enemies damaged by Tempest, reducing their Movement Speed for 4 seconds. Movement Speed recovers gradually over the duration.</p>
				<p>Dragon's Rage</p>
				<p>Lee Sin performs a powerful roundhouse kick launching his target back, dealing physical damage to the target and any enemies they collide with. Enemies the target collides with are knocked into the air for a short duration. This technique was taught to him by Jesse Perring, although Lee Sin does not kick players off the map.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page34:function(){
	let content = <div>
				<h2>MasterYi</h2>
				<center><img src="img/MasterYi.png"></img></center>
				<h4>(the Wuju Bladesman)</h4>
				<h3>Skills</h3>
				<p>Double Strike (Passive)</p>
				<p>Every few strikes, Master Yi strikes twice.</p>
				<p>Alpha Strike</p>
				<p>Master Yi teleports across the battlefield with blinding speed, dealing physical damage to multiple units in his path, while simultaneously becoming untargetable. Alpha Strike can critically strike and deals bonus physical damage to minions and monsters. Basic attacks reduce Alpha Strike's cooldown.</p>
				<p>Meditate</p>
				<p>Master Yi rejuvenates his body by focus of mind, restoring Health and taking reduced damage for a short time. In addition, Master Yi will gain stacks of Double Strike and pause the remaining duration on Wuju Style and Highlander for each second he channels.</p>
				<p>Wuju Style</p>
				<p>Master Yi becomes skilled in the art of Wuju, passively increasing his Attack Damage. Activating Wuju Style grants bonus true damage on basic attacks, but the passive bonus is then lost while on cooldown.</p>
				<p>Highlander</p>
				<p>Master Yi moves with unparalleled agility, temporarily increasing his Movement and Attack Speeds as well as making him immune to all slowing effects. While active, Champion kills or assists extend Highlander's duration. Passively reduces cooldown for his other abilities on a kill or assist.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page35:function(){
	let content = <div>
				<h2>Nasus</h2>
				<center><img src="img/Nasus.png"></img></center>
				<h4>(the Curator of the Sands)</h4>
				<h3>Skills</h3>
				<p>Soul Eater (Passive)</p>
				<p>Nasus drains his foe's spiritual energy, giving him bonus Life Steal.</p>
				<p>Siphoning Strike</p>
				<p>Nasus strikes his foe, dealing damage and increasing the power of his future Siphoning Strikes if he slays his target.</p>
				<p>Wither</p>
				<p>Nasus ages an enemy champion, decelerating their Movement and Attack Speeds over time.</p>
				<p>Spirit Fire</p>
				<p>Nasus unleashes a spirit flame at a location, dealing damage and reducing the Armor of enemies who stand on it.</p>
				<p>Fury of the Sands</p>
				<p>Nasus unleashes a mighty sandstorm that batters nearby enemies. While the storm rages, he gains increased Health, Attack Range, damages nearby enemies, has a reduced cooldown on Siphoning Strike, and gains bonus Armor and Magic Resistance for the duration.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page36:function(){
	let content = <div>
				<h2>Orianna</h2>
				<center><img src="img/Orianna.png"></img></center>
				<h4>(the Lady of Clockwork)</h4>
				<h3>Skills</h3>
				<p>Clockwork Windup (Passive)</p>
				<p>Orianna's autoattack deals additional magic damage. This damage increases the more Orianna attacks the same target.</p>
				<p>Command: Attack</p>
				<p>Orianna commands her Ball to fire toward a target location, dealing magic damage to targets along the way (deals less damage to subsequent targets). Her Ball remains at the target location after.</p>
				<p>Command: Dissonance</p>
				<p>Orianna commands the Ball to release a pulse of energy, dealing magic damage around it. This leaves a field behind that speeds up allies and slows enemies.</p>
				<p>Command: Protect</p>
				<p>Orianna commands her Ball to attach to an allied champion, shielding them and dealing magic damage to any enemies it passes through on the way. Additionally, the Ball grants additional Armor and Magic Resist to the champion it is attached to.</p>
				<p>Command: Shockwave</p>
				<p>Orianna commands her Ball to unleash a shockwave, dealing magic damage and launching nearby enemies towards the Ball after a short delay.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page37:function(){
	let content = <div>
				<h2>Pantheon</h2>
				<center><img src="img/Pantheon.png"></img></center>
				<h4>(the Artisan of War)</h4>
				<h3>Skills</h3>
				<p>Aegis Protection (Passive)</p>
				<p>After attacking or casting spells 4 times, Pantheon will block the next incoming basic attack or turret attack.</p>
				<p>Spear Shot</p>
				<p>Pantheon hurls his spear at an opponent, dealing damage.</p>
				<p>Aegis of Zeonia</p>
				<p>Pantheon leaps at an enemy and bashes them with his shield, stunning them. After finishing the attack, Pantheon readies himself to block the next attack.</p>
				<p>Heartseeker Strike</p>
				<p>Pantheon focuses and unleashes 3 swift strikes to the area in front of him dealing damage to all enemies. Pantheon also becomes more aware of his enemy's vital spots, allowing him to always crit enemies below 15% Health.</p>
				<p>Grand Skyfall</p>
				<p>Pantheon composes himself then leaps into the air to a target, striking all enemy units in an area. Enemies closer to the impact point take more damage.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page38:function(){
	let content = <div>
				<h2>Quinn</h2>
				<center><img src="img/Quinn.png"></img></center>
				<h4>(Demacia's Wings)</h4>
				<h3>Skills</h3>
				<p>Harrier (Passive)</p>
				<p>Valor periodically marks enemies as Vulnerable. Quinn's first basic attack against Vulnerable targets will deal bonus physical damage.</p>
				<p>Blinding Assault</p>
				<p>Quinn calls Valor to mark an enemy and hinder its vision before damaging all enemies in the immediate area.</p>
				<p>Heightened Senses</p>
				<p>Passively grants Quinn Attack Speed and Movement Speed after she attacks a Vulnerable target. Activate to have Valor reveal a large area nearby.</p>
				<p>Vault</p>
				<p>Quinn dashes to an enemy, dealing physical damage and slowing the target's Movement Speed. Upon reaching the target, she leaps off the target, briefly interrupting it, and lands near her maximum Attack Range away from the target.</p>
				<p>Behind Enemy Lines</p>
				<p>Quinn and Valor team up to fly around at great speed.</p>
				


	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page39:function(){
	let content = <div>
				<h2>Riven</h2>
				<center><img src="img/Riven.png"></img></center>
				<h4>(the Exile)</h4>
				<h3>Skills</h3>
				<p>Runic Blade (Passive)</p>
				<p>Riven's abilities charge her blade, causing her basic attacks to deal bonus physical damage. Riven's blade may be charged up to three times and expends one charge per attack.</p>
				<p>Broken Wings</p>
				<p>Riven lashes out in a series of strikes. This ability can be reactivated three times in a short time frame with the third hit knocking back nearby enemies.</p>
				<p>Ki Burst</p>
				<p>Riven emits a Ki Burst, damaging and stunning nearby enemies.</p>
				<p>Valor</p>
				<p>Riven steps forward a short distance and blocks incoming damage.</p>
				<p>Blade of the Exile</p>
				<p>Riven empowers her keepsake weapon with energy, and gains Attack Damage and Range. During this time, she also gains the ability to use Wind Slash, a powerful ranged attack, once.</p>
				
			<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page40:function(){
	let content = <div>
				<h2>Ryze</h2>
				<center><img src="img/Ryze.png"></img></center>
				<h4>(the Rune Mage)</h4>
				<h3>Skills</h3>
				<p>Arcane Mastery (Passive)</p>
				<p>Ryze's spells deal extra damage based on his Bonus Mana, and he gains a percentage increase to his maximum Mana based on his Ability Power.</p>
				<p>Overload</p>
				<p>Passively, Ryze's other damaging spells reset Overload and begin to charge a Rune that can be used to empower Overload.</p>
				<p>Rune Prison</p>
				<p>Ryze traps a target enemy unit in a cage of runes, damaging them and preventing them from moving.</p>
				<p>Spell Flux</p>
				<p>Ryze releases an orb of pure magical power that damages an enemy and debuffs them. Ryze's spells have additional effects against the debuffed enemy.</p>
				<p>Realm Warp</p>
				<p>Ryze creates a portal to a nearby location. After a few seconds, allies standing near the portal are teleported to the target location.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page41:function(){
	let content = <div>
				<h2>Soraka</h2>
				<center><img src="img/Soraka.png"></img></center>
				<h4>(the Starchild)</h4>
				<h3>Skills</h3>
				<p>Salvation (Passive)</p>
				<p>Soraka runs faster towards nearby low health allies.</p>
				<p>Starcall</p>
				<p>A star falls from the sky at the target location dealing magic damage and slowing enemies. If an enemy champion is hit by Starcall, Soraka recovers health and gains movement speed when moving away from enemy champions.</p>
				<p>Astral Infusion</p>
				<p>Soraka sacrifices a portion of her own health to heal another friendly champion.</p>
				<p>Equinox</p>
				<p>Creates a zone at a location that silences all enemies inside. When the zone expires, all enemies still inside are rooted.</p>
				<p>Wish</p>
				<p>Soraka fills her allies with hope, instantly restoring health to herself and all friendly champions.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page42:function(){
	let content = <div>
				<h2>Tristana</h2>
				<center><img src="img/Tristana.png"></img></center>
				<h4>(the Yordle Gunner)</h4>
				<h3>Skills</h3>
				<p>Draw a Bead (Passive)</p>
				<p>Increases Tristana's Attack Range as she levels.</p>
				<p>Rapid Fire</p>
				<p>Tristana fires her weapon rapidly, increasing her Attack Speed for a short time.</p>
				<p>Rocket Jump</p>
				<p>Tristana fires at the ground to propel her to a distant location, dealing damage and slowing surrounding units for a brief period where she lands.</p>
				<p>Explosive Charge</p>
				<p>When Tristana kills a unit, her cannonballs burst into shrapnel, dealing damage to surrounding enemies. Can be activated to place a bomb on a target enemy that explodes after a short duration dealing damage to surrounding units.</p>
				<p>Buster Shot</p>
				<p>Tristana loads a massive cannonball into her weapon and fires it at an enemy unit. This deals Magic Damage and knocks the target back. If the target is carrying the Explosive Charge bomb, the bomb detonation radius is doubled.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page43:function(){
	let content = <div>
				<h2>Varus</h2>
				<center><img src="img/Varus.png"></img></center>
				<h4>(the Arrow of Retribution)</h4>
				<h3>Skills</h3>
				<p>Living Vengeance (Passive)</p>
				<p>On kill or assist, Varus temporarily gains Attack Speed. This bonus is larger if the enemy is a champion.</p>
				<p>Piercing Arrow</p>
				<p>Varus readies and then fires a powerful shot that gains extra range and damage the longer he spends preparing to fire.</p>
				<p>Blighted Quiver</p>
				<p>Varus' basic attacks deal bonus magic damage and apply Blight. Varus' other abilities detonate Blight, dealing magic damage based on the target's maximum Health.</p>
				<p>Hail of Arrows</p>
				<p>Varus fires a hail of arrows that deal physical damage and desecrate the ground. Desecrated ground slows enemies' Movement Speed and reduces their self healing and regeneration.</p>
				<p>Chain of Corruption</p>
				<p>Varus flings out a damaging tendril of corruption that immobilizes the first enemy champion hit and then spreads towards nearby uninfected champions, immobilizing them too on contact.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page44:function(){
	let content = <div>
				<h2>Vayne</h2>
				<center><img src="img/Vayne.png"></img></center>
				<h4>(the Night Hunter)</h4>
				<h3>Skills</h3>
				<p>Night Hunter (Passive)</p>
				<p>Vayne ruthlessly hunts evil-doers, gaining 30 movement speed when moving toward nearby enemy champions.</p>
				<p>Tumble</p>
				<p>Vayne tumbles, maneuvering to carefully place her next shot. Her next attack critically strikes.</p>
				<p>Silver Bolts</p>
				<p>Vayne tips her bolts with a rare metal, toxic to evil things. The third consecutive attack or ability against the same target deals a percentage of the target's maximum Health as bonus true damage. (Max: 200 damage vs. Monsters)</p>
				<p>Condemn</p>
				<p>Vayne draws a heavy crossbow from her back, and fires a huge bolt at her target, knocking them back and dealing damage. If they collide with terrain, they are impaled, dealing bonus damage and stunning them.</p>
				<p>Final Hour</p>
				<p>Readying herself for an epic confrontation, Vayne gains increased Attack Damage, Invisibility during Tumble, and triple the bonus Movement Speed from Night Hunter.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page45:function(){
	let content = <div>
				<h2>Wukong</h2>
				<center><img src="img/MonkeyKing.png"></img></center>
				<h4>(the Monkey King)</h4>
				<h3>Skills</h3>
				<p>Stone Skin (Passive)</p>
				<p>Increases Wukong's Armor and Magic Resist for each nearby enemy champion.</p>
				<p>Crushing Blow</p>
				<p>Wukong's next attack deals additional physical damage, gains range, and reduces the enemy's Armor for a short duration.</p>
				<p>Decoy</p>
				<p>Wukong becomes Invisible for a short duration, leaving behind a decoy that will deal Magic Damage to enemies near it when Wukong's stealth expires.</p>
				<p>Nimbus Strike</p>
				<p>Wukong dashes to target enemy and sends out images to attack up to 2 additional enemies near his target, dealing physical damage to each enemy struck.</p>
				<p>Cyclone</p>
				<p>Wukong's staff grows outward and he spins it around, dealing damage and knocking up enemies. Wukong gains Movement Speed over the duration of the spell.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page46:function(){
	let content = <div>
				<h2>XinZhao</h2>
				<center><img src="img/XinZhao.png"></img></center>
				<h4>(the Seneschal of Demacia)</h4>
				<h3>Skills</h3>
				<p>Determination (Passive)</p>
				<p>Every third attack deals bonus damage and heals Xin Zhao.</p>
				<p>Three Talon Strike</p>
				<p>Xin Zhao's next 3 standard attacks deal increased damage with the third attack knocking an opponent into the air.</p>
				<p>Wind Becomes Lightning</p>
				<p>Xin Zhao slashes in front of himself with his spear, then thrusts it forward.</p>
				<p>Audacious Charge</p>
				<p>Xin Zhao charges to an enemy, dealing damage to all enemies in the area and slowing them briefly.</p>
				<p>Crescent Guard</p>
				<p>Xin Zhao deals damage to nearby enemies based on their current Health and knocks non-challenged targets back. Xin Zhao is impervious to damage dealt by champions outside of the circle created.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page47:function(){
	let content = <div>
				<h2>Yasuo</h2>
				<center><img src="img/Yasuo.png"></img></center>
				<h4>(the Unforgiven)</h4>
				<h3>Skills</h3>
				<p>Way of the Wanderer (Passive)</p>
				<p>Yasuo's Critical Strike Chance is doubled. Additionally, Yasuo builds toward a shield whenever he is moving. The shield triggers when he takes damage from a champion or monster.</p>
				<p>Steel Tempest</p>
				<p>A skillshot basic attack. After two successful Steel Tempests, the next fires a tornado that knocks enemies Airborne.</p>
				<p>Wind Wall</p>
				<p>Creates a moving wall that blocks enemy projectiles. Creates a moving wall that blocks all enemy projectiles for 4 seconds.</p>
				<p>Sweeping Blade</p>
				<p>Dashes through a unit, dealing escalating Magic Damage with each cast.</p>
				<p>Last Breath</p>
				<p>Moves to a unit and strikes them repeatedly for heavy damage. Can only be cast on Airborne targets.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page48:function(){
	let content = <div>
				<h2>Zed</h2>
				<center><img src="img/Zed.png"></img></center>
				<h4>(the Master of Shadows)</h4>
				<h3>Skills</h3>
				<p>Contempt for the Weak (Passive)</p>
				<p>Zed's basic attacks against targets below 50% Health deal 6-10% of the target's maximum Health as bonus Magic Damage. This effect can only occur once every 10 seconds on the same target.</p>
				<p>Razor Shuriken</p>
				<p>Zed and his shadow both throw their spinning blades forward, dealing damage to any targets they pass through.</p>
				<p>Living Shadow</p>
				<p>Zed's shadow dashes forward, remaining in place for 5 seconds, and mimicking his spell casts. Zed can reactivate to swap places with the shadow.</p>
				<p>Shadow Slash</p>
				<p>Zed and his shadow spin their blades, creating a burst of shadow energy. The shadow's spin slows.</p>
				<p>Death Mark</p>
				<p>Zed leaves a shadow behind and dashes to target Champion, marking them for death. After 3 seconds, the mark will trigger, dealing a percentage of the damage Zed has dealt while the mark was active. If the Champion dies under Death Mark, Zed can gain a portion of their attack damage.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page49:function(){
	let content = <div>
				<h2>Zoe</h2>
				<center><img src="img/Zoe.png"></img></center>
				<h4>(the Aspect of Twilight)</h4>
				<h3>Skills</h3>
				<p>More Sparkles! (Passive)</p>
				<p>Zoe's next basic attack after casting a spell deals bonus magic damage.</p>
				<p>Paddle Star!</p>
				<p>Zoe fires a missile that she can redirect in flight. Deals more damage the longer it flies in a straight line.</p>
				<p>Spell Thief</p>
				<p>Zoe can pick up the remnants of enemy summoner spell and active item casts and cast them once herself. Whenever she casts a summoner spell, she gains 3 missiles that fire at the nearest target.</p>
				<p>Sleepy Trouble Bubble</p>
				<p>Causes the target to become drowsy, then fall asleep. The first source of damage that breaks the sleep is doubled, up to a cap.</p>
				<p>Portal Jump</p>
				<p>Blink to a nearby position for 1 second. Then blink back.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	page50:function(){
	let content = <div>
				<h2 class="zyra">Zyra</h2>
				<center><img src="img/Zyra.png"></img></center>
				<h4>(Rise of the Thorns)</h4>
				<h3>Skills</h3>
				<p>Garden of Thorns (Passive)</p>
				<p>Seeds spawn around Zyra periodically, becoming faster with level and lasting 45 seconds. If an enemy Champion steps on a seed, it dies. Zyra can cast spells near seeds to grow plants. Extra plants striking the same target deal reduced damage.</p>
				<p>Deadly Spines</p>
				<p>Thick vines spread through the ground and explode into spines, dealing magic damage to enemies within the area. If cast near a seed, Deadly Spines grows a Thorn Spitter plant, which fires at enemies from afar.</p>
				<p>Rampant Growth</p>
				<p>Zyra plants a seed, lasting up to 60 seconds. Deadly Spines and Grasping Roots cast near seeds will turn them into plants who fight for Zyra. Additionally, Rampant Growth passively grants her plants improved maximum Health.</p>
				<p>Grasping Roots</p>
				<p>Zyra sends forth vines through the ground to ensnare her target, dealing damage and rooting enemies they come across. If cast near a seed, Grasping Roots grows a Vine Lasher, whose short range attacks reduce enemy Movement Speed.</p>
				<p>Stranglethorns</p>
				<p>Zyra summons a twisted thicket at her target location, dealing damage to enemies as it expands and knocking them airborne as it contracts.</p>

	<br/><a href='#' onClick={process.menu}>back</a>
			</div>;
			ReactDOM.render(content,document.getElementById('root'));
	},
	loading:function(){
		let content = <div>
					Loading...
				</div>;
		ReactDOM.render(content,document.getElementById('root'));
	}
}

process.loading();
setTimeout(function(){
	process.menu();
},1000);