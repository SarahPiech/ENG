
  
  // 定義各項目的內容資料
  const infoMap = {
    pronunciation: "15mins Recording",
    vowels: "1_1) 母音 - 內容準備中...",
    "long-vowels": "1_1_1 短母音<br><br><span class='script-highlight'>劇本: 子音+母音+子音</span><br><br><div class='example-container'><span class='example-highlight'>ep1: cat (c-a-t)</span><span class='example-highlight'>ep2: dog (d-o-g)</span><span class='example-highlight'>ep3: pen (p-e-n)</span></div>",
    "short-vowels": "1_1_2 長母音<br><br><span class='script-highlight'>劇本: Magic_E</span><br><br><div class='example-container'><span class='example-highlight'>ep1: cake (c<u>a</u>k<span class='silent-e'><u>e</u></span>)</span><span class='example-highlight'>ep2: bike (b<u>i</u>k<span class='silent-e'><u>e</u></span>)</span><span class='example-highlight'>ep3: hope (h<u>o</u>p<span class='silent-e'><u>e</u></span>)</span></div>",
    "vowel-groups": "1_1_3 母音字群<br><br><span class='script-highlight'>劇本: 二合一 [ea, oa, ee, ai, oo]</span><br><br><div class='example-container'><span class='example-highlight'>ep1: bread (br<span class='vowel-group' data-sound='ea'><u>ea</u></span>d)</span><span class='example-highlight'>ep2: boat (b<span class='vowel-group' data-sound='oa'><u>oa</u></span>t)</span><span class='example-highlight'>ep3: tree (tr<span class='vowel-group' data-sound='ee'><u>ee</u></span>)</span><span class='example-highlight'>ep4: rain (r<span class='vowel-group' data-sound='ai'><u>ai</u></span>n)</span><span class='example-highlight'>ep5: book (b<span class='vowel-group' data-sound='oo'><u>oo</u></span>k)</span></div>",
    consonants: "1_2) 子音 - 內容準備中...",
    "consonant-basic": "1_2_1 子音<br><br><span class='script-highlight'>劇本: 沒有分長短</span><br><br><table class='consonant-table'><tr><td>b</td><td>c</td><td>d</td><td>f</td><td>g</td><td>h</td><td>j</td><td>k</td><td>l</td><td>m</td></tr><tr><td>/b/</td><td>/k/</td><td>/d/</td><td>/f/</td><td>/g/</td><td>/h/</td><td>/dʒ/</td><td>/k/</td><td>/l/</td><td>/m/</td></tr></table><br><table class='consonant-table'><tr><td>n</td><td>p</td><td>q</td><td>r</td><td>s</td><td>t</td><td>v</td><td>w</td><td>x</td><td>y</td><td>z</td></tr><tr><td>/n/</td><td>/p/</td><td>/kw/</td><td>/r/</td><td>/s/</td><td>/t/</td><td>/v/</td><td>/w/</td><td>/ks/</td><td>/j/</td><td>/z/</td></tr></table>",
    "consonant-groups": "1_2_2 子音字群<br><br><span class='script-highlight'>劇本: 二合一 或 三合一</span><br><br><div class='example-container'><span class='example-highlight'>ep1: ship (<u>sh</u>ip)</span><span class='example-highlight'>ep2: chat (<u>ch</u>at)</span><span class='example-highlight'>ep3: think (<u>th</u>ink)</span><span class='example-highlight'>ep4: black (bl<u>ck</u>)</span><span class='example-highlight'>ep5: strong (<u>str</u>ong)</span><span class='example-highlight'>ep6: splash (<u>spl</u>ash)</span></div>",
    "soft-hard": "1_3) 軟硬音<br><br><span class='script-highlight'>劇本: [e] [i] [y] 讓 C & G 變溫柔了! CH是歐洲客.</span><br><br><div class='example-container'><span class='example-highlight'>ep1: city (<u>c</u>ity)</span><span class='example-highlight'>ep2: cent (<u>c</u>ent)</span><span class='example-highlight'>ep3: gym (<u class='g-underline'>g</u>ym)</span><span class='example-highlight'>ep4: giant (<u class='g-underline'>g</u>iant)</span><span class='example-highlight'>ep5: chair (<u>ch</u>air)</span><span class='example-highlight'>ep6: cheese (<u>ch</u>eese)</span></div>",
    "parts-speech": "8+1詞類介紹 - 內容準備中...",
    noun: "01) 名詞<br><br><span class='script-highlight'>[名人與素人] 專有 vs 一般</span><br><br><div class='example-container'><span class='example-highlight'>專有：New York City</span><span class='example-highlight'>一般：city</span></div><br><span class='script-highlight'>[角色的計算] 可數 vs 不可數</span><br><br>可數名詞（單數 &amp; 複數）vs 不可數名詞（只有單數，沒有複數）<br><br><div class='example-container'><span class='example-highlight'>可數：apple</span><span class='example-highlight'>不可數：water</span></div><br><table class='noun-table'><tr><th>類型</th><th>單數</th><th>複數</th></tr><tr><td>可數</td><td>apple</td><td>apples</td></tr><tr><td>不可數</td><td>water</td><td>—</td></tr></table>",
    determiners: "02) 限定詞<br><br><table class='noun-table determiner-table'><tr><th>編碼</th><th>種類</th><th>例子</th></tr><tr><td>1</td><td>冠詞</td><td>a, an, the</td></tr><tr><td>2</td><td>指示詞</td><td>this, that, these, those</td></tr><tr><td>3</td><td>所有格</td><td>my, your, his, her, its, our, their</td></tr><tr><td>4</td><td>數字</td><td>one, two, three</td></tr><tr><td>5</td><td>數量詞</td><td>some, any, much, many, few, little, several, a lot of</td></tr><tr><td>6</td><td>疑問限定詞</td><td>what, which, whose</td></tr><tr><td>7</td><td>不定限定詞</td><td>any, another, both, all, either</td></tr></table>",
    verbs: "03) 動詞<br><br><table class='noun-table verb-table'><tr><th>動詞分類</th><th>原形</th><th>過去式</th><th>過去分詞</th><th>現在分詞</th></tr><tr><td>Be動詞</td><td>is/are</td><td>was/were</td><td>been</td><td>being</td></tr><tr><td>一般動詞</td><td>go</td><td>went</td><td>gone</td><td>going</td></tr><tr class='verb-group'><td>助動詞</td><td></td><td></td><td></td><td></td></tr><tr class='verb-sub'><td>└ 一般助動詞</td><td>do/have</td><td>did/had</td><td></td><td></td></tr><tr class='verb-sub'><td>└ 態度助動詞</td><td>can/will</td><td>could/would</td><td></td><td></td></tr></table>",
    adjectives: "04) 形容詞<br><br><table class='noun-table verb-table'><tr><th>形容詞等級</th><th>原形</th><th>比較級</th><th>最高級</th></tr><tr><td>一般規則_短</td><td>★</td><td>★ + er</td><td>★ + est</td></tr><tr class='verb-sub'><td>└ 一般範例_短</td><td>tall</td><td>taller</td><td>tallest</td></tr><tr><td>一般規則_長</td><td>☀</td><td>more + ☀</td><td>most + ☀</td></tr><tr class='verb-sub'><td>└ 一般範例_長</td><td>beautiful</td><td>more beautiful</td><td>most beautiful</td></tr><tr><td>跳脫規則</td><td>O</td><td>X</td><td>△</td></tr><tr class='verb-sub'><td>└ 跳脫範例</td><td>good</td><td>better</td><td>best</td></tr></table>",
    adverbs: "05) 副詞<br><br><table class='noun-table verb-table'><tr><th>副詞分類</th><th>範例 (副詞)</th><th>規則</th><th>形容詞</th></tr><tr><td>形容詞變身_一般</td><td>quickly</td><td>形容詞 + ly</td><td>quick</td></tr><tr><td>形容詞變身_特殊</td><td>well</td><td></td><td>good</td></tr><tr><td>形容詞變身_自己</td><td>fast</td><td>形容詞 = 副詞</td><td>fast</td></tr><tr><td>時間</td><td>today, soon</td><td></td><td></td></tr><tr><td>地點</td><td>here, there</td><td></td><td></td></tr><tr><td>頻率</td><td>always, often</td><td></td><td></td></tr><tr><td>程度</td><td>very, pretty</td><td></td><td></td></tr></table>",
    pronouns: "06) 代名詞<br><br><table class='noun-table determiner-table'><tr><th>#</th><th>代名詞分類</th><th>範例</th></tr><tr><td>1</td><td>人</td><td>I, you, he, she, it, we, they</td></tr><tr><td>2</td><td>所有格</td><td>mine, yours, his, hers, ours, theirs</td></tr><tr><td>3</td><td>反身</td><td>myself, yourself, himself, herself, itself, ourselves, themselves</td></tr><tr><td>4</td><td>指定</td><td>this, that, these, those</td></tr><tr><td>5</td><td>未指定</td><td>someone, anyone, everyone, nobody, something, nothing</td></tr><tr><td>6</td><td>關係</td><td>who, whom, whose, which, that</td></tr><tr><td>7</td><td>疑問</td><td>who, whom, whose, which, what</td></tr><tr><td>8</td><td>相互</td><td>each other, one another</td></tr></table>",
    conjunctions: "07) 連接詞<br><br><table class='noun-table determiner-table conjunction-table'><tr><th>#</th><th>連接詞分類</th><th>簡單說明</th><th>範例</th></tr><tr><td>1</td><td>對等連接詞</td><td>兩邊平起平坐，對等相接</td><td>and, but, or, so</td></tr><tr><td>2</td><td>從屬連接詞</td><td>一邊依附另一邊（原因／條件／時間）</td><td>because, if, although, when</td></tr><tr><td>3</td><td>相關連接詞</td><td>成對出現，前後呼應</td><td>both…and, either…or, neither…nor</td></tr></table>",
    prepositions: "08) 介系詞<br><br><table class='noun-table determiner-table'><tr><th>#</th><th>介系詞分類</th><th>範例</th></tr><tr><td>1</td><td>時間</td><td>at, on, in, before, after, during, since, until</td></tr><tr><td>2</td><td>位置</td><td>at, in, on, under, above, behind, between</td></tr><tr><td>3</td><td>方向</td><td>to, from, into, through, across, toward</td></tr><tr><td>4</td><td>關係</td><td>with, for, about, by, of, without, like</td></tr></table>",
    interjections: "09) 感嘆詞<br><br><div class='interjection-list'><div>Hey!</div><div>Wow!</div><div>Oops!</div><div>Ouch!</div><div>Aha!</div></div>",
    sentence: "劇組 - 內容準備中...",
    "sentence-basic": `01) 基本句_五大基本句型<br><br><span class='script-highlight'>S / V / C / O</span><br><br><div class='example-container'>
	<span class='example-highlight'>S = Subject (主詞)</span>
	<span class='example-highlight'>V = Verb (動詞)</span>
	<span class='example-highlight'>C = Complement (補語)</span>
	<span class='example-highlight'>O = Object (受詞)</span>
	
	</div><br><table class='noun-table determiner-table pattern-table'>
	<tr><th>#</th><th>句型</th><th>範例</th></tr>
	<tr><td>1</td><td>S+V</td><td>I sleep.</td></tr>
	<tr><td>2</td><td>S+V+C</td><td>I am happy.</td></tr>
	<tr><td>3</td><td>S+V+O</td><td>I like coffee.</td></tr>
	<tr><td>4</td><td>S+V+O+O</td><td>I gave him a book.</td></tr>
	<tr><td>5</td><td>S+V+O+C</td><td>They made me happy.</td></tr>
	</table>`,
    
	"sentence-statement": `02) 陳述句_肯定&否定<br><br><table class='noun-table verb-table statement-table'>
	<tr><th>Type</th><th>Verbs</th><th>肯定</th><th>否定</th><th>肯定 to 否定</th></tr>
	<tr><td>Be動詞</td><td>am / is / are</td><td>She is happy.</td><td>She is <span class='neg-mark neg-underline'>not</span> happy.</td><td><span class='neg-mark'>+ not</span></td></tr>
	<tr><td>一般動詞</td><td>like / play / eat / work…</td><td>She likes coffee.</td><td>She <span class='neg-mark neg-underline'>does not</span> like coffee.</td><td><span class='neg-mark'>+ do/does + not</span></td></tr>
	</table>`,
    "sentence-question": `03) 疑問句<br><br><table class='noun-table verb-table statement-table'>
	<tr><th>Type</th><th>Verbs</th><th>Sentence</th><th>Question</th><th>Rule</th></tr>
	<tr><td>Be動詞</td><td>am / is / are</td><td>She is happy.</td><td><span class='neg-mark neg-underline'>Is she</span> happy?</td><td><span class='neg-mark'>[動詞] + [主詞]…?</span></td></tr>
	<tr><td>一般動詞</td><td>like / play / eat / work…</td><td>She likes coffee.</td><td><span class='neg-mark neg-underline'>Does she like</span> coffee?</td><td><span class='neg-mark'>Do/Does + [動詞] + [主詞]…?</span></td></tr>
	</table>`,
    "sentence-imperative": `04) 祈使句 (叫人作句)<br><br>
	<span class='script-highlight'>Type</span><br><br>
	<table class='noun-table verb-table statement-table'>
	<tr><th>Type</th><th>Example</th></tr>
	<tr><td>Command</td><td>Sit down. / Don't touch it.</td></tr>
	<tr><td>Invitation</td><td>Come in. / Have a seat.</td></tr>
	<tr><td>Suggestion</td><td>Take a break. / Get some rest.</td></tr>
	<tr><td>Warning</td><td>Be careful. / Watch out!</td></tr>
	<tr><td>Instruction</td><td>Turn left. / Press the button.</td></tr>
	<tr><td>Wish / Blessing</td><td>Have a nice day. / Enjoy your trip.</td></tr>
	</table><br>
	<span class='script-highlight'>Pattern</span><br><br>
	<table class='noun-table verb-table statement-table'>
	<tr><th>Pattern</th><th>Use</th><th>Example</th></tr>
	<tr><td>Base verb + ...</td><td>叫人作</td><td>Open the door.</td></tr>
	<tr><td>Don't + V + ...</td><td>叫人不要作</td><td>Don't open the door.</td></tr>
	<tr><td>Let's + V + ...</td><td>邀請一起做某事</td><td>Let's go.</td></tr>
	<tr><td>Let's not + V + ...</td><td>提議不要一起做某事</td><td>Let's not argue.</td></tr>
	</table>`,
    tenses: `時刻表<br><br>
	<span class='script-highlight'>[前情提要]</span><br><br>
	動詞有四種變身：[原形]、[過去式]、[過去分詞]、[現在分詞]<br>
	要用哪一種變身，取決於 [時間] 與 [狀態]<br><br>
	<table class='noun-table determiner-table'>
	<tr><th>#</th><th>決定因素</th><th>內容</th></tr>
	<tr><td>1</td><td>[時間]</td><td>過去, 現在, 未來</td></tr>
	<tr><td>2</td><td>[狀態]</td><td>一般發生, 正在發生, 已經完成, 持續了一段時間</td></tr>
	</table><br>
	<span class='script-highlight'>[電影分鏡與器材]</span><br><br>
	<div class='film-gear-row'>
	<div class='film-gear-col'>
	這是 [film]<br><br>
	<table class='noun-table verb-table gear-icon-table'>
	<tr><th>器材</th><th>變身</th><th>範例 (see)</th></tr>
	<tr><td>💿</td><td>過去</td><td>saw</td></tr>
	<tr><td>🎵</td><td>現在</td><td>see</td></tr>
	<tr><td>📼</td><td>過去分詞</td><td>seen</td></tr>
	<tr><td>📱</td><td>現在分詞 = ing</td><td>seeing</td></tr>
	</table>
	</div>
	<div class='film-gear-col'>
	這是 [gear]<br><br>
	<table class='noun-table verb-table gear-icon-table'>
	<tr><th>器材</th><th>角色</th><th>過去 / 現在 / 過去分詞</th></tr>
	<tr><td>🔦</td><td>助動詞 have</td><td>had / have / had</td></tr>
	<tr><td>🔊</td><td>be 動詞</td><td>was / be / been</td></tr>
	</table>
	</div>
	</div><br>
	<span class='script-highlight'>[腳本]</span><br><br>
	<table class='noun-table verb-table tense-table'>
	<tr><th>狀態＼時間</th><th>過去</th><th>現在</th><th>未來</th></tr>
	<tr><td>[靜止] 一般發生</td><td>💿</td><td>🎵</td><td>will + 🎵</td></tr>
	<tr><td>[特寫] 正在發生 [分詞]</td><td>🔊 + 📱</td><td>🔊 + 📱</td><td>will + 🔊 + 📱</td></tr>
	<tr><td>[空鏡] 已經發生 [分詞]</td><td>🔦 + 📼</td><td>🔦 + 📼</td><td>will + 🔦 + 📼</td></tr>
	<tr><td>[長鏡頭] 持續一段時間 [分詞]</td><td>🔦 + 🔊 + 📱</td><td>🔦 + 🔊 + 📱</td><td>will + 🔦 + 🔊 + 📱</td></tr>
	</table><br>
	<span class='script-highlight'>[電影上映]</span><br><br>
	[take#1_動詞]<br><br>
	<table class='noun-table verb-table premiere-table'>
	<tr><th>狀態＼時間</th><th>過去</th><th>現在</th><th>未來</th></tr>
	<tr><td>一般發生</td><td>saw</td><td>see</td><td>will see</td></tr>
	<tr><td>正在發生</td><td>was/were seeing</td><td>am/is/are seeing</td><td>will be seeing</td></tr>
	<tr><td>已經發生</td><td>had seen</td><td>have/has seen</td><td>will have seen</td></tr>
	<tr><td>持續一段時間</td><td>had been seeing</td><td>have/has been seeing</td><td>will have been seeing</td></tr>
	</table><br>
	[take#2_句子]<br><br>
	<table class='noun-table verb-table premiere-table premiere-sentence-table'>
	<tr><th>狀態＼時間</th><th>過去</th><th>現在</th><th>未來</th></tr>
	<tr><td>一般</td><td>I filmed the scene.</td><td>I film the scene.</td><td>I will film the scene.</td></tr>
	<tr><td>進行</td><td>I was filming the scene.</td><td>I am filming the scene.</td><td>I will be filming the scene.</td></tr>
	<tr><td>完成</td><td>I had filmed the scene.</td><td>I have filmed the scene.</td><td>I will have filmed the scene.</td></tr>
	<tr><td>完成進行</td><td>I had been filming the scene.</td><td>I have been filming the scene.</td><td>I will have been filming the scene.</td></tr>
	</table>`,
    clauses: `子句=團隊<br><br>
	<span class='script-highlight'>[spotlight]</span><br><br>
	Word &lt; Phase &lt; Clause &lt; Sentence<br><br>
	<span class='script-highlight'>[前情提要]</span><br><br>
	<div class='example-container'>
	<span class='example-highlight clause-preview'>名詞子句 = 它自己就是「東西」</span>
	<span class='example-highlight clause-preview'>形容詞子句 = 它在描述「哪一個東西」</span>
	<span class='example-highlight clause-preview'>副詞子句 = 它在說明「怎麼樣／什麼時候／為什麼／什麼條件」</span>
	</div><br>
	<span class='script-highlight'>[腳本]</span><br><br>
	<table class='noun-table verb-table clause-table'>
	<tr><th>類型</th><th>功能</th><th>常見引導詞</th></tr>
	<tr><td>Independent clause</td><td>可獨立成完整句子</td><td>—</td></tr>
	<tr><td>Dependent clause</td><td>不可獨立成完整句子</td><td>Per below</td></tr>
	<tr class='verb-sub'><td>└ Noun clause</td><td>當成主詞/受詞/補語</td><td>that / whether / if / wh</td></tr>
	<tr class='verb-sub'><td>└ Adjective clause</td><td>修飾名詞</td><td>who / which / that / whose</td></tr>
	<tr class='verb-sub'><td>└ Adverb clause</td><td>情況/條件</td><td>because / if / when / although / before / after / while / unless</td></tr>
	</table><br>
	<span class='script-highlight'>[隨堂測驗]</span><br><br>
	<div class='clause-quiz'>
		<div class='clause-quiz-stage'>
			<div class='clause-quiz-items'>
				<div class='clause-quiz-item is-active'><span class='clause-quiz-sentence'>I don't know <u>what she wants</u>. <span class='clause-quiz-answer'>[n]</span></span></div>
				<div class='clause-quiz-item'><span class='clause-quiz-sentence'>The book <u>that you gave me</u> is interesting. <span class='clause-quiz-answer'>[adj]</span></span></div>
				<div class='clause-quiz-item'><span class='clause-quiz-sentence'><u>Because it was raining</u>, we stayed at home. <span class='clause-quiz-answer'>[adv]</span></span></div>
				<div class='clause-quiz-item'><span class='clause-quiz-sentence'>I believe <u>that he is honest</u>. <span class='clause-quiz-answer'>[n]</span></span></div>
				<div class='clause-quiz-item'><span class='clause-quiz-sentence'>The boy <u>who is standing over there</u> is my brother. <span class='clause-quiz-answer'>[adj]</span></span></div>
			</div>
			<div class='clause-quiz-nav'>
				<button type='button' class='clause-quiz-prev'>上一題</button>
				<button type='button' class='clause-quiz-next'>下一題</button>
			</div>
		</div>
	</div>`,
    "direct-indirect": "直接與間接 - 內容準備中...",
    conditional: "條件句 - 內容準備中..."
  };

  function initClauseQuiz() {
	const quiz = rightContent.querySelector('.clause-quiz');
	if (!quiz) {
		return;
	}
	const items = quiz.querySelectorAll('.clause-quiz-item');
	const prev = quiz.querySelector('.clause-quiz-prev');
	const next = quiz.querySelector('.clause-quiz-next');
	let index = 0;

	function show(i) {
		items.forEach((item, n) => {
			item.classList.toggle('is-active', n === i);
		});
		prev.disabled = i === 0;
		next.disabled = i === items.length - 1;
	}

	prev.addEventListener('click', function() {
		if (index > 0) {
			index -= 1;
			show(index);
		}
	});
	next.addEventListener('click', function() {
		if (index < items.length - 1) {
			index += 1;
			show(index);
		}
	});
	show(0);
  }

  //sidebarA = 選取的link裡的a
  const sidebarA = document.querySelectorAll('.sidebar a');
  
  //rightContent = 選取對應的rightcontent區塊
  const rightContent = document.getElementById('rightcontent');
  
  
  // 點擊sidebarA的時候的動作
  sidebarA.forEach(link => {
	link.addEventListener("click", function(event) {
		event.preventDefault(); //避免跳頁
		
		// 如果是有toggle功能的父項目
		if (this.classList.contains('toggle-parent')) {
			const arrow = this.querySelector('.toggle-arrow');
			const submenu = this.parentElement.querySelector('.sub-menu, .sub-sub-menu');
			
			if (submenu) {
				submenu.classList.toggle('show');
				arrow.classList.toggle('rotated');
			}
		}
		
		// 顯示內容
		const content = this.dataset.info;
		if (infoMap[content]) {
			// 特別處理 pronunciation (錄音室) 項目
			if (content === 'pronunciation') {
				// 清空內容區域
				rightContent.innerHTML = '';
				
				// 創建 "15mins Recording" 作為內聯超連結
				const link = document.createElement('a');
				link.href = 'https://www.youtube.com/watch?v=_NMErX2H3aE';
				link.target = '_blank';
				link.textContent = '15mins Recording';
				link.style.color = '#0066cc';
				link.style.textDecoration = 'none';
				link.style.fontSize = '18px';
				link.style.fontWeight = 'bold';
				
				// 創建包含超連結的段落
				const paragraph = document.createElement('p');
				paragraph.style.marginBottom = '20px';
				paragraph.appendChild(link);
				
				// 創建影片播放器容器
				const videoContainer = document.createElement('div');
				videoContainer.style.marginTop = '15px';
				videoContainer.style.display = 'inline-block';
				
				const iframe = document.createElement('iframe');
				iframe.setAttribute('width', '580');
				iframe.setAttribute('height', '400');
				iframe.setAttribute('src', 'https://www.youtube.com/embed/_NMErX2H3aE');
				iframe.setAttribute('title', 'YouTube video player');
				iframe.setAttribute('frameborder', '0');
				iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
				iframe.setAttribute('allowfullscreen', 'true');
				iframe.style.maxWidth = '100%';
				iframe.style.border = 'none';
				iframe.style.display = 'block';
				
				// 創建來源標註 (在播放器右下方)
				const sourceLabel = document.createElement('div');
				sourceLabel.textContent = 'source: Chen Lily';
				sourceLabel.style.textAlign = 'right';
				sourceLabel.style.marginTop = '5px';
				sourceLabel.style.color = '#666';
				sourceLabel.style.fontSize = '12px';
				sourceLabel.style.fontStyle = 'italic';
				sourceLabel.style.width = '580px';
				sourceLabel.style.maxWidth = '100%';
				
				videoContainer.appendChild(iframe);
				videoContainer.appendChild(sourceLabel);
				
				// 將內容添加到內容區域
				rightContent.appendChild(paragraph);
				rightContent.appendChild(videoContainer);
			} else if (content === 'vowels') {
				// 特別處理母音項目 - 顯示26個字母表格，母音反白
				rightContent.innerHTML = '';
				
				// 創建標題
				const title = document.createElement('h3');
				title.textContent = '1_1) 母音';
				title.style.marginBottom = '20px';
				title.style.color = '#333';
				
				// 創建表格
				const table = document.createElement('table');
				table.className = 'alphabet-table';
				
				// 定義母音
				const vowels = ['A', 'E', 'I', 'O', 'U'];
				
				// 創建26個字母
				const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
				
				// 每行6個字母，共5行
				const rowsData = [
					alphabet.slice(0, 6),   // A-F
					alphabet.slice(6, 12),  // G-L
					alphabet.slice(12, 18), // M-R
					alphabet.slice(18, 24), // S-X
					alphabet.slice(24, 26)  // Y-Z
				];
				
				rowsData.forEach(rowLetters => {
					const row = document.createElement('tr');
					rowLetters.forEach(letter => {
						const cell = document.createElement('td');
						cell.textContent = letter;
						
						// 如果是母音，添加反白樣式
						if (vowels.includes(letter)) {
							cell.className = 'vowel-highlight';
						}
						
						row.appendChild(cell);
					});
					table.appendChild(row);
				});
				
				// 將標題和表格添加到內容區域
				rightContent.appendChild(title);
				rightContent.appendChild(table);
			} else if (content === 'consonants') {
				// 特別處理子音項目 - 顯示26個字母表格，子音反白
				rightContent.innerHTML = '';
				
				// 創建標題
				const title = document.createElement('h3');
				title.textContent = '1_2) 子音';
				title.style.marginBottom = '20px';
				title.style.color = '#333';
				
				// 創建表格
				const table = document.createElement('table');
				table.className = 'alphabet-table';
				
				// 定義母音（子音是除了母音以外的字母）
				const vowels = ['A', 'E', 'I', 'O', 'U'];
				
				// 創建26個字母
				const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
				
				// 每行6個字母，共5行
				const rowsData = [
					alphabet.slice(0, 6),   // A-F
					alphabet.slice(6, 12),  // G-L
					alphabet.slice(12, 18), // M-R
					alphabet.slice(18, 24), // S-X
					alphabet.slice(24, 26)  // Y-Z
				];
				
				rowsData.forEach(rowLetters => {
					const row = document.createElement('tr');
					rowLetters.forEach(letter => {
						const cell = document.createElement('td');
						cell.textContent = letter;
						
						// 如果是子音（不是母音），添加反白樣式
						if (!vowels.includes(letter)) {
							cell.className = 'consonant-highlight';
						}
						
						row.appendChild(cell);
					});
					table.appendChild(row);
				});
				
				// 將標題和表格添加到內容區域
				rightContent.appendChild(title);
				rightContent.appendChild(table);
			} else {
				rightContent.innerHTML = infoMap[content];
				if (content === 'clauses') {
					initClauseQuiz();
				}
			}
		}
	});

  });

