testData = {
    'variables': [['e', 'i'], ['s', 'n'], ['f', 't'], ['j', 'p']],
    'questions': [
        // {
        //     'type': 'scene',
        //     'img': '',
        //     'text': '[1597년으로 돌아가기]<br><br>“오늘은 9월 10일 왜군이 쳐들어오기까지 일주일 남짓이다!”<br><br>[오늘은 전쟁에 대한 작전을 계획하는 날이다]'
        // },
        {
            'type': 'question',
            'img': 'assets/1.png',
            'q': '전쟁을 위해 수많은 병사들이 모였다. 작전회의를 위해 처음 보는 병사들과 마주앉았다.',
            'a': {
                '“안녕하십니까! 000병사입니다.”라고 먼저 자신을 소개한다.': ['e'],
                '“…” 말을 걸어줄 때까지 기다린다.': ['i']
            }
        },
        {
            'type': 'question',
            'img': 'assets/2.png',
            'q': '내일까지 전쟁에 필요한 무기와 함선 준비에 대한 계획을 맡았다.',
            'a': {
                '아 내일까지니까 내일 일어나서 하자,, 오늘은 다 같이 술과 고기를 먹겠어!': [,,,'p'],
                '비록 내일까지지만,, 마음이 영 불편해.. 같이 즐기지 못하더라도 계획부터 짜봐야겠어!': [,,,'j']
            }
        },
        {
            'type': 'question',
            'img': 'assets/3.jpg',
            'q': '“00아 나 홀로 어머니 모시는 거 알잖아,,, 혼자 남겨질 어머니를 생각하면 마음이 아파서,,, 후방으로라도 좀 빼줄 수 없을까…? 정말 오랜 친구로써 부탁할게.."',
            'a': {
                '자네의 어머니를 향한 마음,, 나도 잘 이해하네. 하지만 자네만 사연이 있는 것을 아닐세 미안하네...': [,,'t'],
                '자네만 사연이 있는 것은 아니지만 정말 안타깝군,,, 쉽진 않겠지만, 내가 어떻게든 힘을 써보겠네': [,,'f']
            }
        },
        {
            'type': 'question',
            'img': 'assets/4.png',
            'q': '전쟁에 나서지 않는다면 어머니를 지킬 수 있다. 하지만 우리 조국이 처참히 패배할 수도 있으며 앞으로의 미래가 어떻게 될지 모른다.',
            'a': {
                '전쟁에서 진다면 전쟁에 나서지 않았다는 죄책감에 시달릴지도 몰라,, 전쟁에 나서야겠어!': [,'n'],
                '전쟁에서 이기는 것보다도 홀로 계실 어머니가 더 걱정돼 ... 난 어머니를 끝까지 지켜야겠어': [,'s']
            }
        },
        {
            'type': 'question',
            'img': 'assets/5.png',
            'q': '오늘은 전쟁에 대비해서 적을 제압할 수 있는 기술과 무기 사용법을 배우는 날이다',
            'a': {
                '나는 내가 알고 있는 방법으로 전쟁에 임하겠어. 이미 승리했던 경험이 있으니, 내 방식으로 간다면 승리할거야!': [,'s'],
                '새로운 방법을 배우는 것이 승리로 가는 지름길일거야! 오늘부터 열심히 배워보겠어!': [,'n']
            }
        },
        {
            'type': 'question',
            'img': 'assets/6.png',
            'q': '전쟁이 하루 앞으로 다가왔다, 잠이 들려는 순간 문득 이런 생각이 든다.',
            'a': {
                '내일 아침에 일어났는데 함선이 사라졌으면 어떡하지? 무기들을 도난 당했다면 ? 아 근데 설마 누가 훔쳐가겠어? 그러면 어떻게 해야 하지? 가족과 함께 도망가야 하나? 아.. 아니 아니지,, 혹시 내일 왜군이 쳐들어오지 않을 수도 있지 않을까?': [,'n'],
                '아,,, 진짜 진짜 떨린다.. 어떡하지.. 어머니 아버지 진짜 사랑합니다. 꼭 살아 돌아올게요..! 개똥이도 잘 있어라!': [,'s']
            }
        },
        {
            'type': 'question',
            'img': 'assets/7.png',
            'q': '백병전이 코앞으로 다가왔다. 몸으로 싸우는 전쟁이니만큼 승부를 예측할 수 없다.',
            'a': {
                '아무리 백병전이라지만 미리 작전을 짠다면 조금은 승산 있는 전투를 할 수 있겠군! 작전부터 짜보자!': [,,,'j'],
                '백병전에서는 어떤 변수가 생길지 몰라,,, 일단 돌격하고 대처하자!': [,,,'p']
            }
        },
        {
            'type': 'question',
            'img': 'assets/8.png',
            'q': '왜군의 배가 코 앞까지 왔다. 왜군이 아군의 함선 위로 침투하기 시작했다',
            'a': {
                '난 칼을 들고 맞서기 좀 두려워,, 대신 뒤에서 활로 왜군들을 무찌르겠어': ['i'],
                '난 두려운게 없지, 칼로 모조리 무찔러 주마!': ['e']
            }
        },
        {
            'type': 'question',
            'img': 'assets/9.png',
            'q': '계획된 작전대로 전쟁이 진행되고 있다. 그때 예상치 못한 왜군의 반격에 지휘관이 서둘러 다른 작전을 계획하자고 제안한다.',
            'a': {
                '지금 새로운 작전을..? 이건 아니야 원래 계획했던 작전대로 가야 합니다!': [,,,'j'],
                '예상치 못한 반격이야,, 새로운 작전을 짜는데 동의합니다!!': [,,,'p']
            }
        },
        {
            'type': 'question',
            'img': 'assets/10.png',
            'q': '정신 없이 싸우는 도중 작전을 따르지 않은 한 병사로 인해 동생이 심한 부상을 당해 죽을 위기에 처했다.',
            'a': {
                '동생아,, 이렇게 떠나면 안돼.. 동생아 ㅠㅠㅠㅠㅠ': [,,'f'],
                '아니 도대체 왜 작전대로 임무를 수행하지 않는 건가 자네?!': [,,'t']
            }
        },
        {
            'type': 'question',
            'img': 'assets/11.png',
            'q': '전쟁에서 승리한 우리에게 수많은 찬사가 쏟아진다.',
            'a': {
                '00아 13척의 배로 왜군을 모두 물리치다니! 정말 멋져!': [,,'t'],
                '00아 다치지 않고 돌아와줘서 고마워, 다행이야 정말 보고싶었어': [,,'f']
            }
        },
        {
            'type': 'question',
            'img': 'assets/12.png',
            'q': '전쟁에서 승리한 기념으로 축하파티를 연다고 한다.',
            'a': {
                '난 많은 사람들과 어울릴 수 있는 파티에 갈래! 많은 사람들에게 내 이야기를 들려주고싶어!': ['e'],
                '난 한 두명의 소수의 사람들에게 내 이야기를 들려주면서 공감받고싶어! 오늘은 친한 친구들을 만나서 깊이 있는 이야기를 해줄거야!': ['i']
            }
        }
    ],
    'results': {
        'istj': {
            'title': '강인함과 성실함으로 배를 나아가게 도와줄 ‘노’',
            'subtitle': '당신은 내면의 강인함과 성실함으로 전쟁을 위해 배에서 꾸준히 노를 젓는 병사입니다.',
            'img': '',
            'description': '평소 성실하고 책임감이 뛰어나 좋은 결과를 얻고자 하는 성향을 가집니다. 해야하는 일을 논리적으로 결정하고 흐트러짐 없이 꾸준히 해나갑니다. 규칙을 지키는데 익숙하지만 약간의 강박을 느끼기도 합니다. 자신의 내면을 겉으로 잘 드러내지 않지만 직설적으로 표현하는 경향이 있습니다. 체계적으로 삶을 구성해 나갈 때 기쁨을 느끼며 반복적인 일에 비교적 덜 지겨움을 느낍니다.'
        },
        'isfj': {
            'title': '다정함과 따뜻한 사랑으로 다친 아군을 치료해줄 ‘붕대’',
            'subtitle': '당신은 다정함과 따뜻한 사랑으로 다친 아군을 치료해주는 군의관입니다.',
            'img': '',
            'description': '조용하고 다정하며 성실하면서도 강한 책임감을 가지고 있습니다. 자신의 의무에 항상 헌신하며 꾸준히 실현해 나가려는 끈기를 가집니다. 자신에게 중요한 사람에게 관심이 많으며 그들과 관련된 구체적인 것들을 잘 기억합니다. 배려가 없거나 무례한 사람을 가장 싫어하며 다수보다는 소수로 구성된 모임에서 자신의 능력을 잘 발휘합니다. 가끔 낙담을 하기도 하지만 희망을 잃지 않으며 뛰어난 공감능력을 가집니다.'
        },
        'istp': {
            'title': '뛰어난 용기를 상징하는 ‘칼’',
            'subtitle': '당신은 뛰어난 용기를 가져, 칼을 들고 직접 나가 싸우는 병사입니다.',
            'img': '',
            'description': '상황에 관조적이고 유연하며 개인활동을 즐겨하며 현실에 집착하려는 성향이 있습니다. 이는 문제가 발생했을 때 해결책을 찾기 위해 빠르게 움직이는 원동력이 되며 많은 양의 정보처리를 도와줍니다. 모험과 위험한 활동을 즐겨하며 시간과 규칙에 다소 무관심합니다.'
        },
        'isfp': {
            'title': '전쟁만을 바라보도록 도와줄 강인한 ‘투구’',
            'subtitle': '당신은 자유를 위해 잡생각은 다 버리고 현재의 전쟁만을 위해 최선을 다하는 병사입니다.',
            'img': '',
            'description': '현재의 순간을 즐기며 주변에서 일어나는 일들을 즐깁니다. 틀에 얽매이는 것을 거부하며 예술에 관심과 재능을 보입니다. 친절하고 다정하지만 민감하기도 하며 자신만의 공간과 시간 속에서 일하는 것을 좋아합니다. 자신의 가치를 중요시하며 의미 있는 사람들에게 헌신적입니다. 논쟁이나 갈등을 싫어하며 그 만큼 자신의 주장을 강요하지 않습니다. 감수성이 많아 혼자만의 시간이 꼭 필요합니다. 겉으로는 이런 열정을 숨기고 있을 수 있습니다.'
        },
        'infj': {
            'title': '강한 신념을 지켜줄 자신만의 ‘일기장’',
            'subtitle': '당신은 강한 신념과 통찰력으로 위급한 상황을 통제하는 병사입니다.',
            'img': '',
            'description': '평소 자기 자신에 대한 질문이 가득하며 사람들의 동기를 이해하고, 타인에 대한 통찰력을 가지고 있습니다. 자신의 확고한 가치를 중심으로 일들을 수행해 나가며 공동의 선을 위한 명확한 비전을 제시합니다. 사람들을 조직화하고 동기화하는 능력이 있으며 힘든 일을 털어놓기보다 본인 스스로 해결하려는 성향이 있습니다. 유행에 휩쓸리지 않고 본인의 길을 가며 겉으로는 차분해 보일 수 있지만 내면에 많은 갈등과 고민을 항상 가집니다.'
        },
        'intj': {
            'title': '나만의 세계를 구상해 낼 ‘펜과 종이’',
            'subtitle': '당신은 주변의 시선 따윈 신경 쓰지 않고 전쟁에 임하는 병사입니다.',
            'img': '',
            'description': '독창적이고 창의적인 마인드로 자신만의 독립적인 세계를 가지고 있습니다. 자신의 아이디어를 실현하고 목적을 성취하려는 욕구가 강하며 일을 조직화하고 포괄적으로 수행합니다. 회의적이고 독립적이며 자신과 타인들에 대한 능력과 수행에 높은 기준을 가지고 있습니다. 생각이 많아서'
        },
        'infp': {
            'title': '적군을 치료해줄 ‘의료용 키트’와 정보를 얻어낼 ‘종이’',
            'subtitle': '당신은 배려심과 융통성으로 크게 다친 적군을 치료해주고 정보를 얻어내는 병사입니다.',
            'img': '',
            'description': '이상주의자로 무언가를 예리하게 관찰하고 분석하는 것을 좋아하며 자신에게 의미 있는 가치나 사람들에게 충성합니다. 자신이 추구하는 가치와 조화를 이룰 수 있는 외부 세계를 꿈꾸며 조용한 성격 속에 내면의 열정을 숨기고 있습니다. 호기심이 많은 만큼 외로움도 잘 느끼지만 직접적인 관심은 두려워합니다. 또한 자신만의 가치가 확실해 이를 간섭 받으면 큰 스트레스를 받을 수 있습니다.',
        },
        'intp': {
            'title': '논리적인 분석과 작전을 도와줄 ‘전쟁 지도’',
            'subtitle': '당신은 조용한 지혜로 논리적인 작전을 계획하는 병사입니다.',
            'img': '',
            'description': '자신의 관심 영역에 논리적이며 타인과의 소통보다는 개인의 생각에 더 많은 관심을 가집니다. 평소 조용한 편이지만 관심 분야에 대해서는 누구보다 활동적인 편이며 뛰어난 적응력을 보입니다. 항상 회의적이며 분석하려는 성향이 있고 자신만의 의견이 확고한 편입니다. 관심분야에 관련해서 깊은 집중을 통해 인간관계를 넓히며, 관계에 연연하거나 상처받는 경향이 비교적 적습니다.'
        },
        'estp': {
            'item': '빠른 결정력과 적군과의 협상을 도와줄 ‘확성기’',
            'subtitle': '당신은 빠른 결정력과 협상력으로 적군과 타협하는 병사입니다.',
            'img': '',
            'description': '상황에 유연하며 즉각적인 결과에 초점이 맞춰진 현실적인 접근을 선호합니다. 이론적인 설명은 지루해하며 결과에 초점을 맞춘 현실적인 접근을 선호합니다. 지금 순간에 일어나는 일들에 관심이 많으며 감각적인 편안함과 스타일을 즐깁니다. 현실적이고 실제적인 경험을 통해서 배워나가며 진지한 분위기 속에서는 때로 난감해 하기도 합니다. 타인과의 경쟁에서 더 발전하는 경향이 있으며, 가끔은 자신의 능력을 과신할 때도 있습니다.'
        },
        'esfp': {
            'title': '분위기를 살려줄 ‘술과 고기’',
            'subtitle': '당신은 전쟁에 지친 아군들의 사기를 살려주는 분위기 메이커의 병사입니다.',
            'img': '',
            'description': '사교적이고 다정하면서 긍정적인 성격을 가지고 있습니다. 타인과의 상호작용과 물질적인 편안함을 추구하며 다른 사람들과 일하는 것을 즐기고 일을 재미있게 하고자 합니다. 융통성이 있고 자발적이며 새로운 사람들과 환경에 보다 빨리 적응합니다. 경험을 통해 학습하고 부정적인 일을 빠르게 극복할 수 있습니다. 손해를 보더라도 크게 마음에 담아두지 않고, 정이 많아 남의 부탁을 잘 거절하지 못합니다. 공동체보다 독립적으로 행동할 때 더 좋은 성과를 낼 수 있습니다.'
        },
        'estj': {
            'title': '병사들의 역할을 분담할 때 참고할 ‘전쟁 작전서’',
            'subtitle': '당신은 전쟁에 참여한 여러 병사들의 역할을 분담해주는 병사입니다.',
            'img': '',
            'description': '구체적이고 현실적이며 사실적인 성격을 가지고 있습니다. 결정을 하면 이를 수행하기 위해 빠르게 움직입니다. 어떤 일을 할 때 사람들을 조직하며 가장 효율적인 방법을 찾아냅니다. 명확한 논리적 기준을 가지고 있고 규칙적으로 그것을 따르려 합니다. 다소 권위적으로 보일 때도 있지만 이러한 성격으로 타인에게 피해를 끼치는 일을 최대한 피하려고 합니다. 여유로운 상황에서 오히려 불안감을 느낄 수 있으며 표현이 직설적인 편입니다. 현실감각이 뛰어나며 현재의 상황을 통찰하는 능력을 가지고 있습니다.'
        },
        'esfj': {
            'title': '타인과의 의사소통을 도와줄 ‘의자’',
            'subtitle': '당신은 성숙함과 대담함으로 적군의 심리를 무너뜨리는 병사입니다.',
            'img': '',
            'description': '마음이 따뜻하고 양심적인 성격을 가지고 있습니다. 화합된 상황을 원하며 목표를 위해 권위를 가지는 것을 좋아합니다. 혼자 일하는 것보다 사람들과 함께 일하는 것을 좋아하며 사소한 일들이라도 끝까지 해내려고 합니다. 다른 사람들이 필요로 하는 것을 잘 알아채며 이를 통해 인정 받기를 원합니다. 그래서 다른 성향을 가진 사람들과도 깊은 이야기를 나누기도 하며 뛰어난 공감 능력으로 상대방을 불편하게 하지 않습니다. 사람들과의 의사소통을 통해 자신을 치유하며 의사소통을 중요하게 생각하는 것처럼 타인과의 관계에서 말로 상처를 주지 않으려 합니다.'
        },
        'enfp': {
            'title': '전쟁에 쓸 새로 받은 ‘신식 무기’',
            'subtitle': '당신은 기존의 방법은 버리고, 새롭게 받은 무기와 전술로 전쟁을 준비하는 병사입니다.',
            'img': '',
            'description': '새로운 시도를 좋아하며 열정적이고 풍부한 상상력을 가지고 있습니다. 세상을 낙관적으로 바라보며 타인들로부터 칭찬받기 원하며 감사와 지지를 잘 표현합니다. 자발적이고 융통성이 있으며 때로 자신만의 즉흥적인 유창한 언변을 발휘합니다. 하고 싶은게 많아서 가끔은 끈기가 없어 보이기도 하지만 그러면서 다양한 것들을 배웁니다. 관계가 깊어지기까지 시간이 걸리지만 두루두루 호감을 사는 성격입니다. 밝아보이는 성격이지만 때론 내향적인 모습을 보이기도 합니다.'
        },
        'entp': {
            'title': '번뜩이는 아이디어를 담아낼 ‘빛나는 전구’',
            'subtitle': '당신은 감각적이며 타고난 재능으로 전술회의에서 번뜩이는 아이디어를 제공하는 병사입니다.',
            'img': '',
            'description': '상황을 빠르게 이해하고 활기차며 자신의 감정을 거리낌 없이 잘 표현합니다. 새롭고 도전적인 문제를 해결하는데 흥미를 가지며 전략적으로 분석합니다. 상황의 전반적인 흐름을 읽어내고자 하는 성향이 있고 일상적인 일에 금방 지루해합니다. 같은 일이라도 매번 다르게 해결하고 본인의 판단에 따라 움직이기 때문에 가끔 주변에서 이해할 수 없는 선택을 하기도 합니다. 그런 선택이 즉흥적으로 보일 수도 있지만 오랜 기간 끝에 고민해서 나온 결과입니다. 모든 것에 호불호가 확실한 편입니다.'
        },
        'enfj': {
            'title': '아군을 먼저 챙기기 위한 ‘보급형 물통’',
            'subtitle': '당신은 위급한 상황에서 자신보다 아군을 먼저 챙겨주는 따뜻한 병사입니다.',
            'img': '',
            'description': '따뜻하며 감정이입을 하며 표현이 활발하고 책임감을 가지고 있습니다. 타인들의 정서, 욕구 그리고 동기에 높은 관심을 가지며 집단 안에서 상호작용을 촉진시키며 성장을 위한 촉매역할을 합니다. 호기심이 많아 뭐든 직접 해보고 싶어하며 이는 때로 산만함으로 이어지기도 합니다. 생각보다 여린 마음을 가지고 있고 동정심이 강한 편입니다. 감정의 기복이 다소 큰 편이지만 그 만큼 자신의 감정을 잘 표현합니다. 또한 자신보다 상대방을 먼저 챙기려는 성향도 가지고 있습니다.'
        },
        'entj': {
            'title': '전쟁에서 작전을 지휘할 ‘지휘봉과 칼’',
            'subtitle': '당신은 엄격한 의지로 아군들을 지휘하는 최고의 리더 병사입니다.',
            'img': '',
            'description': '솔직하며 결단력이 있으며 공동체를 이끌고자 하는 성격을 가지고 있습니다. 프로젝트의 문제점이나 비효율성을 빠르게 해결하며 포괄적인 시스템을 개발하고 수행합니다. 자신의 지식을 위해 배우는 것을 좋아하며 이를 상대방에게 전달하기도 합니다. 모든 상황에서 맥락을 읽고 지휘하는 지도력을 가지며 큰 욕구로 인해 스스로를 정신적으로 괴롭히기도 합니다. 장기적인 계획과 목표를 설정하고 완벽히 수행하는 것을 중요하게 생각합니다. 특히 어떤 사회에서도 리더가 되는 편입니다. '
        }
    }
};

Init();