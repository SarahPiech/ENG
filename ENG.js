
  
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
			}
		}
	});

  });

