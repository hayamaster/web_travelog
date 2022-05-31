import React from 'react';
import './Spec.css';
import Image from '../images/Thailand.jpg';


function Spec() {
  return (
    <div className='spec_container'>
        <h1 className='h1_'>THAILAND</h1>
        <div className='spec_image_container'>
            <img alt='spec_image' src={Image}/>
        </div>
        <div className='spec_container'>
            <span>여행지 지명</span>
            <span>
                태국
            </span>
        </div>
        <div className='spec_container'> 
            <span>여행지 소개자</span>
            <span>박정희</span>
        </div>
        <div className='spec_container'>
            <span>여행 경비 & 소요 시간</span>
            <span className='moneyTime'>
                비행기표 제외 일주일 간 약 100만원
            </span>
        </div>
        <div className='spec_container'>
            <span>이동 수단</span>
            <span>
                기차 / 버스 / 택시 / 렌트(추천) / 뚝뚝(추천)
            </span>
        </div>
        <div className='spec_container'>
            <span>추천 활동 & 주요 관광지</span>
            <span>
            추천 활동: <br/>
            태국은 유명 관광지이기 때문에 야시장이 많이 열린다. 
            묵는 숙소 근처 야시장은 한 번씩 가보는 것을 추천한다. 
            현지 음식, 관광객 입맛에 맞춰진 음식 둘 다 먹을 수 있다. 
            단, 위생적인 측면을 매우 따지는 사람이라면 조금 힘들 수도 있다.<br/>
            <br/>
            야시장이 관광객 위주라면, 아침 시장은 현지인들을 위한 시장이라고 할 수 있다. 
            이른 시간대에 일어나야 하지만, 시장에서 사먹는 현지식 아침은 꽤나 괜찮다.
            <br/>
            <br/>
            주요 관광지: <br/>
            1.	끄라비 에메랄드 풀 (물놀이)_입장료 200밧<br/>
            <br/>
            에메랄드 풀이라는 이름대로 물 색깔이 에메랄드 빛이다. 
            사람들이 많이 오는 관광지이고, 꽤 넓어서 친구들과 함께 물놀이를 즐기기에 좋다. 
            이 곳에서 물놀이를 즐기고, 블루 풀로 넘어가는 것을 추천한다. 
            블루 풀은 들어갈 수는 없지만 에메랄드 풀보다 물 색이 예쁘다.<br/>
            <br/>
            2.	아유타야 사원 (유적지 관람)_입장료 50밧<br/>
            <br/>
            방콕 북서부에 위치한 아유타야는 태국의 옛 수도로, 1767년 (현)미얀마에 의해 침략당했다. 
            그래서 잘려지고 훼손된 불상이 많지만, 그럼에도 웅장한 느낌을 받을 수 있다. 
            꼭 봐야하는 불상은 '왓 마하 탓'의 나무 뿌리에 감긴 불상 머리이다. 
            태국의 웅장함을 느낄 수 있는 만큼 넓기 때문에 시간을 여유롭게 두고 천천히 볼 것을 추천한다. 
            또, 계단이 많고 그늘이 적다는 점을 미리 알고 가면 좋다.<br/>
            </span>
        </div>
        <div className='spec_container'>
            <span>리뷰 &여행 팁</span>
            <span>
            망고 스티키 라이스 (망고 찹쌀밥)<br/>
            우리나라에서는 쌀=밥이지만, 이 음식은 식사라기보다 배부른 간식이다. 망고와 함께 굉장히 쫀득하고 달콤한 밥이 나온다.<br/>
            이상한 조합처럼 느껴질 수도 있지만 굉장히 잘 어울리고 맛있다! 망고와 달달한 것을 좋아한다면, 분명 좋아할 것이다!<br/>
            <br/>
            여행 팁: <br/>
            1.	길을 가다보면 꼭! 사먹어야 하는 간식이 있다. 첫 번째는 바로 '로띠'이다. 한마디로 얇은 크레페인데, 안에 대부분 2가지 정도의 속재료가 들어간다. 
            가장 추천하는 조합은 누텔라 + 바나나!<br/>
            2.	여행을 하면서 주의할 점은 '천천히 돌아다니기’이다. 태국은 덥기 때문에 빨리 걷다 보면 금방 지치게 된다. 
            모자, 선글라스, 썬크림 꼭 챙기고, 길거리에서 파는 시원한 주스 한 잔 마시면서 느긋하게 걸어보자.<br/>
            3.	또 다른 주의할 점은 음식이다. 길을 걷다보면 정말 현지인들이 식사를 하는 노상들이 있다. 
            밥과 몇 가지 반찬들을 골라서 먹을 수 있는데, 무슨 음식인지 확실히 물어보아야 한다. 
            혹여나 chicken이라는 말을 들었지만 사실은 닭 내장일 수도 있으니!<br/>
            </span>
        </div>
    </div>
  );
}

export default Spec;

