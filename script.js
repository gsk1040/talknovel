// 메시지 데이터
const messages = [
        { sender: 'mine', content: '여러분, 오늘 아침에 일어나니까 제 그림자가 사라졌어요! 😱', time: '07:30' },
        { sender: 'theirs', name: '지영', content: '뭐? 그림자가 사라졌다고? 혹시 어제 회식 때 마신 소주가 아직도 덜 깼나?', time: '07:31' },
        { sender: 'mine', content: '아니에요, 진짜라니까요! 거울 앞에 서 봤는데 그림자가 안 보여요!', time: '07:32' },
        { sender: 'theirs', name: '재훈', content: '야, 민수야. 너 또 새로운 개그 연습하는 거지? ㅋㅋㅋ', time: '07:33' },
        { sender: 'mine', content: '농담이 아니라고요! 진짜 그림자가 없어졌다니까요! 😫', time: '07:34' },
        { sender: 'theirs', name: '지영', content: '그럼 지금 어쩌려고? 회사는 어떡하고?', time: '07:35' },
        { sender: 'mine', content: '모르겠어요... 그림자 없이 출근하면 너무 이상하지 않을까요?', time: '07:36' },
        { sender: 'theirs', name: '재훈', content: '야, 괜찮아. 어차피 우리 부장님은 너희들 그림자는 신경도 안 쓰셔 ㅋㅋㅋ', time: '07:37' },
        { sender: 'theirs', name: '지영', content: '재훈아, 너무해 ㅋㅋㅋ 근데 민수야, 혹시 뱀파이어 된 거 아니야?', time: '07:38' },
        { sender: 'mine', content: '에이, 말도 안 돼요. 제가 언제 피를... 잠깐, 어제 회식때 마신 게 와인이 아니었던 거 같아요 😨', time: '07:39' },
        { sender: 'theirs', name: '상사', content: '뭐야, 다들 이른 아침부터 수다떨고 있어? 빨리 회사로 출근해!', time: '07:40' },
        { sender: 'mine', content: '네... 알겠습니다. 그럼 저는 이제 출근할게요. 그림자 없는 직장인의 하루가 시작됐네요 🥲', time: '07:41' },
        { sender: 'theirs', name: '지영', content: '아니, 잠깐만! 그림자 없으면 점심에 그림자 놀이는 어떡해?', time: '07:42' },
        { sender: 'mine', content: '헐, 맞다! 그림자 놀이! 이제 내가 꼴찌 아니에요!', time: '07:43' },
        { sender: 'theirs', name: '재훈', content: '야, 너 설마 그거 좋아하는 거야? ㅋㅋㅋ', time: '07:44' },
        { sender: 'mine', content: '당연하죠! 이제 제가 그림자 놀이의 절대강자가 됐어요!', time: '07:45' },
        { sender: 'theirs', name: '지영', content: '아... 그렇게 생각하면 좋겠다 ㅋㅋㅋ 그럼 오늘 점심에 옥상에서 보자!', time: '07:46' },
        { sender: 'mine', content: '네! 기대되네요 😆', time: '07:47' },
        { sender: 'theirs', name: '상사', content: '야! 출근 시간이야! 그만 떠들고 빨리 와!', time: '07:48' },
        { sender: 'mine', content: '네, 부장님... 지하철 타고 가는 중이에요 (그림자 없는 지하철 풍경이 너무 신기해요 😳)', time: '07:49' },
        { sender: 'theirs', name: '지영', content: '어머, 그럼 지하철에서 아무도 너를 못 알아보는 거 아니야?', time: '07:50' },
        { sender: 'mine', content: '맞아요! 방금 여자분이 제 자리에 앉으려고 했어요 ㅋㅋㅋ', time: '07:51' },
        { sender: 'theirs', name: '재훈', content: '오, 이거 은신 능력 생긴 거 아니야? 완전 히어로 된 거 같은데?', time: '07:52' },
        { sender: 'mine', content: '맞아요! 이러다 제가 어벤져스에 들어가는 거 아닐까요?', time: '07:53' },
        { sender: 'theirs', name: '지영', content: '민수, 너 능력 좋다! 우리 회사 비밀 문서 좀 훔쳐와 ㅋㅋㅋ', time: '07:54' },
        { sender: 'mine', content: '에이, 그건 좀... 그래도 부장님 몰래 점심 좀 더 길게 먹을 수 있겠어요 😎', time: '07:55' },
        { sender: 'theirs', name: '재훈', content: '오, 그건 진짜 좋은 생각인데? 나도 껴줘!', time: '07:56' },
        { sender: 'theirs', name: '상사', content: '야! 너희들 업무 시간에 뭐하는 거야! 당장 일 시작해!', time: '07:57' },
        { sender: 'mine', content: '헉, 부장님이다! 다들 조용히 해요!', time: '07:58' },
        { sender: 'theirs', name: '지영', content: '민수야, 넌 그림자 없어서 안 들킬 텐데 뭐 걱정이야 ㅋㅋㅋ', time: '07:59' },
        { sender: 'mine', content: '아, 맞다! 제가 왜 걱정했지? 😅', time: '08:00' },
        { sender: 'theirs', name: '재훈', content: '야, 그럼 오늘 회의 때 너가 몰래 들어가서 부장님 표정 좀 알려줘', time: '08:01' },
        { sender: 'mine', content: '오, 좋은 생각이에요! 스파이 민수, 출동합니다 🕵️', time: '08:02' },
        { sender: 'theirs', name: '지영', content: '민수, 너 설마 진짜 그러려고? 들키면 큰일 나!', time: '08:03' },
        { sender: 'mine', content: '걱정 마세요, 전 이제 그림자 없는 사나이니까요!', time: '08:04' },
        { sender: 'theirs', name: '재훈', content: '오, 진짜 멋있다. 우리의 히어로 민수!', time: '08:05' },
        { sender: 'mine', content: '자, 이제 회사 도착했어요. 작전 개시합니다!', time: '08:06' },
        { sender: 'theirs', name: '지영', content: '민수야, 조심해! 부장님한테 걸리지 마!', time: '08:07' },
        { sender: 'mine', content: '네, 걱정 마세요. 앗! 부장님이다!', time: '08:08' },
        { sender: 'theirs', name: '재훈', content: '뭐야? 무슨 일이야?', time: '08:09' },
        { sender: 'mine', content: '하마터면 부장님이랑 부딪칠 뻔했어요. 근데 그냥 절 통과해서 지나가셨어요 😳', time: '08:10' },
        { sender: 'theirs', name: '지영', content: '헐, 대박! 진짜 투명인간 된 거 아니야?', time: '08:11' },
        { sender: 'mine', content: '그런 것 같아요... 이거 생각보다 무서운데요?', time: '08:12' },
        { sender: 'theirs', name: '재훈', content: '야, 무서우면 어떡해! 이거 완전 대박 기회잖아!', time: '08:13' },
        { sender: 'mine', content: '그렇긴 한데... 아! 부장님이 회의실로 들어가셨어요. 따라 들어가볼게요!', time: '08:14' },
        { sender: 'theirs', name: '지영', content: '민수야, 제발 조심해!', time: '08:15' },
        { sender: 'mine', content: '네, 걱정 마세요. 앗, 이건...!', time: '08:16' },
        { sender: 'theirs', name: '재훈', content: '뭐야? 뭔데?', time: '08:17' },
        { sender: 'mine', content: '부장님이... 회의실에서 혼자 춤추고 계세요 😱', time: '08:18' },
        { sender: 'theirs', name: '지영', content: '헐? 무슨 춤인데?', time: '08:19' },
        { sender: 'mine', content: '아이돌 춤이에요... BTS의 "Dynamite"...', time: '08:20' },
        { sender: 'theirs', name: '재훈', content: '아닐 척ㅋㅋㅋㅋㅋ 어떡해 배꼽 빠지겠다', time: '08:21' },
        { sender: 'mine', content: '진짜 웃음 참느라 죽는 줄 알았어요 ㅋㅋㅋ', time: '08:22' },
        { sender: 'theirs', name: '지영', content: '민수야, 영상 찍어! 빨리!', time: '08:23' },
        { sender: 'mine', content: '안돼요, 그건 너무 심하잖아요...', time: '08:24' },
        { sender: 'theirs', name: '재훈', content: '아 뭐야, 그럼 증거도 없이 우리보고 믿으라고?', time: '08:25' },
        { sender: 'mine', content: '믿든 말든 자유예요... 어? 이제 노래가 끝났나 봐요. 부장님이 멈추셨어요.', time: '08:26' },
        { sender: 'theirs', name: '지영', content: '아, 아쉽다. 그래도 대박이다 ㅋㅋㅋ', time: '08:27' },
        { sender: 'mine', content: '근데 이제 어떡하지? 계속 이렇게 투명 인간으로 살아야 하나?', time: '08:28' },
        { sender: 'theirs', name: '재훈', content: '그러게... 이거 좀 심각한데? 병원에 가봐야 하는 거 아니야?', time: '08:29' },
        { sender: 'mine', content: '병원이요? 제가 무슨 말을 해야 할지 모르겠어요 ㅋㅋㅋ', time: '08:30' },
        { sender: 'theirs', name: '지영', content: '"선생님, 제가 투명 인간이 됐어요." 이러면 되잖아 ㅋㅋㅋ', time: '08:31' },
        { sender: 'mine', content: '아, 그럼 정신과로 보내겠죠 ㅋㅋㅋ', time: '08:32' },
        { sender: 'theirs', name: '재훈', content: '아! 나 좋은 생각 났어! 점심시간에 우리 다 같이 옥상에서 만나자!', time: '08:33' },
        { sender: 'mine', content: '왜요?', time: '08:34' },
        { sender: 'theirs', name: '재훈', content: '야, 거기서 햇빛을 쬐면 그림자가 생길 수도 있잖아!', time: '08:35' },
    { sender: 'theirs', name: '지영', content: '오, 좋은 생각이야! 민수야, 어때?', time: '08:36' },
    { sender: 'mine', content: '좋아요! 점심시간에 옥상에서 만나요!', time: '08:37' },
    { sender: 'theirs', name: '재훈', content: '야, 그때까지 부장님 몰래 회사 구경 좀 해봐 ㅋㅋㅋ', time: '08:38' },
    { sender: 'mine', content: '에이, 그래도 되나...? 음... 그럴까요? 😏', time: '08:39' },
    { sender: 'theirs', name: '지영', content: '민수야, 너무 위험한 짓 하지 마!', time: '08:40' },
    { sender: 'mine', content: '알겠어요, 조심할게요. 어? 잠깐만요...', time: '08:41' },
    { sender: 'theirs', name: '재훈', content: '뭔데? 무슨 일 있어?', time: '08:42' },
    { sender: 'mine', content: '방금... 제 발이 조금 보이는 것 같아요!', time: '08:43' },
    { sender: 'theirs', name: '지영', content: '정말? 어떻게 된 거야?', time: '08:44' },
    { sender: 'mine', content: '모르겠어요, 그냥 갑자기... 어? 이제 무릎까지 보여요!', time: '08:45' },
    { sender: 'theirs', name: '재훈', content: '오, 너 서서히 돌아오고 있나 봐!', time: '08:46' },
    { sender: 'mine', content: '그런 것 같아요! 근데 왜 이렇게 천천히 돌아오는 거죠?', time: '08:47' },
    { sender: 'theirs', name: '지영', content: '어쩌면... 네가 뭔가를 깨달아야 하는 걸지도?', time: '08:48' },
    { sender: 'mine', content: '깨달음이요...? 음... 제가 뭘 깨달아야 하는 걸까요?', time: '08:49' },
    { sender: 'theirs', name: '재훈', content: '야, 이거 완전 영화 같은데? 넌 이제 숨겨진 능력을 깨달아 가는 중이야!', time: '08:50' },
    { sender: 'mine', content: '헐, 그럴까요? 그럼 전 특별한 존재인 걸까요...? 😳', time: '08:51' },
    { sender: 'theirs', name: '지영', content: '민수야, 너무 들뜨지 마. 아직 회사에 있다는 거 잊지 마!', time: '08:52' },
    { sender: 'mine', content: '앗, 맞다! 그런데 이제 허리까지 보여요. 어떡하지...?', time: '08:53' },
    { sender: 'theirs', name: '재훈', content: '빨리 화장실로 가! 거기서 기다려!', time: '08:54' },
    { sender: 'mine', content: '네, 알겠어요! 지금 화장실로 뛰어가는 중이에요!', time: '08:55' },
    { sender: 'theirs', name: '지영', content: '조심해! 누구한테 부딪히지 마!', time: '08:56' },
    { sender: 'mine', content: '네! 앗... 큰일 났어요...', time: '08:57' },
    { sender: 'theirs', name: '재훈', content: '뭔데? 무슨 일이야?', time: '08:58' },
    { sender: 'mine', content: '화장실에 거울이 있잖아요... 제 모습이 점점 더 보여요! 😱', time: '08:59' },
    { sender: 'theirs', name: '지영', content: '헐... 그래도 다행이다! 곧 완전히 돌아올 거야!', time: '09:00' },
    { sender: 'mine', content: '근데 왜 하필 회사 화장실에서...? 😭', time: '09:01' },
    { sender: 'theirs', name: '재훈', content: 'ㅋㅋㅋ 너무 웃겨. 민수야, 넌 정말 드라마 같은 인생을 살고 있어!', time: '09:02' },
    { sender: 'mine', content: '하... 이제 어깨까지 보여요. 근데 회의 시간이 다가오는데 어떡하죠?', time: '09:03' },
    { sender: 'theirs', name: '지영', content: '아... 큰일났다. 어떡하지?', time: '09:04' },
    { sender: 'theirs', name: '재훈', content: '야, 몸이 아프다고 해! 빨리!', time: '09:05' },
    { sender: 'mine', content: '네, 그렇게 할게요. 부장님한테 메시지 보내볼게요.', time: '09:06' },
    { sender: 'theirs', name: '지영', content: '화이팅! 우리가 응원할게!', time: '09:07' },
    { sender: 'mine', content: '헉, 부장님이 화장실로 오신대요. 제 상태를 확인하겠대요. 😱', time: '09:08' },
    { sender: 'theirs', name: '재훈', content: '뭐야, 무슨 초등학교야? ㅋㅋㅋ', time: '09:09' },
    { sender: 'mine', content: '어떡해요ㅠㅠ 이제 목까지 보여요!', time: '09:10' },
    { sender: 'theirs', name: '지영', content: '민수야, 침착해! 최대한 시간을 끌어봐!', time: '09:11' },
    { sender: 'mine', content: '네... 앗! 부장님이 오셨어요!', time: '09:12' },
    { sender: 'theirs', name: '재훈', content: '헐ㅋㅋㅋ 대박 전개', time: '09:13' },
    { sender: 'mine', content: '부장님이 화장실 문을 두드리세요. 어떡하지...', time: '09:14' },
    { sender: 'theirs', name: '지영', content: '민수야, 괜찮아? 무슨 일 있어?', time: '09:15' },
    { sender: 'mine', content: '헉... 믿기지 않을 거예요...', time: '09:16' },
    { sender: 'theirs', name: '재훈', content: '뭔데? 얼른 말해봐!', time: '09:17' },
    { sender: 'mine', content: '부장님이... 부장님도 그림자가 없어요!! 😱😱😱', time: '09:18' },
    { sender: 'theirs', name: '지영', content: '뭐라고?! 설마...!', time: '09:19' },
    { sender: 'theirs', name: '재훈', content: '헐... 이거 무슨 영화야? ㅋㅋㅋ', time: '09:20' },
    { sender: 'mine', content: '부장님이 절 보더니 씩 웃으시면서 "자네도 깨어났군." 이러시는데요?', time: '09:21' },
    { sender: 'theirs', name: '지영', content: '뭐야 이거... 무슨 비밀 결사단 같은 거야?', time: '09:22' },
    { sender: 'mine', content: '모르겠어요... 부장님이 옥상으로 올라가자고 하세요. 따라가볼게요.', time: '09:23' },
    { sender: 'theirs', name: '재훈', content: '야, 조심해! 이상한 짓 하면 바로 튀어!', time: '09:24' },
    { sender: 'mine', content: '네... 지금 부장님이랑 옥상으로 올라가는 중이에요.', time: '09:25' },
    { sender: 'theirs', name: '지영', content: '민수야, 무서우면 그만둬. 우리가 경찰 부를게.', time: '09:26' },
    { sender: 'mine', content: '괜찮아요. 부장님이 뭔가 중요한 얘기를 해주실 것 같아요.', time: '09:27' },
    { sender: 'theirs', name: '재훈', content: '그래도 조심해! 수상하면 바로 연락해!', time: '09:28' },
    { sender: 'mine', content: '네... 어? 이게 뭐죠? 옥상에 동그란 문이...', time: '09:29' },
    { sender: 'theirs', name: '지영', content: '동그란 문? 무슨 소리야?', time: '09:30' },
    { sender: 'mine', content: '부장님이 그 문을 열었어요. 안에서 빛이 나와요...', time: '09:31' },
    { sender: 'theirs', name: '재훈', content: '헐... 이거 완전 판타지 영화잖아', time: '09:32' },
    { sender: 'mine', content: '부장님이 "자네의 진정한 모습을 찾으러 가볼까?" 라고 하시는데요...', time: '09:33' },
    { sender: 'theirs', name: '지영', content: '민수야, 무서우면 그만둬! 제발!', time: '09:34' },
    { sender: 'mine', content: '전... 전 가봐야 할 것 같아요. 이게 제 운명인 것 같아요.', time: '09:35' },
    { sender: 'theirs', name: '재훈', content: '야, 정신 차려! 그냥 평범한 회사원으로 살자!', time: '09:36' },
    { sender: 'mine', content: '죄송해요, 여러분... 전 제 진정한 자아를 찾아야 해요. 안녕히 계세요...', time: '09:37' },
    { sender: 'theirs', name: '지영', content: '민수야!!!', time: '09:38' },
    { sender: 'theirs', name: '재훈', content: '미친... 이게 무슨 전개야...', time: '09:39' },
    { sender: 'mine', content: '여러분... 절 잊지 마세요...', time: '09:40' },
    { sender: 'system', content: '민수님이 퇴장하셨습니다.', time: '09:41' },
    { sender: 'theirs', name: '지영', content: '민수야!!! 돌아와!!!', time: '09:42' },
    { sender: 'theirs', name: '재훈', content: '이게 무슨 일이야... 꿈인가?', time: '09:43' },
    { sender: 'theirs', name: '지영', content: '재훈아, 우리 어떡하지...?', time: '09:44' },
    { sender: 'theirs', name: '재훈', content: '모르겠다... 일단 회사에 뭐라고 해야 하지?', time: '09:45' },
    { sender: 'theirs', name: '지영', content: '그러게... 아무도 안 믿을 텐데...', time: '09:46' },
    { sender: 'theirs', name: '재훈', content: '하... 이제 우리도 그림자 없어지는 거 아니야?', time: '09:47' },
    { sender: 'theirs', name: '지영', content: '설마...! 어떡해 무서워 ㅠㅠ', time: '09:48' },
    { sender: 'theirs', name: '재훈', content: '진정해, 지영아. 우리 아직 그림자 있잖아.', time: '09:49' },
    { sender: 'theirs', name: '지영', content: '그러네... 근데 민수는 어떻게 된 걸까?', time: '09:50' },
    { sender: 'theirs', name: '재훈', content: '글쎄... 언젠가 돌아오겠지?', time: '09:51' },
    { sender: 'theirs', name: '지영', content: '그래, 그럴 거야... 그럼 우리 이제 어떡하지?', time: '09:52' },
    { sender: 'theirs', name: '재훈', content: '일단 평소처럼 행동하자. 너무 수상해 보이면 안 돼.', time: '09:53' },
    // ... (이전에 정의된 메시지들)
];

// DOM 요소 선택
const chatBox = document.querySelector('.chat-box');

// 메시지 생성 함수
function createMessageElement(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex ${message.sender === 'mine' ? 'justify-end' : 'justify-start'} mb-4`;

    const messageBubble = document.createElement('div');
    messageBubble.className = `message-bubble ${message.sender}`;

    if (message.sender === 'theirs') {
        const nameDiv = document.createElement('div');
        nameDiv.className = 'font-bold mb-1';
        nameDiv.textContent = message.name;
        messageBubble.appendChild(nameDiv);
    }

    const contentP = document.createElement('p');
    contentP.textContent = message.content;
    messageBubble.appendChild(contentP);

    const timeDiv = document.createElement('div');
    timeDiv.className = 'text-xs text-gray-500 mt-1 text-right';
    timeDiv.textContent = message.time;
    messageBubble.appendChild(timeDiv);

    messageDiv.appendChild(messageBubble);
    return messageDiv;
}

// 스크롤을 맨 아래로 이동시키는 함수
function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

// 메시지 표시 함수 (자동 스크롤 추가)
function addMessage(message) {
    const messageElement = createMessageElement(message);
    chatBox.appendChild(messageElement);
    scrollToBottom();

    // 애니메이션 효과를 위해 약간의 지연 후 'show' 클래스 추가
    setTimeout(() => {
        messageElement.querySelector('.message-bubble').classList.add('show');
        scrollToBottom(); // 애니메이션 후 다시 스크롤
    }, 100);
}

function displayMessages() {
    let index = 0;
    function displayNextMessage() {
        if (index < messages.length) {
            addMessage(messages[index]);
            index++;
            setTimeout(displayNextMessage, 1000); // 1초 간격으로 메시지 표시
        }
    }
    displayNextMessage();
}

// 새 메시지 추가 함수 (자동 스크롤 포함)
function addNewMessage(message) {
    messages.push(message);
    addMessage(message);
}

// 페이지 로드 시 메시지 표시 시작
window.onload = displayMessages;

// 예시: 모든 메시지가 표시된 후 5초 뒤에 새 메시지 추가
setTimeout(() => {
    addNewMessage({ sender: 'theirs', name: '민수', content: '어... 그래도 일단 출근해야겠어요...', time: '09:05' });
}, (messages.length + 5) * 1000);

// 창 크기가 변경될 때도 스크롤 조정
window.addEventListener('resize', scrollToBottom);