
  
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
    noun: "1) 名詞<br><br><span class='script-highlight'>[名人與素人] 專有 vs 一般</span><br><br><div class='example-container'><span class='example-highlight'>專有：New York City</span><span class='example-highlight'>一般：city</span></div><br><span class='script-highlight'>[角色的計算] 可數 vs 不可數</span><br><br>可數名詞（單數 &amp; 複數）vs 不可數名詞（只有單數，沒有複數）<br><br><div class='example-container'><span class='example-highlight'>可數：apple</span><span class='example-highlight'>不可數：water</span></div><br><table class='noun-table'><tr><th>類型</th><th>單數</th><th>複數</th></tr><tr><td>可數</td><td>apple</td><td>apples</td></tr><tr><td>不可數</td><td>water</td><td>—</td></tr></table>",
    determiners: "2) 限定詞<br><br><table class='noun-table determiner-table'><tr><th>編碼</th><th>種類</th><th>例子</th></tr><tr><td>1</td><td>冠詞</td><td>a, an, the</td></tr><tr><td>2</td><td>指示詞</td><td>this, that, these, those</td></tr><tr><td>3</td><td>所有格</td><td>my, your, his, her, its, our, their</td></tr><tr><td>4</td><td>數字</td><td>one, two, three</td></tr><tr><td>5</td><td>數量詞</td><td>some, any, much, many, few, little, several, a lot of</td></tr><tr><td>6</td><td>疑問限定詞</td><td>what, which, whose</td></tr><tr><td>7</td><td>不定限定詞</td><td>any, another, both, all, either</td></tr></table>",
    verbs: "3) 動詞<br><br><table class='noun-table verb-table'><tr><th>動詞分類</th><th>原形</th><th>過去式</th><th>過去分詞</th><th>現在分詞</th></tr><tr><td>Be動詞</td><td>is/are</td><td>was/were</td><td>been</td><td>being</td></tr><tr><td>一般動詞</td><td>go</td><td>went</td><td>gone</td><td>going</td></tr><tr class='verb-group'><td>助動詞</td><td></td><td></td><td></td><td></td></tr><tr class='verb-sub'><td>└ 一般助動詞</td><td>do/have</td><td>did/had</td><td></td><td></td></tr><tr class='verb-sub'><td>└ 態度助動詞</td><td>can/will</td><td>could/would</td><td></td><td></td></tr></table>",
    adjectives: "4) 形容詞<br><br><table class='noun-table verb-table'><tr><th>形容詞等級</th><th>原形</th><th>比較級</th><th>最高級</th></tr><tr><td>一般規則_短</td><td>★</td><td>★ + er</td><td>★ + est</td></tr><tr class='verb-sub'><td>└ 一般範例_短</td><td>tall</td><td>taller</td><td>tallest</td></tr><tr><td>一般規則_長</td><td>☀</td><td>more + ☀</td><td>most + ☀</td></tr><tr class='verb-sub'><td>└ 一般範例_長</td><td>beautiful</td><td>more beautiful</td><td>most beautiful</td></tr><tr><td>跳脫規則</td><td>O</td><td>X</td><td>△</td></tr><tr class='verb-sub'><td>└ 跳脫範例</td><td>good</td><td>better</td><td>best</td></tr></table>",
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

