
  
  // 定義各項目的內容資料
  const infoMap = {
    pronunciation: "發音 - 總覽 - 內容準備中...",
    vowels: "1_1) 母音 - 內容準備中...",
    "long-vowels": "1_1_1 長母音 - 內容準備中...",
    "short-vowels": "1_1_2 短母音 - 內容準備中...",
    "vowel-groups": "1_1_3 母音字群 - 內容準備中...",
    consonants: "1_2) 子音 - 內容準備中...",
    "consonant-basic": "1_2_1 子音 **沒有分長短喔** - 內容準備中...",
    "consonant-groups": "1_2_2 子音字群 - 內容準備中...",
    "soft-hard": "1_3) 軟硬音: C/G/CH - 內容準備中...",
    "parts-speech": "8+1詞類介紹 - 內容準備中...",
    noun: "1) 名詞 - 內容準備中...",
    determiners: "2) 限定詞 [冠詞、指示詞、所有格、數字、數量詞、疑問限定詞、不定限定詞] - 內容準備中...",
    articles: "冠詞\n\na, an, the",
    demonstratives: "指示詞\n\nthis, that, these, those",
    possessives: "所有格\n\nmy, yours, his, her, its, our, their",
    numbers: "數字\n\none, two, three",
    quantifiers: "數量詞\n\nsome, any, much, many, few, little, several, a lot of",
    "interrogative-det": "疑問限定詞\n\nwhat, which, whose",
    "indefinite-det": "不定限定詞\n\nany, another, both, all, either",
    verbs: "3) 動詞 [動詞三態、不定詞、動名詞、被動語態] - 內容準備中...",
    adjectives: "4) 形容詞 [比較級] - 內容準備中...",
    adverbs: "5) 副詞 - 內容準備中...",
    pronouns: "6) 代名詞 - 內容準備中...",
    conjunctions: "7) 連接詞 - 內容準備中...",
    prepositions: "8) 介系詞 - 內容準備中...",
    interjections: "9) 感嘆詞 - 內容準備中...",
    sentence: "句子結構_基本句型、肯定句、否定句、疑問句、祈使句 - 內容準備中...",
    tenses: "時態[簡單、進行、完成] - 內容準備中...",
    clauses: "子句_簡單句 & 複雜句...獨立子句/從屬子句[名詞子句、形容詞子句、副詞子句] - 內容準備中...",
    "direct-indirect": "直接與間接 - 內容準備中...",
    conditional: "條件句 - 內容準備中..."
  };

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
			rightContent.textContent = infoMap[content];
		}
	});

  });

